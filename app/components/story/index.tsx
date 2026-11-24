/**
 * Building blocks for editorial case studies. A project's story.tsx arranges these
 * in whatever order and layout suits that project.
 */
import { useEffect, useRef, useState, type CSSProperties, type ReactNode } from "react";
import type { Picture as PictureData, VideoData } from "~/content/types";
import { Picture } from "../Picture";
import { Reveal } from "../Reveal";
import s from "./story.module.css";

/* ---------- Video ---------- */

/**
 * Short clips play muted on loop while on screen. With `controls`, the video waits for
 * the visitor to press play. Visitors who prefer reduced motion always get controls.
 */
export function Video({
  video,
  label,
  controls = false,
}: {
  video: VideoData;
  /** Describes what the video shows, for screen readers. */
  label: string;
  controls?: boolean;
}) {
  const ref = useRef<HTMLVideoElement>(null);
  const [reduced, setReduced] = useState(false);
  // A visitor who pauses a clip keeps it paused, even when it scrolls back into view.
  const [userPaused, setUserPaused] = useState(false);
  const autoplay = !controls && !reduced;

  useEffect(() => {
    setReduced(window.matchMedia("(prefers-reduced-motion: reduce)").matches);
  }, []);

  useEffect(() => {
    const el = ref.current;
    if (!el || !autoplay) return;
    const io = new IntersectionObserver(
      ([entry]) => {
        if (entry?.isIntersecting && !userPaused) el.play().catch(() => {});
        else el.pause();
      },
      { threshold: 0.4 },
    );
    io.observe(el);
    return () => io.disconnect();
  }, [autoplay, userPaused]);

  const toggle = () => {
    const el = ref.current;
    if (!el) return;
    if (el.paused) {
      setUserPaused(false);
      el.play().catch(() => {});
    } else {
      setUserPaused(true);
      el.pause();
    }
  };

  if (!autoplay) {
    return (
      <video
        ref={ref}
        className={s.video}
        src={video.src}
        poster={video.poster}
        aria-label={label}
        playsInline
        preload="none"
        controls
      />
    );
  }

  // Autoplaying clips: click (or Enter/Space) to pause and play again.
  return (
    <div
      className={s.videoToggle}
      role="button"
      tabIndex={0}
      aria-label={`${label}. ${userPaused ? "Play" : "Pause"} video`}
      aria-pressed={userPaused}
      onClick={toggle}
      onKeyDown={(e) => {
        if (e.key === "Enter" || e.key === " ") {
          e.preventDefault();
          toggle();
        }
      }}
    >
      <video
        ref={ref}
        className={s.video}
        src={video.src}
        poster={video.poster}
        muted
        loop
        playsInline
        preload="metadata"
        aria-hidden="true"
      />
      <span className={`${s.videoState} ${userPaused ? s.videoPaused : ""}`} aria-hidden="true">
        {userPaused ? "▶" : "❚❚"}
      </span>
    </div>
  );
}

/** A single video in a phone frame, centred on a band, with a title above. */
export function Walkthrough({
  video,
  label,
  title,
  intro,
  tone = "dark",
  wide = false,
  autoplay = false,
  evidence,
  device = false,
  side = false,
  deviceShape,
}: {
  video: VideoData;
  label: string;
  title: ReactNode;
  intro?: ReactNode;
  tone?: "paper" | "deep" | "dark";
  /** Landscape video (e.g. a website) in a browser-sized frame instead of a phone. */
  wide?: boolean;
  /** Play muted on loop while on screen, instead of waiting for play. */
  autoplay?: boolean;
  evidence?: ReactNode;
  /** A recording that includes the whole iPhone frame (see Screens). */
  device?: boolean;
  /** Title and intro on the left, the video larger on the right. */
  side?: boolean;
  /** For device recordings of a different phone: its width / height and corner radius. */
  deviceShape?: { ratio: string; radius: string };
}) {
  const shapeStyle = deviceShape
    ? ({ "--device-ratio": deviceShape.ratio, "--device-radius": deviceShape.radius } as CSSProperties)
    : undefined;
  if (side) {
    return (
      <section className={`${s.band} ${s[tone]} ${device ? s.device : ""}`} aria-label={label}>
        <div className={`container grid ${s.sideBySide}`}>
          <div className={s.sideText}>
            <h2 className={`display ${s.bandTitle}`}>{title}</h2>
            {(intro || evidence) && (
              <div className={s.bandIntro} style={{ marginTop: "1rem" }}>
                {evidence}
                {intro && <p>{intro}</p>}
              </div>
            )}
          </div>
          <Reveal className={s.sideMedia}>
            <div className={wide ? s.browser : s.phone} style={shapeStyle}>
              <Video video={video} label={label} controls={!autoplay} />
            </div>
          </Reveal>
        </div>
      </section>
    );
  }
  return (
    <section className={`${s.band} ${s[tone]} ${device ? s.device : ""}`} aria-label={label}>
      <div className={`container grid ${s.bandHead}`}>
        <h2 className={`display ${s.bandTitle}`}>{title}</h2>
        {(intro || evidence) && (
          <div className={s.bandIntro}>
            {evidence}
            {intro && <p>{intro}</p>}
          </div>
        )}
      </div>
      <Reveal className={`container ${s.walkthrough}`}>
        <div className={wide ? s.browser : s.phone} style={shapeStyle}>
          <Video video={video} label={label} controls={!autoplay} />
        </div>
      </Reveal>
    </section>
  );
}

