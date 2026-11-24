import { defineProject } from "~/content/types";

export default defineProject({
  title: "Music of Turkiye",
  tagline: "Turkey’s musical traditions",
  categories: ["editorial"],
  type: "Book Publication",
  description: "This book, titled Music of Turkey, reinterprets the Wikipedia entry through a designed publication format. The project focuses on typography and layout, combining text and imagery to explore Turkey’s diverse musical traditions and influential artists.",
  status: "published",
  coverAlt: "Someone reading the book on a sofa, its vinyl-record cover titled Genres of Türkiye",
  facts: [
    { label: "Medium", value: "Print" },
    { label: "Source", value: "Wikipedia entry “Music of Turkey”" },
  ],
  order: 7,
});
