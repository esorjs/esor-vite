import { defineConfig } from "vite";
import esorPlugin from "./vite-plugin-esor";

export default defineConfig({
  plugins: [esorPlugin()],
});
