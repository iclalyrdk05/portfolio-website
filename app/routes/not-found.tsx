import { Link } from "react-router";
import styles from "./page.module.css";

export default function NotFound() {
  return (
    <div className={`container ${styles.page}`}>
      <h1 className={`display ${styles.title}`}>Page not found</h1>
      <p className={styles.lede}>
        This page may have moved. <Link to="/work" style={{ textDecoration: "underline" }}>See all work</Link>.
      </p>
    </div>
  );
}
