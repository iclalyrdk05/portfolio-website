/*
 * Allahaismarladik Merch: case study story.
 * Sources (~/Desktop/portfolio website/merch project/): t-shirt, poster and tote mockups.
 * Text from the Wix description. Images come from the sharpest sources (the poster art is low-res).
 */
import { Evidence, ImagePair, Overview } from "~/components/story";
import type { StoryProps } from "~/content/types";

// Every image on this page is 3:2, so the page reads as one even rhythm.
const RATIO = "3 / 2";

export default function MerchStory({ media }: StoryProps) {
  return (
    <>
      <ImagePair
        title="One playful phrase, repeated until it becomes a visual identity."
        intro="A t-shirt, posters and a tote built around the word Allahaismarladik."
        ratio={RATIO}
        wide
        images={[
          {
            src: media("posters"),
            alt: "Two posters on a street wall: one with the word curving around a patterned teacup, one with the word above and below a floral pattern",
          },
        ]}
      />

      <Overview
        items={[
          {
            label: "Idea",
            title: "Language as both the message and the graphic.",
            body: <p>The collection balances humor, attitude and cultural reference through strong type.</p>,
          },
          {
            label: "Motifs",
            title: "Two motifs carry it: a floral pattern and a patterned teacup.",
            evidence: <Evidence kind="decision" />,
            body: (
              <p>
                The same two motifs appear on every item, so the collection feels connected.
              </p>
            ),
          },
          {
            label: "Craft",
            title: "Vector-based, so it scales to anything.",
            body: (
              <p>
                Built in Illustrator through layout experiments with scale and repetition.
              </p>
            ),
          },
        ]}
      />

      <ImagePair
        title="Each item gets its own layout: the pattern fills the t-shirt’s back, the word runs across the tote."
        intro="On the t-shirt, a small wordmark sits on the front. On the tote, the teacup sits at the center of the word."
        ratio={RATIO}
        images={[
          {
            src: media("tshirt"),
            alt: "White t-shirt front with a small Allahaismarladik wordmark and back with a tall floral pattern panel",
            caption: "T-shirt",
          },
          {
            src: media("tote"),
            alt: "White tote bag printed with the Allahaismarladik wordmark curving around a small teacup",
            caption: "Tote",
          },
        ]}
      />
    </>
  );
}
