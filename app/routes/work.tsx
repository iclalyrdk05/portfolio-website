import { ProjectIndex } from "~/components/ProjectIndex";
import { projects } from "~/content/projects";
import { site } from "~/content/site";
import type { Route } from "./+types/work";
import styles from "./page.module.css";

export const meta: Route.MetaFunction = () => [
  { title: `Work | ${site.name}` },
  { name: "description", content: site.description },
];

export default function Work() {
  return (
    <div className={`container ${styles.page}`}>
      <h1 className={`display ${styles.title}`}>Work</h1>
      <ProjectIndex projects={projects} />
    </div>
  );
}
