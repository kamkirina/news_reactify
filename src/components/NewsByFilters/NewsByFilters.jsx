import { TOTAL_PAGES } from "../../constants/constants";
import { NewsFilters } from "../NewsFilters/NewsFilters";
import NewsList from "../NewsList/NewsList";
import { Pagination } from "../Pagination/Pagination";
import styles from "./styles.module.css";

export function NewsByFilters({ filter, changeFilter, isLoading, news }) {
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

      <Pagination
        totalPages={TOTAL_PAGES}
        handlePreviosPage={handlePreviosPage}
        handleNextPage={handleNextPage}
        handlePageClick={handlePageClick}
        currentPage={filter.page_number}
      />
      <NewsList news={news} isLoading={isLoading} />
      <Pagination
        totalPages={TOTAL_PAGES}
        handlePreviosPage={handlePreviosPage}
        handleNextPage={handleNextPage}
        handlePageClick={handlePageClick}
        currentPage={filter.page_number}
      />
    </section>
  );
}
