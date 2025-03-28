import { IPaginationProps } from "../../interfaces";
import styles from "./styles.module.css";

export function Pagination({
  totalPages,
  handlePreviosPage,
  handleNextPage,
  handlePageClick,
  currentPage,
}: IPaginationProps) {
  return (
    <div className={styles.pagination}>
      <button
        className={styles.arrow}
        onClick={handlePreviosPage}
        disabled={currentPage === 1}
      >
        {"<"}
      </button>
      <div className={styles.list}>
        {[...Array(totalPages)].map((_, index) => (
          <button
            key={index}
            className={styles.pageNumber}
            onClick={() => handlePageClick(index + 1)}
            disabled={index + 1 === currentPage}
          >
            {index + 1}
          </button>
        ))}
      </div>
      <button
        className={styles.arrow}
        onClick={handleNextPage}
        disabled={currentPage === totalPages}
      >
        {">"}
      </button>
    </div>
  );
}
