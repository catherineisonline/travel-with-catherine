import React, { useState, useEffect } from "react";
import GalleryOne from "../../data/GalleryOne";

const Images = ({ imagesToShow }) => {
  return (
    <section className="image-list grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3  xl:grid-cols-4 gap-1 mx-auto justify-items-center overflow-hidden w-full ">
      {imagesToShow.map((img, index) => (
        <img
          key={index}
          src={img.srcMobile}
          srcSet={`${img.srcMobile} 300w, ${img.src} 900w`}
          sizes="(min-width: 660px) 300px, 100vw"
          alt=""
          className=" h-full w-full block object-cover cursor-pointer hover:scale-125 hover:border-2 smooth-transition"
        ></img>
      ))}
    </section>
  );
};

const MainPage = () => {
  const imagesPerPage = 10;
  const ImageStorage = [];
  const [imagesToShow, setImagesToShow] = useState([]);
  const [count, setCount] = useState(1);

  const loopThroughImages = (count) => {
    for (let i = 0; i < imagesPerPage * count; i++) {
      if (GalleryOne[i] !== undefined) {
        ImageStorage.push(GalleryOne[i]);
      }
    }
    const randomStr = Math.random().toString(32).slice(2) + Date.now();
    window.usePreloadImagesData = window.usePreloadImagesData ?? {};
    window.usePreloadImagesData[randomStr] = [];
    for (const src of ImageStorage) {
      const img = new Image();
      img.src = src;
      window.usePreloadImagesData[randomStr].push(img);
    }

    setImagesToShow(ImageStorage);
  };
  useEffect(() => {
    setCount((prevCount) => prevCount + 1);
    loopThroughImages(count);

    // return () => {
    //   delete window.usePreloadImagesData?.[randomStr];
    // };
  }, []);

  const showMore = () => {
    setCount((prevCount) => prevCount + 1);
    loopThroughImages(count);
  };

  return (
    <article className="col-span-2 min-h-screen scrollbar-hide">
      <Images imagesToShow={imagesToShow} />
      <section className="flex flex-col items-center w-full">
        <button
          onClick={showMore}
          className="my-5 shadow font-mainfont bg-transparent hover:text-white hover:bg-blue-400 smooth-transition focus:shadow-outline focus:outline-none text-black py-4 px-4 rounded text-lg uppercase w-12/12 md:w-6/12 smooth-transition"
        >
          Load More
        </button>
      </section>
    </article>
  );
};

export default MainPage;
