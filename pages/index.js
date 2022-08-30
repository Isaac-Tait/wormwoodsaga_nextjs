import Link from 'next/link';
import Script from 'next/script';

import { getPosts } from '../lib/posts';

import Footer from '../components/Footer';
import Header from '../components/Header';

const Index = (props) => (
  <div className="heropattern-leaf-neutral-100 h-screen">
    <Script
      src="https://unpkg.com/@tryghost/portal@latest/umd/portal.min.js"
      data-ghost="https://wormwood-saga.ghost.io/"
    />
    <div>
      <Header />
    </div>
    <div className="max-w-6xl mx-auto bg-slate-200 rounded-xl">
      <ul className="pl-2">
        {props.posts.map((post) => (
          <li key={post.id}>
            <Link href={`/posts/${post.slug}`}>
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

export default Index;

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
