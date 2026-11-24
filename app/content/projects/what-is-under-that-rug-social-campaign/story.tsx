/*
 * What Is Under That Rug? Social Campaign: case study story.
 * Sources (~/Desktop/portfolio website/social campaign/): billboard mockup, Instagram
 * posts, homepage design and the campaign film. The Instagram screenshots
 * (IMG_1838/1839) are not used because they show other people's usernames.
 */
import { Evidence, ImagePair, Overview, Walkthrough } from "~/components/story";
import { CampaignLinks } from "~/components/story/CampaignLinks";
import type { StoryProps } from "~/content/types";

export default function RugCampaignStory({ media, video }: StoryProps) {
  return (
    <>
      <ImagePair
        title="A campaign against political apathy that puts the question where nobody can avoid it."
        intro="The billboard brings “What is under that rug?” into public space."
        ratio="4 / 3"
        wide
        images={[
          {
            src: media("billboard"),
            alt: "Billboard reading “What is under that rug?” with a lifted rug at its edge, against a blue sky",
          },
        ]}
      />

      <Overview
        items={[
          {
            label: "Problem",
            title: "Silence about injustice isn’t neutral.",
            body: (
              <p>
                The campaign addresses political apathy in Turkey and asks people to confront what
                is being swept out of sight.
              </p>
            ),
          },
          {
            label: "Approach",
            title: "One message, carried through public space, social media and the web.",
            evidence: <Evidence kind="decision" />,
            body: (
              <p>
                The billboard makes silence impossible to ignore. Social posts reach younger
                audiences. The website gives them somewhere to go next.
              </p>
            ),
          },
          {
            label: "Voice",
            title: "Short commands: Lift it. Face it. Change it.",
            evidence: <Evidence kind="decision" />,
            body: <p>Bold visuals and concise language, written to start conversations.</p>,
          },
        ]}
      />

      <ImagePair
        title="On Instagram, the campaign moves from the question to the facts."
        intro="The first post shows only the rug. The second explains what is happening and asks people to show up."
        ratio="4 / 5"
        narrow
        images={[
          {
            src: media("post-lift-it"),
            alt: "Instagram post with a dark rug and the words “Lift it. It’s quiet on the surface. What’s being hidden underneath?”",
            caption: "Lift it.",
          },
          {
            src: media("post-face-it"),
            alt: "Instagram post titled “Face it. Change it.” with text about the detention of Ekrem İmamoğlu and the protests",
            caption: "Face it. Change it.",
          },
        ]}
      />

      <ImagePair
        title="The website is the hub: articles, events, community news and ways to support."
        intro="Including a shop for the campaign’s merch, like the playing card deck."
        ratio="1718 / 1739"
        images={[
          { src: media("homepage-1"), alt: "Top of the campaign homepage with the title, navigation and an introduction", caption: "Top" },
          { src: media("homepage-2"), alt: "Middle of the homepage with popular news and a merch gallery", caption: "Middle" },
          { src: media("homepage-3"), alt: "Bottom of the homepage with an event section and a newsletter sign-up", caption: "Bottom" },
        ]}
      />

      <Walkthrough
        wide
        label="Campaign film"
        title="The campaign film: a rug unrolls, then the facts."
        intro="Sound on."
        video={video("campaign-film")}
      />

      <CampaignLinks current="what-is-under-that-rug-social-campaign" />
    </>
  );
}
