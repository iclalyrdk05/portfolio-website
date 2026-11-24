/*
 * Piazza di Trevi: case study story.
 * Sources (~/Desktop/portfolio website/trevi branding project brandbook/):
 * "brandbook final.pdf", moodboard PDFs, logo assets and a photo of the printed book.
 *
 * Story: the identity first, then the idea (vision + color), then how each part of
 * the system was built: moodboard, palette, type, logo, printed book.
 * Left out: the tagline page (the artwork says "whishes"), and
 * "The House of The Vetti Presentation.mp4", which is a different project.
 */
import { Evidence, ImagePair, Overview, Swatches } from "~/components/story";
import type { StoryProps } from "~/content/types";

const PAGE = "595 / 288";

export default function TreviStory({ media }: StoryProps) {
  return (
    <>
      <ImagePair
        title="An identity that treats the Trevi Fountain as a stage, where water and theatre meet."
        intro="Framed by Palazzo Poli, the piazza turns visitors into performers. The brand is built to feel the same: moving, layered and theatrical."
        ratio={PAGE}
        images={[
          {
            src: media("cover-page"),
            alt: "Brand book cover with the Piazza di Trevi wordmark in pink over a large pale blue spiral",
            caption: "Brand book cover",
          },
          {
            src: media("pattern"),
            alt: "Blue wave pattern made of layered flowing shapes",
            caption: "Pattern",
          },
        ]}
      />

      <Overview
        items={[
          {
            label: "Vision",
            title: "Piazza di Trevi as a living urban stage.",
            body: (
              <p>
                Human presence, water and architecture meet constantly here. The fountain is a
                place to watch and be watched, shaped by movement and time.
              </p>
            ),
          },
          {
            label: "Color",
            title: "Blue for the water, pink for the theatre.",
            evidence: <Evidence kind="decision" />,
            body: (
              <p>
                Blue carries the depth and flow of water. Pink adds theatrical intensity and
                contrast. Together they express calm and turbulence, control and release.
              </p>
            ),
          },
          {
            label: "Type",
            title: "An expressive display face with a clean sans.",
            evidence: <Evidence kind="decision" />,
            body: (
              <p>
                Dallen Blur gives the name its character. Azo Sans keeps supporting text simple and
                readable.
              </p>
            ),
          },
        ]}
      />

      <ImagePair
        title="The moodboard started from the piazza itself: stage curtains, water, crowds and stone."
        intro="The color story pulls its tones straight from those images."
        ratio={PAGE}
        images={[
          {
            src: media("moodboard"),
            alt: "Moodboard strip: pink stage curtains, blue water, a crowd, a marble sculpture and a building facade",
            caption: "Moodboard",
          },
          {
            src: media("color-story"),
            alt: "Color story grid of pinks, blues, greys and stone tones sampled from the moodboard",
            caption: "Color story",
          },
        ]}
      />

      <Swatches
        title="From a wide range of tones to one pink, two blues and three neutrals."
        evidence={<Evidence kind="decision" />}
        intro="A single strong pink keeps the theatre in focus. The blues and stone neutrals do the quieter work."
        groups={[
          { label: "Primary", colors: ["#95374C"] },
          { label: "Secondary", colors: ["#6B8699", "#7F95A5"] },
          { label: "Neutral", colors: ["#E9E3D5", "#CBC3AF", "#595E61"] },
        ]}
      />

      <ImagePair
        title="Two typefaces: one with personality for the name, one that stays out of the way."
        ratio={PAGE}
        wide
        images={[
          {
            src: media("typography"),
            alt: "Typographic system showing Dallen Blur Demo and Azo Sans with full alphabets",
          },
        ]}
      />

      <ImagePair
        title="The logo sets the name under a blue spiral, like water in motion."
        ratio={PAGE}
        wide
        images={[
          {
            src: media("logo"),
            alt: "Final Piazza di Trevi logo: a blue spiral above the name in deep pink",
          },
        ]}
      />

      <ImagePair
        title="Printed and cut as a physical brand book."
        ratio="3 / 4"
        images={[
          {
            src: media("printed-brandbook"),
            alt: "Printed Piazza di Trevi brand book pages on a cutting mat next to a paper trimmer",
          },
        ]}
      />
    </>
  );
}
