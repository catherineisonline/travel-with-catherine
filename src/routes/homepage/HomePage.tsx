import "react-slideshow-image/dist/styles.css";
import { useState, useEffect, useMemo } from "react";
import GalleryData from "../../data/gallery";
import ReactPaginate from "react-paginate";
import Images from "./Images";
import { paginationEvent } from "../../types/interfaces";
import { resetLocation } from "../../helpers/resetLocation";

const HomePage = () => {
  const [itemOffset, setItemOffset] = useState(0);
  const [isModalOpen, setisModalOpen] = useState(false);
  const [sliderIndex, setSliderIndex] = useState(0);
  const pageCount = Math.ceil(GalleryData.length / 12);
  const endOffset = itemOffset + 12;
  const sliderImage = GalleryData[sliderIndex];
  const currentImages = useMemo(() => GalleryData.slice(itemOffset, endOffset), [itemOffset, endOffset]);

  const handleSliderImg = (id: number) => {
    const index = GalleryData.findIndex((val) => val.id === id);
    setSliderIndex(index);
  };
  const handleNextClick = () => {
    if (sliderIndex === GalleryData.length) {
      setSliderIndex(0);
    } else {
      setSliderIndex((prev) => (prev + 1) % GalleryData.length);
    }
  };

  const handlePrevClick = () => {
    if (sliderIndex === 0) {
      setSliderIndex(GalleryData.length - 1);
    } else {
      setSliderIndex((prev) => (prev - 1) % GalleryData.length);
    }
  };

  const handlePageClick = (event: paginationEvent) => {
    const selected = event.selected;
    if (selected >= 0) {
      setItemOffset(selected * 12);
      resetLocation();
    }
  };

  const toggle = () => {
    setisModalOpen((prev) => !prev);
  };

  useEffect(() => {
    document.title = "Gallery | Travel with Catherine";
  }, []);

  return (
    <article className="col-span-5 md:col-span-4 min-h-screen scrollbar-hide">
      <Images currentImages={currentImages} toggle={toggle} handleSliderImg={handleSliderImg} />
      <section className="flex flex-col items-center w-full">
        <ReactPaginate
          className="pagination"
          breakLabel="..."
          nextLabel=" &#62;"
          onPageChange={handlePageClick}
          pageRangeDisplayed={3}
          pageCount={pageCount}
          previousLabel="&#60;"
        />
      </section>
      {isModalOpen && (
        <section className="img-modal w-screen h-screen fixed z-30 top-0 left-0 flex  justify-center bg-rgba(255, 255, 255, .15) backdrop-blur-sm">
          <button
            onClick={toggle}
            className="top-4 right-4 z-40 absolute flex justify-center items-center bg-black p-2 rounded-full w-10 h-10 font-bold text-gray-200 text-2xl hover:-rotate-90 transition duration-500">
            X
          </button>
          <button
            onClick={handlePrevClick}
            className="top-1/2 left-8 z-40 absolute flex justify-center items-center bg-black hover:bg-opacity-75 p-6 rounded-full w-10 h-10 font-bold text-gray-200 text-xl transition"
            data-type="prev">
            &lt;
          </button>
          <section className="relative flex items-center w-4/5 slider-container">
            <img
              key={sliderImage.id}
              className={`slider-slide ${
                sliderImage ? "active" : "hidden"
              } object-cover object-center w-full sm:h-2/3 md:h-3/4`}
              src={sliderImage.src}
              alt={sliderImage.alt}
            />
          </section>
          <button
            onClick={handleNextClick}
            className="top-1/2 right-8 z-40 absolute flex justify-center items-center bg-black hover:bg-opacity-75 p-6 rounded-full w-10 h-10 font-bold text-gray-200 text-xl transition"
            data-type="next">
            &gt;
          </button>
        </section>
      )}
    </article>
  );
};

export default HomePage;
