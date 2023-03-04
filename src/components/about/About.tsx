import ImgOne from '../../assets/images/gallery/image-29.jpeg'
import ImgTwo from '../../assets/images/gallery/image-59.jpeg'
import ImgThree from '../../assets/images/gallery/image-79.jpeg'
import ImgFour from '../../assets/images/gallery/image-99.jpeg'

const About = () => {
  return (
    <article className="flex flex-col min-h-screen col-span-2 items-center p-5">
      <section className="flex flex-col items-center mt-10 text-2xl gap-5 text-slate-600">
        <h2 className="text-5xl text-center uppercase text-black">About</h2>
        <p className="text-base  sm:text-lg ">
          Georgia is a country located in the Caucasus region of Eurasia. It is
          bordered by Russia to the north and northeast, Turkey and Armenia to
          the south, and Azerbaijan to the east. The capital and largest city of
          Georgia is Tbilisi. The official language is Georgian and the currency
          is the Lari. Georgia has a rich cultural heritage, with a history that
          dates back over 3,000 years. The country is known for its traditional
          music, dance, and cuisine, as well as its ancient Christian churches
          and monasteries.
          The country is also known for its wine-making
          traditions which are ancient, and wine culture is an important part of
          Georgian culture. Georgia has a semi-presidential representative
          democratic republic form of government. The President of Georgia is
          the head of state and the Prime Minister is the head of government.
          The country has a unicameral parliament called the Sakartvelos
          Parlamenti. Georgia has a diverse landscape that ranges from the snowy
          peaks of the Greater Caucasus Mountains to the subtropical Black Sea
          coast. 
          The country has a diverse range of flora and fauna, including
          many endemic species. It's also well-known for its mineral water
          springs, and is a popular destination for tourists looking for hiking,
          skiing, and other outdoor activities.
        </p>
      </section>
      <section className="flex flex-col sm:flex-row gap-1 p-8 ">
        <section>
          <img
            className="max-w-full w-56 h-52 object-cover	"
            src={ImgOne}
            alt="Gudauri"
          />
          <p className="font-bold">Gudauri</p>
        </section>
        <section>
          <img
            className="max-w-full w-56 h-52 object-cover	"
            src={ImgTwo}
            alt="Sighnaghi"
          />
          <p className="font-bold">Sighnaghi</p>
        </section>
        <section>
          <img
            className="max-w-full w-56 h-52 object-cover	"
            src={ImgThree}
            alt="Stepantsminda"
          />
          <p className="font-bold">Stepantsminda</p>
        </section>
        <section>
          <img
            className="max-w-full w-56 h-52 object-cover	"
            src={ImgFour}
            alt="Batumi"
          />
          <p className="font-bold">Batumi</p>
        </section>
      </section>
    </article>
  )
}

export default About
