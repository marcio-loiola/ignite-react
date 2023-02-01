import { PencilLine } from "phosphor-react";

import styles from "./Sidebar.module.css";

export function Sidebar() {
  return (
    <aside className={styles.sidebar}>
      <img
        className={styles.cover}
        src="https://images.unsplash.com/photo-1498050108023-c5249f4df085?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=50"
      />

      <div className={styles.profile}>
        <img
          className={styles.avatar}
          src="https://avatars.githubusercontent.com/u/58188658?v=4"
        />
        <strong> Márcio Gomes</strong>
        <span> Web Developer </span>
      </div>

      <footer>
        <a href="#">
          <PencilLine size={20} />
          Editar seu perfil.
        </a>
      </footer>
    </aside>
  );
}
