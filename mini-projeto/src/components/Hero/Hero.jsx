import { useState } from "react";
import styles from "./Hero.module.css";

export default function Hero() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  function toggleModal() {
    setIsModalOpen(!isModalOpen);
  }

  return (
    <section className={styles.hero}>
      <div className={styles.content}>
        <p className={styles.subtitle}>OLÁ, EU SOU A 👋</p>
        <h1 className={styles.title}>
          Marcilene <br /> Aparecida de Miranda
        </h1>
        <h2 className={styles.role}>
          Desenvolvedora Front-End em formação
        </h2>
        <p className={styles.description}>
          Mais que desenvolver, construo pontes entre o digital e o humano. Quer que eu transforme suas ideias em realidade?
        </p>

        <div className={styles.buttons}>
          <button onClick={toggleModal} className={styles.primaryBtn}>
            Fale Comigo
          </button>
        </div>
      </div>

      <div className={styles.imageWrapper}>
        <img
          src="/eu.jpg"
          alt="Marcilene em uma selfie sorrindo"
          className={styles.image}
        />
      </div>

      {isModalOpen && (
        <div className={styles.modalOverlay}>
          <div className={styles.modal}>
            <h3>Entre em contato 💌</h3>
            <p>
              Email:{" "}
              <strong>marcilenreaparecidademiranda5@gmail.com</strong>
            </p>
            <button onClick={toggleModal} className={styles.closeBtn}>
              Fechar
            </button>
          </div>
        </div>
      )}
    </section>
  );
}
