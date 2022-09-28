import { useState, useEffect } from "react";
import GalleryOne from "../../data/GalleryOne";
import { imagesToShow } from "./Images";
import Images from "./Images";

const Gallery = () => {
  const [imageStorage, setImageStrorage] = useState<imagesToShow[]>([]);
  const [count, setCount] = useState<number>(1);

  const loopThroughImages = (count: number = 1) => {
    for (let i = 0; i < 10 * count; i++) {
      setImageStrorage((prevArr: imagesToShow[]) => [
        ...prevArr,
        GalleryOne[i],
      ]);
    }
  };
  const showMore = () => {
    setCount((prevCount) => prevCount + 1);
    loopThroughImages(count);
  };
  useEffect(() => {
    loopThroughImages(1);
  }, []);

  return (
    <article className="col-span-2 min-h-screen scrollbar-hide">
      <Images imagesToShow={imageStorage} />
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

export default Gallery;
