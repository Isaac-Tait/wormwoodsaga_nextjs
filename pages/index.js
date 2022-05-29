import { getPosts } from '../lib/posts';
import Link from 'next/link';

import Footer from '../component/Footer';

const Index = (props) => (
  <div>
    <div className="max-w-6xl mx-auto bg-slate-300">
      <h1 className="text-3xl font-semibold">Wormwood Saga</h1>
      <ul>
        {props.posts.map((post) => (
          <li key={post.id}>
            <Link href={`/posts/${post.slug}`}>
              <a>{post.title}</a>
            </Link>
          </li>
        ))}
      </ul>
    </div>
    <Footer />
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
