import React from "react";
import ProjetoCard from "./ProjetoCard";
import styles from "./Projetos.module.css";

export default function Projetos() {
  const projetos = [
    {
      titulo: "Cadastro",
      descricao:
        "Mini-projeto do Módulo 3 do curso PdA, onde desenvolvi habilidades práticas em HTML, CSS e JavaScript, criando uma página funcional e estilizada para cadastro de usuários.",
      github: "https://github.com/marcilene-miranda/mini-projeto-M3.git",
      img: "projeto.png"
    }
  ];

  return (
    <section id="projetos" className={styles.projetos}>
      <h2 className={styles.titulo}>Meus Projetos</h2>
      <div className={styles.grid}>
        {projetos.map((projeto) => (
          <ProjetoCard
            key={projeto.titulo}
            {...projeto}
          />
        ))}
      </div>
    </section>
  );
}
