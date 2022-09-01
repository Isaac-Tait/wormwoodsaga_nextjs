import Link from 'next/link';
//import Script from 'next/script';

import { getPosts } from '../lib/posts';

import Footer from '../components/Footer';
import Header from '../components/Header';

export async function getStaticProps() {
  const posts = await getPosts();

  if (!posts) {
    return {
      notFound: true,
    };
  }

  return {
    props: { posts },
  };
}

export default function Home({ posts }) {
  return (
    <div className="heropattern-leaf-neutral-100 h-screen">
      {/* Remove Script Tag */}
      <div>
        <Header />
      </div>

      <div className="max-w-6xl mx-auto bg-slate-200 rounded-xl">
        <ul>
          {posts.map((post) => (
            <li key={post.uuid}>
              <Link href={`/${post.slug}`}>
                <a>{post.title}</a>
              </Link>
            </li>
          ))}
        </ul>
      </div>
      <div className="fixed bottom-0 w-full">
        <Footer />
      </div>
    </div>
  );
}
