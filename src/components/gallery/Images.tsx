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
    <section className="image-list  grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3  gap-1 mx-auto justify-items-center overflow-hidden w-full ">
      {imagesToShow.map((img) => (
        <section className="card-zoom" key={img.id}>
          <img src={img.src} alt={img.alt} className="card-zoom-image"></img>
        </section>
      ))}
    </section>
  )
}

export default Images
