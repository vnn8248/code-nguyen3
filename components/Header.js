import Link from "next/link";
import Navbar from "./Navbar";
import styles from "../styles/modules/Header.module.scss";

function Header() {
  return (
    <header className={styles.hero}>

        <Navbar />

        <div className={styles.content}>
          <img src="/svg/avataaars-bn.svg" className={styles.avatar}></img>
          <h1>Hi, I'm Bi Nguyen.</h1>
          <p>I'm a full stack web developer.</p>
          <p>Welcome to my online portfolio.</p>
          <div className={styles.socialIcons}>
            <ul>
              <li>
                <a href="https://github.com/vnn8248">
                  <img src="/svg/github.svg" ></img>
                </a>
              </li>
              <li>
                <a href="https://github.com/vnn8248">
                  <img src="/svg/linkedin.svg" ></img>
                </a>
              </li>
              <li>
                <a href="#contact">
                  <img src="/svg/email.svg" ></img>
                </a>
              </li>
            </ul>
          </div>
        </div>


    
     

    </header>
  )
}

export default Header;