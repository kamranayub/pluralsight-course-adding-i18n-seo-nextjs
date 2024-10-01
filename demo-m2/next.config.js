const createNextIntlPlugin = require('next-intl/plugin');
const withNextIntl = createNextIntlPlugin();

/** @type {import('next').NextConfig} */
module.exports = withNextIntl({
  images: {
    formats: ['image/avif', 'image/webp']
  }
});
