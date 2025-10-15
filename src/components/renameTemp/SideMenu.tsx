import { useRef, useState } from "react";
import { NavLink } from "react-router-dom";
import hiddenMenuIcon from "../../assets/images/burger-passive.png";
import activeMenuIcon from "../../assets/images/burger-active.png";
import Socials from "./Socials";
import CSS from "csstype";

const activeMenuStyles: CSS.Properties = {
  textDecoration: "none",
  color: "rgb(37, 99, 235)",
};

const SideMenu = () => {
  const [hiddenMenu, setHiddenMenu] = useState<boolean>(true);
  const ref = useRef<HTMLImageElement>(null);

  function ToggleMenu() {
    setHiddenMenu(!hiddenMenu);
  }
  function RemoveMenu() {
    setHiddenMenu(true);
    window.scrollTo(0, 0);
  }

  return (
    <header className="absolute sm:relative flex flex-col items-center sm:col-span-1 md:col-span-2 min-h-screen">
      <img
        className="md:hidden z-50 fixed mt-3 ml-12 sm:ml-2 w-10 cursor-pointer burger-icon"
        onClick={ToggleMenu}
        ref={ref}
        src={hiddenMenu ? hiddenMenuIcon : activeMenuIcon}
        alt="Toggle menu"
      />
      <nav
        className={`main-menu${
          hiddenMenu ? `` : ` show-menu`
        } flex-col items-center fixed mt-60 text-2xl gap-5 text-slate-600 hidden md:flex`}>
        <h1 className="font-light text-black sm:text-xl md:text-3xl text-center uppercase">
          Travel with<br></br>
          <span className="font-namefont font-semibold text-5xl">Catherine</span>
        </h1>
        <NavLink
          className="hover:text-blue-600 text-xl smooth-transition"
          to="/"
          onClick={() => {
            RemoveMenu();
          }}>
          Gallery
        </NavLink>
        <NavLink
          className="hover:text-blue-600 text-xl smooth-transition"
          to="/blog"
          onClick={() => {
            RemoveMenu();
          }}
          style={({ isActive }) => (isActive ? activeMenuStyles : {})}>
          Blog
        </NavLink>
        <NavLink
          className="hover:text-blue-600 text-xl smooth-transition"
          to="/about"
          onClick={() => {
            RemoveMenu();
          }}
          style={({ isActive }) => (isActive ? activeMenuStyles : {})}>
          About
        </NavLink>
        <NavLink
          className="hover:text-blue-600 text-xl smooth-transition"
          to="/contact"
          onClick={() => {
            RemoveMenu();
          }}
          style={({ isActive }) => (isActive ? activeMenuStyles : {})}>
          Contact
        </NavLink>
        <Socials />
        <p className="text-sm">
          &copy; 2022-<span>{new Date().getFullYear()}</span>
        </p>
      </nav>
    </header>
  );
};

export default SideMenu;
