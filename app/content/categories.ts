/** Categories, in the order the filters appear. The key is used in URLs (/work?category=ux). */
export const categories = {
  ux: { label: "UX/UI & Digital Product Design", short: "UX/UI & Product" },
  editorial: { label: "Publications & Editorial", short: "Editorial" },
  brand: { label: "Brand Design", short: "Brand" },
} as const;
