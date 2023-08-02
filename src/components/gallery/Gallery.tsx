import { useState, useEffect } from 'react'
import GalleryData from '../../data/GalleryData.js'
import ReactPaginate from 'react-paginate';
import Images from './Images'
import ResetLocation from '../../helpers/ResetLocation';

const Gallery = () => {
  const [itemOffset, setItemOffset] = useState(0);
  const [endOffset, setEndOffset] = useState(itemOffset + 12);
  const [currentBlogPosts, setcurrentBlogPosts] = useState([...GalleryData].reverse().slice(itemOffset, endOffset));

  const handlePageClick = (event: any) => {
    setItemOffset((event.selected * 12) % GalleryData.length);
    ResetLocation();
  };

  useEffect(() => {
    document.title = "Blog | Pizza Time";
    setEndOffset(itemOffset + 12);
    setcurrentBlogPosts([...GalleryData].slice(itemOffset, endOffset));
  }, [setEndOffset, endOffset, itemOffset]);
  
  return (
    <article className="sm:col-span-5 md:col-span-4 min-h-screen scrollbar-hide">
      <Images imagesToShow={currentBlogPosts} />
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
    </article>
  )
}

export default Gallery
