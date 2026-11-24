import {
  isRouteErrorResponse,
  Links,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration,
} from "react-router";
import { MotionConfig } from "motion/react";
import type { Route } from "./+types/root";

import "@fontsource/instrument-serif/400.css";
import "@fontsource/instrument-serif/400-italic.css";
import "@fontsource-variable/instrument-sans";
import "@fontsource-variable/instrument-sans/wght-italic.css";
import "./styles/global.css";

export function Layout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="theme-color" content="#f6f4ee" />
        <link rel="icon" href="/favicon.svg" type="image/svg+xml" />
        <Meta />
        <Links />
      </head>
      <body>
        {children}
        <ScrollRestoration />
        <Scripts />
      </body>
    </html>
  );
}

export default function App() {
  return (
    // Animations follow the visitor's "reduce motion" setting.
    <MotionConfig reducedMotion="user">
      <Outlet />
    </MotionConfig>
  );
}

export function ErrorBoundary({ error }: Route.ErrorBoundaryProps) {
  const notFound = isRouteErrorResponse(error) && error.status === 404;
  return (
    <main className="container" style={{ paddingBlock: "20vh" }}>
      <h1 className="display" style={{ fontSize: "var(--text-xl)" }}>
        {notFound ? "This page doesn’t exist." : "Something went wrong."}
      </h1>
      <p style={{ marginTop: "1.5rem" }}>
        <a href="/" style={{ textDecoration: "underline" }}>
          Back to the home page
        </a>
      </p>
    </main>
  );
}
