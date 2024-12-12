import { ReactNode, useEffect, useState } from "react";
import { get } from "./util/https";
import BlogPosts, { BlogPost } from "./components/BlogPosts";
import fetchingImg from "./assets/data-fetching.png";

type RawDAtaBlogPost = {
  id: number;
  userId: number;
  title: string;
  body: string;
};

function App() {
  const [fetchedPosts, setFetchedPosts] = useState<BlogPost[]>();
  const [isFetching, setIsFetching] = useState(false);

  useEffect(() => {
    const fetchedPosts = async () => {
      setIsFetching(true);
      const data = (await get(
        "https://jsonplaceholder.typicode.com/posts"
      )) as RawDAtaBlogPost[];

      const blogPost: BlogPost[] = data.map((rawPost) => {
        return {
          id: rawPost.id,
          title: rawPost.title,
          text: rawPost.body,
        };
      });

      setIsFetching(false);
      setFetchedPosts(blogPost);
    };

    fetchedPosts();
  }, []);

  let content: ReactNode;

  if (fetchedPosts) {
    content = <BlogPosts posts={fetchedPosts} />;
  }

  if (isFetching) {
    content = <p id="loading-fallback">Fetching posts...</p>;
  }

  return (
    <main>
      <img src={fetchingImg} alt="data fetching" />
      {content}
    </main>
  );
}

export default App;
