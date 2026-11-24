/*
 * What Is Under That Rug? Poster: case study story.
 * Sources (~/Desktop/portfolio website/social campaign/): the poster and a poster mockup.
 */
import { Evidence, ImagePair, Overview } from "~/components/story";
import { CampaignLinks } from "~/components/story/CampaignLinks";
import type { StoryProps } from "~/content/types";

export default function RugPosterStory({ media }: StoryProps) {
  return (
    <>
      <ImagePair
        title="A lifted rug reveals what’s been pushed out of sight."
        intro="The campaign’s central poster, addressing political apathy in Turkey."
        ratio="3 / 4"
        images={[
          {
            src: media("poster"),
            alt: "Poster: a patterned rug lifted over a line of riot police, with the title “What is under that rug?”",
          },
        ]}
      />

      <Overview
        items={[
          {
            label: "Message",
            title: "Silence is not neutrality. It’s complicity.",
            body: <p>Injustice and authoritarianism are pushed out of sight, like dust under a rug.</p>,
          },
          {
            label: "Image",
            title: "Layered visuals, strong contrast and symbolic imagery.",
            evidence: <Evidence kind="decision" />,
            body: <p>The rug is literally lifted to show what’s underneath.</p>,
          },
          {
            label: "Tone",
            title: "Heavy and raw on purpose.",
            evidence: <Evidence kind="decision" />,
            body: <p>The design reflects how urgent the message is.</p>,
          },
        ]}
      />

      <ImagePair
        title="In place, the poster reads from a distance: one image, one question."
        ratio="4 / 3"
        wide
        images={[
          {
            src: media("poster-mockup"),
            alt: "The poster lying on a concrete ledge in dramatic light",
          },
        ]}
      />

      <CampaignLinks current="what-is-under-that-rug-poster" />
    </>
  );
}
