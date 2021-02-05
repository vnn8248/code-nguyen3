// Styles
import styles from "../../styles/modules/BlogPost.module.scss";

// Components
import Date from "../../components/Date";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import Head from "next/head";
import Image from "next/image";
import React from "react";

import { getPosts, getSinglePost } from "../../lib/ghostAPI";




// Get all static paths for all posts
export async function getStaticPaths() {
  const posts = await getPosts();

  const paths = posts.map((post) => `/blog/${post.slug}`);

  return {
    paths: paths, 
    fallback: true
  }
};

// Get static post
export async function getStaticProps({ params }) {
  const post = await getSinglePost(params.slug);
  
  // Pass post as props to render
  return { props: { post } }
};


// Render post
function Post({ post }) {


  // let el = React.createElement("html");
  // el.dangerouslySetInnerHTML = JSON.parse(JSON.stringify(post.html));
  // const headings = Array.from(el.querySelectorAll("h1,h2,h3,h4,h5,h6"));



  console.log(post);

  return (
    <div className={styles.outer}>
      {/* <Head>
        <title>{post.meta_title} | Code Nguyen. The Blog.</title>
        <description>{post.meta_description}</description>
      </Head> */}
      <Navbar />

      <div className={`container ${styles.postGrid}`}>
        <div className={`${styles.aside} ${styles.socialIcons}`}>
          <h4 className={styles.asideTitle}>Share</h4>
          <ul>
            <li><a><img src="/svg/medium.svg" className={styles.socialIcon}></img></a></li>
            <li><a><img src="/svg/facebook.svg" className={styles.socialIcon}></img></a></li>
            <li><a><img src="/svg/twitter.svg" className={styles.socialIcon}></img></a></li>
            <li><a><img src="/svg/heart.svg" className={styles.socialIcon}></img></a></li>
          </ul>
        </div>
        <div>
          <div className={styles.postHeader}>
            <h1 className={`${styles.postTitle} ${styles.second}`}>{post.title}</h1>
            <div className={styles.postMeta}>
              <p className={styles.postAuthor}>{post.authors[0].name}</p>
              <Date dateString={post.published_at} />
              <p className={styles.postMinuteRead}>{post.reading_time} minute read</p>
            </div>
          </div>
          <img className={styles.postFeatureImage} src={post.feature_image} alt={post.title} />

          <div className={styles.postContent} dangerouslySetInnerHTML={{__html: post.html}}></div>

        </div>
        <div className={`${styles.aside} ${styles.tableOfContents}`}>
          <h4 className={styles.asideTitle}>On this page</h4>
          <ul>
            {/* <li><strong>{post.title}</strong></li> */}
            {/* {headings.map(heading => {
                return <li>{heading}</li>
              })} */}
          </ul>
        </div>

      </div>
      <Footer />


    </div>
    
  )
};

export default Post;