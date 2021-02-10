import styles from "../styles/modules/SkillProgress.module.scss";
import Image from "next/image";

function SkillProgress(props) {

  const logo = props.name;
  const src = "/svg/" + logo + ".svg";
  return (
    <li className={styles.skillRow}>
      <Image src={src} alt={props.alt} width={50} height={50} />
      <h3>{props.alt}</h3>
      <div className={styles.progress}>
        <div style={{width: `${props.now}%`, backgroundColor: `${props.color}`}}></div>
      </div>
    </li>
  )
}

export default SkillProgress;