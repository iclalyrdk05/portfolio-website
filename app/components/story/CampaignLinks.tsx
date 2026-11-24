import { Link } from "react-router";
import { Overview } from "./index";

/** Links between the three "What Is Under That Rug?" projects. Leaves out the current one. */
const parts = [
  { slug: "what-is-under-that-rug-social-campaign", title: "Social campaign", body: "Billboard, Instagram posts, website and film." },
  { slug: "what-is-under-that-rug-poster", title: "Poster", body: "The campaign’s central poster." },
  { slug: "what-is-under-that-rug-playing-cards", title: "Playing cards", body: "A deck of protest objects." },
];

export function CampaignLinks({ current }: { current: string }) {
  return (
    <Overview
      items={parts
        .filter((p) => p.slug !== current)
        .map((p) => ({
          label: "Same campaign",
          title: (
            <Link to={`/work/${p.slug}`} style={{ textDecoration: "underline", textUnderlineOffset: "0.15em" }}>
              {p.title} →
            </Link>
          ),
          body: <p>{p.body}</p>,
        }))}
    />
  );
}
