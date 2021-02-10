import styles from "../styles/modules/About.module.scss";
import Button from 'react-bootstrap/Button';




function About(props) {

  const content = props.content[0].html;

  return (
    <section id="about" className={styles.about}>
      <div className={styles.container}>

        <div className={styles.row}>
          <div className={styles.column}>
            <div className={styles.frame}>
            </div>
          </div>
          <div className={styles.column}>
            <div dangerouslySetInnerHTML={{__html: content}}></div>

            <a href="/pdf/Resume.pdf" download>
              <Button className={styles.btnLight}>
                <span className={styles.icon}>
                  <i className="fas fa-cloud-download-alt fa-lg"></i>
                </span>
                Download Resume
              </Button>
            </a>

          </div>
        </div>

      </div>
    </section>

  )
}

export default About;