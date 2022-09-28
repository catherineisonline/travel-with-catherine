import Facebook from "../../images/facebook-icon.png";
import Instagram from "../../images/instagram-icon.png";
import Twitter from "../../images/twitter-icon.png";
const Socials = () => {
  return (
    <section className="flex flex-row gap-3">
      <a
        href="https://www.facebook.com/"
        target="_blank"
        rel="noopener noreferrer"
      >
        <img
          className="w-6 h-6	max-w-full"
          src={Facebook}
          alt="Facebook icon"
        ></img>
      </a>
      <a
        href="https://www.instagram.com/"
        target="_blank"
        rel="noopener noreferrer"
      >
        <img
          className="w-6 h-6	max-w-full"
          src={Instagram}
          alt="Instagram icon"
        ></img>
      </a>
      <a href="https://twitter.com/" target="_blank" rel="noopener noreferrer">
        <img
          className="w-6 h-6	max-w-full"
          src={Twitter}
          alt="Twitter icon"
        ></img>
      </a>
    </section>
  );
};

export default Socials;
