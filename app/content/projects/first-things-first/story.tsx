/*
 * First Things First: case study story.
 * Sources (~/Desktop/portfolio website/postermockupmanifesto.jpg): the poster mockup and
 * the Wix description. Each poster is cropped flat from the mockup (about 1100 × 1580 px).
 */
import { Evidence, ImagePair, Overview } from "~/components/story";
import type { StoryProps } from "~/content/types";

export default function FirstThingsFirstStory({ media }: StoryProps) {
  return (
    <>
      <Overview
        items={[
          {
            label: "Source",
            title: "Ken Garland’s 1964 manifesto, made into two posters.",
            body: (
              <p>
                The manifesto critiques the overemphasis on advertising and asks designers to use
                their skills for education, culture and public awareness.
              </p>
            ),
          },
          {
            label: "Manifesto poster",
            title: "A notepage you read closely.",
            evidence: <Evidence kind="decision" />,
            body: (
              <p>
                The text sits on beige grid paper with key phrases highlighted in blue, while the
                title is brushed across the page by hand.
              </p>
            ),
          },
          {
            label: "Event poster",
            title: "Blue takes over, and the date leads.",
            evidence: <Evidence kind="decision" />,
            body: (
              <p>
                A livelier palette and brushed numerals put 16 December first, then the time and
                place.
              </p>
            ),
          },
        ]}
      />

      <ImagePair
        title="Same grid, same hand lettering: one poster to read, one to show up for."
        intro="Both posters are 27 × 19 inches."
        ratio="1110 / 1576"
        narrow
        images={[
          {
            src: media("manifesto-poster"),
            alt: "Manifesto poster: the First Things First text on beige grid paper with blue highlights and the title brushed in large black letters",
            caption: "Manifesto poster",
          },
          {
            src: media("event-poster"),
            alt: "Event poster in blue: Ken Garland: first things first, 16 December 2024, 2PM to 8PM, Institute of Contemporary Arts, New York",
            caption: "Event poster",
          },
        ]}
      />
    </>
  );
}
