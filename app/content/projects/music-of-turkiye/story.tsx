/*
 * Music of Turkiye: case study story.
 * Sources (~/Desktop/portfolio website/music of turkiye/): a photo of the printed book
 * and a digital flip-through recording (spreads are frames from it).
 * Note: the cover artwork is titled "Genres of Türkiye".
 */
import { Evidence, ImagePair, Overview, Walkthrough } from "~/components/story";
import type { StoryProps } from "~/content/types";

const SPREAD = "2400 / 1177";

export default function MusicStory({ media, video }: StoryProps) {
  return (
    <>
      <ImagePair
        title="A Wikipedia entry on Turkish music, redesigned as a book."
        intro="The project focuses on typography and layout, combining text and images to explore Turkey’s musical traditions and influential artists."
        ratio="1 / 1"
        narrow
        images={[
          { src: media("cover"), alt: "Book cover with a black vinyl record and the title Genres of Türkiye in red", caption: "Front cover" },
          { src: media("back"), alt: "Back cover with a vinyl record and a short red text", caption: "Back cover" },
        ]}
      />

      <Overview
        items={[
          {
            label: "Source",
            title: "One long online article, turned into chapters numbered 00 to 24.",
            body: <p>The contents page lists every genre, from classical and folk music to rock and club music.</p>,
          },
          {
            label: "Typography",
            title: "A tall, condensed display face and big chapter numbers.",
            evidence: <Evidence kind="decision" />,
            body: <p>Each chapter opens with its title and number set large, so you can find your way while flipping.</p>,
          },
          {
            label: "Imagery",
            title: "Every genre gets its own mood.",
            evidence: <Evidence kind="decision" />,
            body: <p>Archival photographs, paintings and concert shots set the tone of each chapter.</p>,
          },
        ]}
      />

      <ImagePair
        title="Chapter openers set the genre’s mood in one spread."
        ratio={SPREAD}
        images={[
          { src: media("western-influence"), alt: "Spread titled Western Influence on Turkish Classical Music 06 with a painting of an orchestra", caption: "06 Western influence" },
          { src: media("kanto"), alt: "Spread titled Kanto (Cantare music) 12 over a sepia photo of a historic theater", caption: "12 Kanto" },
          { src: media("pop-rock"), alt: "Spread titled Pop-rock and rock 20 in red over a concert stage in red light", caption: "20 Pop-rock and rock" },
        ]}
      />

      <ImagePair
        title="Inside, text and images trade places from spread to spread."
        ratio={SPREAD}
        images={[
          { src: media("contents"), alt: "Contents spread on deep blue listing 24 chapters", caption: "Contents" },
          { src: media("composers"), alt: "Spread with a black-and-white photo of two musicians, titled Composers and Performers and Musical instruments", caption: "Composers and performers" },
          { src: media("2000s"), alt: "Spread titled 2000s and 2010s with a photo of a rock singer jumping on stage", caption: "2000s and 2010s" },
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
    </>
  );
}
