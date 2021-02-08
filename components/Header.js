import Link from "next/link";
import Navbar from "./Navbar";
import SocialIcons from "./SocialIcons";
import styles from "../styles/modules/Header.module.scss";

function Header() {
  return (
    <header className={styles.hero}>

        <div className={styles.content}>
          <img src="/svg/avataaars-bn.svg" className={styles.avatar}></img>
          <h1>Hi, I'm Bi Nguyen.</h1>
          <p>I'm a full stack web developer.</p>
          <p>Welcome to my online portfolio.</p>
          <div className={styles.socialIcons}>
            <SocialIcons />
          </div>
        </div>


    
     

    </header>
  )
}

export default Header;