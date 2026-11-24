/** @type {import('next').NextConfig} */

import createNextIntlPlugin from "next-intl/plugin";

const withIntl = createNextIntlPlugin();

const nextConfig = {
  reactStrictMode: true,
};

export default withIntl(nextConfig);
