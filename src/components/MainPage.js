import React from "react";
import GalleryOne from "./GalleryOne";

function MainPage() {
  return (
    <article className="col-span-2 min-h-screen scrollbar-hide">
      <section className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3  xl:grid-cols-4 gap-1 mx-auto justify-items-center overflow-hidden">
        {GalleryOne.map((img, index) => (
          <img
            key={index}
            src={img.src}
            alt=""
            className=" h-full w-full block object-cover cursor-pointer hover:scale-125 hover:border-2 smooth-transition"
          ></img>
        ))}
      </section>
    </article>
  );
}

export default MainPage;
