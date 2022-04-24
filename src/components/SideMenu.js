import React from "react";
import { NavLink } from "react-router-dom";
//Images
import Facebook from "../images/facebook-icon.png";
import Instagram from "../images/instagram-icon.png";
import Twitter from "../images/twitter-icon.png";
import Burger from "../images/burger-menu.png";
//Functions
const ResetLocation = () => window.scrollTo(0, 0);

function ToggleMenu() {
  const HiddenMenu = document.querySelector(".main-menu");
  HiddenMenu.classList.toggle("show-menu");
}

function RemoveMenu() {
  const HiddenMenu = document.querySelector(".main-menu");
  HiddenMenu.classList.remove("show-menu");
}

function SideMenu() {
  return (
    <article className="sm:relative flex flex-col min-h-screen col-span-1 items-center absolute">
      <section className="sm:hidden z-50">
        <img
          className="burger-icon w-max fixed cursor-pointer"
          onClick={ToggleMenu}
          src={Burger}
          alt=""
        ></img>
      </section>
      <section className="main-menu flex-col items-center fixed mt-60 font-titlefont text-2xl gap-5 text-slate-600 hidden sm:flex">
        <h1 className="sm:text-xl md:text-3xl text-center uppercase text-black">
          Travel with<br></br>
          <span className="font-semibold font-namefont">Catherine</span>
        </h1>
        <NavLink
          className="hover:text-blue-600 smooth-transition text-xl"
          to="/travel-with-catherine"
          onClick={() => {
            ResetLocation();
            RemoveMenu();
          }}
        >
          Gallery
        </NavLink>
        <NavLink
          className="hover:text-blue-600 smooth-transition text-xl"
          to="/blog"
          onClick={() => {
            ResetLocation();
            RemoveMenu();
          }}
          style={({ isActive }) =>
            isActive
              ? {
                  textDecoration: "none",
                  color: "rgb(37, 99, 235)",
                }
              : {}
          }
        >
          Blog
        </NavLink>
        <NavLink
          className="hover:text-blue-600 smooth-transition text-xl"
          to="/about"
          onClick={() => {
            ResetLocation();
            RemoveMenu();
          }}
          style={({ isActive }) =>
            isActive
              ? {
                  textDecoration: "none",
                  color: "rgb(37, 99, 235)",
                }
              : {}
          }
        >
          About
        </NavLink>
        <NavLink
          className="hover:text-blue-600 smooth-transition text-xl"
          to="/contact"
          onClick={() => {
            ResetLocation();
            RemoveMenu();
          }}
          style={({ isActive }) =>
            isActive
              ? {
                  textDecoration: "none",
                  color: "rgb(37, 99, 235)",
                }
              : {}
          }
        >
          Contact
        </NavLink>
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
          <a
            href="https://twitter.com/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              className="w-6 h-6	max-w-full"
              src={Twitter}
              alt="Twitter icon"
            ></img>
          </a>
        </section>
        <a
          className="text-sm"
          href="https://github.com/catherineisonline/travel-with-catherine"
          target="_blank"
          rel="noreferrer"
        >
          &copy; 2022 by Catherine
        </a>
      </section>
    </article>
  );
}

export default SideMenu;
