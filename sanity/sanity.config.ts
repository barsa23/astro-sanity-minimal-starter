// `sanity.config.ts` / `sanity.config.js`:
import { defineConfig } from 'sanity'
import { netlifyTool } from 'sanity-plugin-netlify'
import { deskTool } from "sanity/desk";

export default defineConfig({
  // ...
  plugins: [
    // ...
    netlifyTool(), deskTool()
  ],
})