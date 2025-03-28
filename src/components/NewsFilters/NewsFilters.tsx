import { getCategories } from "../../api/newsApi";
import { useFetch } from "../../helpers/hooks/useFetch";
import { CategoriesApiResponse, IFilters } from "../../interfaces";
import { Categories } from "../Categories/Categories";
import { Search } from "../Search/Search";
import { Slider } from "../Slider/Slider";
import styles from "./styles.module.css";

interface IProps {
  filter: IFilters;
  changeFilter: (key: string, value: string | null | number) => void
}

export function NewsFilters({ filter, changeFilter }: IProps) {
  const { data: dataCategories } = useFetch<CategoriesApiResponse, null>(getCategories);

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
