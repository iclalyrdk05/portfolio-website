/*
 * Developing Patience: case study story.
 * Sources (~/Desktop/portfolio website/patience project total/): "Developing Patience.pdf",
 * book spread photos, YouTube ad stills and the Figma prototype screen recording.
 *
 * Story: the book's three-stage reveal first (the core idea), then the idea in
 * print and digital, then the ads in a realistic YouTube prototype.
 */
import { Evidence, ImagePair, Overview, Walkthrough } from "~/components/story";
import type { StoryProps } from "~/content/types";

export default function PatienceStory({ media, video }: StoryProps) {
  return (
    <>
      <ImagePair
        title="The book makes you wait for its photographs, the way film makes you wait for an image."
        intro="Like developing analog film, the photographs appear gradually, and only fully at the end."
        images={[
          {
            src: media("spread-text"),
            alt: "Open spread with only a few lines of pale text and no images",
            caption: "01 Reading without seeing: text-only spreads build anticipation",
          },
          {
            src: media("spread-developing"),
            alt: "Spread where a dark, blurred black-and-white photograph begins to emerge",
            caption: "02 The developing process: photographs start to emerge",
          },
          {
            src: media("spread-reveal"),
            alt: "Spread with two sharp black-and-white photographs of people in motion",
            caption: "03 The final reveal: the developed film images",
          },
        ]}
      />

      <Overview
        items={[
          {
            label: "Idea",
            title: "Waiting can be an experience, not just a delay.",
            body: (
              <p>
                The book explores waiting through film photography, with reflections on patience
                from renowned photographers.
              </p>
            ),
          },
          {
            label: "In print",
            title: "Absence first, image last.",
            evidence: <Evidence kind="decision" />,
            body: (
              <p>
                Minimal typographic spreads come first, so the reader navigates text alone. The
                photographs are the reward for turning the pages.
              </p>
            ),
          },
          {
            label: "In digital",
            title: "Put patience where waiting feels most frustrating: unskippable ads.",
            evidence: <Evidence kind="decision" />,
            body: (
              <p>
                Three short animations turn photographers’ reflections into moving typography and
                run as unskippable YouTube ads.
              </p>
            ),
          },
        ]}
      />

      <Walkthrough
        wide
        autoplay
        tone="deep"
        label="An ad playing in the YouTube prototype"
        title="Each ad turns a photographer’s words on patience into moving type and images."
        intro="Sebastião Salgado, Ara Güler and Josef Koudelka. A Figma prototype places the ads in a realistic YouTube interface."
        video={video("ad-in-youtube")}
      />

      <ImagePair
        title="The ad is titled “Don’t skip this ad” and invites viewers to slow down and explore."
        intro="It links to a Slow Light Archive, so the wait leads somewhere."
        ratio="16 / 9"
        images={[
          {
            src: media("ad-salgado"),
            alt: "YouTube video page playing the Sebastião Salgado ad, with the ad title “Don’t Skip This Ad” and a Start Exploring button",
            caption: "Sebastião Salgado",
          },
          {
            src: media("ad-guler"),
            alt: "YouTube video page playing the Ara Güler ad with a collage of black-and-white photographs",
            caption: "Ara Güler",
          },
        ]}
      />

      <Walkthrough
        wide
        label="Full prototype walkthrough"
        title="All three ads in the prototype, start to finish."
        video={video("prototype-full")}
      />
    </>
  );
}
