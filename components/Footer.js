import Navbar from "./Navbar";
import ContactForm from "./ContactForm";
import styles from "../styles/modules/Footer.module.scss";


// Get year for copyright signature
const d = new Date();
const year = d.getFullYear();

function Footer() {
  return (
    <footer id="contact" className={styles.footer}>

        <div className={styles.top}>
          <div className={styles.column}>
            <h2>Let's Work Together</h2>
            <p>If we build it, they will come.</p>
          </div>
          <div className={styles.column}>
            <h2>Contact Me</h2>
              <ContactForm />
          </div>
        </div>
        <hr />
        <div className={styles.bottom}>
          <Navbar 
            footer={true}
          />
        </div>
        <p className={styles.signature}>Built by me. &#169; {year}</p>
  
      
    </footer>

  )
};


export default Footer;