/* ---------- Evidence: keeps research findings visibly separate from design calls ---------- */

const evidenceLabels = {
  finding: "Research finding",
  decision: "Design decision",
  assumption: "Assumption, not yet tested",
} as const;

const evidenceClass = {
  finding: s.evFinding,
  decision: s.evDecision,
  assumption: s.evAssumption,
};

export function Evidence({
  kind,
  source,
}: {
  kind: keyof typeof evidenceLabels;
  /** Where the finding comes from, e.g. "5 student interviews". */
  source?: string;
}) {
  return (
    <p className={`${s.evidence} ${evidenceClass[kind]}`}>
      <span className={s.evidenceMark} aria-hidden="true" />
      {evidenceLabels[kind]}
      {source && <span className={s.evidenceSource}> · {source}</span>}
    </p>
  );
}

/* ---------- Section: a takeaway headline + supporting text ---------- */

interface SectionProps {
  /** Small marker above the headline, e.g. "01". */
  marker?: string;
  /** The takeaway. Someone reading only these should get the whole story. */
  title: ReactNode;
  evidence?: ReactNode;
  children?: ReactNode;
  /** split: headline left, text right · stack: headline wide, text below and indented ·
      left: headline wide, text directly below it on the left */
  layout?: "split" | "stack" | "left";
  id?: string;
}

export function Section({ marker, title, evidence, children, layout = "split", id }: SectionProps) {
  return (
    <section id={id} className={`container grid ${s.section} ${s[layout]}`}>
      <Reveal className={s.head}>
        {marker && <span className={s.marker}>{marker}</span>}
        <h2 className={`display ${s.title}`}>{title}</h2>
      </Reveal>
      {(evidence || children) && (
        <Reveal className={s.body} delay={0.1}>
          {evidence}
          <div className={s.prose}>{children}</div>
        </Reveal>
      )}
    </section>
  );
}

/* ---------- Statement: one large typographic moment ---------- */

export function Statement({ label, children }: { label?: string; children: ReactNode }) {
  return (
    <section className={`container ${s.statement}`}>
      <Reveal>
        {label && <p className="label">{label}</p>}
        <blockquote className={`display ${s.statementText}`}>{children}</blockquote>
      </Reveal>
    </section>
  );
}

/* ---------- Findings: large numbered list ---------- */

export function Findings({ items }: { items: { title: string; body?: string }[] }) {
  return (
    <ol className={`container ${s.findings}`}>
      {items.map((item, i) => (
        <li key={item.title} className={s.finding}>
          <Reveal delay={i * 0.08} className={s.findingInner}>
            <span className={s.findingNum}>{String(i + 1).padStart(2, "0")}</span>
            <p className={`display ${s.findingTitle}`}>{item.title}</p>
            {item.body && <p className={s.findingBody}>{item.body}</p>}
          </Reveal>
        </li>
      ))}
    </ol>
  );
}

/* ---------- Pillars: a few principles side by side ---------- */

