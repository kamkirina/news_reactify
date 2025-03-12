import { NewsBanner } from "../../components/NewsBanner/NewsBanner";
import styles from "./styles.module.css";
import { useEffect, useState } from "react";
import { getNews } from "../../api/newsApi";
import { NewsList } from "../../components/NewsList/NewsList";
import { Skeleton } from "../../components/Skeleton/Skeleton";
import { Pagination } from "../../components/Pagination/Pagination";

export function Main() {
  const [news, setNews] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const pageSize = 10;
  const totalPages = 10;

  const fetchNews = async (currentPage) => {
    try {
      setIsLoading(true);
      const response = await getNews(currentPage, pageSize);
      setNews(response.news);
      setIsLoading(false);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchNews(currentPage);
  }, [currentPage]);

  const handlePreviosPage = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  };

  const handleNextPage = () => {
    if (currentPage < 10) {
      setCurrentPage(currentPage + 1);
    }
  };

  const handlePageClick = (index) => {
    setCurrentPage(index);
  };

  return (
    <main className={styles.main}>
      {news.length > 0 && !isLoading ? (
        <NewsBanner item={news[0]} />
      ) : (
        <Skeleton count={1} type={"banner"} />
      )}
      <Pagination
        totalPages={totalPages}
        handlePreviosPage={handlePreviosPage}
        handleNextPage={handleNextPage}
        handlePageClick={handlePageClick}
        currentPage={currentPage}
      />
      {!isLoading ? (
        <NewsList news={news} />
      ) : (
        <Skeleton count={10} type={"item"} />
      )}
      <Pagination
        totalPages={totalPages}
        handlePreviosPage={handlePreviosPage}
        handleNextPage={handleNextPage}
        handlePageClick={handlePageClick}
        currentPage={currentPage}
      />
    </main>
  );
}
