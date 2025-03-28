import styles from "./styles.module.css";
import { withSkeleton } from "../../helpers/hoc/withSkeleton";
import NewsBanner from "../NewsBanner/NewsBanner";
import { INews } from "../../interfaces";

interface IProps {
  banners?: INews[] | null;
}

function BannersList({ banners }: IProps) {
  return (
    <ul className={styles.banners}>
      {banners?.map((banner) => {
        return <NewsBanner key={banner.id} item={banner} />;
      })}
    </ul>
  );
}

const BannersListWithSkeleton = withSkeleton<IProps>(
  BannersList,
  "banner",
  10,
  "row"
);

export default BannersListWithSkeleton;
