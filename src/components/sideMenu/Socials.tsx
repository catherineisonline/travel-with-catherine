import Github from "../../images/socials/github.svg";
import Linkedin from "../../images/socials/linkedin.svg";
import Portfolio from "../../images/socials/portfolio.png";
const Socials = () => {
  return (
    <section className="flex flex-row gap-3">
      <a
        href="https://github.com/catherineisonline/travel-with-catherine"
        target="_blank"
        rel="noopener noreferrer"
      >
        <img className="w-6 h-6	max-w-full" src={Github} alt="Github icon"></img>
      </a>
      <a
        href="https://www.linkedin.com/in/catherinemitagvaria/"
        target="_blank"
        rel="noopener noreferrer"
      >
        <img
          className="w-6 h-6	max-w-full"
          src={Linkedin}
          alt="Linkedin icon"
        ></img>
      </a>
      <a
        href="https://ekaterine-mitagvaria.vercel.app/"
        target="_blank"
        rel="noopener noreferrer"
      >
        <img
          className="w-6 h-6	max-w-full"
          src={Portfolio}
          alt="Portfolio icon"
        ></img>
      </a>
    </section>
  );
};

export default Socials;
