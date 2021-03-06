// Components
import Head from 'next/head';
import Navbar from "../components/Navbar";
import Header from "../components/Header";
import About from "../components/About";
import Resume from "../components/Resume";
import Portfolio from "../components/Portfolio";
import Blog from "../components/Blog";
import Footer from "../components/Footer";

import { getPosts, getPages } from "../lib/ghostAPI";


// Site title
const home = "Home";

// Get all blog posts and home page section content
export async function getStaticProps() {
  const posts = await getPosts();
  const pages = await getPages();

  return {
    props: { posts, pages },
  }
};



// Render
function Home({ posts, pages }) {

  console.log(posts);
  console.log(pages);

  return (
    <div>
      <Head>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta prefix="og: http://ogp.me/ns#" property="og:title" content="Code Nguyen" />
        <meta prefix="og: http://ogp.me/ns#" property="og:description" content="Welcome to Bi Nguyen's online portfolio!" />
        <meta prefix="og: http://ogp.me/ns#" property="og:image" content="https://www.codenguyen.com/jpg/home.jpg" />
        <meta prefix="og: http://ogp.me/ns#" property="og:url" content="https://www.codenguyen.com" />
        <meta prefix="og: http://ogp.me/ns#" property="og:type" content="website" />
        <meta prefix="og: http://ogp.me/ns#" property="og:site_name" content="Code Nguyen" />
        <meta prefix="og: http://ogp.me/ns#" property="og:locale" content="en_US" />


        <link rel="icon" type="image/svg+xml" href="/svg/avataaars-bn.svg" />
        <link rel="alternate icon" href="/ico/avataaars-bn.ico"></link>
        <link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.15.2/css/all.css" integrity="sha384-vSIIfh2YWi9wW0r9iZe7RJPrKwp6bG+s9QZMoITbCckVJqGCCRhc+ccxNcdpHuYu" crossOrigin="anonymous"></link>
        <title>Code Nguyen | {home}</title>
      </Head>
      <Navbar />
      <Header />
      <About content={pages} />
      <Resume />
      <Portfolio content={pages} />
      <Blog posts={posts}
      />
      <Footer />

    </div>
  )
};



export default Home;
