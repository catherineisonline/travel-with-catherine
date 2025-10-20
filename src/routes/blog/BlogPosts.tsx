import { Link } from "react-router-dom";
import BlogPostsData from "../../data/blog-posts";
import { resetLocation } from "../../helpers/resetLocation";

const BlogPosts = () => {
  return (
    <section className="gap-x-1 gap-y-5 grid sm:grid-cols-2 2xl:grid-cols-3 mx-auto w-full overflow-hidden rid-cols-1">
      {BlogPostsData.map((post) => (
        <div className="flex flex-col w-full aspect-[4/3] sm:aspect-square" key={post.id}>
          <img
            src={post.src}
            alt={post.alt}
            width="400"
            height="400"
            className="block hover:opacity-80 rounded-md w-full h-1/2 sm:h-full object-center object-cover smooth-transition smooth-transition cursor-pointer"
          />
          <div className="flex flex-col gap-1 sm:gap-4">
            <Link
              onClick={resetLocation}
              key={post.id}
              to={`/blog/${post.title.toLowerCase().replace(/\s/g, "%20")}`}
              className="text-black hover:text-blue-600 text-2xl capitalize smooth-transition">
              {post.title}
            </Link>
            <p className="text-md">{post.snippet}</p>
          </div>
        </div>
      ))}
    </section>
  );
};

export default BlogPosts;
