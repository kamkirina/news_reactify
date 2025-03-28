import styles from "./styles.module.css";

interface IProps {
  image: string;
}

export function Image({ image }: IProps) {
  return (
    <div className={styles.wrapper}>
      {image && <img src={image} alt="news" className={styles.image} />}
    </div>
  );
}
