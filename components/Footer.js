import Navbar from "./Navbar";
import styles from "../styles/modules/Footer.module.scss";
import { useState } from "react";

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
            <form className={styles.contactForm}>
              <div className={styles.formInputRow}>
                <input type="text" name="name" placeholder="Your Name" className={styles.formInput} required/>
                <input type="email" name="email" placeholder="your@email.com" className={styles.formInput} required/>
              </div>
              <p className={styles.antispam}>Please leave this empty: <input type="text" name="url"></input></p>
              <textarea type="text" name="message" placeholder="Please write your message here" className={styles.formMessage} required/>
              <button type="submit" className={`btn ${styles.formSubmit}`}>Submit</button>
            </form>
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