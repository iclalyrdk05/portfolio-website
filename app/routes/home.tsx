import { motion } from "motion/react";
import { ProjectIndex } from "~/components/ProjectIndex";
import { projects } from "~/content/projects";
import { site } from "~/content/site";
import type { Route } from "./+types/home";
import styles from "./home.module.css";

export const meta: Route.MetaFunction = () => [
  { title: `${site.name} | ${site.role}` },
  { name: "description", content: site.description },
  { property: "og:title", content: `${site.name} | ${site.role}` },
  { property: "og:description", content: site.description },
];

const ease = [0.22, 1, 0.36, 1] as const;

/** Compact intro: who, what, where, in a few seconds. The work follows right after. */
export default function Home() {
  return (
    <>
      <motion.section
        className={`container ${styles.hero}`}
        initial={{ opacity: 0, y: 16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.9, ease }}
      >
        {/* Name and role aren't shown here (the name is in the header), but screen readers and search still get them. */}
        <h1 className="visually-hidden">
          {site.name}, {site.role}
        </h1>

        <div className={styles.what}>
          <p className={styles.intro}>{site.intro}</p>
          <ul className={styles.focus} aria-label="Focus areas">
            {site.focus.map((f) => (
              <li key={f}>{f}</li>
            ))}
          </ul>
          <p className={styles.location}>{site.location}</p>
        </div>
      </motion.section>

      <section id="work" className="container" aria-label="Work">
        <ProjectIndex projects={projects} />
      </section>
    </>
  );
}
