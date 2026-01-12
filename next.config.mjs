/** @type {import('next').NextConfig} */
const nextConfig = {
  // Enable compression for static files
  compress: true,
  
  // Configure headers for better caching and compression
  async headers() {
    return [
      {
        source: '/data/:path*.geojson',
        headers: [
          {
            key: 'Cache-Control',
            value: 'public, max-age=31536000, immutable',
          },
          {
            key: 'Content-Type',
            value: 'application/geo+json',
          },
        ],
      },
      {
        source: '/data/:path*.geojson.gz',
        headers: [
          {
            key: 'Cache-Control',
            value: 'public, max-age=31536000, immutable',
          },
          {
            key: 'Content-Type',
            value: 'application/geo+json',
          },
          {
            key: 'Content-Encoding',
            value: 'gzip',
          },
        ],
      },
    ];
  },
};

export default nextConfig;
