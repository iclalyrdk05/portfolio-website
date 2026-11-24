import { type RouteConfig, index, layout, route } from "@react-router/dev/routes";

export default [
  layout("routes/site-layout.tsx", [
    index("routes/home.tsx"),
    route("work", "routes/work.tsx"),
    route("work/:slug", "routes/case-study.tsx"),
    route("about", "routes/about.tsx"),
    route("*", "routes/not-found.tsx"),
  ]),
] satisfies RouteConfig;
