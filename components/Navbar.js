import styles from "../styles/modules/Navbar.module.scss";
import Link from "next/link";
import Navbar from "react-bootstrap/Navbar";
import { Nav } from "react-bootstrap";
import SocialIcons from "./SocialIcons";
import { useState } from "react";

function MainNavbar(props) {
  const [isClicked, setIsClicked] = useState(false);

  function handleClick() {
    setIsClicked(!isClicked);
  } 

  return (
    <div>
      {props.footer ? 
        <div className={styles.footerOuter}>
          <Navbar expanded="lg" className={`justify-content-between ${styles.footerNavbar}`} collapseOnSelect>
            <Navbar.Brand href="/">
              <img className={styles.logo} src="/svg/avataaars-bn.svg" />
            </Navbar.Brand>   
            <ul className={styles.footerNavMenu}>
              <li className={styles.footerNavItems} href="/">
                <a href="/" >Home</a>
              </li>
              <li className={styles.footerNavItems} href="/#about">
                <a href="/#about" >About</a>
              </li>
              <li className={styles.footerNavItems} href="/#skills">
                <a href="/#skills" >Skills</a>
              </li>
              <li className={styles.footerNavItems} href="/#portfolio">
                <a href="/#portfolio" >Portfolio</a>
              </li>
              <li className={styles.footerNavItems} href="/#blog">
                <a href="/#blog" >Blog</a>
              </li>
              <li className={styles.footerNavItems} href="/#contact">
                <a href="/#contact" >Contact</a>
              </li>
            </ul>
            <Nav className={`justify-content-end ${styles.socialIcons}`}>
              <SocialIcons />
            </Nav>
          </Navbar>
      </div> :
      <div className={styles.outer}>
        <Navbar expanded="lg" className={`justify-content-between ${styles.navbar}`} collapseOnSelect>
          <Navbar.Brand href="/">
            <img className={styles.logo} src="/svg/avataaars-bn.svg" />
          </Navbar.Brand>
          <span className={styles.menuIcon} onClick={handleClick}><i className={isClicked ? "fas fa-times fa-2x" : "fas fa-bars fa-2x"}></i></span>
      
          <ul className={isClicked ? `${styles.navMenu} ${styles.active}` : `${styles.navMenu}`}>
            <li className={styles.navItems} href="/">
              <a href="/" onClick={handleClick}>Home</a>
            </li>
            <li className={styles.navItems} href="/#about">
              <a href="/#about" onClick={handleClick}>About</a>
            </li>
            <li className={styles.navItems} href="/#skills">
              <a href="/#skills" onClick={handleClick}>Skills</a>
            </li>
            <li className={styles.navItems} href="/#portfolio">
              <a href="/#portfolio" onClick={handleClick}>Portfolio</a>
            </li>
            <li className={styles.navItems} href="/#blog">
              <a href="/#blog" onClick={handleClick}>Blog</a>
            </li>
            <li className={styles.navItems} href="/#contact">
              <a href="/#contact" onClick={handleClick}>Contact</a>
            </li>
          </ul>
          <Nav className={`justify-content-end ${styles.socialIcons}`}>
            <SocialIcons />
          </Nav>
        </Navbar>
      </div>
      }
    </div> 
  )
}

export default MainNavbar;




