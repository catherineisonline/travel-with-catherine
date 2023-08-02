import { Link } from 'react-router-dom'
import BlogPostsData from '../../data/BlogPostsData'
import ResetLocation from '../../helpers/ResetLocation';

const BlogPosts = () => {
  return (
    <section className="grid sm:grid-cols-1 md:grid-cols-2  gap-2 mx-auto  justify-items-stretch overflow-hidden mt-2">
      {BlogPostsData.map((post) => (
        <section className="grid grid-cols-1 gap-2 h-1/5" key={post.id}>
          <img
            src={post.src}
            alt={post.alt}
            className="rounded-md w-full sm:h-96 md:h-64 block object-cover object-center cursor-pointer smooth-transition hover:opacity-80 smooth-transition "
          />
          <Link
          onClick={ResetLocation}
          key={post.id} to={`/blog/${post.title.toLowerCase().replace(/\s/g, "%20")}`} className="text-2xl capitalize text-black dno-underline hover:text-blue-600 smooth-transition">{post.title}</Link>
          
          <p className="text-md">{post.snippet}</p>
        </section>
      ))}
    </section>
  )
}

export default BlogPosts
