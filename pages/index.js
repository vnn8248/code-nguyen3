// Components
import Head from 'next/head';
import Header from "../components/header";
import About from "../components/About";
import Resume from "../components/Resume";
import Portfolio from "../components/Portfolio";
import Blog from "../components/Blog";
import Footer from "../components/Footer";

import { getPosts, getPages } from "../lib/ghostAPI";


// Site title
const home = "Home";

// Get all blog posts
export async function getStaticProps() {
  const posts = await getPosts();
  const pages = await getPages();

  return {
    props: {posts, pages},
  }
};



// Render
function Home( { posts, pages } ) {

  console.log(posts);
  console.log(pages);

  return (
    <div>
      <Head>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />

        <link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.15.2/css/all.css" integrity="sha384-vSIIfh2YWi9wW0r9iZe7RJPrKwp6bG+s9QZMoITbCckVJqGCCRhc+ccxNcdpHuYu" crossorigin="anonymous"></link>
        <title>Code Nguyen | {home}</title>
      </Head>
      <Header />
      <About content={pages}/>
      <Resume />
      <Portfolio />
      <Blog 
        home={true}
        posts={posts}  
      />
      <Footer />

    </div>
  )
};



export default Home;
