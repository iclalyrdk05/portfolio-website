import { defineProject } from "~/content/types";

export default defineProject({
  title: "SaySo",
  tagline: "Book local help in plain words",
  categories: ["ux"],
  type: "UX/UI Design · Mobile App Concept",
  description:
    "SaySo is a mobile booking concept for everyday services like cleaning, cooking, laundry, tailoring and beauty. You write a request in plain words, and the app turns it into tasks, details and ready-to-book packages of one or more local helpers.",
  status: "published",
  order: 1,
  coverAlt: "Two phones showing SaySo: a plain-language request on the home screen and the Choose a package screen with a Two helpers plan",
  facts: [
    { label: "Platform", value: "iOS app concept" },
    { label: "Built with", value: "Figma, React, TypeScript, Claude Code, Vercel" },
    { label: "Research", value: "Competitive review of Taskrabbit, Thumbtack and Booksy" },
    { label: "Testing", value: "Several rounds of user testing on the working prototype" },
  ],
});
