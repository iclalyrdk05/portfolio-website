/*
 * Abroadly: case study story.
 * Source: Abroadly.pdf (Fall 2025 presentation) and the app screens.
 * Structure: screens first, then the problem and approach in one short overview,
 * then each key flow as a titled band. Research findings are only what the
 * presentation states; anything marked "assumption" hasn't been tested yet.
 */
import { Evidence, Feature, List, Overview, Screens } from "~/components/story";
import type { StoryProps } from "~/content/types";

export default function AbroadlyStory({ media }: StoryProps) {
  return (
    <>
      <Screens
        label="The app at a glance"
        title="One app for answers from students who’ve been there."
        intro="Ask questions, join groups around a city or interest, save places other students recommend, and get quick answers from an AI assistant."
        stagger
        items={[
          {
            src: media("qa-threads"),
            alt: "Q&A feed with questions like “Flying or train from Rome to Paris?” and “Best SIM card for Italy?”",
            caption: "Q&A threads",
          },
          {
            src: media("communities"),
            alt: "List of community groups such as Paris Food Explorers, Study Abroad Safety and Barcelona Housing Help",
            caption: "Community groups",
          },
          {
            src: media("lists"),
            alt: "Student-created lists organized by city, such as Rome Study-Friendly Spots and Paris Vintage Shops",
            caption: "Student-created lists",
          },
          {
            src: media("ai-answer"),
            alt: "AI assistant answering that Madrid is generally safe at night if students stay in busy, well-lit areas",
            caption: "AI assistant",
          },
        ]}
      />

      <Overview
        items={[
          {
            label: "Problem",
            title: "Students don’t lack information. They lack a source they can trust.",
            evidence: <Evidence kind="finding" source="5 student interviews" />,
            body: (
              <>
                <p>
                  Students bounce between TikTok, Reddit, school websites and friends. Three
                  challenges came up:
                </p>
                <List
                  items={[
                    "Scattered and inconsistent information",
                    "Safety worries",
                    "Hard to find trustworthy peer advice",
                  ]}
                />
              </>
            ),
          },
          {
            label: "Question",
            title: "How might one platform help students feel informed, safe and supported?",
            body: (
              <p>
                Designed for students aged 18 to 25 preparing for a semester in Europe: excited,
                but stressed by unclear information and safety concerns.
              </p>
            ),
          },
          {
            label: "Approach",
            title: "Build everything around trust.",
            evidence: <Evidence kind="decision" />,
            body: (
              <List
                items={[
                  "Verified information: programs, costs, safety",
                  "Verified community: real students from real schools",
                  "Reliable guidance: fast support through an AI assistant",
                ]}
              />
            ),
          },
        ]}
      />

      <Screens
        label="Joining a verified group"
        title="Only verified students can join a group, so advice comes from people in the same situation."
        evidence={<Evidence kind="decision" />}
        intro="A quick student ID check, then straight into the group chat."
        numbered
        items={[
          {
            src: media("group-page"),
            alt: "Europe Budget Travelers group page with 23 members, a description and a Join button",
            caption: "Find a group",
          },
          {
            src: media("id-scan"),
            alt: "Camera view asking the student to fit the back of their ID inside a frame",
            caption: "Scan your student ID",
          },
          {
            src: media("id-verified"),
            alt: "Identity Verified confirmation screen with a shield illustration and a Join the Group button",
            caption: "Get verified",
          },
          {
            src: media("group-chat"),
            alt: "Group chat where members welcome a new student and trade tips on cheap travel",
            caption: "Join the conversation",
          },
        ]}
      />

      <Screens
        label="Asking the AI assistant"
        tone="dark"
        title="Some questions can’t wait for a reply. The assistant answers right away."
        evidence={<Evidence kind="decision" />}
        intro="For questions like whether Madrid is safe at night, without waiting for someone in a group to be online."
        numbered
        items={[
          {
            src: media("ai-ask"),
            alt: "AI assistant screen with the question “Hi! Is Madrid safe at night for students?” being typed",
            caption: "Ask anything",
          },
          {
            src: media("ai-answer"),
            alt: "AI assistant answering that Madrid is generally safe at night if students stay in busy, well-lit areas",
            caption: "Get a direct answer",
          },
        ]}
      />

      <Feature
        flip
        title="Friend requests show city, school and semester, so connections start with context."
        evidence={<Evidence kind="decision" />}
        screen={{
          src: media("friends"),
          alt: "Friends screen with a grid of friends and two pending requests showing each student’s city, school and semester",
        }}
      >
        <p>“Rome, John Cabot, Spring 2026” is enough to know if you’ll overlap.</p>
      </Feature>

      <Overview
        items={[
          {
            label: "Next",
            title: "Test the trust model with students.",
            evidence: <Evidence kind="assumption" />,
            body: (
              <List
                items={[
                  "Does verification make peer answers feel more reliable?",
                  "Will students trust the AI assistant with safety questions?",
                  "Does having Q&A, groups and lists in one place reduce app-hopping?",
                ]}
              />
            ),
          },
        ]}
      />
    </>
  );
}
