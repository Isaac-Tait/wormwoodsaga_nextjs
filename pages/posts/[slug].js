import Link from 'next/link';

import { getPosts, getSinglePost } from '../../lib/posts';

import Footer from '../../components/Footer';

const NovelPage = (props) => {
  return (
    <div className="heropattern-leaf-neutral-100 h-screen overflow-y-scroll">
      <Link href="/">
        <a className="text-3xl font-semibold">Wormwood Saga</a>
      </Link>
      <div className="max-w-6xl mx-auto">
        <h1 className="text-2xl font-medium">{props.post.title}</h1>
        <div
          dangerouslySetInnerHTML={{ __html: props.post.html }}
          className="mb-12 first-line:uppercase first-line:tracking-widest first-letter:text-7xl first-letter:font-bold first-letter:text-slate-900 first-letter:mr-3 first-letter:float-left"
        />
      </div>
      <div className="fixed bottom-0 w-full">
        <Footer />
      </div>
    </div>
  );
};

export default NovelPage;

export async function getStaticPaths() {
  const posts = await getPosts();

  // Get the paths we want to create based on posts
  const paths = posts.map((post) => ({
    params: { slug: post.slug },
  }));

  // "fallback: false" gives us a 404 if post not found
  return { paths, fallback: false };
}

// Pass the page slug to "getSinglePost()" function
// Which then passes it to "posts.read()" to query the GhostContentAPI
export async function getStaticProps(context) {
  const post = await getSinglePost(context.params.slug);

  if (!post) {
    return {
      notFound: true,
    };
  }

  return {
    props: { post },
    revalidate: 1,
  };
}
