import { parseISO, format } from "date-fns";
import styles from "../styles/modules/Date.module.scss";

function Date({ dateString }, props) {
  const date = parseISO(dateString);

  return <time className={styles.postDate} dateTime={dateString}>{format(date, "LLLL d, yyyy")}</time>
}

export default Date;






