/*
 * Pide & Co: case study story.
 * Sources (~/Desktop/portfolio website/Pide and co /): the presentation PDF,
 * storefront and menu photos, and the website screen recording.
 *
 * Story: the full website recording first (no storefront photo, at Iclal’s request), then why one system, then the
 * logo, print and website in turn, ending on the fact that it's live.
 * Research, testing and outcomes from the PDF were confirmed as real by Iclal
 * (2026-11-23).
 */
import { Evidence, ImagePair, List, Overview, Walkthrough } from "~/components/story";
import type { StoryProps } from "~/content/types";

export default function PideStory({ media, video }: StoryProps) {
  return (
    <>
      <Walkthrough
        wide
        autoplay
        tone="paper"
        label="The Pide & Co website, from the homepage to ordering"
        title="One identity for a restaurant, from the front window to the website."
        intro="Pide & Co needed a brand that looks the same in the street, at the table and online. Online ordering reuses the printed menu’s colors and categories, refined through usability tests on spacing, icons and menu grouping."
        video={video("website-full")}
      />

      <Overview
        items={[
          {
            label: "Problem",
            title: "When every touchpoint looks different, a restaurant is hard to trust.",
            evidence: <Evidence kind="finding" source="Brand audit and interviews with staff and customers" />,
            body: (
              <>
                <p>
                  I audited the signage, printed menus, website and interior graphics, and talked
                  to staff and customers. Three problems came up:
                </p>
                <List
                  items={["Confusing menus", "Weak brand cues", "A different experience at every touchpoint"]}
                />
              </>
            ),
          },
          {
            label: "Client",
            title: "A modern fast-casual spot for pide and lahmacun.",
            body: <p>The brand personality was set early: modern, warm and authentic.</p>,
          },
          {
            label: "Approach",
            title: "Design one system first, then apply it everywhere.",
            evidence: <Evidence kind="decision" />,
            body: (
              <p>
                Logo, typography, colors, icons and textures were defined once, so signage, menus
                and the website could all be built from the same parts and finally match.
              </p>
            ),
          },
        ]}
      />

      <ImagePair
        title="A rough, stamped wordmark keeps it warm and authentic. The tagline says what it is: Fast, Fresh, Grab & Go."
        ratio="3 / 2"
        images={[
          {
            src: media("logo-window"),
            alt: "Large Pide&Co logo in black and red with the Fast, Fresh, Grab & Go tagline on a window",
          },
        ]}
      />

      <ImagePair
        title="Every menu shares the same red and black, sized for how it’s read."
        intro="Table menus for ordering in, a folded brochure to take away. Each keeps prices and categories easy to scan."
        images={[
          {
            src: media("table-menus"),
            alt: "Three Pide & Co table menus on clipboards on a wooden table",
            caption: "Table menus",
          },
          {
            src: media("brochure-open"),
            alt: "Open folded Pide & Co brochure with photos of pide and a large MENU title",
            caption: "Folded brochure",
          },
        ]}
      />

      <ImagePair
        title="Inside, food photos and bold category headers lead the eye to the signature dishes."
        images={[
          {
            src: media("brochure-inside"),
            alt: "Inside of the brochure listing lahmacun deals, pide and appetizers with prices",
            caption: "Brochure inside",
          },
          {
            src: media("brochures-fan"),
            alt: "A fanned stack of Pide & Co brochures",
            caption: "Printed run",
          },
        ]}
      />

      <Overview
        items={[
          {
            label: "Outcome",
            title: "Customers noticed: the brand felt more memorable and more professional.",
            evidence: <Evidence kind="finding" source="Customer and restaurant feedback" />,
            body: (
              <List
                items={[
                  "Customers reported stronger brand recall and a more professional feel",
                  "Ordering became more intuitive, with less friction and more completed orders",
                  "The restaurant saw a more consistent experience across touchpoints",
                ]}
              />
            ),
          },
          {
            label: "Status",
            title: "Live and in use by the restaurant.",
            body: (
              <p>
                The identity runs across the storefront, printed menus, the website and social
                media. I handed off a design system with guidelines and source files so the brand
                can grow without losing consistency.
              </p>
            ),
          },
        ]}
      />
    </>
  );
}
