import styles from "./styles.module.css";
import BannersList from "../BannersList/BannersList";
import { useFetch } from "../../helpers/hooks/useFetch";
import { getLatestNews } from "../../api/newsApi";
import { NewsApiResponse } from "../../interfaces";

export function LatestNews() {
  const { data, isLoading } = useFetch<NewsApiResponse, null>(getLatestNews);

  return (
    <section className={styles.section}>
      <BannersList banners={data && data.news} isLoading={isLoading} />
    </section>
  );
}
