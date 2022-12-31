import styles from "./Post.module.css";

export function Post() {
  return (
    <article className={styles.post}>
      <header>
        <div className={styles.author}>
          <img
            className={styles.avatar}
            src="https://avatars.githubusercontent.com/u/58188658?v=4"
          />
          <div className={styles.authorInfo}>
            <strong> Marcio Gomes </strong>
            <span> Web Developer </span>
          </div>
        </div>

        <time title="31 de Dezembro às 13:15h" dateTime="2022-12-31 13:15:00">
          {" "}
          Publicado há 1 hora
        </time>
      </header>

      <div className={styles.content}>
        <p> Fala galeraa 👋 </p>
        <p>
          Acabei de subir mais um projeto no meu portifa. É um projeto que fiz
          no NLW Return, evento da Rocketseat.
        </p>
      </div>
    </article>
  );
}
