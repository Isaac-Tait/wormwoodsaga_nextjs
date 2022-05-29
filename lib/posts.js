import GhostContentAPI from '@tryghost/content-api';

const api = new GhostContentAPI({
  url: 'https://wormwood-saga.ghost.io',
  key: process.env.GHOST_API_KEY,
  version: 'v5',
});

// Renders all posts from Ghost
export async function getPosts() {
  return await api.posts
    .browse({
      limit: 'all',
    })
    .catch((err) => {
      console.error(err);
    });
}

// Renders a single post from Ghost
export async function getSinglePost(postSlug) {
  return await api.posts
    .read({
      slug: postSlug,
    })
    .catch((err) => {
      console.error(err);
    });
}
