/*
 * Trees I Grew Up With: case study story.
 * Sources (~/Desktop/portfolio website/trees I grew up with project/): photos of the
 * printed book and a digital flip-through recording (spreads are frames from it).
 */
import { Evidence, ImagePair, Overview, Walkthrough } from "~/components/story";
import type { StoryProps } from "~/content/types";

const SPREAD = "2103 / 1610";

export default function TreesStory({ media, video }: StoryProps) {
  return (
    <>
      <ImagePair
        title="A book about the trees of Turkey’s Aegean coast, where I was raised."
        intro="The olive, the fig and the pomegranate: trees rooted in the region’s culture and in my sense of home."
        ratio="3 / 2"
        wide
        images={[
          {
            src: media("printed-olive"),
            alt: "The printed book open on a stone step, showing a page of text beside a large olive branch illustration",
          },
        ]}
      />

      <Overview
        items={[
          {
            label: "Subject",
            title: "Three trees, three chapters.",
            body: <p>Each tree gets its own chapter, listed with a photo on the contents page.</p>,
          },
          {
            label: "Texts",
            title: "Three kinds of writing side by side.",
            body: <p>A website article, a Qur’anic chapter and a poem.</p>,
          },
          {
            label: "Design",
            title: "Botanical illustration opens every chapter.",
            evidence: <Evidence kind="decision" />,
            body: <p>Large illustrations on a warm off-white page, set against photographs of the real places.</p>,
          },
        ]}
      />

      <ImagePair
        title="Each chapter opens with its tree drawn large across the spread."
        ratio={SPREAD}
        images={[
          { src: media("olive"), alt: "Olive chapter spread with a pale olive branch over a photo of olive oil bottles", caption: "The olive" },
          { src: media("fig"), alt: "Spread titled The Fig Tree with a large illustration of figs and fig leaves", caption: "The fig" },
          { src: media("pomegranate"), alt: "Spread titled The Pomegranate Tree with an illustrated pomegranate branch and fruit", caption: "The pomegranate" },
        ]}
      />

      <ImagePair
        title="Between the openers, photographs and quieter spreads give the text room."
        ratio={SPREAD}
        images={[
          { src: media("olive-grove"), alt: "Spread with text on the left and a photograph of a man in an olive grove on the right", caption: "Photograph" },
          { src: media("olive-oil"), alt: "Spread with three circular photos of olive oil production next to text and a faint olive branch", caption: "Process" },
          { src: media("poem"), alt: "Spread with three pomegranates on deep red on the left and a poem on the right", caption: "Poem" },
        ]}
      />

      <Walkthrough
        wide
        autoplay
        tone="deep"
        label="Flipping through the book"
        title="A flip through the whole book."
        video={video("flip-through")}
      />

      <ImagePair
        title="Printed and bound."
        ratio="1350 / 2400"
        images={[
          {
            src: media("printed-pages"),
            alt: "Three photos of the printed book outdoors: the pomegranate illustration, a green page and the fig spread",
          },
        ]}
      />
    </>
  );
}
