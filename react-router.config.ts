import { readdirSync, statSync } from "node:fs";
import { join } from "node:path";
import type { Config } from "@react-router/dev/config";

const projectsDir = join(import.meta.dirname, "app/content/projects");

export default {
  // Static site: every page is rendered to HTML at build time.
  ssr: false,
  async prerender() {
    const slugs = readdirSync(projectsDir).filter((name) =>
      statSync(join(projectsDir, name)).isDirectory(),
    );
    return ["/", "/work", "/about", ...slugs.map((slug) => `/work/${slug}`)];
  },
} satisfies Config;
