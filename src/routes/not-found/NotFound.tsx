import { useEffect } from "react";

const NotFound = () => {
  useEffect(() => {
    document.title = "404 | Travel with Catherine";
  });
  return (
    <article className="flex flex-col justify-center items-center sm:col-span-5 md:col-span-4 min-h-screen">
      <h2 className="mt-6 text-black text-4xl text-center uppercase">404</h2>
      <p className="sm:text-lg text-center">The page you are looking for cannot be found!</p>
    </article>
  );
};

export default NotFound;
