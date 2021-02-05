// Components
import Head from "next/head";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

// Styles
import styles from "../styles/modules/Blog.module.scss";


// Get all blog posts
export async function getStaticProps() {
  const res = await fetch(`http://localhost:2368/ghost/api/v3/content/posts/?key=${process.env.CONTENT_API_KEY}`);
  const data = await res.json();

  return {
    props: {
      data
    }
  }
};


function Blog({ data }) {
  const {posts} = data;

  return (
    <div>
      <Head>
        <title>Code Nguyen | The Blog</title>
      </Head>
      <Navbar />
      <div className="container">
        <div className="grid">

        </div>
      </div>

      <Footer />
    </div>
  )
}

export default Blog;