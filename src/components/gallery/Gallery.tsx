import  { useState, useEffect, useCallback } from 'react'
import GalleryData from '../../data/GalleryData';
import ReactPaginate from 'react-paginate';
import Images from './Images'
import ResetLocation from '../../helpers/ResetLocation';
import 'react-slideshow-image/dist/styles.css'

export type imagesToShow = {
  id: number
  src: string
  alt: string
}

export interface ImagesProp {
  imagesToShow: imagesToShow[]
  toggle: () => void;
  setModalImg: (imgIndex: number) => void;

}

const Gallery = () => {
  
  const [itemOffset, setItemOffset] = useState(0);
  const [endOffset, setEndOffset] = useState(itemOffset + 12);
  const [currentBlogPosts, setcurrentBlogPosts] = useState([...GalleryData].slice(itemOffset, endOffset));
  const [isOpen, setisOpen] = useState(false);
  const [targetImg, setTargetImg] = useState(0);

  const handleNextClick = useCallback(() => {
    setTargetImg((prevImg) => (prevImg + 1) % currentBlogPosts.length);
  }, [currentBlogPosts.length]);

  const handlePrevClick = useCallback(() => {
    setTargetImg((prevImg) => (prevImg - 1 + currentBlogPosts.length) % currentBlogPosts.length);
  }, [currentBlogPosts.length]);


  const handlePageClick = (event: any) => {
    setItemOffset((event.selected * 12) % GalleryData.length);
    ResetLocation();
  };

  const toggle = () => {
    setisOpen(!isOpen);
  };

  const setModalImg = (imgIndex: number) => {
    setTargetImg(imgIndex);
  }

  useEffect(() => {
    document.title = "Gallery | Travel with Catherine";
    setEndOffset(itemOffset + 12);
    setcurrentBlogPosts([...GalleryData].slice(itemOffset, endOffset));
  }, [setEndOffset, endOffset, itemOffset]);


    useEffect(() => {
      const handleClick = (event: MouseEvent) => {
        const target = event.target as Element;
        const nextBtn = target.getAttribute('data-type') === 'next';
        const prevBtn = target.getAttribute('data-type') === 'prev';
    
        if (nextBtn) {
          handleNextClick();
        }
        if (prevBtn) {
          handlePrevClick();
        }
      };
    
      window.addEventListener('click', handleClick);
    
      return () => {
        // Clean up the event listener when the component unmounts
        window.removeEventListener('click', handleClick);
      };
    }, [handleNextClick, handlePrevClick]);
    
  return (
    <article className="sm:col-span-5 md:col-span-4 min-h-screen scrollbar-hide">
      <Images imagesToShow={currentBlogPosts} toggle={toggle} setModalImg={setModalImg} />
      <section className="flex flex-col items-center w-full">
        <ReactPaginate
          className="pagination"
          breakLabel="..."
          nextLabel=" &#62;"
          onPageChange={handlePageClick}
          pageRangeDisplayed={3}
          pageCount={Math.ceil(GalleryData.length / 12)}
          previousLabel="&#60;"
        />
      </section>
      {isOpen ?
        //Modal
        <section className={`img-modal w-screen h-screen fixed z-30 top-0 left-0 flex  justify-center bg-rgba(255, 255, 255, .15) backdrop-blur-sm ${isOpen ? 'flex' : 'hidden'}`}>
        <button onClick={toggle} className="absolute flex items-center justify-center z-40 text-2xl text-gray-200 text-bold p-2 bg-black rounded-full w-10 h-10 right-4 top-4 hover:-rotate-90 transition duration-500">
          X
        </button>
        <button
          onClick={handlePrevClick}
          className="absolute flex items-center justify-center z-40 left-8 top-1/2 text-xl text-gray-200 text-bold p-6 bg-black rounded-full w-10 h-10 hover:bg-opacity-75 transition"
          data-type="prev"
        >
          &lt;
        </button>
        <section className="slider-container relative w-4/5 flex items-center">
          {currentBlogPosts.map((image, index) => (
            <img
              key={image.id}
              className={`slider-slide ${targetImg === index ? 'active' : 'hidden'} object-cover object-center w-full sm:h-2/3 md:h-3/4`}
              src={image.src}
              alt=''
            />
          ))}
        </section>
        <button
          onClick={handleNextClick}
          className="absolute z-40 flex items-center justify-center right-8 top-1/2 text-xl text-gray-200 text-bold p-6 bg-black rounded-full w-10 h-10 hover:bg-opacity-75 transition"
          data-type="next"
        >
          &gt;
        </button>
      </section>
       :
        null}
    </article>
  )
}

export default Gallery
