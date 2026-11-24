import { categories } from "./categories";

export type CategoryId = keyof typeof categories;

/** What you write in each `content/projects/<slug>/project.ts`. The folder name is the URL slug. */
export interface ProjectInput {
  title: string;
  categories: CategoryId[];
  /** 3–5 words shown under the title on project cards, e.g. "Study-abroad community app". */
  tagline?: string;
  /** Kind of project, shown in the case study facts, e.g. "UX/UI & Digital Product Design". */
  type?: string;
  /** One-paragraph overview. Shown on the case study until the full story is written. */
  description?: string;
  year?: number;
  role?: string;
  tools?: string[];
  /** "in-progress" shows the project with a "Case study in progress" label. */
  status: "published" | "in-progress";
  /** Position in the work list on the home page (1 = first). */
  order: number;
  /** Alt text for cover.jpg. Required whenever a cover image exists. */
  coverAlt?: string;
  /** Key facts shown under the title, e.g. { label: "Timeline", value: "Fall 2025" }. */
  facts?: { label: string; value: string }[];
}

/** Type helper so each project file is checked as you type. */
export const defineProject = (project: ProjectInput) => project;

export interface Picture {
  sources: Record<string, string>;
  img: { src: string; w: number; h: number };
}

export interface Project extends ProjectInput {
  slug: string;
  cover?: Picture;
}

/** Props every story.tsx receives. `media("name")` returns content/projects/<slug>/media/name.(png|jpg). */
export interface StoryProps {
  project: Project;
  media: (name: string) => Picture;
  /** `video("name")` returns media/name.mp4 (and media/name.jpg as its poster, if present). */
  video: (name: string) => VideoData;
}

export interface VideoData {
  src: string;
  poster?: string;
}