export function Pillars({ items }: { items: { title: string; body: string; href?: string }[] }) {
  return (
    <ol
      className={`container ${s.pillars}`}
      style={
        {
          "--pillar-cols-md": items.length === 4 ? 2 : Math.min(items.length, 3),
          "--pillar-cols-lg": Math.min(items.length, 4),
        } as CSSProperties
      }
    >
      {items.map((item, i) => (
        <li key={item.title}>
          <Reveal delay={i * 0.08} className={s.pillar}>
            <span className={s.findingNum}>{String(i + 1).padStart(2, "0")}</span>
            <p className={`display ${s.pillarTitle}`}>
              {item.href ? <a href={item.href}>{item.title}</a> : item.title}
            </p>
            <p className={s.pillarBody}>{item.body}</p>
          </Reveal>
        </li>
      ))}
    </ol>
  );
}

/* ---------- Screens: phone screens in a row, on a tinted band ---------- */

interface Screen {
  /** A still screen… */
  src?: PictureData;
  /** …or a short muted clip that plays when it scrolls into view. */
  video?: VideoData;
  alt: string;
  caption?: string;
  /** Extra detail under the caption. */
  note?: string;
}

export function Screens({
  items,
  tone = "deep",
  stagger = false,
  numbered = false,
  label,
  title,
  intro,
  evidence,
  device = false,
}: {
  items: Screen[];
  tone?: "paper" | "deep" | "dark";
  /** Offsets every other screen vertically for a looser, editorial rhythm. */
  stagger?: boolean;
  /** Shows 01, 02… before each caption, for step-by-step flows. */
  numbered?: boolean;
  /** Accessible name for the group, e.g. "Joining a group". */
  label: string;
  /** Optional takeaway headline shown above the screens, inside the band. */
  title?: ReactNode;
  /** One or two short sentences beside the headline. */
  intro?: ReactNode;
  evidence?: ReactNode;
  /** Clips recorded with the whole iPhone frame: shown at their own shape, corners rounded to the phone. */
  device?: boolean;
}) {
  return (
    <section className={`${s.band} ${s[tone]} ${device ? s.device : ""}`} aria-label={label}>
      {(title || intro) && (
        <div className={`container grid ${s.bandHead}`}>
          {title && <h2 className={`display ${s.bandTitle}`}>{title}</h2>}
          {(intro || evidence) && (
            <div className={s.bandIntro}>
              {evidence}
              {intro && <p>{intro}</p>}
            </div>
          )}
        </div>
      )}
      <ol
        className={`container ${s.screens} ${stagger ? s.stagger : ""}`}
        style={{ "--count": items.length } as CSSProperties}
      >
        {items.map((item, i) => (
          <li key={item.alt} className={s.screen}>
            <Reveal delay={i * 0.08}>
              <div className={s.phone}>
                {item.video ? (
                  <Video video={item.video} label={item.alt} />
                ) : (
                  item.src && (
                    <Picture picture={item.src} alt={item.alt} sizes="(min-width: 900px) 22vw, 60vw" />
                  )
                )}
              </div>
              {item.caption && (
                <p className={s.screenCaption}>
                  {numbered && <span className={s.step}>{String(i + 1).padStart(2, "0")}</span>}
                  {item.caption}
                </p>
              )}
              {item.note && <p className={s.screenNote}>{item.note}</p>}
            </Reveal>
          </li>
        ))}
      </ol>
    </section>
  );
}

/* ---------- Overview: the whole project in a few short columns ---------- */

export function Overview({
  items,
}: {
  items: { label: string; title: ReactNode; body?: ReactNode; evidence?: ReactNode }[];
}) {
  return (
    <section className={`container ${s.overview}`}>
      {items.map((item, i) => (
        <Reveal key={item.label} delay={i * 0.06} className={s.overviewItem}>
          <p className="label">{item.label}</p>
          <h2 className={`display ${s.overviewTitle}`}>{item.title}</h2>
          {item.evidence}
          {item.body && <div className={s.overviewBody}>{item.body}</div>}
        </Reveal>
      ))}
    </section>
  );
}

/* ---------- Feature: one screen beside its explanation ---------- */

