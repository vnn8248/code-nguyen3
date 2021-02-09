import Link from "next/link";
import styles from "../styles/modules/BlogHome.module.scss"
import BlogCard from "./BlogCard";


function Blog(props) {
  const firstSix = props.posts.slice(0,6);
  
  return (
    <section id="blog" className={styles.outer}>
      <div className="container">
        {props.home && 
        <div>
          <h2 className="heading">Code Nguyen. The Blog.</h2>    
          <div className={styles.cardContainer}>
          {firstSix.map(post => {
            return (
              <BlogCard 
                key={post.id}
                image={post.feature_image}
                title={post.title}
                excerpt={post.excerpt}
                date={post.published_at}
                slug={post.slug}
              />
            )
          })}
          </div>
      
        </div> 
        }
      </div>
    </section>
  )
}

export default Blog;
