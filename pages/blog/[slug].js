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

  console.log(post);
  // console.log(post.html);

  
  return (
    <div>
      <Head>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />

        <link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.15.2/css/all.css" integrity="sha384-vSIIfh2YWi9wW0r9iZe7RJPrKwp6bG+s9QZMoITbCckVJqGCCRhc+ccxNcdpHuYu" crossOrigin="anonymous"></link>
        <link rel="stylesheet" href=""></link>
        <title>{post.meta_title} | Code Nguyen</title>
        <meta name="description" content={post.meta_description} />
        <meta name="keywords" content={post.tags.map(tag => tag.name)} />
        <meta name="author" content={post.authors[0].name} />
      </Head>
      <div className={styles.outer}>
        <Navbar />

        <div className={styles.postGrid}>
          <div className={`${styles.aside} ${styles.socialIcons}`}>
            <h4 className={styles.asideTitle}>Share</h4>
            <ul>
              <li><a><img src="/svg/medium.svg" className={styles.socialIcon}></img></a></li>
              <li><a><img src="/svg/facebook.svg" className={styles.socialIcon}></img></a></li>
              <li><a><img src="/svg/twitter.svg" className={styles.socialIcon}></img></a></li>
              <li><a><img src="/svg/heart.svg" className={styles.socialIcon}></img></a></li>
            </ul>
          </div>

          <div className={styles.main}>
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
            </ul>
          </div>

        </div>
        <Footer />


      </div>
    </div>
  )
};

export default Post;