import { ImagesProp } from "../../types/interfaces";

const Images = ({ imagesToShow, toggle, setModalImg }: ImagesProp) => {
  return (
    <section className="gap-1 grid grid-cols-2 2xl:grid-cols-3 mx-auto w-full overflow-hidden image-list">
      {imagesToShow.map((img, index) => (
        <section className="group relative flex rounded-md w-full h-60 overflow-hidden" key={index}>
          <img
            onClick={() => {
              toggle();
              setModalImg(index);
            }}
            src={img.src}
            alt={img.alt}
            className="absolute shadow-sm w-full h-full object-center object-cover group-hover:scale-150 transition-all duration-500 ease-in-out cursor-pointer transform"
          />
        </section>
      ))}
    </section>
  );
};

export default Images;
