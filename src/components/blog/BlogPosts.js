const BlogPosts = (props) => {
  return (
    <section className="grid sm:grid-cols-1 md:grid-cols-2  gap-1 mx-auto  justify-items-stretch overflow-hidden  w-10/12">
      {props.postsToShow.reverse().map((post, index) => (
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

export default BlogPosts;
