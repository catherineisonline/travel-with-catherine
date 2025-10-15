import { ImagesProp } from "../../types/interfaces";

const Images = ({ imagesToShow, toggle, setModalImg }: ImagesProp) => {
  return (
    <section className="gap-1 grid sm:grid-cols-1 md:grid-cols-2 2xl:grid-cols-3 mx-auto w-full overflow-hidden image-list">
      {imagesToShow.map((img, index) => (
        <section className="card-zoom" key={index}>
          <img
            onClick={() => {
              toggle();
              setModalImg(index);
            }}
            src={img.src}
            alt={img.alt}
            className="card-zoom-image"
          />
        </section>
      ))}
    </section>
  );
};

export default Images;
