import { useState, useEffect } from 'react'
import GalleryData from '../../data/GalleryData.js'
import ReactPaginate from 'react-paginate';
import Images from './Images'
import ResetLocation from '../../helpers/ResetLocation';

const Gallery = () => {
  const [itemOffset, setItemOffset] = useState(0);
  const [endOffset, setEndOffset] = useState(itemOffset + 12);
  const [currentBlogPosts, setcurrentBlogPosts] = useState([...GalleryData].reverse().slice(itemOffset, endOffset));
  const [pageCountPosts, setpageCountPosts] = useState(Math.ceil(GalleryData.length / 12));

  const handlePageClick = (event: any) => {
    const newOffset = (event.selected * 12) % GalleryData.length;
    setItemOffset(newOffset);
    ResetLocation();
  };

  useEffect(() => {
    document.title = "Blog | Pizza Time";
    setEndOffset(itemOffset + 12);
    setcurrentBlogPosts([...GalleryData].slice(itemOffset, endOffset));
    setpageCountPosts(Math.ceil(GalleryData.length / 12));

  }, [setEndOffset, endOffset, itemOffset]);
  
  return (
    <article className="col-span-2 min-h-screen scrollbar-hide">
      <Images imagesToShow={currentBlogPosts} />
      <section className="flex flex-col items-center w-full">
      <ReactPaginate
        className="pagination"
        breakLabel="..."
        nextLabel=" &#62;"
        onPageChange={handlePageClick}
        pageRangeDisplayed={3}
        pageCount={pageCountPosts}
        previousLabel="&#60;"
      />
      </section>
    </article>
  )
}

export default Gallery
