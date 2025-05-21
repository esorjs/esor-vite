import { createFilter } from "@rollup/pluginutils";
import { minify } from "terser";

/**
 * Vite plugin for ESOR.
 *
 * @param {object} options Options for the plugin.
 * @param {string|string[]} [options.include] A minimatch pattern, or array of patterns, which specify the files in the build the plugin should operate on. By default, all `.js` files are targeted.
 * @param {string|string[]} [options.exclude] A minimatch pattern, or array of patterns, which specify the files in the build the plugin should ignore. By default, no files are ignored.
 *
 * @returns {import('vite').Plugin} The Vite plugin.
 */
export default function esorPlugin(options = {}) {
  const filter = createFilter(options.include || ["**/*.js"], options.exclude);
  const isProduction = process.env.NODE_ENV === "production";

  return {
    name: "vite-plugin-esor",
    async transform(code, id) {
      if (!filter(id)) return null;

      let transformed = code;
      let map = null;

      if (isProduction) {
        const result = await minify(code, { sourceMap: { filename: id } });
        transformed = result.code;
        map = result.map;
      }

      return { code: transformed, map };
    },
  };
}
