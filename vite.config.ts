import { fileURLToPath } from "node:url";
import { reactRouter } from "@react-router/dev/vite";
import { defineConfig } from "vite";
import { imagetools } from "vite-imagetools";

/**
 * AVIF at sharp's default effort (4) was about 94% of build time: thousands of image
 * variants took over 13 minutes on Vercel's build machines. Effort only changes how hard
 * the encoder searches for a smaller file; quality stays at the same default (50), so the
 * images look the same and are a little larger. Effort 2 is about 7× faster.
 * JPEG, WebP and PNG output is untouched.
 */
export default defineConfig({
  plugins: [
    imagetools({
      extendTransforms: (builtins) => [
        ...builtins,
        (config) => (config.format === "avif" ? (_state, image) => image.avif({ effort: 2 }) : undefined),
      ],
    }),
    reactRouter(),
  ],
  resolve: {
    alias: { "~": fileURLToPath(new URL("./app", import.meta.url)) },
  },
});
