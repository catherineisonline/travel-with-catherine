import React, { useEffect } from "react";
import BlogPostsData from "../../data/blog-posts";
import { postObj } from "../../types/interfaces";

const BlogPostPage = () => {
  const [post, setPost] = React.useState<postObj | null>(null);

  const findPost = (pathId: string) => {
    setPost(BlogPostsData.filter((post) => post.title.toLowerCase() === pathId)[0]);
  };

  useEffect(() => {
    if (post) {
      document.title = `${post.title} | Travel with Catherine`;
    }
    findPost(window.location.pathname.toString().substring(6).replaceAll("%20", " "));
  }, [post]);
  return (
    <article className="col-span-5 md:col-span-4 mb-6 p-2 min-h-screen scrollbar-hide">
      <h2 className="mt-6 text-black text-4xl text-center uppercase">Blog</h2>
      {post && (
        <section className="flex flex-col w-[700px] aspect-[7/4]">
          <img
            src={post.src}
            alt={post.alt}
            width="700"
            height="500"
            className="block w-full h-full object-center object-cover smooth-transition"
          />
          <h2 className="text-black text-4xl capitalize">{post.title}</h2>
          <section>
            {post.article.split("<br>").map((text, key) => {
              return <p key={key}>{text}</p>;
            })}
          </section>
        </section>
      )}
    </article>
  );
};

export default BlogPostPage;
