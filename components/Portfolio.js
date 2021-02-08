import PortfolioCard from "./PortfolioCard";
import styles from "../styles/modules/Portfolio.module.scss";

function Portfolio() {
  return (
    <section id="portfolio" className={styles.outer}>
      <div className="container">
        <h2 className="heading">Code Nguyen. The Portfolio.</h2>
        <div className={styles.cardContainer}>
          <PortfolioCard />
          <PortfolioCard />
          <PortfolioCard />
        </div>
      </div>
    </section>
  )
}

export default Portfolio;