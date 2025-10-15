import React, { useEffect } from "react";
import BlogPostsData from "../../data/blog-posts";
import { postObj } from "../../types/interfaces";

const BlogPostPage = () => {
  const [post, setPost] = React.useState<postObj>({
    id: 0,
    src: "",
    title: "",
    alt: "",
    snippet: "",
    article: "",
  });

  const findPost = (pathId: string) => {
    setPost(BlogPostsData.filter((post) => post.title.toLowerCase() === pathId)[0]);
  };

  useEffect(() => {
    document.title = `${post.title} | Travel with Catherine`;
    findPost(window.location.pathname.toString().substring(6).replaceAll("%20", " "));
  }, [post]);
  return (
    <article className="col-span-5 md:col-span-4 mb-6 p-2 min-h-screen scrollbar-hide">
      <h2 className="mt-6 text-black text-4xl text-center uppercase">Blog</h2>
      <section className="flex flex-col items-center gap-4 min-h-screen">
        <img
          src={post.src}
          alt={post.alt}
          className="block hover:opacity-80 w-full sm:h-96 md:h-64 object-center object-cover smooth-transition smooth-transition cursor-pointer"
        />
        <h2 className="text-black text-4xl dno-underline capitalize">{post.title}</h2>
        <section>
          {post.article.split("<br>").map((text, key) => {
            return <p key={key}>{text}</p>;
          })}
        </section>
      </section>
    </article>
  );
};

export default BlogPostPage;
