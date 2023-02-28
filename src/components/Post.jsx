import { format, formatDistanceToNow } from "date-fns";
import ptBR from "date-fns/locale/pt-BR";

import { Avatar } from "./Avatar";
import { Comment } from "./Comment";
import styles from "./Post.module.css";

export function Post({ author, publishedAt, content }) {
  const publishedDateFormatted = format(
    publishedAt,
    "d 'de' LLLL 'às' HH:mm'h'" /* Escapando strings envolvendo em aspas simples as que estavam em aspas duplas */,
    { locale: ptBR }
  );

  const relativePostDate = formatDistanceToNow(publishedAt, {
    locale: ptBR,
    addSuffix: true,
  });

  /* new Intl.DateTimeFormat("pt-br", {
    day: "2-digit",
    month: "long",
    hour: "2-digit",
    minute: "2-digit",
  }).format(publishedAt); */

  return (
    <article className={styles.post}>
      <header>
        <div className={styles.author}>
          <Avatar hasBorder src={author.avatarUrl} />
          <div className={styles.authorInfo}>
            <strong> {author.name} </strong>
            <span> {author.role} </span>
          </div>
        </div>

        <time
          title={publishedDateFormatted}
          dateTime={publishedAt.toISOString()}
        >
          {relativePostDate}
        </time>
      </header>

      <div className={styles.content}>
        {content.map((line) => {
          if (line.type == "paragraph") {
            return <p> {line.content} </p>;
          } else if (line.type == "link") {
            return (
              <p>
                {" "}
                <a href=""> {line.content}</a>
              </p>
            );
          }
        })}
      </div>

      <form className={styles.commentForm}>
        <strong> Deixe seu feedback </strong>
        <textarea placeholder="Deixe um comentário" />
        <footer>
          <button type="submit"> Publicar </button>
        </footer>
      </form>

      <div className={styles.commentList}>
        <Comment />
        <Comment />
        <Comment />
      </div>
    </article>
  );
}