export function Feature({
  screen,
  marker,
  title,
  evidence,
  children,
  flip = false,
}: {
  screen: Screen & { src: PictureData };
  marker?: string;
  title: ReactNode;
  evidence?: ReactNode;
  children?: ReactNode;
  /** Puts the screen on the left. */
  flip?: boolean;
}) {
  return (
    <section className={`container grid ${s.feature} ${flip ? s.flip : ""}`}>
      <Reveal className={s.featureText}>
        {marker && <span className={s.marker}>{marker}</span>}
        <h2 className={`display ${s.title}`}>{title}</h2>
        {evidence}
        <div className={s.prose}>{children}</div>
      </Reveal>
      <Reveal className={s.featureMedia} delay={0.1}>
        <div className={s.phone}>
          <Picture picture={screen.src} alt={screen.alt} sizes="(min-width: 900px) 30vw, 70vw" />
        </div>
        {screen.caption && <p className={s.screenCaption}>{screen.caption}</p>}
      </Reveal>
    </section>
  );
}

/* ---------- Figure: a single image, inset or full width ---------- */

export function Figure({
  src,
  alt,
  caption,
  size = "wide",
}: {
  src: PictureData;
  alt: string;
  caption?: string;
  size?: "full" | "wide" | "inset";
}) {
  return (
    <figure className={`${s.figure} ${s[size]}`}>
      <Reveal>
        <Picture picture={src} alt={alt} sizes={size === "inset" ? "(min-width: 900px) 60vw, 100vw" : "100vw"} />
        {caption && <figcaption className={`container ${s.figcaption}`}>{caption}</figcaption>}
      </Reveal>
    </figure>
  );
}

/* ---------- Checklist: short list, used for open questions / assumptions ---------- */

export function List({ items }: { items: string[] }) {
  return (
    <ul className={s.list}>
      {items.map((item) => (
        <li key={item}>{item}</li>
      ))}
    </ul>
  );
}

/* ---------- Stats: a few key results, large numbers with short labels ---------- */

export function Stats({
  title,
  evidence,
  items,
  children,
}: {
  title: ReactNode;
  evidence?: ReactNode;
  items: { value: string; label: string }[];
  /** Short supporting text under the numbers. */
  children?: ReactNode;
}) {
  return (
    <section className={`container ${s.stats}`}>
      <Reveal>
        <h2 className={`display ${s.statsTitle}`}>{title}</h2>
        {evidence}
      </Reveal>
      <ul className={s.statsList}>
        {items.map((item, i) => (
          <li key={item.label}>
            <Reveal delay={i * 0.08} className={s.stat}>
              <span className={`display ${s.statValue}`}>{item.value}</span>
              <span className={s.statLabel}>{item.label}</span>
            </Reveal>
          </li>
        ))}
      </ul>
      {children && <div className={s.statsBody}>{children}</div>}
    </section>
  );
}

/* ---------- ImagePair: two photos side by side with a short headline ---------- */

export function ImagePair({
  title,
  intro,
  images,
  ratio = "4 / 3",
  wide = false,
  narrow = false,
}: {
  title: ReactNode;
  intro?: ReactNode;
  /** One to four images (four become a 2×2 grid). A single image is shown smaller, centred. */
  /** `fit: "contain"` shows the whole image (e.g. a wide screenshot) instead of cropping it. */
  images: { src: PictureData; alt: string; caption?: string; fit?: "cover" | "contain" }[];
  /** Image shape, e.g. "4 / 3" (default) or "2 / 3" for a portrait photo. */
  ratio?: string;
  /** A single image shown larger, for wide pages like brand book spreads. */
  wide?: boolean;
  /** Keeps a row of tall images (e.g. posters) compact, so they never fill the screen. */
  narrow?: boolean;
}) {
  return (
    <section
      className={`container ${s.pair} ${images.length === 1 ? (wide ? s.pairWide : s.pairSingle) : ""} ${narrow ? s.pairNarrow : ""}`}
      style={{ "--pair-ratio": ratio, "--pair-cols": images.length === 4 ? 2 : Math.min(images.length, 3) } as CSSProperties}
    >
      <Reveal className={`grid ${s.bandHead}`}>
        <h2 className={`display ${s.bandTitle}`}>{title}</h2>
        {intro && (
          <div className={s.bandIntro}>
            <p>{intro}</p>
          </div>
        )}
      </Reveal>
      <div className={s.pairGrid}>
        {images.map((img, i) => (
          <Reveal key={img.alt} delay={i * 0.08}>
            <figure>
              <div className={`${s.pairMedia} ${img.fit === "contain" ? s.contain : ""}`}>
                <Picture picture={img.src} alt={img.alt} sizes="(min-width: 800px) 45vw, 100vw" />
              </div>
              {img.caption && <figcaption className={s.screenNote}>{img.caption}</figcaption>}
            </figure>
          </Reveal>
        ))}
      </div>
    </section>
  );
}

