/** @type {import('next').NextConfig} */
require('dotenv').config();

const nextConfig = {
    env: {
        API_BASE_URL: process.env.NEXT_PUBLIC_API_BASE_URL,
      },
}

module.exports = nextConfig
