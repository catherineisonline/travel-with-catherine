import React, { useState, useEffect } from "react";
import BlogPosts from "./BlogPosts";

const Posts = ({ RenderedPosts }) => {
  return (
    <section className="grid sm:grid-cols-1 md:grid-cols-2  gap-1 mx-auto  justify-items-stretch overflow-hidden  w-10/12">
      {RenderedPosts.reverse().map((post, index) => (
        <section className="grid grid-cols-1 gap-1 mt-20">
          <img
            key={index}
            src={post.src}
            alt=""
            className="w-full h-80 block object-cover cursor-pointer smooth-transition hover:opacity-80 smooth-transition"
          ></img>
          <h2 className="text-2xl uppercase text-black">{post.title}</h2>
          <p className="text-md">{post.snippet}</p>
        </section>
      ))}
    </section>
  );
};

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
      if (BlogPosts[i] !== undefined) {
        PostStorage.push(BlogPosts[i]);
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
      <Posts RenderedPosts={postsToShow} />
      <section className="flex flex-col items-center w-full">
        <button
          onClick={showMore}
          className="my-5 shadow font-mainfont bg-transparent hover:text-white hover:bg-blue-400 smooth-transition focus:shadow-outline focus:outline-none text-black py-4 px-4 rounded text-lg uppercase w-5/12 smooth-transition"
        >
          Load More
        </button>
      </section>
    </section>
  );
};

export default Blog;
