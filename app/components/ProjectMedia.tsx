import type { Project } from "~/content/types";
import { Picture } from "./Picture";
import styles from "./ProjectMedia.module.css";

interface Props {
  project: Project;
  sizes: string;
  priority?: boolean;
}

/** A project's cover image, or a typographic placeholder when no cover exists yet. */
export function ProjectMedia({ project, sizes, priority }: Props) {
  if (project.cover) {
    return (
      <Picture
        picture={project.cover}
        alt={project.coverAlt ?? ""}
        sizes={sizes}
        priority={priority}
        className={styles.image}
      />
    );
  }
  return (
    <div className={styles.placeholder} aria-hidden="true">
      <span className={`display ${styles.placeholderTitle}`}>{project.title}</span>
    </div>
  );
}
