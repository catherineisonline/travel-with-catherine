import BlogPosts from './BlogPosts'

const Blog = () => {
  return (
    <section className="sm:col-span-5 md:col-span-4 min-h-screen scrollbar-hide mt-2">
       <h2 className="text-4xl text-center uppercase text-black mt-6">Blog</h2>
      <BlogPosts />
    </section>
  )
}

export default Blog
