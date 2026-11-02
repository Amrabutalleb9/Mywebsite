import imageSizes from "./lib/image-sizes.json" with { type: "json" }

/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  images: {
    // Static export: no image server. lib/image-loader.ts points srcset entries at the WebP
    // variants written by scripts/responsive-images.mjs (runs before every build).
    loader: 'custom',
    loaderFile: './lib/image-loader.ts',
    deviceSizes: [...imageSizes.widths, 1920, 2560],
    imageSizes: [320, 480],
  },
}
export default nextConfig
