import Github from "../../assets/images/socials/github.svg";
import Linkedin from "../../assets/images/socials/linkedin.svg";
import Portfolio from "../../assets/images/socials/portfolio.png";

const Socials = () => {
  return (
    <section className="flex flex-row gap-3">
      <a href="https://github.com/catherineisonline/travel-with-catherine" target="_blank" rel="noopener noreferrer">
        <img className="w-6 max-w-full h-6" src={Github} alt="Github icon" loading="lazy" />
      </a>
      <a href="https://www.linkedin.com/in/catherinemitagvaria/" target="_blank" rel="noopener noreferrer">
        <img className="w-6 max-w-full h-6" src={Linkedin} alt="Linkedin icon" loading="lazy" />
      </a>
      <a href="https://ekaterine-mitagvaria.vercel.app/" target="_blank" rel="noopener noreferrer">
        <img className="w-6 max-w-full h-6" src={Portfolio} alt="Portfolio icon" loading="lazy" />
      </a>
    </section>
  );
};

export default Socials;
