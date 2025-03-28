import styles from "./styles.module.css";

interface IProps {
  keywords: string;
  setKeywords: (value: string) => void;
}

export function Search({ keywords, setKeywords }: IProps) {
  return (
    <div className={styles.search}>
      <input
        type="text"
        className={styles.input}
        value={keywords}
        onChange={(event) => setKeywords(event.target.value)}
        placeholder="JavaScript"
      />
    </div>
  );
}
