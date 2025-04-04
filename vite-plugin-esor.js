import { createFilter } from "@rollup/pluginutils";
import MagicString from "magic-string";
import { minify } from "html-minifier-terser";
import crypto from "crypto";

const cache = new Map();

export default function esorPlugin(options = {}) {
  const filter = createFilter(options.include || ["**/*.js"], options.exclude);
  return {
    name: "vite-plugin-esor",
    async transform(code, id) {
      if (!filter(id)) return null;
      // Calculamos un hash del contenido para la caché
      const hash = crypto.createHash("md5").update(code).digest("hex");
      if (cache.has(id) && cache.get(id).hash === hash) {
        return cache.get(id).result;
      }
      const magicString = new MagicString(code);
      let hasModifications = false;
      const regex = /html`([\s\S]*?)`/g;
      let match;
      while ((match = regex.exec(code)) !== null) {
        const [fullMatch, templateContent] = match;
        // Minificación avanzada del HTML usando html-minifier-terser
        let minified;
        try {
          minified = await minify(templateContent, {
            collapseWhitespace: true,
            removeComments: true,
            removeRedundantAttributes: true,
            removeEmptyAttributes: true,
            minifyCSS: true,
            minifyJS: true,
          });
        } catch {
          // Si falla la minificación, usar una versión simple
          minified = templateContent
            .replace(/(\r\n|\n|\r)/gm, " ")
            .replace(/\s+/g, " ")
            .trim();
        }
        // También podemos eliminar expresiones de debug si las hubiera
        const optimized = `html\`${minified}\``;
        if (optimized !== fullMatch) {
          magicString.overwrite(
            match.index,
            match.index + fullMatch.length,
            optimized
          );
          hasModifications = true;
        }
      }
      // Remover líneas con console.* (opcional para producción)
      if (process.env.NODE_ENV === "production") {
        const debugRegex =
          /^[ \t]*console\.(log|debug|warn|info)\(.*?\);?[ \t]*\r?\n/gm;
        let matchDebug;
        while ((matchDebug = debugRegex.exec(code)) !== null) {
          // Calcula el inicio y fin del match
          const start = matchDebug.index;
          const end = start + matchDebug[0].length;
          // Usa magicString.remove para eliminar el rango
          magicString.remove(start, end);
          hasModifications = true;
        }
      }
      if (hasModifications) {
        const result = {
          code: magicString.toString(),
          map: magicString.generateMap({ hires: true }),
        };
        cache.set(id, { hash, result });
        return result;
      }
      return null;
    },
  };
}
