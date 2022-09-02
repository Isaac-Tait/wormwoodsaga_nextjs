import Link from 'next/link';

import { getPosts, getSinglePost } from '../../lib/posts';

import Footer from '../../components/Footer';

export async function getStaticPaths() {
  const posts = await getPosts();
  const paths = posts.map(({ slug }) => ({ params: { slug } }));
  return { paths, fallback: false };
}

export async function getStaticProps({ params }) {
  const { slug } = params;
  const data = await getSinglePost(slug);
  return { props: { data } };
}

export default function Post({ data }) {
  return (
    <div className="heropattern-leaf-neutral-100 h-screen overflow-y-scroll">
      <Link href="/">
        <a className="text-3xl font-semibold">Wormwood Saga</a>
      </Link>
      <div className="max-w-6xl mx-auto">
        <h1 className="text-2xl font-medium">{data.post.title}</h1>
        <div
          dangerouslySetInnerHTML={{ __html: data.post.html }}
          className="mb-12 first-line:uppercase first-line:tracking-widest first-letter:text-7xl first-letter:font-bold first-letter:text-slate-900 first-letter:mr-3 first-letter:float-left"
        />
      </div>
      <div className="fixed bottom-0 w-full">
        <Footer />
      </div>
    </div>
  );
}