/* ---------- Clips: short website recordings side by side ---------- */

/**
 * Two to four landscape clips in a compact grid (four become 2×2), each with a short
 * caption. Only one clip plays at a time: when it ends, the next one starts, and the
 * others rest on their first frame. Clicking a clip plays it. Keeps the grid calm.
 */
export function Clips({
  title,
  intro,
  evidence,
  items,
}: {
  title: ReactNode;
  intro?: ReactNode;
  evidence?: ReactNode;
  items: { video: VideoData; label: string; title: string; body?: ReactNode }[];
}) {
  const gridRef = useRef<HTMLDivElement>(null);
  const videos = useRef<(HTMLVideoElement | null)[]>([]);
  const [active, setActive] = useState(0);
  const [visible, setVisible] = useState(false);
  const [reduced, setReduced] = useState(false);

  useEffect(() => {
    setReduced(window.matchMedia("(prefers-reduced-motion: reduce)").matches);
  }, []);

  useEffect(() => {
    const el = gridRef.current;
    if (!el) return;
    const io = new IntersectionObserver(([entry]) => setVisible(!!entry?.isIntersecting), {
      threshold: 0.25,
    });
    io.observe(el);
    return () => io.disconnect();
  }, []);

  useEffect(() => {
    if (reduced) return;
    videos.current.forEach((v, i) => {
      if (!v) return;
      if (i === active && visible) v.play().catch(() => {});
      else {
        v.pause();
        if (i !== active) v.currentTime = 0;
      }
    });
  }, [active, visible, reduced]);

  return (
    <section
      className={`container ${s.pair}`}
      style={{ "--pair-cols": items.length === 4 ? 2 : Math.min(items.length, 3) } as CSSProperties}
    >
      <Reveal className={`grid ${s.bandHead}`}>
        <h2 className={`display ${s.bandTitle}`}>{title}</h2>
        {(intro || evidence) && (
          <div className={s.bandIntro}>
            {evidence}
            {intro && <p>{intro}</p>}
          </div>
        )}
      </Reveal>
      <div ref={gridRef} className={`${s.pairGrid} ${s.clipsGrid}`}>
        {items.map((item, i) => (
          <Reveal key={item.label} delay={i * 0.08}>
            <figure className={`${s.clip} ${!reduced && i !== active ? s.clipResting : ""}`}>
              <div className={s.clipFrame}>
                <video
                  ref={(el) => {
                    videos.current[i] = el;
                  }}
                  className={s.video}
                  src={item.video.src}
                  poster={item.video.poster}
                  aria-label={item.label}
                  muted
                  playsInline
                  preload="metadata"
                  controls={reduced}
                  onEnded={() => setActive((i + 1) % items.length)}
                  onClick={() => setActive(i)}
                />
              </div>
              <figcaption className={s.clipCaption}>
                <strong>{item.title}</strong>
                {item.body}
              </figcaption>
            </figure>
          </Reveal>
        ))}
      </div>
    </section>
  );
}

/* ---------- Swatches: a color palette as real color chips ---------- */

export function Swatches({
  title,
  intro,
  evidence,
  groups,
}: {
  title: ReactNode;
  intro?: ReactNode;
  evidence?: ReactNode;
  /** e.g. [{ label: "Primary", colors: ["#95374C"] }, …] */
  groups: { label: string; colors: string[] }[];
}) {
  return (
    <section className={`container ${s.swatches}`}>
      <Reveal className={`grid ${s.bandHead}`}>
        <h2 className={`display ${s.bandTitle}`}>{title}</h2>
        {(intro || evidence) && (
          <div className={s.bandIntro}>
            {evidence}
            {intro && <p>{intro}</p>}
          </div>
        )}
      </Reveal>
      <div className={s.swatchGroups}>
        {groups.map((g, i) => (
          <Reveal key={g.label} delay={i * 0.06}>
            <p className="label">{g.label}</p>
            <ul className={s.swatchRow}>
              {g.colors.map((c) => (
                <li key={c}>
                  <span className={s.chip} style={{ background: c }} />
                  <span className={s.hex}>{c}</span>
                </li>
              ))}
            </ul>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
