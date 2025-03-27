import { getCategories } from "../../api/newsApi";
import { useFetch } from "../../helpers/hooks/useFetch";
import { Categories } from "../Categories/Categories";
import { Search } from "../Search/Search";
import styles from "./styles.module.css";

export function NewsFilters({ filter, changeFilter }) {
  const { data: dataCategories } = useFetch(getCategories);

  return (
    <div className={styles.filters}>
      {dataCategories && (
        <Categories
          categories={dataCategories.categories}
          setCurrentCategory={(category) => changeFilter("category", category)}
          currentCategory={filter.category}
        />
      )}
      <Search
        keywords={filter.keywords}
        setKeywords={(keywords) => changeFilter("keywords", keywords)}
      />
    </div>
  );
}
