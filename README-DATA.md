# Voter Data Management

This document explains how to manage and update the voter data used in the VoterLens Orlando map.

## Overview

The VoterLens map displays geocoded voter registration data for Orlando, FL. To optimize performance, the data is pre-processed from CSV format into an optimized GeoJSON format during the build process.

## Data Files

### Source Data (Not in Git)

- **Location:** `public/data/orange-county-voters-geocoded.csv`
- **Size:** ~16 MB
- **Format:** CSV with columns: voter_id, residence_address_line_1, residence_city_usps, residence_state, residence_zipcode, party_affiliation, precinct_split, latitude, longitude, geocode_status
- **Note:** This file is gitignored and must be obtained separately

### Processed Data (Generated)

- **Location:** `public/data/orange-county-voters-geocoded.geojson`
- **Size:** ~41 MB (uncompressed)
- **Format:** GeoJSON FeatureCollection
- **Note:** Generated automatically during build

### Compressed Data (Generated)

- **Location:** `public/data/orange-county-voters-geocoded.geojson.gz`
- **Size:** ~3.1 MB
- **Format:** Gzipped GeoJSON
- **Note:** This is what gets served to users (92.5% size reduction)

## Data Processing Workflow

### Initial Setup

1. Obtain the source CSV file with geocoded voter data
2. Place it in `public/data/orange-county-voters-geocoded.csv`
3. Run the processing script:
   ```bash
   npm run process-data
   ```

### Updating Data

When you receive updated voter data:

1. **Replace the source file:**

   ```bash
   # Backup old data (optional)
   cp public/data/orange-county-voters-geocoded.csv public/data/orange-county-voters-geocoded.csv.backup

   # Copy new data
   cp /path/to/new-voter-data.csv public/data/orange-county-voters-geocoded.csv
   ```

2. **Process the new data:**

   ```bash
   npm run process-data
   ```

   This will:

   - Parse the CSV file
   - Filter for successfully geocoded points (geocode_status = "SUCCESS")
   - Convert to optimized GeoJSON format
   - Generate compressed .gz version
   - Display statistics about the processed data

3. **Test locally:**

   ```bash
   npm run dev
   ```

   Navigate to `/voterlens/orlando` and verify the map loads correctly

4. **Deploy:**
   ```bash
   npm run build
   ```
   The `prebuild` script will automatically run `process-data` before building

## Data Processing Script

The processing script (`scripts/process-voter-data.js`) performs the following optimizations:

1. **Filters invalid data:**

   - Only includes points with `geocode_status = "SUCCESS"`
   - Validates coordinate ranges (lat: -90 to 90, lon: -180 to 180)
   - Excludes zero coordinates

2. **Strips unnecessary columns:**

   - Keeps only: address, city, state, zipcode, party_affiliation, latitude, longitude
   - Removes voter_id, precinct_split, and other sensitive/unused fields

3. **Converts to GeoJSON:**

   - Native format for MapLibre GL
   - Eliminates client-side CSV parsing overhead
   - Faster to parse and render

4. **Generates compressed version:**
   - Creates .gz file with maximum compression (level 9)
   - Reduces transfer size by ~92.5%
   - Vercel automatically serves the compressed version to browsers

## Performance Improvements

### Before Optimization

- File size: 16 MB (CSV)
- Load time: 15-30 seconds
- Browser parsing: Heavy (CSV parsing + GeoJSON conversion)
- Memory usage: High

### After Optimization

- File size: 3.1 MB (compressed GeoJSON)
- Load time: 3-8 seconds
- Browser parsing: Minimal (native JSON parsing)
- Memory usage: ~40% reduction

## Build Process Integration

The data processing is integrated into the build process:

```json
{
  "scripts": {
    "prebuild": "node scripts/process-voter-data.js",
    "build": "next build",
    "process-data": "node scripts/process-voter-data.js"
  }
}
```

- `npm run build` automatically processes data before building
- `npm run process-data` can be run manually to regenerate data files

## Deployment Notes

### Vercel Configuration

The `next.config.mjs` is configured to:

- Enable compression for all static files
- Set appropriate cache headers for GeoJSON files (1 year)
- Serve pre-compressed .gz files automatically
- Set correct Content-Type and Content-Encoding headers

### File Size Limits

- **Vercel Free Tier:** 100 MB deployment size limit
- **Current data files:** ~44 MB total (uncompressed + compressed)
- **Remaining headroom:** ~56 MB for other assets

### Caching Strategy

- GeoJSON files are cached for 1 year (`max-age=31536000`)
- Marked as `immutable` (won't change during cache lifetime)
- When data updates, the build process generates new files
- Vercel deployment creates new URLs, bypassing cache

## Troubleshooting

### "Failed to load voter data" Error

1. Check that the source CSV file exists:

   ```bash
   ls -lh public/data/orange-county-voters-geocoded.csv
   ```

2. Verify the processed files exist:

   ```bash
   ls -lh public/data/*.geojson*
   ```

3. Re-run the processing script:
   ```bash
   npm run process-data
   ```

### Build Fails During Prebuild

1. Check Node.js version (requires Node 16+)
2. Verify the CSV file is in the correct location
3. Check for CSV formatting issues (run script with verbose logging)

### Map Shows No Points

1. Verify the GeoJSON file contains features:

   ```bash
   node -e "const data = require('./public/data/orange-county-voters-geocoded.geojson'); console.log('Features:', data.features.length);"
   ```

2. Check browser console for errors
3. Verify the file is being served correctly (check Network tab)

## Future Enhancements

For larger datasets or more frequent updates, consider:

1. **API-based loading:** Create a Next.js API route that serves data dynamically
2. **Spatial indexing:** Only load points visible in the current map viewport
3. **Tile-based rendering:** Use vector tiles (PMTiles/MBTiles) for better performance
4. **Database integration:** Store data in a spatial database (PostGIS)
5. **Incremental updates:** Support partial data updates without full reprocessing

## Data Sources

- Voter registration data: Orange County Supervisor of Elections
- Geocoding: [Document your geocoding source/method]
- City boundaries: Orlando GIS Open Data Portal

## Privacy & Security

- No personally identifiable information (PII) is included in the processed data
- Only public voter registration information is displayed
- Addresses are shown at the property level (publicly available)
- Individual voter IDs are not included in the processed files

## Questions?

For questions about the data processing workflow, contact the development team or refer to the main README.md file.
