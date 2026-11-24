import type { ComponentType } from "react";
import { categories } from "./categories";
import type { CategoryId, Picture, Project, ProjectInput, StoryProps, VideoData } from "./types";

// Every folder in content/projects/ with a project.ts becomes a project.
const inputs = import.meta.glob<ProjectInput>("./projects/*/project.ts", {
  eager: true,
  import: "default",
});

// An optional cover.jpg / cover.png next to project.ts is resized into AVIF, WebP and JPEG at build time.
const covers = import.meta.glob<Picture>("./projects/*/cover.{jpg,jpeg,png,webp}", {
  eager: true,
  import: "default",
  query: { w: "480;800;1200;1800", format: "avif;webp;jpg", as: "picture" },
});

// Images used inside a case study live in content/projects/<slug>/media/.
// PNGs keep their transparency; photos become JPEG fallbacks.
const mediaPng = import.meta.glob<Picture>("./projects/*/media/*.png", {
  eager: true,
  import: "default",
  query: { w: "400;800;1200", format: "avif;webp;png", as: "picture" },
});
const mediaPhoto = import.meta.glob<Picture>("./projects/*/media/*.{jpg,jpeg,webp}", {
  eager: true,
  import: "default",
  query: { w: "640;1080;1600;2200", format: "avif;webp;jpg", as: "picture" },
});

// Videos (.mp4) in media/. A .jpg with the same name is used as the poster frame.
const mediaVideo = import.meta.glob<string>("./projects/*/media/*.mp4", {
  eager: true,
  import: "default",
  query: "?url",
});

// The full editorial case study, written per project in story.tsx.
const stories = import.meta.glob<ComponentType<StoryProps>>("./projects/*/story.tsx", {
  eager: true,
  import: "default",
});

const slugOf = (path: string) => path.split("/")[2]!;
const fileOf = (path: string) => path.split("/").pop()!.replace(/\.[^.]+$/, "");

const coverBySlug = new Map(Object.entries(covers).map(([path, pic]) => [slugOf(path), pic]));
const storyBySlug = new Map(Object.entries(stories).map(([path, story]) => [slugOf(path), story]));

const mediaIndex = new Map<string, Picture>();
for (const [path, pic] of Object.entries({ ...mediaPng, ...mediaPhoto })) {
  mediaIndex.set(`${slugOf(path)}/${fileOf(path)}`, pic);
}

const videoIndex = new Map(
  Object.entries(mediaVideo).map(([path, url]) => [`${slugOf(path)}/${fileOf(path)}`, url]),
);

export function mediaFor(slug: string) {
  return (name: string) => {
    const pic = mediaIndex.get(`${slug}/${name}`);
    if (!pic) throw new Error(`Missing image "${name}" in content/projects/${slug}/media/`);
    return pic;
  };
}

export function videoFor(slug: string) {
  return (name: string): VideoData => {
    const src = videoIndex.get(`${slug}/${name}`);
    if (!src) throw new Error(`Missing video "${name}.mp4" in content/projects/${slug}/media/`);
    return { src, poster: mediaIndex.get(`${slug}/${name}`)?.img.src };
  };
}

export const getStory = (slug: string) => storyBySlug.get(slug);

export const projects: Project[] = Object.entries(inputs)
  .map(([path, input]) => {
    const slug = slugOf(path);
    const cover = coverBySlug.get(slug);
    if (cover && !input.coverAlt) {
      throw new Error(`Project "${slug}" has a cover image but no coverAlt text.`);
    }
    for (const c of input.categories) {
      if (!(c in categories)) throw new Error(`Project "${slug}" has unknown category "${c}".`);
    }
    return { ...input, slug, cover };
  })
  .sort((a, b) => a.order - b.order);

export const getProject = (slug: string | undefined) => projects.find((p) => p.slug === slug);

export const isCategory = (value: string | null): value is CategoryId =>
  value !== null && value in categories;
