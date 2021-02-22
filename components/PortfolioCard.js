import Image from "next/image";
import styles from "../styles/modules/PortfolioCard.module.scss";

function PortfolioCard(props) {

  const work = props.work;
  console.log(work);

  return (
      <div className={styles.card} dangerouslySetInnerHTML={{__html: work}}></div>
  )
};


export default PortfolioCard;