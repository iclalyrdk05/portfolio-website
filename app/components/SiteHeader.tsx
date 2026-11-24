import { useEffect, useState } from "react";
import { Link, NavLink, useLocation } from "react-router";
import { AnimatePresence, motion } from "motion/react";
import { site } from "~/content/site";
import styles from "./SiteHeader.module.css";

const nav = [
  { to: "/work", label: "Work" },
  { to: "/about", label: "About" },
];

export function SiteHeader() {
  const [open, setOpen] = useState(false);
  const location = useLocation();

  // Close the mobile menu after navigating.
  useEffect(() => setOpen(false), [location.pathname]);

  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && setOpen(false);
    document.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <header className={styles.header}>
      <div className={`container ${styles.bar}`}>
        <Link to="/" className={styles.wordmark} aria-label={`${site.name}, home`}>
          {site.name}
        </Link>

        <nav className={styles.nav} aria-label="Main">
          {nav.map((item) => (
            <NavLink
              key={item.to}
              to={item.to}
              className={({ isActive }) => `${styles.link} ${isActive ? styles.active : ""}`}
            >
              {item.label}
            </NavLink>
          ))}
          <a className={styles.link} href={site.linkedin} target="_blank" rel="noreferrer">
            LinkedIn<span aria-hidden="true"> ↗</span>
          </a>
          <a className={styles.link} href={`mailto:${site.email}`}>
            Email
          </a>
        </nav>

        <button
          type="button"
          className={styles.toggle}
          aria-expanded={open}
          aria-controls="mobile-menu"
          onClick={() => setOpen((v) => !v)}
        >
          <span className="visually-hidden">{open ? "Close menu" : "Open menu"}</span>
          <span aria-hidden="true">[</span>
          <motion.span
            aria-hidden="true"
            className={styles.plus}
            animate={{ rotate: open ? 45 : 0 }}
            transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
          >
            +
          </motion.span>
          <span aria-hidden="true">]</span>
        </button>
      </div>

      <AnimatePresence>
        {open && (
          <motion.div
            id="mobile-menu"
            className={styles.sheet}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
          >
            <nav className="container" aria-label="Mobile">
              <ul className={styles.sheetList}>
                {[{ to: "/", label: "Home" }, ...nav].map((item, i) => (
                  <motion.li
                    key={item.to}
                    initial={{ opacity: 0, y: 16 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.05 + i * 0.05, duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
                  >
                    <Link to={item.to} className={`display ${styles.sheetLink}`}>
                      {item.label}
                    </Link>
                  </motion.li>
                ))}
              </ul>
              <div className={styles.sheetMeta}>
                <a href={`mailto:${site.email}`}>{site.email}</a>
                <a href={site.linkedin} target="_blank" rel="noreferrer">
                  LinkedIn ↗
                </a>
              </div>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
