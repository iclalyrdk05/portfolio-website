/*
 * SaySo: case study story.
 * Sources: the user's case study draft (pasted in chat, 2026-11-24) and the prototype screen
 * recording (~/Desktop/portfolio website/SaySo.mov). Clips are cut from the recording and
 * cropped to the phone. The user tested the working prototype with users over several rounds
 * (told in chat, 2026-11-24); no counts or quotes were given, so none are shown.
 */
import { Evidence, Overview, Pillars, Screens, Section, Walkthrough } from "~/components/story";
import type { StoryProps } from "~/content/types";

export default function SaySoStory({ media, video }: StoryProps) {
  return (
    <>
      <Screens
        device
        label="SaySo at a glance"
        title="Describe what you need once, and get a plan with the right local helpers."
        intro="One sentence becomes tasks, details and ready-to-book packages of local helpers."
        stagger
        items={[
          { src: media("still-request"), alt: "Home screen with a typed request about laundry, dinner for six and organizing the living room", caption: "Say it" },
          { src: media("still-packages"), alt: "Choose a package screen showing a Two helpers package with its tasks and hours", caption: "See your options" },
          { src: media("still-pay"), alt: "Review and pay summary with package, date, address, helpers and price breakdown", caption: "Book it" },
        ]}
      />

      <Overview
        items={[
          {
            label: "Problem",
            title: "A busy week is one problem, but apps make you book it as five.",
            body: (
              <p>
                Real needs come bundled: “clean the house by tomorrow night, and I need dinner for
                six on Saturday.” Service apps are built around one service or one provider.
              </p>
            ),
          },
          {
            label: "Research",
            title: "Every app I studied starts with a category or a person, never the need.",
            evidence: <Evidence kind="finding" source="Competitive review: Taskrabbit, Thumbtack, Booksy" />,
            body: (
              <p>
                Taskrabbit is good at choosing, Thumbtack at clarifying a need, Booksy at identity and
                real-time availability. All three ask you to pick a service or a provider first.
              </p>
            ),
          },
          {
            label: "Research",
            title: "Trust is decided on the profile, and people want to find that person again.",
            evidence: <Evidence kind="finding" source="Earlier Taskrabbit study" />,
            body: (
              <p>
                It’s hard to return to a helper you liked, letting someone into your home needs clear
                access options, and where the service happens depends on the service.
              </p>
            ),
          },
        ]}
      />

      <Section
        title="So the design starts from the sentence, not the category."
        evidence={<Evidence kind="decision" />}
      >
        <p>
          Thumbtack’s “clarify the need”, Booksy’s clear identity and Taskrabbit’s comparison, all
          behind one plain-language request.
        </p>
      </Section>
      <Pillars
        items={[
          { title: "Say it once", body: "Everything the app can read from the request, it fills in." },
          { title: "Ask only what changes the plan", body: "At most three required questions per task." },
          { title: "Show the shape of the help", body: "One helper, two, or a small team, not a list of people." },
          { title: "Explain every “no”", body: "An unavailable option always says why." },
        ]}
      />

      <Screens
        device
        label="From request to confirmed details"
        tone="deep"
        title="One box understands the whole request, and you only confirm what it filled in."
        intro="A request can hold several tasks, dates like “by 21st November”, quantities like “cook for 6” and small typos. Tasks that still need an answer show a small count; finished ones show a check."
        items={[
          { video: video("request"), alt: "Typing a multi-task request into the single text box on the home screen", caption: "One box" },
          { video: video("confirm"), alt: "Confirm details pre-filled from the request, with one clarifying choice per open question", caption: "We filled this in" },
        ]}
      />

      <Screens
        device
        label="Choosing a package"
        title="Packages show the shape of the help, and explain themselves."
        evidence={<Evidence kind="decision" />}
        intro="Up to three packages built from task hours and helper skills. A bigger team only appears if it finishes sooner, one is marked Recommended, and any helper can be swapped for another match."
        items={[
          { video: video("packages"), alt: "Package carousel with One helper, Two helpers and Multiple helpers cards", caption: "Packages" },
          { video: video("profile"), alt: "A helper profile with About, Availability, Work and Reviews tabs", caption: "Helper profile" },
          { video: video("swap"), alt: "Change helpers sheet: swapping one helper in a package for another match", caption: "Swap a helper" },
        ]}
      />

      <Screens
        device
        label="Paying and managing a booking"
        tone="dark"
        title="Paying takes one glance, and after booking the task stays easy to manage."
        intro="Review and pay only asks for a decision. Tasks lists upcoming and past bookings, which can be rescheduled, have access details changed, or be cancelled."
        items={[
          { video: video("pay"), alt: "Review and pay summary, then the You’re all set confirmation", caption: "Review and pay" },
          { video: video("tasks"), alt: "Tasks tab with upcoming bookings and a booking’s details", caption: "Tasks" },
          { video: video("manage"), alt: "Booking details with Add to calendar and Manage booking", caption: "Manage booking" },
        ]}
      />

      <Screens
        device
        label="Finding helpers again"
        title="Finding someone again is built in."
        intro="Browse by category, search by name or skill, and save helpers. Cards show the helper’s work, not their portrait. In Saved, compare two helpers side by side and choose one."
        items={[
          { video: video("explore"), alt: "Explore helpers: filtering by category, with cards showing photos of each helper’s work", caption: "Explore" },
          { video: video("compare"), alt: "Saved helpers: adding two to compare, then the Compare sheet with Choose buttons", caption: "Save and compare" },
        ]}
      />

      <Section
        title="A working prototype showed me what static screens hid."
        layout="left"
        evidence={<Evidence kind="finding" source="Several rounds of user testing" />}
      >
        <p>
          Designed in Figma, then built as a working React and TypeScript app with Claude Code, so
          any sentence makes real tasks and packages. Tested with users over several rounds.
        </p>
      </Section>
      <Pillars
        items={[
          { title: "No dead ends", body: "At least two packages stay available when the work can be split." },
          { title: "Reads real sentences", body: "Dates like “by 21st November” and typos like “cookign” now work." },
          { title: "Less repetition", body: "Notes that repeated what the rows showed are gone." },
          { title: "One button system", body: "Plum pill for actions, circles for icons, links for details." },
        ]}
      />

      <Walkthrough
        device
        side
        label="Full prototype walkthrough"
        video={video("full")}
        title="The full flow, from one sentence to a managed booking."
        intro="The working prototype, start to finish."
      />
    </>
  );
}
