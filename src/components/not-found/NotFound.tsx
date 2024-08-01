import { useEffect } from "react";

const NotFound = () => {
    useEffect(() => {
        document.title = "404 | Travel with Catherine";
      })
  return(  <article className="flex flex-col min-h-screen sm:col-span-5 md:col-span-4 items-center justify-center">
     <h2 className="text-4xl text-center uppercase text-black mt-6">404</h2>
        <p className="text-center  sm:text-lg ">The page you are looking for cannot be found!</p>
    </article>)
}

export default NotFound;