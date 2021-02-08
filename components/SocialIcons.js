import styles from "../styles/modules/Navbar.module.scss";

function SocialIcons() {
  return (
    <ul>
      <li>
        <a href="https://github.com/vnn8248">
          <i className={`fab fa-github fa-2x ${styles.github}`}></i>
        </a>
      </li>
      <li>
        <a href="https://www.linkedin.com/in/vuquangnguyen1/">
        <i className={`fab fa-linkedin fa-2x ${styles.linkedin}`}></i>
        </a>
      </li>
      <li>
        <a href="#contact">
        <i className={`fas fa-envelope fa-2x ${styles.email}`}></i>
        </a>
      </li>
    </ul>
  )
}

export default SocialIcons;
