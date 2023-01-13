import { useRef, useState } from 'react'
import { NavLink } from 'react-router-dom'
import Burger from '../../images/burger-menu.png'
import Socials from './Socials'
import CSS from 'csstype'

const activeMenuStyles: CSS.Properties = {
  textDecoration: 'none',
  color: 'rgb(37, 99, 235)',
}

const SideMenu = () => {
  const [hiddenMenu, setHiddenMenu] = useState<boolean>(true)
  const ref = useRef<HTMLImageElement>(null)

  function ToggleMenu() {
    hiddenMenu ? setHiddenMenu(false) : setHiddenMenu(true)
  }
  function RemoveMenu() {
    setHiddenMenu(true)
    window.scrollTo(0, 0)
  }

  return (
    <header className="sm:relative flex flex-col min-h-screen col-span-1 items-center absolute">
      <img
        className="burger-icon w-10 fixed cursor-pointer sm:hidden z-50 ml-6"
        onClick={ToggleMenu}
        ref={ref}
        src={Burger}
        alt=""
        aria-hidden="true"
      />
      <nav
        className={`main-menu${
          hiddenMenu ? `` : ` show-menu`
        } flex-col items-center fixed mt-60 text-2xl gap-5 text-slate-600 hidden sm:flex`}
      >
        <h1 className="sm:text-xl md:text-3xl text-center uppercase text-black font-light">
          Travel with<br></br>
          <span className="font-semibold font-namefont">Catherine</span>
        </h1>
        <NavLink
          className="hover:text-blue-600 smooth-transition text-xl"
          to="/travel-with-catherine"
          onClick={() => {
            RemoveMenu()
          }}
        >
          Gallery
        </NavLink>
        <NavLink
          className="hover:text-blue-600 smooth-transition text-xl"
          to="/blog"
          onClick={() => {
            RemoveMenu()
          }}
          style={({ isActive }) => (isActive ? activeMenuStyles : {})}
        >
          Blog
        </NavLink>
        <NavLink
          className="hover:text-blue-600 smooth-transition text-xl"
          to="/about"
          onClick={() => {
            RemoveMenu()
          }}
          style={({ isActive }) => (isActive ? activeMenuStyles : {})}
        >
          About
        </NavLink>
        <NavLink
          className="hover:text-blue-600 smooth-transition text-xl"
          to="/contact"
          onClick={() => {
            RemoveMenu()
          }}
          style={({ isActive }) => (isActive ? activeMenuStyles : {})}
        >
          Contact
        </NavLink>
        <Socials />
        <a
          className="text-sm"
          href="https://github.com/catherineisonline/travel-with-catherine"
          target="_blank"
          rel="noreferrer"
        >
          &copy; 2022-2023 by Catherine
        </a>
      </nav>
    </header>
  )
}

export default SideMenu
