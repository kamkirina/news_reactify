import { getCategories } from "../../api/newsApi";
import { useFetch } from "../../helpers/hooks/useFetch";
import { Categories } from "../Categories/Categories";
import { Search } from "../Search/Search";
import { Slider } from "../Slider/Slider";
import styles from "./styles.module.css";

export function NewsFilters({ filter, changeFilter }) {
  const { data: dataCategories } = useFetch(getCategories);

  return (
    <div className={styles.filters}>
     
        {dataCategories && (
           <Slider>
          <Categories
            categories={dataCategories.categories}
            setCurrentCategory={(category) =>
              changeFilter("category", category)
            }
            currentCategory={filter.category}
          />
           </Slider>
        )}
     

      <Search
        keywords={filter.keywords}
        setKeywords={(keywords) => changeFilter("keywords", keywords)}
      />
    </div>
  );
}
