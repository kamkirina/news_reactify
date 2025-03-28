import { withSkeleton } from "../../helpers/hoc/withSkeleton";
import { INews } from "../../interfaces";
import { NewsItem } from "../NewsItem/NewsItem";
import styles from "./styles.module.css";

interface IProps {
  news?: INews[];
}

function NewsList({ news }: IProps) {
  return (
    <ul className={styles.list}>
      {news?.map((item) => (
        <NewsItem key={item.id} item={item} />
      ))}
    </ul>
  );
}

const NewsListWithSkeleton = withSkeleton<IProps>(NewsList, "item", 10);

export default NewsListWithSkeleton;
