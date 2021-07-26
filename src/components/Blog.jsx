import { Link, Route, useRouteMatch } from "react-router-dom";
import Post from "./Post";

const blogPosts = [
  {
    title: "Blog post #1",
    content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit."
  },
  {
    title: "Blog post #2",
    content: "Maecenas consequat sagittis orci quis accumsan."
  },
  {
    title: "Blog post #3",
    content:
      "Curabitur fringilla, risus dignissim egestas elementum, leo sapien pretium est, quis imperdiet eros orci et ligula."
  }
];

const Blog = () => {
  const { url } = useRouteMatch();
  return (
    <>
      <h1>This is the Blog Page</h1>
      <nav>
        {blogPosts.map((post, index) => (
          <>
            <Link to={`${url}/${index}`}>{post.title}</Link>
            <br />
          </>
        ))}
      </nav>
      <Route path={`${url}/:id`}>
        <Post posts={blogPosts} />
      </Route>
    </>
  );
};

export default Blog;
