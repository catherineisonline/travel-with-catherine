import { useState, useEffect } from 'react'
import GalleryData from '../../data/GalleryData.js'
import ReactPaginate from 'react-paginate';
import Images from './Images'
import ResetLocation from '../../helpers/ResetLocation';
import { Slide } from 'react-slideshow-image';
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


  const handlePageClick = (event: any) => {
    setItemOffset((event.selected * 12) % GalleryData.length);
    ResetLocation();
  };

  const toggle = () => {
    setisOpen(!isOpen);
  };

  const setModalImg = (imgIndex: number)=>  {
    console.log(imgIndex);
  }

  useEffect(() => {
    document.title = "Gallery | Travel with Catherine";
    setEndOffset(itemOffset + 12);
    setcurrentBlogPosts([...GalleryData].slice(itemOffset, endOffset));
  }, [setEndOffset, endOffset, itemOffset]);

  return (
    <article className="sm:col-span-5 md:col-span-4 min-h-screen scrollbar-hide">
      <Images imagesToShow={currentBlogPosts} toggle={toggle} setModalImg={setModalImg}/>
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
       <section className="img-modal w-screen h-screen fixed z-30 top-0 left-0 flex flex-col content-center items-center bg-rgba(255, 255, 255, .15) backdrop-blur-sm">
          <button onClick={toggle} className="absolute text-2xl text-gray-200 text-bold p-2 bg-black rounded-full	w-10 h-10 right-4 top-4 flex items-center justify-center hover:-rotate-90 transition-all duration-500	">X</button>
        <Slide>
          {GalleryData.map((img, index) => (
            <img key={index} src={img.src} alt='' className='w-full object-cover h-72' />
          ))}
        </Slide>
        </section> :
        null}
    </article>
  )
}

export default Gallery
