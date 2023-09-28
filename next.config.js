/** @type {import('next').NextConfig} */
const nextConfig = {}

module.exports = {
    experimental: {
      serverComponents: true, // Server Actions için gerekli olan Server Components özelliğini etkinleştirir
    },
  };