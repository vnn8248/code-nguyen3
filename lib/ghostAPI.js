import GhostContentAPI from "@tryghost/content-api";

const api = new GhostContentAPI({
  url: 'http://localhost:2368',
  key: process.env.CONTENT_API_KEY,
  version: "v3"
});


// Get all posts
export async function getPosts() {
  return await api.posts
  .browse({
    limit: "all"
  })
  .catch(err => {
    console.log(err);
  })
};

// Get a single post 
export async function getSinglePost(postSlug) {
  return await api.posts
  .read({
    slug: postSlug,
    include: "tags,authors"
  })
  .catch(err => {
    console.log(err);
  })
}


// Get all pages
export async function getPages() {
  return await api.pages
  .browse({
    limit: "all"
  })
  .catch(err => {
    console.log(err);
  })
}


export default api;