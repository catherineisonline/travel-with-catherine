import React from "react";
import { NavLink } from "react-router-dom";

function About() {
  return (
    <div className="flex flex-col min-h-screen col-span-1 items-center">
      <div className="flex flex-col items-center fixed mt-60 font-titlefont text-2xl gap-5 text-slate-600">
        <h1 className="text-4xl text-center uppercase text-black">
          Travel with<br></br>{" "}
          <span className="font-semibold font-namefont">Catherine</span>
        </h1>
        <NavLink to="/travel-with-catherine">Gallery</NavLink>
        <NavLink to="/about">About</NavLink>
        <NavLink to="/contact">Contact</NavLink>
      </div>
    </div>
  );
}

export default About;
