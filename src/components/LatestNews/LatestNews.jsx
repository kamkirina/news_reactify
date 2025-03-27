import styles from "./styles.module.css";
import BannersList from "../BannersList/BannersList";

export function LatestNews({banners, isLoading}) {
  return (
    <section className={styles.section}>
      <BannersList banners={banners} isLoading={isLoading}/>
    </section>
  );
}
