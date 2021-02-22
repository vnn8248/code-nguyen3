import PortfolioCard from "./PortfolioCard";
import styles from "../styles/modules/Portfolio.module.scss";

function Portfolio(props) {

  const section =  props.content.filter(section => section.slug === "portfolio");
  const content = section[0].html;
  console.log(content);


  return (
    <section id="portfolio" className={styles.outer}>
      <div className="container">
        <h2 className="heading">Code Nguyen. The Portfolio.</h2>
        <div className={styles.inner}>
          <PortfolioCard work={content}/>
        </div>
      </div>
    </section>
  )
}

export default Portfolio;