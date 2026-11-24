/*
 * ALTROVE: case study story.
 * Sources (~/Desktop/portfolio website/altrove project/): the Prototype II deck (ALTROVE.pdf),
 * a screen recording of the working website and an iPad mockup (used as the cover).
 * Clips are cut from the recording. Activity levels and Moments in the prototype are simulated.
 */
import { Clips, Evidence, ImagePair, Overview, Walkthrough } from "~/components/story";
import type { StoryProps } from "~/content/types";

export default function AltroveStory({ media, video }: StoryProps) {
  return (
    <>
      <Walkthrough
        wide
        autoplay
        tone="dark"
        label="Switching neighborhoods"
        title="Pick a neighborhood, and the screen becomes a window onto its street."
        intro="Jordaan in Amsterdam, then Üsküdar in Istanbul: street-level footage with the local time, weather and activity along the bottom."
        video={video("places")}
      />

      <Overview
        items={[
          {
            label: "Problem",
            title: "Calls keep us close to people, not to places.",
            body: (
              <p>
                Living away from home means missing the small details: a familiar street, the sounds
                outside, the weather.
              </p>
            ),
          },
          {
            label: "Research",
            title: "Closeness takes three forms.",
            evidence: <Evidence kind="finding" source="10 interviews" />,
            body: (
              <p>
                Sensory connection, everyday presence and shared experiences. Each became one part of
                the website.
              </p>
            ),
          },
          {
            label: "Approach",
            title: "Something to have on, not something to use.",
            evidence: <Evidence kind="decision" />,
            body: (
              <p>
                Designed primarily for iPad, as an ambient window into another place while you work,
                study or relax.
              </p>
            ),
          },
        ]}
      />

      <Clips
        title="Each form of closeness became one part of the website."
        items={[
          {
            video: video("sound"),
            label: "Mixing local radio, street and weather sounds in Kadıköy",
            title: "Sensory connection",
            body: <p>Local radio, street sounds and weather audio, each with its own volume.</p>,
          },
          {
            video: video("moments"),
            label: "Reading and sharing Moments in Greenwich Village",
            title: "Everyday presence",
            body: <p>Short text and voice Moments from the street. They disappear after 24 hours.</p>,
          },
          {
            video: video("map"),
            label: "Moments pinned on a map of Istanbul, then switching to Amsterdam",
            title: "Moments on the map",
            body: <p>Every Moment shows where it was shared.</p>,
          },
          {
            video: video("visit"),
            label: "Opening a friend’s neighborhood from the Friends list",
            title: "Shared experiences",
            body: <p>Visit opens the street a friend is on, with a way back.</p>,
          },
        ]}
      />

      <ImagePair
        title="Everyday conditions are one tap away from the bottom bar."
        intro="The time difference from where you are, and the weather down to the next few hours."
        ratio="1704 / 1110"
        images={[
          { src: media("time"), alt: "Time difference panel: Greenwich Village and My Location both at 11:55 PM, with reference location options", caption: "Time difference" },
          { src: media("weather"), alt: "Weather panel: 7°C and overcast, with humidity, wind, pressure, visibility and the next hours", caption: "Weather" },
        ]}
      />

      <Walkthrough
        wide
        tone="deep"
        label="Full walkthrough, with sound"
        title="The whole prototype, from New York to Istanbul and Amsterdam and back."
        intro="Two minutes, with sound on. Activity levels and Moments are simulated for the demo."
        video={video("full")}
      />
    </>
  );
}
