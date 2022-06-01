import { getPosts } from '../lib/posts';
import Link from 'next/link';

import Footer from '../components/Footer';

const Index = (props) => (
  <div className="heropattern-leaf-neutral-100 h-screen">
    <h1 className="text-3xl font-semibold">Wormwood Saga</h1>
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
