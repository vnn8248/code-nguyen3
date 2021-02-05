import styles from "../styles/modules/Navbar.module.scss";
import menuStyles from "../styles/modules/Menu.module.scss";
import Link from "next/link";


function Navbar(props) {

  return (
    <div>
      {props.footer ? 
      <div className="container">
        <div id="navbar" className={styles.footerNavbar}>
          <div className={styles.navCol}>
            <Link href="/">
              <a><img className={styles.logo} src="/svg/avataaars-bn.svg"></img></a>
            </Link>  
          </div>
          <div className={styles.navCol}>
            <nav>
              <ul>
                <li><a href="/">Home</a></li>
                <li><a href="/#about">About</a></li>
                <li><a href="/#resume">Skills</a></li>
                <li><a href="/#portfolio">Portfolio</a></li>
                <li><a href="/#blog">Blog</a></li>
                <li><a href="/#contact">Contact</a></li>
              </ul>
            </nav>
          </div>
          <div className={styles.navCol}>
            <div className={styles.socialIcons}>
              <ul>
                <li><a href="https://github.com/vnn8248"><img src="/svg/github.svg" ></img></a></li>
                <li><a href="https://github.com/vnn8248"><img src="/svg/linkedin.svg" ></img></a></li>
                <li><a href="#contact"><img src="/svg/email.svg"></img></a></li>
              </ul>
            </div>
          </div>
        </div>
      </div> :
      <div className={styles.outer}>
        <div id="navbar" className={styles.navbar}>
          <div className={styles.navCol}>
            <Link href="/">
              <a><img className={styles.logo} src="/svg/avataaars-bn.svg"></img></a>
            </Link>   
          </div>
          <div className={`${styles.navCol} ${menuStyles.menuWrap}`}>
            <input type="checkbox" className={menuStyles.toggler} />
            <div className={menuStyles.hamburger}><div></div></div>
            <nav className={menuStyles.menu}>
              <div>
                <div>
                  <ul>
                    <li><a href="/">Home</a></li>
                    <li><a href="/#about">About</a></li>
                    <li><a href="/#resume">Skills</a></li>
                    <li><a href="/#portfolio">Portfolio</a></li>
                    <li><a href="/#blog">Blog</a></li>
                    <li><a href="#contact">Contact</a></li>
                  </ul>
                </div>
              </div>
            </nav>
          </div>
          <div className={styles.navCol}>
            <div className={styles.socialIcons}>
              <ul>
                <li><a href="https://github.com/vnn8248"><img src="/svg/github.svg" ></img></a></li>
                <li><a href="https://github.com/vnn8248"><img src="/svg/linkedin.svg" ></img></a></li>
                <li><a href="#contact"><img src="/svg/email.svg"></img></a></li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      }
    </div> 
  )
}

export default Navbar;