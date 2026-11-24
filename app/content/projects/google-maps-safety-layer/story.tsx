/*
 * Google Maps Safety Layer: case study story.
 * Sources: "safety layer presentation.pdf" and the prototype screen recording
 * in ~/Desktop/portfolio website/google maps project/.
 *
 * Story: the switch first (visual), then the three pain points from research,
 * then one design answer per pain point, then test results and the full prototype.
 * Research and test results were confirmed as real by Iclal (2026-11-22).
 * The clips skip the "Trip options" screen, which still has placeholder text.
 */
import { Evidence, Feature, List, Overview, Screens, Stats, Walkthrough } from "~/components/story";
import type { StoryProps } from "~/content/types";

export default function GoogleMapsStory({ media, video }: StoryProps) {
  return (
    <>
      <Screens
        label="Switching Safety Layer on"
        title="One switch changes what the map optimizes for: not only speed, but safety."
        intro="Turning on Safety Layer shifts Google Maps to a warm yellow palette and highlights a safer walking route. Everything else works the way people already know."
        items={[
          {
            src: media("route-standard"),
            alt: "Standard Google Maps walking directions in the usual teal palette",
            caption: "Standard route",
          },
          {
            video: video("safety-switch"),
            alt: "Prototype clip: the route screen switches from teal to yellow as Safety Layer turns on",
            caption: "Switching Safety Layer on",
          },
        ]}
      />

      <Overview
        items={[
          {
            label: "Problem",
            title: "Map apps pick routes for speed, not for how safe they feel.",
            evidence: <Evidence kind="finding" source="User interviews and a competitive audit" />,
            body: (
              <>
                <p>
                  I asked people about times they felt unsafe walking or commuting, and compared
                  what map and safety apps offer today. Three pain points came up:
                </p>
                <List
                  items={[
                    "Getting help means leaving the map",
                    "No way to see how safe a route is",
                    "Emergency tools are hard to reach quickly",
                  ]}
                />
              </>
            ),
          },
          {
            label: "For",
            title: "People who walk alone, late, or somewhere new.",
            body: (
              <p>
                Women, solo commuters, late-night travelers and students in unfamiliar areas.
              </p>
            ),
          },
          {
            label: "Approach",
            title: "A mode inside Google Maps, not another safety app.",
            evidence: <Evidence kind="decision" />,
            body: (
              <p>
                Answers the first pain point: people already navigate with Maps, so safety lives
                there and nobody has to switch apps in a stressful moment. It follows Google’s
                design language so it feels native.
              </p>
            ),
          },
        ]}
      />

      <Feature
        title="Safer routes are favored, even when they take a few minutes longer."
        evidence={<Evidence kind="decision" />}
        screen={{
          src: media("safe-route"),
          alt: "Safety Layer route page with a yellow safer walking route and police stations marked along the way",
        }}
      >
        <p>
          Answers the second pain point. The safe route page marks police stations along the way,
          so people can see why a route is safer before they choose it.
        </p>
      </Feature>

      <Screens
        label="Tools on the map during navigation"
        title="While walking, the two most urgent tools stay on the map."
        evidence={<Evidence kind="decision" />}
        intro="Answers the third pain point. No menu to open: the flashlight turns on with one tap, and the call button opens suggested emergency contacts and 911."
        items={[
          {
            src: media("flashlight"),
            alt: "Navigation screen with the flashlight button turned on, shown in yellow",
            caption: "Flashlight",
            note: "One tap",
          },
          {
            src: media("emergency-call"),
            alt: "Emergency contacts panel with suggested contacts and a Call 911 option",
            caption: "Emergency call",
            note: "Suggested contacts and 911",
          },
          {
            video: video("nav-tools"),
            alt: "Prototype clip: walking navigation, then opening the emergency contacts panel",
            caption: "In the prototype",
          },
        ]}
      />

      <Screens
        label="Tools in the bottom sheet"
        tone="dark"
        title="Everything else is one swipe away, so the map stays clear."
        evidence={<Evidence kind="decision" />}
        intro="Swiping up shows emergency stations that are open now and a loud siren to alert people nearby."
        items={[
          {
            src: media("bottom-sheet"),
            alt: "Bottom sheet listing Open Emergency Stations, Share trip progress and Loud Siren",
            caption: "Bottom sheet",
          },
          {
            src: media("emergency-stations"),
            alt: "List of open emergency stations nearby, such as hospitals, with directions and call buttons",
            caption: "Open emergency stations",
            note: "Hospitals, police, fire departments",
          },
          {
            src: media("loud-siren"),
            alt: "Navigation screen tinted red while the loud siren is active",
            caption: "Loud siren",
          },
          {
            video: video("emergency-sheet"),
            alt: "Prototype clip: opening the bottom sheet, browsing open emergency stations and turning on the siren",
            caption: "In the prototype",
          },
        ]}
      />

      <Stats
        title="In testing, people felt more confident and mostly chose the safer route, even when it was longer."
        evidence={<Evidence kind="finding" source="Prototype testing with target users" />}
        items={[
          { value: "80%", label: "of participants felt more confident using the map in safety mode" },
          { value: "~65%", label: "of the time, people chose the safer route even when it was about 5% longer" },
          { value: "10 → 2", label: "taps to reach an emergency tool, compared with existing apps" },
        ]}
      >
        <p>
          Earlier rounds of quick usability tests with 5 to 8 participants shaped the details:
          where the emergency button sits, how strong the overlay is, how icons are labeled, and
          when to suggest a safer route (“this route is slightly safer, +2 minutes”).
        </p>
        <p>In post-session surveys, participants named emotional comfort and a sense of control as the main gains.</p>
      </Stats>

      <Walkthrough
        tone="deep"
        side
        label="Full prototype walkthrough"
        video={video("full-flow")}
        title="The full flow, from searching a destination to sounding the siren."
        intro="The interactive prototype, start to finish."
      />

      <Overview
        items={[
          {
            label: "Next",
            title: "Make the safety data real.",
            body: (
              <List
                items={[
                  "Live safety data for scoring routes",
                  "Community reporting",
                  "Route personalization",
                  "An offline fallback when data isn’t available",
                  "Partnerships with public safety agencies or wearables",
                ]}
              />
            ),
          },
        ]}
      />
    </>
  );
}
