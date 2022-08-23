import React, { useState, useEffect } from "react";
import BlogPostsData from "../../data/BlogPostsData";
import BlogPosts from "./BlogPosts";

const Blog = () => {
  const postsPerPage = 10;
  const PostStorage = [];
  const [postsToShow, setPostsToShow] = useState([]);
  const [count, setCount] = useState(1);
  const loopThroughPosts = (count) => {
    for (
      // let i = count * postsPerPage - postsPerPage;
      let i = 0;
      i < postsPerPage * count;
      i++
    ) {
      if (BlogPostsData[i] !== undefined) {
        PostStorage.push(BlogPostsData[i]);
      }
    }
    setPostsToShow(PostStorage);
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
