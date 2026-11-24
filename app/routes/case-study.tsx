import { Link } from "react-router";
import { motion } from "motion/react";
import { ProjectMedia } from "~/components/ProjectMedia";
import { categories } from "~/content/categories";
import { getProject, getStory, mediaFor, projects, videoFor } from "~/content/projects";
import { site } from "~/content/site";
import type { Route } from "./+types/case-study";
import NotFound from "./not-found";
import styles from "./case-study.module.css";

export const meta: Route.MetaFunction = ({ params }) => {
  const project = getProject(params.slug);
  if (!project) return [{ title: `Not found | ${site.name}` }];
  return [
    { title: `${project.title} | ${site.name}` },
    { name: "description", content: project.description ?? site.description },
    { property: "og:title", content: `${project.title} | ${site.name}` },
  ];
};

const ease = [0.22, 1, 0.36, 1] as const;

export default function CaseStudy({ params }: Route.ComponentProps) {
  const project = getProject(params.slug);
  if (!project) return <NotFound />;

  const Story = getStory(project.slug);
  const i = projects.indexOf(project);
  const prev = projects[(i - 1 + projects.length) % projects.length]!;
  const next = projects[(i + 1) % projects.length]!;

  return (
    <article>
      {/* Same layout for every project: text and key facts on the left, cover on the right. */}
      <header className={`container grid ${styles.hero}`}>
        <motion.div
          className={styles.heroText}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease }}
        >
          <p className="label">{project.categories.map((c) => categories[c].label).join(" · ")}</p>
          <h1 className={`display ${styles.title}`}>{project.title}</h1>
          {project.description && <p className={styles.summary}>{project.description}</p>}
          <dl className={styles.facts}>
            {project.type && (
              <div>
                <dt>Type</dt>
                <dd>{project.type}</dd>
              </div>
            )}
            {project.facts?.map((f) => (
              <div key={f.label}>
                <dt>{f.label}</dt>
                <dd>{f.value}</dd>
              </div>
            ))}
          </dl>
        </motion.div>

        <motion.div
          className={styles.cover}
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2, delay: 0.15, ease }}
        >
          <ProjectMedia project={project} sizes="(min-width: 900px) 40vw, 100vw" priority />
        </motion.div>
      </header>

      {Story ? (
        <Story project={project} media={mediaFor(project.slug)} video={videoFor(project.slug)} />
      ) : (
        <p className={`container ${styles.pending}`}>
          The full case study for this project is being written.
        </p>
      )}

      <nav className={`container ${styles.pager}`} aria-label="More work">
        <Link to={`/work/${prev.slug}`} className={`${styles.step} ${styles.prev}`} rel="prev">
          <span className={styles.stepLabel}>
            <span className={styles.arrow} aria-hidden="true">←</span> Previous
          </span>
          <span className={`display ${styles.stepTitle}`}>{prev.title}</span>
        </Link>

        <Link to={`/work/${next.slug}`} className={`${styles.step} ${styles.nextStep}`} rel="next">
          <span className={styles.stepLabel}>
            Next <span className={styles.arrow} aria-hidden="true">→</span>
          </span>
          <span className={`display ${styles.stepTitle}`}>{next.title}</span>
        </Link>
      </nav>
    </article>
  );
}
