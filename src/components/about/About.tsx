import React from "react";
import ImgOne from "../../images/gallery-one/image-29.jpeg";
import ImgTwo from "../../images/gallery-one/image-59.jpeg";
import ImgThree from "../../images/gallery-one/image-79.jpeg";
import ImgFour from "../../images/gallery-one/image-99.jpeg";

const About = () => {
  return (
    <article className="flex flex-col min-h-screen col-span-2 items-center p-5">
      <section className="flex flex-col items-center mt-20 text-2xl gap-5 text-slate-600">
        <h2 className="text-5xl text-center uppercase text-black">About</h2>
        <p className="text-base w-full sm:text-lg sm:w-9/12">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam
          ultrices odio ac dui bibendum semper. Nunc id massa justo. Maecenas
          interdum rutrum justo, et vehicula urna dignissim nec. Suspendisse
          quis ante non lorem dapibus dapibus et vel lectus. Donec sed dui sed
          mi volutpat ultricies eget vitae nunc. Aenean vestibulum quam vel
          euismod auctor. Sed tempus tellus a ex sodales mollis. Fusce erat leo,
          hendrerit id augue ut, interdum lacinia leo. Fusce pellentesque ex
          lectus, sit amet elementum libero dignissim sed. Pellentesque posuere
          eros a orci volutpat egestas. Fusce eleifend sem vitae mi scelerisque
          ultricies. Quisque a diam purus. Sed sit amet massa augue. Donec
          tristique quis leo eu rutrum. Praesent consectetur luctus lorem ac
          congue. Nam fermentum, lacus id fermentum placerat, ex magna mattis
          velit, sit amet eleifend massa purus sed arcu. Donec pulvinar, nisl
          non rhoncus facilisis, enim neque posuere felis, a mollis augue nisl
          id est. Nunc pulvinar, felis ac tempus pretium, enim magna vestibulum
          odio, ultricies molestie diam eros sed quam. Vestibulum non blandit
          ipsum. Fusce condimentum orci quis ante rutrum malesuada. Vestibulum
          ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia
          curae; Vestibulum sit amet ipsum sit amet eros suscipit lobortis.
          Vivamus quis massa et arcu commodo porttitor. Aliquam semper odio ac
          varius faucibus. Nam at libero in libero suscipit maximus. Phasellus
          at pharetra quam. Donec id placerat lorem, in blandit diam. Nunc
          cursus massa nec nisi tempor, in ullamcorper urna tristique. Maecenas
          risus ligula, semper non magna eget, malesuada varius dolor.
        </p>
      </section>
      <section className="flex flex-col sm:flex-row gap-1 p-8 ">
        <section>
          <img
            className="max-w-full w-56 h-52 object-cover	"
            src={ImgOne}
            alt=""
          ></img>
          <p className="font-bold">Gudauri, Kazbegi</p>
        </section>
        <section>
          <img
            className="max-w-full w-56 h-52 object-cover	"
            src={ImgTwo}
            alt=""
          ></img>
          <p className="font-bold">Sighnaghi, Kakheti</p>
        </section>
        <section>
          <img
            className="max-w-full w-56 h-52 object-cover	"
            src={ImgThree}
            alt=""
          ></img>
          <p className="font-bold">Stepantsminda, Kazbegi</p>
        </section>
        <section>
          <img
            className="max-w-full w-56 h-52 object-cover	"
            src={ImgFour}
            alt=""
          ></img>
          <p className="font-bold">Batumi, Adjara</p>
        </section>
      </section>
    </article>
  );
};

export default About;
