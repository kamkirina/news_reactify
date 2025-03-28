import { ForwardedRef, forwardRef } from "react";
import styles from "./styles.module.css";
import { CategoriesType } from "../../interfaces";

interface IProps {
  categories: CategoriesType[];
  currentCategory: CategoriesType | null;
  setCurrentCategory: (category: CategoriesType | null) => void;
}

export const Categories = forwardRef(
  (
    { categories, currentCategory, setCurrentCategory }: IProps,
    ref: ForwardedRef<HTMLDivElement>
  ) => {
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
