import React, { useEffect } from "react";
//Data
import BlogPostsData from "../../data/BlogPostsData";

export interface postObj {
  id: number;
  src: string;
  title: string;
  alt: string;
  snippet: string;
  article: string;
}


const BlogPost = () => {
  const [post, setPost] = React.useState<postObj>({
    id: 0,
    src: '',
    title: '',
    alt: '',
    snippet: '',
    article: '',
  })

  const findPost = (pathId: string) =>{
  setPost(BlogPostsData.filter((post) => post.title.toLowerCase() === pathId)[0]);
  }

  useEffect(() => {
    document.title = `${post.title} | Travel with Catherine`;
    findPost(window.location.pathname.toString().substring(6).replaceAll('%20', ' '))
  },[post])
    return (
      <article className="sm:col-span-5 md:col-span-4 min-h-screen scrollbar-hide p-2 mb-6">
         <h2 className="text-4xl text-center uppercase text-black mt-6">Blog</h2>
      <section className="flex flex-col min-h-screen items-center gap-4">
        <img
            src={post.src}
            alt={post.alt}
            className=" w-full sm:h-96 md:h-64 block object-cover object-center cursor-pointer smooth-transition hover:opacity-80 smooth-transition "
          />
        <h2 className="text-4xl capitalize text-black dno-underline">{post.title}</h2>
        <section>
        {post.article.split("<br>").map((text,key) => {
            return <p key={key}>{text}</p>;
        })}
        </section>
      </section>
         </article>
    )
  }
  
  export default BlogPost