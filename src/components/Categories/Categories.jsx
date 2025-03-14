import styles from "./styles.module.css";

export function Categories({
  categories,
  currentCategory,
  setCurrentCategory,
}) {
  return (
    <div className={styles.categories}>
      <button
        className={!currentCategory ? styles.active : styles.item}
        onClick={() => setCurrentCategory(null)}
      >
        All
      </button>
      {categories.map((category, index) => (
        <button
          key={index}
          className={currentCategory === category ? styles.active : styles.item}
          onClick={() => setCurrentCategory(category)}
        >
          {category}
        </button>
      ))}
    </div>
  );
}
