interface ImagesProp {
  imagesToShow: imagesToShow[]
}

export type imagesToShow = {
  id: number
  src: string
  alt: string
}

const Images = ({ imagesToShow }: ImagesProp) => {
  return (
    <section className="image-list grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3  gap-1 mx-auto overflow-hidden w-full ">
      {imagesToShow.map((img, index) => (
        <section className="card-zoom" key={index}>
          <img src={img.src} alt={img.alt} className="card-zoom-image" />
        </section>
      ))}
    </section>
  )
}

export default Images
