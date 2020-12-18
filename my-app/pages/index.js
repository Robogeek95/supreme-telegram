import { getPosts } from "./api/posts";
import Link from "next/link";

const Home = (props) => (
  <div style={{ margin: "50px" }}>
    {props.posts.map((post) => (
      <Link href={`/[slug]`} as={`/${post.slug}`}>
        <div
          style={{
            background: "grey",
            marginBottom: "20px",
            borderRadius: "5px",
            padding: "10px",
          }}
          key={post.id}
        >
          <h3>{post.title}</h3>

          <p>{post.excerpt}</p>
        </div>
      </Link>
    ))}
  </div>
);

Home.getInitialProps = async () => {
  const posts = await getPosts();
  return { posts: posts };
};

export default Home;