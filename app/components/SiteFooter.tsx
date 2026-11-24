import { site } from "~/content/site";
import styles from "./SiteFooter.module.css";

// Email and LinkedIn live in the header on every page, so the footer stays minimal.
export function SiteFooter() {
  return (
    <footer className={styles.footer}>
      <div className="container">
        <p>
          © {new Date().getFullYear()} {site.name}
        </p>
      </div>
    </footer>
  );
}
