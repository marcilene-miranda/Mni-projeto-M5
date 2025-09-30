import React from "react";
import { FaGithub } from "react-icons/fa";
import styles from "./Footer.module.css";

export default function Footer() {
  return (
    <footer className={styles.footer} id="contato">
      <div className={styles.footerContent}>
        <p className={styles.footerText}>
          Mais que desenvolver, construo pontes entre o digital e o humano.
        </p>

        <div className={styles.socialLinks}>
          <a
            href="https://github.com/marcilene-miranda"
            target="_blank"
            rel="noopener noreferrer"
            className={styles.socialLink}
          >
            <FaGithub className={styles.socialIcon} />
            GitHub
          </a>
        </div>

        <p className={styles.footerNote}>© 2025 Marcilene Miranda</p>
      </div>
    </footer>
  );
}
