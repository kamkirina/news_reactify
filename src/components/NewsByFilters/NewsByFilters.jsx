import { getNews } from "../../api/newsApi";
import { PAGE_SIZE, TOTAL_PAGES } from "../../constants/constants";
import { useDebounce } from "../../helpers/hooks/useDebounce";
import { useFetch } from "../../helpers/hooks/useFetch";
import { useFilters } from "../../helpers/hooks/useFilters";
import { NewsFilters } from "../NewsFilters/NewsFilters";
import NewsList from "../NewsList/NewsList";
import { Pagination } from "../Pagination/Pagination";
import { PaginationWrapper } from "../PaginationWrapper/PaginationWrapper";
import styles from "./styles.module.css";

export function NewsByFilters() {
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

  const handlePreviosPage = () => {
    if (filter.page_number > 1) {
      changeFilter("page_number", filter.page_number - 1);
    }
  };

  const handleNextPage = () => {
    if (filter.page_number < TOTAL_PAGES) {
      changeFilter("page_number", filter.page_number + 1);
    }
  };

  const handlePageClick = (index) => {
    changeFilter("page_number", index);
  };

  return (
    <section className={styles.section}>
      <NewsFilters filter={filter} changeFilter={changeFilter} />
      <PaginationWrapper
        top={true}
        bottom={true}
        totalPages={TOTAL_PAGES}
        handlePreviosPage={handlePreviosPage}
        handleNextPage={handleNextPage}
        handlePageClick={handlePageClick}
        currentPage={filter.page_number}
      >
        <NewsList news={data?.news} isLoading={isLoading} />
      </PaginationWrapper>
    </section>
  );
}
