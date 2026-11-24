/*
 * What Is Under That Rug? Playing Cards: case study story.
 * Sources (~/Desktop/portfolio website/social campaign/): card designs and the deck mockup.
 */
import { Evidence, ImagePair, Overview } from "~/components/story";
import { CampaignLinks } from "~/components/story/CampaignLinks";
import type { StoryProps } from "~/content/types";

export default function RugCardsStory({ media }: StoryProps) {
  return (
    <>
      <ImagePair
        title="A deck of cards that asks you to lift the rug and look at what’s been hidden."
        intro="The cards highlight the protests in Saraçhane, Istanbul, after the detention of Mayor Ekrem İmamoğlu."
        ratio="4 / 3"
        wide
        images={[
          {
            src: media("deck"),
            alt: "Playing cards and their rug-patterned box floating against an ochre background",
          },
        ]}
      />

      <Overview
        items={[
          {
            label: "Themes",
            title: "Political apathy, student resistance and the cost of looking away.",
            body: (
              <p>Concise text and strong visuals make each card a small piece of information.</p>
            ),
          },
          {
            label: "Back",
            title: "Every card back is a rug.",
            evidence: <Evidence kind="decision" />,
            body: <p>Turning a card over is the same gesture as lifting the rug.</p>,
          },
          {
            label: "Faces",
            title: "Every face shows an object from the streets.",
            evidence: <Evidence kind="decision" />,
            body: <p>What was swept under the rug becomes the thing you hold in your hand.</p>,
          },
        ]}
      />

      <ImagePair
        title="Under each rug: a riot helmet, a spray can, a megaphone and a protest sign."
        images={[
          { src: media("king-helmet"), alt: "Card back with a rug pattern next to a King of Clubs showing a red riot helmet", caption: "King of Clubs" },
          { src: media("queen-spray-can"), alt: "Card back next to a Queen of Spades showing a spray paint can", caption: "Queen of Spades" },
          { src: media("ace-megaphone"), alt: "Card back next to an Ace of Hearts showing a megaphone", caption: "Ace of Hearts" },
          { src: media("jack-sign"), alt: "Card back next to a Jack of Diamonds showing a blank protest sign", caption: "Jack of Diamonds" },
        ]}
      />

      <CampaignLinks current="what-is-under-that-rug-playing-cards" />
    </>
  );
}
