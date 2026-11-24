/*
 * Keepsake: case study story (the book and the app in one project).
 * Sources (~/Desktop/portfolio website/keepsake project/): Keepsake.pdf (book + app
 * summary), the Keepsake app PDF (vision), book spread photos, app screens and the
 * prototype screen recording.
 *
 * Story: the printed book first, then the app that extends it: save, find, revisit.
 * No user research exists for this project, so nothing is tagged as a finding.
 * Clips skip prototype placeholders ("NAME OF THE KEEPSAKE" labels).
 */
import { Evidence, ImagePair, Overview, Screens, Walkthrough } from "~/components/story";
import type { StoryProps } from "~/content/types";

export default function KeepsakeStory({ media, video }: StoryProps) {
  return (
    <>
      <ImagePair
        title="Keepsake turns a matchbook collection into stories about people, places and moments."
        intro="Each matchbook was picked up in a different city. The book pairs every one with the memory behind it."
        images={[
          {
            src: media("spread-collection"),
            alt: "Book spread showing dozens of matchbooks from restaurants and bars arranged in a grid",
            caption: "The collection",
          },
          {
            src: media("spread-brennans"),
            alt: "Open spread with a Brennan’s matchbook on the left and a written story on the right",
            caption: "One matchbook, one story",
          },
        ]}
      />

      <Overview
        items={[
          {
            label: "Starting point",
            title: "Ordinary souvenirs can hold meaningful memories.",
            body: (
              <p>
                It begins with my own collection of matchbooks gathered from different cities.
              </p>
            ),
          },
          {
            label: "The book",
            title: "Every object gets a written reflection, on paper you can hold.",
            evidence: <Evidence kind="decision" />,
            body: (
              <p>
                Archival imagery, handwritten details, textured paper and careful typography make
                the reading tactile and intimate.
              </p>
            ),
          },
          {
            label: "The app",
            title: "The warmth of the book with the order of a digital gallery.",
            evidence: <Evidence kind="decision" />,
            body: (
              <p>
                For people who love to remember but struggle to let go: every keepsake is saved
                with a photo and its story, then tagged by place, year and type.
              </p>
            ),
          },
        ]}
      />

      <ImagePair
        title="Each spread gives one matchbook room, with its place, date and story beside it."
        intro="Stamps, old photographs and envelopes add context around each object."
        images={[
          {
            src: media("spread-maxims"),
            alt: "Spread with a Maxim’s matchbook, postage stamps and a handwritten caption beside a story",
            caption: "Maxim’s",
          },
          {
            src: media("spread-antons"),
            alt: "Spread with an Anton’s matchbook on the left and a story with a collage of old photographs on the right",
            caption: "Anton’s",
          },
        ]}
      />

      <Screens
        label="The app at a glance"
        title="The app carries the book’s idea to any object: a drawer of small things becomes an archive you can browse."
        intro="Photograph a keepsake, write the story behind it, and tag where and when it’s from."
        stagger
        items={[
          {
            src: media("archive"),
            alt: "Archive grid of keepsakes such as a pool ball lamp, guitar picks and a gifted guitar, with category tabs",
            caption: "The archive",
          },
          {
            src: media("memory-story"),
            alt: "A memory page with the story of an old cookie tin shown over a black-and-white photo",
            caption: "A memory and its story",
          },
          {
            src: media("memory-photo"),
            alt: "The same memory page showing the cookie tin full of old photographs in color",
            caption: "The object itself",
          },
        ]}
      />

      <Screens
        label="Saving a keepsake"
        title="Saving a keepsake takes three steps: a photo, its story, and where and when it’s from."
        evidence={<Evidence kind="decision" />}
        intro="The story comes before the tags, so each entry starts with why the object matters."
        numbered
        items={[
          {
            src: media("pick-photo"),
            alt: "Photo picker with a grid of photographed objects to choose from",
            caption: "Add a photo",
          },
          {
            src: media("write-story"),
            alt: "Typing a story about a green couch into a text card over the photo",
            caption: "Write its story",
          },
          {
            src: media("tag-place-year"),
            alt: "Choosing a place from a list of cities and a year on a slider",
            caption: "Tag place and year",
          },
          {
            video: video("save-keepsake"),
            alt: "Prototype clip: uploading a photo, typing its story and choosing a place",
            caption: "In the prototype",
          },
        ]}
      />

      <Screens
        label="Finding and revisiting a keepsake"
        tone="dark"
        title="Tags make years of objects easy to find, and each memory opens on its story first."
        evidence={<Evidence kind="decision" />}
        intro="Filter by city and a range of years. Inside a memory, the story sits over a faded photo; switch to see the object in full color."
        items={[
          {
            src: media("filters"),
            alt: "Filter screen with a list of cities, Istanbul selected, and a year range from 1985 to 2000",
            caption: "Filter by place and years",
          },
          {
            video: video("browse-filter"),
            alt: "Prototype clip: scrolling the archive, then filtering by Istanbul and 1985 to 2000",
            caption: "Finding",
          },
          {
            video: video("open-memory"),
            alt: "Prototype clip: opening a memory and reading its story",
            caption: "Revisiting",
          },
        ]}
      />

      <Walkthrough
        label="Full prototype walkthrough"
        video={video("full-flow")}
        title="The full app flow, from saving a keepsake to revisiting it."
        intro="The interactive Figma prototype, start to finish."
      />
    </>
  );
}
