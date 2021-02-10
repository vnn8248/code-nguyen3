import Image from "next/image";
import styles from "../styles/modules/Tech.module.scss";

function Tech(props) {
  return (
      <li className={styles.techItem}>
        {props.used && <div className={styles.used}></div>}
        <Image src={`/svg/${props.name}.svg`} alt={props.alt} className={styles.logo} width={50} height={50}/>
        <h5>{props.name}</h5>
      </li>
  );
}


export default Tech;