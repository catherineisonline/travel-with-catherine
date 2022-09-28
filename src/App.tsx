import { FC } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
//Components
import Gallery from "./components/gallery/Gallery";
import SideMenu from "./components/sideMenu/SideMenu";
import Blog from "./components/blog/Blog";
import About from "./components/about/About";
import Contact from "./components/contact/Contact";
//Styles
import "./index.css";

const App: FC = () => {
  return (
    <Router>
      <SideMenu />
      <Routes>
        <Route path="/travel-with-catherine" element={<Gallery />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </Router>
  );
};

export default App;
