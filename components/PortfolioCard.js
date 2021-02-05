import Image from "next/image";
import styles from "../styles/modules/PortfolioCard.module.scss";

function PortfolioCard() {
  return (
    <div className={styles.card}>
      <div className={styles.cardImage}>
        {/* <Image className={styles.img} src="/jpg/me.jpg" alt="Portfolio piece" width={300} height={300} /> */}
      </div>
      <div className={styles.cardText}>
        <div className={styles.cardTextWrap}>
          {/* <p className={styles.cardTextCategory}>Blog</p> */}
          <h2 className={styles.cardTextTitle}>Coming Soon...</h2>
        </div>
      </div>
    </div>
  )
};


export default PortfolioCard;