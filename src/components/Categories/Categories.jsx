import { forwardRef } from "react";
import styles from "./styles.module.css";

export const Categories = forwardRef(
  ({ categories, currentCategory, setCurrentCategory }, ref) => {
    return (
      <div className={styles.categories} ref={ref}>
        <button
          className={!currentCategory ? styles.active : styles.item}
          onClick={() => setCurrentCategory(null)}
        >
          All
        </button>
        {categories.map((category, index) => (
          <button
            key={index}
            className={
              currentCategory === category ? styles.active : styles.item
            }
            onClick={() => setCurrentCategory(category)}
          >
            {category}
          </button>
        ))}
      </div>
    );
  }
);

Categories.displayName = "Categories";
