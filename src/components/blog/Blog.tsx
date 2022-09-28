import * as React from "react";
import { useState, useEffect } from "react";
import BlogPostsData from "../../data/BlogPostsData";
import BlogPosts from "./BlogPosts";

const Blog = () => {
  const postsPerPage: number = 10;
  // const PostStorage: string[] = [];
  const [postsStorage, setPostsStorage] = useState<any | null>(null);
  const [postsToShow, setPostsToShow] = useState<[]>([]);
  const [count, setCount] = useState<number>(1);
  const loopThroughPosts = (count: number) => {
    for (let i: number = 0; i < postsPerPage * count; i++) {
      if (BlogPostsData[i] !== undefined) {
        setPostsStorage((prevArr: any) => [...prevArr, BlogPostsData[i]]);
        // PostStorage.push(BlogPostsData[i]);
      }
    }
    setPostsToShow(postsStorage);
  };

  useEffect(() => {
    setCount((prevCount) => prevCount + 1);
    loopThroughPosts(count);
  }, []);

  const showMore = () => {
    setCount((prevCount) => prevCount + 1);
    loopThroughPosts(count);
  };

  return (
    <section className="col-span-2 min-h-screen scrollbar-hide mt-28">
      <BlogPosts postsToShow={postsToShow} />
      <section className="flex flex-col items-center w-full">
        <button
          onClick={showMore}
          className="my-5 shadow font-mainfont bg-transparent hover:text-white hover:bg-blue-400 smooth-transition focus:shadow-outline focus:outline-none text-black py-4 px-4 rounded text-lg uppercase w-12/12 md:w-6/12 smooth-transition"
        >
          Load More
        </button>
      </section>
    </section>
  );
};

export default Blog;
