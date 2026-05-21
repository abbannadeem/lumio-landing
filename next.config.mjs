/** @type {import('next').NextConfig} */
const nextConfig = {
  // Static export — emits a fully static site into ./out for Cloudflare Pages.
  output: "export",
  // next/image optimization requires a server; disable it for static hosting.
  images: {
    unoptimized: true,
  },
  // Emit /about/index.html style paths so static hosts resolve routes cleanly.
  trailingSlash: true,
  reactStrictMode: true,
};

export default nextConfig;
