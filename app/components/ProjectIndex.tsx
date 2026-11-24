import { useEffect, useState } from "react";
import { Link, useSearchParams } from "react-router";
import { AnimatePresence, motion } from "motion/react";
import { categories } from "~/content/categories";
import { isCategory } from "~/content/projects";
import type { CategoryId, Project } from "~/content/types";
import { ProjectMedia } from "./ProjectMedia";
import styles from "./ProjectIndex.module.css";

const ease = [0.22, 1, 0.36, 1] as const;

/** All projects as a grid of small cards with category filters. The active filter is kept in the URL (?category=ux). */
export function ProjectIndex({ projects }: { projects: Project[] }) {
  const [params, setParams] = useSearchParams();
  // Pages are pre-rendered without a filter; read the URL only after the page has loaded.
  const [ready, setReady] = useState(false);
  useEffect(() => setReady(true), []);
  const raw = ready ? params.get("category") : null;
  const active: CategoryId | null = isCategory(raw) ? raw : null;

  const visible = active ? projects.filter((p) => p.categories.includes(active)) : projects;

  const select = (id: CategoryId | null) => {
    setParams(
      (prev) => {
        const next = new URLSearchParams(prev);
        if (id) next.set("category", id);
        else next.delete("category");
        return next;
      },
      { replace: true, preventScrollReset: true },
    );
  };

  const filters: { id: CategoryId | null; label: string; count: number }[] = [
    { id: null, label: "All", count: projects.length },
    ...(Object.keys(categories) as CategoryId[]).map((id) => ({
      id,
      label: categories[id].label,
      count: projects.filter((p) => p.categories.includes(id)).length,
    })),
  ];

  return (
    <div>
      <ul className={styles.filters} aria-label="Filter projects by category">
        {filters.map((f) => (
          <li key={f.label}>
            <button
              type="button"
              className={styles.filter}
              aria-pressed={active === f.id}
              onClick={() => select(f.id)}
            >
              {f.label} <span className={styles.count}>{f.count}</span>
            </button>
          </li>
        ))}
      </ul>

      <p className="visually-hidden" aria-live="polite">
        Showing {visible.length} projects
      </p>

      <ul className={styles.grid}>
        <AnimatePresence initial={false} mode="popLayout">
          {visible.map((project, i) => (
            <motion.li
              key={project.slug}
              layout
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.6, ease, delay: Math.min(i, 8) * 0.03 }}
            >
              <Link to={`/work/${project.slug}`} className={styles.card}>
                <span className={styles.num}>{String(i + 1).padStart(3, "0")}</span>
                <div className={styles.media}>
                  <ProjectMedia
                    project={project}
                    priority={i < 3}
                    sizes="(min-width: 900px) 30vw, 50vw"
                  />
                </div>
                <h3 className={`display ${styles.title}`}>{project.title}</h3>
                <p className={styles.meta}>
                  <span className={styles.tagline}>
                    {project.tagline ?? (project.status === "in-progress" ? "In progress" : project.type)}
                  </span>
                  <span className={styles.category}>
                    {project.categories.map((c) => categories[c].short).join(", ")}
                  </span>
                </p>
              </Link>
            </motion.li>
          ))}
        </AnimatePresence>
      </ul>
    </div>
  );
}
