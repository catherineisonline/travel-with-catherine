interface ImagesProp {
  imagesToShow: imagesToShow[];
}

export type imagesToShow = {
  srcMobile: string;
  src: string;
};

const Images = ({ imagesToShow }: ImagesProp) => {
  return (
    <section className="image-list grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3  gap-1 mx-auto justify-items-center overflow-hidden w-full ">
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

export default Images;
