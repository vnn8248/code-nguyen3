import Image from "next/image";
import Link from "next/link";
import Date from "./Date";
import styles from "../styles/modules/BlogCard.module.scss"


function BlogCard(props) {
 

  return (
    <div className={styles.card}>
      <Link href={`/blog/${props.slug}`}><a>
        <img src={props.image} alt="Feature Image"/>
      </a></Link>

      <Link href={`/blog/${props.slug}`}><a>
        <h3 className={styles.title}>{props.title}</h3>
      </a></Link>

      <Date dateString={props.date}/>
      <p className={styles.excerpt}>{props.excerpt.substring(0, 100)}...</p>

      <Link href={`/blog/${props.slug}`}><a>
        <button className="btn">Read Post</button>
      </a></Link>
      
    </div>
  )
}


export default BlogCard;