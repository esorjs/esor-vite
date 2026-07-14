import { defineConfig } from 'vitest/config'
import esorPlugin from "./vite-plugin-esor";

export default defineConfig({
  plugins: [esorPlugin()],
  test: {
    environment: 'jsdom',
  },
})
