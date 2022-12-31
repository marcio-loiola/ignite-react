import styles from "./Header.module.css";
import logoIgnite from "../_assets/ignite-02.svg";

export function Header() {
  return (
    <>
      <header className={styles.header}>
        <img src={logoIgnite} alt="Logo do Ignite" />
      </header>
    </>
  );
}
