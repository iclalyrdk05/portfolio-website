import { Picture } from "~/components/Picture";
import { site } from "~/content/site";
import type { Picture as PictureData } from "~/content/types";
import type { Route } from "./+types/about";
import styles from "./page.module.css";

// The portrait lives at content/profile.jpg and is resized at build time.
const profile = Object.values(
  import.meta.glob<PictureData>("../content/profile.jpg", {
    eager: true,
    import: "default",
    query: { w: "480;800;1200", format: "avif;webp;jpg", as: "picture" },
  }),
)[0]!;

export const meta: Route.MetaFunction = () => [
  { title: `About | ${site.name}` },
  { name: "description", content: site.description },
];

// Text lives in content/site.ts.
export default function About() {
  return (
    <div className={`container grid ${styles.page} ${styles.about}`}>
      <figure className={styles.portrait}>
        <Picture picture={profile} alt={`Portrait of ${site.name}`} sizes="(min-width: 900px) 30vw, 90vw" priority />
      </figure>
      <div className={styles.aboutText}>
        <h1 className={`display ${styles.title}`}>About</h1>
        <div className={styles.prose}>
          {site.about.map((p) => (
            <p key={p}>{p}</p>
          ))}
        </div>
      </div>
    </div>
  );
}
