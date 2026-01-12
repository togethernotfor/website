#!/usr/bin/env node

/**
 * Process Voter Data - Convert CSV to Optimized GeoJSON
 * 
 * This script converts the large CSV voter data file into an optimized
 * GeoJSON format that's faster to load and parse in the browser.
 * 
 * Usage: node scripts/process-voter-data.js
 */

const fs = require('fs');
const path = require('path');
const { createReadStream, createWriteStream } = require('fs');
const { createInterface } = require('readline');
const { createGzip } = require('zlib');

const INPUT_FILE = path.join(__dirname, '../public/data/orange-county-voters-geocoded.csv');
const OUTPUT_FILE = path.join(__dirname, '../public/data/orange-county-voters-geocoded.geojson');
const OUTPUT_GZ_FILE = path.join(__dirname, '../public/data/orange-county-voters-geocoded.geojson.gz');

console.log('🔄 Processing voter data...\n');
console.log(`Input:  ${INPUT_FILE}`);
console.log(`Output: ${OUTPUT_FILE}`);
console.log(`Compressed: ${OUTPUT_GZ_FILE}\n`);

async function processVoterData() {
  const features = [];
  let lineCount = 0;
  let processedCount = 0;
  let skippedCount = 0;

  const fileStream = createReadStream(INPUT_FILE);
  const rl = createInterface({
    input: fileStream,
    crlfDelay: Infinity
  });

  // Skip header and process data
  let isFirstLine = true;

  for await (const line of rl) {
    lineCount++;
    
    if (isFirstLine) {
      isFirstLine = false;
      continue; // Skip header
    }

    if (!line.trim()) continue;

    // Parse CSV line (handling quoted fields)
    const values = [];
    let current = '';
    let inQuotes = false;

    for (let i = 0; i < line.length; i++) {
      const char = line[i];
      if (char === '"') {
        inQuotes = !inQuotes;
      } else if (char === ',' && !inQuotes) {
        values.push(current);
        current = '';
      } else {
        current += char;
      }
    }
    values.push(current);

    // Extract fields: voter_id, address, city, state, zip, party, precinct, lat, lon, status
    if (values.length >= 10) {
      const lat = parseFloat(values[7]);
      const lon = parseFloat(values[8]);
      const geocodeStatus = values[9]?.trim();

      // Only include successfully geocoded points with valid coordinates
      if (
        !isNaN(lat) &&
        !isNaN(lon) &&
        geocodeStatus === 'SUCCESS' &&
        lat !== 0 &&
        lon !== 0 &&
        lat >= -90 &&
        lat <= 90 &&
        lon >= -180 &&
        lon <= 180
      ) {
        features.push({
          type: 'Feature',
          geometry: {
            type: 'Point',
            coordinates: [lon, lat] // GeoJSON uses [longitude, latitude]
          },
          properties: {
            address: values[1] || '',
            city: values[2] || '',
            state: values[3] || '',
            zipcode: values[4] || '',
            party_affiliation: values[5] || undefined,
            latitude: lat,
            longitude: lon
          }
        });
        processedCount++;
      } else {
        skippedCount++;
      }
    }

    // Progress indicator
    if (lineCount % 10000 === 0) {
      process.stdout.write(`\r📊 Processed ${lineCount.toLocaleString()} lines (${processedCount.toLocaleString()} valid points)...`);
    }
  }

  console.log(`\n\n✅ Processing complete!`);
  console.log(`   Total lines: ${lineCount.toLocaleString()}`);
  console.log(`   Valid points: ${processedCount.toLocaleString()}`);
  console.log(`   Skipped: ${skippedCount.toLocaleString()}\n`);

  // Create GeoJSON FeatureCollection
  const geojson = {
    type: 'FeatureCollection',
    features
  };

  // Write uncompressed GeoJSON
  console.log('💾 Writing GeoJSON file...');
  const jsonString = JSON.stringify(geojson);
  fs.writeFileSync(OUTPUT_FILE, jsonString);
  
  const uncompressedSize = fs.statSync(OUTPUT_FILE).size;
  console.log(`   Size: ${(uncompressedSize / 1024 / 1024).toFixed(2)} MB\n`);

  // Write compressed version
  console.log('🗜️  Compressing file...');
  await new Promise((resolve, reject) => {
    const gzip = createGzip({ level: 9 }); // Maximum compression
    const source = createReadStream(OUTPUT_FILE);
    const destination = createWriteStream(OUTPUT_GZ_FILE);

    source
      .pipe(gzip)
      .pipe(destination)
      .on('finish', resolve)
      .on('error', reject);
  });

  const compressedSize = fs.statSync(OUTPUT_GZ_FILE).size;
  const compressionRatio = ((1 - compressedSize / uncompressedSize) * 100).toFixed(1);
  
  console.log(`   Compressed size: ${(compressedSize / 1024 / 1024).toFixed(2)} MB`);
  console.log(`   Compression ratio: ${compressionRatio}%\n`);

  console.log('✨ Done! Files ready for deployment.\n');
}

// Run the script
processVoterData().catch(error => {
  console.error('❌ Error processing voter data:', error);
  process.exit(1);
});
