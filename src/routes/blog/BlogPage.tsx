import { useEffect } from "react";
import BlogPosts from "./BlogPosts";

const BlogPage = () => {
  useEffect(() => {
    document.title = "Blog | Travel with Catherine";
  });
  return (
    <section className="col-span-5 md:col-span-4 p-2 min-h-screen scrollbar-hide">
      <h2 className="mt-6 text-black text-4xl text-center uppercase">Blog</h2>
      <BlogPosts />
    </section>
  );
};

export default BlogPage;
