import Image from "next/image";
import styles from "../styles/modules/Tech.module.scss";

function Tech(props) {
  return (
      <li className={styles.techItem}>
        {props.used && <div className={styles.used}></div>}
        <img src={`/svg/${props.name}.svg`} alt={props.alt} />
        <h5>{props.name}</h5>
      </li>
  );
}


export default Tech;