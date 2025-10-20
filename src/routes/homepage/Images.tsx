import { ImagesProp } from "../../types/interfaces";

const Images = ({ currentImages, toggle, handleSliderImg }: ImagesProp) => {
  return (
    <section className="gap-1 grid grid-cols-2 2xl:grid-cols-3 mx-auto w-full overflow-hidden">
      {currentImages.map((img, index) => (
        <div className="group relative flex rounded-md w-full aspect-square overflow-hidden" key={index}>
          <img
            onClick={() => {
              toggle();
              handleSliderImg(img.id);
            }}
            src={img.src}
            alt={img.alt}
            width="400"
            height="300"
            className="absolute inset-0 shadow-sm w-full h-full object-center object-cover group-hover:scale-150 transition-all duration-500 ease-in-out cursor-pointer transform"
          />
        </div>
      ))}
    </section>
  );
};

export default Images;
