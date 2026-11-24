/*
 * Sky Map / Major Meteor Showers in 2012: case study story.
 * Sources (~/Desktop/portfolio website/sky map project/): the poster artwork.
 * The close-ups are crops of the poster at its full resolution (1709 px wide),
 * framed so each one shows a complete element. Definitions come from the poster's key.
 */
import { Evidence, ImagePair, Overview } from "~/components/story";
import type { StoryProps } from "~/content/types";

export default function SkyMapStory({ media }: StoryProps) {
  return (
    <>
      <ImagePair
        title="A data visualization that makes a year of meteor showers readable at a glance."
        intro="Eight major showers of 2012, from the Quadrantids to the Geminids: when they happen, how strong they are and where to look."
        ratio="1709 / 2569"
        images={[
          {
            src: media("poster"),
            alt: "Dark poster titled Major Meteor Showers in 2012, with a pale map of Europe and Africa and labels for each meteor shower",
          },
        ]}
      />

      <Overview
        items={[
          {
            label: "Data",
            title: "Four numbers for every shower.",
            body: <p>Dates, Zenithal Hourly Rate (ZHR), velocity in km/s and a moon interference score.</p>,
          },
          {
            label: "Encoding",
            title: "Position for place, size for strength.",
            evidence: <Evidence kind="decision" />,
            body: <p>Each shower is pinned to a location on the map, and its ring grows with its hourly rate.</p>,
          },
          {
            label: "Color",
            title: "Night-sky navy, pale land, red for names.",
            evidence: <Evidence kind="decision" />,
            body: <p>Yellow is kept for the data marks only: the rings and the lines that lead to the labels.</p>,
          },
        ]}
      />

      <ImagePair
        title="Ring size shows how many meteors you’ll see: the Geminids’ 120 per hour over Greece, against the Lyrids’ 18 over Türkiye."
        intro="The poster’s footnote spells it out: circle size represents the ZHR, the meteors visible per hour under ideal conditions."
        ratio="555 / 370"
        images={[
          {
            src: media("detail-circles"),
            alt: "Close-up of the map: a large yellow ring over Greece next to a much smaller ring over Türkiye",
          },
        ]}
      />

      <ImagePair
        title="Every label reads in the same order, and a moon-phase key turns the interference score into something you can picture."
        intro="Name and code in red, then dates, hourly rate, speed and moon interference, with a yellow line back to the map. The key maps the 0 to 25 scale onto the moon’s phases, from 0 at new moon to 25 at full."
        ratio="3 / 2"
        images={[
          {
            src: media("detail-label"),
            alt: "Close-up of the Perseids label: Jul 13 to Aug 26, 100 ZHR, 60.5 km/s, moon interference 24, with a line to a ring over the North Sea",
            caption: "Shower label",
          },
          {
            src: media("detail-moon"),
            alt: "Close-up of the moon-phase key: interference values from 0 at new moon through 1–6, 7–12 and 13–18 to 25 at full moon",
            caption: "Moon-phase key",
          },
        ]}
      />

      <Overview
        items={[
          {
            label: "Key",
            title: "Zenithal Hourly Rate (ZHR)",
            body: <p>The estimated number of meteors visible per hour under optimal dark-sky conditions.</p>,
          },
          {
            label: "Key",
            title: "Velocity (km/s)",
            body: <p>How fast meteors travel through Earth’s atmosphere. Faster meteors produce brighter streaks.</p>,
          },
          {
            label: "Key",
            title: "Moon interference",
            body: <p>A 0 to 25 scale for how much moonlight affects visibility. Higher means more interference.</p>,
          },
        ]}
      />
    </>
  );
}
