import { Link } from "react-router-dom";
import BlogPostsData from "../../data/BlogPostsData";
import ResetLocation from "../../helpers/ResetLocation";

const BlogPosts = () => {
  return (
    <section className="justify-items-stretch gap-2 grid sm:grid-cols-1 md:grid-cols-2 mx-auto mt-2 overflow-hidden">
      {BlogPostsData.map((post) => (
        <section className="gap-2 grid grid-cols-1 h-1/5" key={post.id}>
          <img
            src={post.src}
            alt={post.alt}
            className="block hover:opacity-80 rounded-md w-full sm:h-96 md:h-64 object-center object-cover smooth-transition smooth-transition cursor-pointer"
          />
          <Link
            onClick={ResetLocation}
            key={post.id}
            to={`/blog/${post.title.toLowerCase().replace(/\s/g, "%20")}`}
            className="text-black hover:text-blue-600 text-2xl dno-underline capitalize smooth-transition">
            {post.title}
          </Link>

          <p className="text-md">{post.snippet}</p>
        </section>
      ))}
    </section>
  );
};

export default BlogPosts;
