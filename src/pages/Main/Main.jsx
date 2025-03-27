import styles from "./styles.module.css";
import { getNews } from "../../api/newsApi";
import { useDebounce } from "../../helpers/hooks/useDebounce";
import { PAGE_SIZE } from "../../constants/constants";
import { useFetch } from "../../helpers/hooks/useFetch";
import { useFilters } from "../../helpers/hooks/useFilters";
import { LatestNews } from "../../components/LatestNews/LatestNews";
import { NewsByFilters } from "../../components/NewsByFilters/NewsByFilters";

export function Main() {
  const { filter, changeFilter } = useFilters({
    page_number: 1,
    page_size: PAGE_SIZE,
    category: null,
    keywords: "",
  });

  const debouncedKeywords = useDebounce(filter.keywords, 1500);

  const { data, isLoading } = useFetch(getNews, {
    ...filter,
    keywords: debouncedKeywords,
  });

  return (
    <main className={styles.main}>
      <LatestNews isLoading={isLoading} banners={data && data.news} />
      <NewsByFilters
        news={data?.news}
        isLoading={isLoading}
        filter={filter}
        changeFilter={changeFilter}
      />
    </main>
  );
}
