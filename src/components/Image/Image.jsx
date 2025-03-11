import styles from "./styles.module.css";

export function Image({ image }) {
  return (
    <div className={styles.wrapper}>
      {image && <img src={image} alt="news" className={styles.image} />}
    </div>
  );
}
