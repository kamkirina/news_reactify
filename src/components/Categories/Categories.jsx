import styles from "./styles.module.css";

export function Categories({
  categories,
  currentCategory,
  setCurrentCategory,
}) {
  return (
    <div className={styles.categories}>
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
