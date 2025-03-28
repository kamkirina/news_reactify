import styles from "./styles.module.css";
import { formatTimeAgo } from "../../helpers/formatTimeAgo";
import { Image } from "../Image/Image";
import { INews } from "../../interfaces";

interface IProps {
  item: INews;
}

function NewsBanner({ item }: IProps) {
  return (
    <div className={styles.banner}>
      <Image image={item?.image} />
      <h3 className={styles.title}>{item.title}</h3>
      <p className={styles.extra}>
        {formatTimeAgo(item.published)} by {item.author}
      </p>
    </div>
  );
}

export default NewsBanner;
