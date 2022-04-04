import React from "react";
import { NavLink } from "react-router-dom";
import { Link } from "react-router-dom";
//Images
import Facebook from "../images/facebook-icon.png";
import Instagram from "../images/instagram-icon.png";
import Twitter from "../images/twitter-icon.png";
const ResetLocation = () => window.scrollTo(0, 0);

function SideMenu() {
  return (
    <div className="flex flex-col min-h-screen col-span-1 items-center">
      <div className="flex flex-col items-center fixed mt-60 font-titlefont text-2xl gap-5 text-slate-600">
        <h1 className="text-3xl text-center uppercase text-black">
          Travel with<br></br>
          <span className="font-semibold font-namefont">Catherine</span>
        </h1>
        <NavLink
          className="hover:text-blue-600 smooth-transition text-xl"
          to="/travel-with-catherine"
          onClick={ResetLocation}
        >
          Gallery
        </NavLink>
        <NavLink
          className="hover:text-blue-600 smooth-transition text-xl"
          to="/blog"
          onClick={ResetLocation}
        >
          Blog
        </NavLink>
        <NavLink
          className="hover:text-blue-600 smooth-transition text-xl"
          to="/about"
          onClick={ResetLocation}
        >
          About
        </NavLink>
        <NavLink
          className="hover:text-blue-600 smooth-transition text-xl"
          to="/contact"
          onClick={ResetLocation}
        >
          Contact
        </NavLink>
        <section className="flex flex-row gap-3">
          <a href="https://www.facebook.com/" target="_blank"
            rel="noopener noreferrer">
            <img
              className="w-6 h-6	max-w-full"
              src={Facebook}
              alt="Facebook icon"
            ></img>
          </a>
          <a href="https://www.instagram.com/" target="_blank"
            rel="noopener noreferrer">
            <img
              className="w-6 h-6	max-w-full"
              src={Instagram}
              alt="Instagram icon"
            ></img>
          </a>
          <a href="https://twitter.com/" target="_blank"
            rel="noopener noreferrer">
            <img
              className="w-6 h-6	max-w-full"
              src={Twitter}
              alt="Twitter icon"
            ></img>
          </a>
        </section>
        <p className="text-sm">&copy; 2022 by Catherine</p>
      </div>
    </div>
  );
}

export default SideMenu;
