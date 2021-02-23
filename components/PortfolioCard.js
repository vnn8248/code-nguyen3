import Image from "next/image";
import styles from "../styles/modules/PortfolioCard.module.scss";

function PortfolioCard(props) {

  const content = props.content;
  console.log(content);

  return (
      <div className={styles.card} dangerouslySetInnerHTML={{__html: content}}></div>
  )
};


export default PortfolioCard;