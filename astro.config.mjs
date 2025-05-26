import { defineConfig } from "astro/config";
import mdx from "@astrojs/mdx";
import sitemap from "@astrojs/sitemap";
import cloudflare from "@astrojs/cloudflare";

export default defineConfig({
  site: "https://sriramrao.dev",
  integrations: [mdx(), sitemap()],
  output: "static", // For static blog, change to 'server' if you want SSR
  adapter: cloudflare(),
});
