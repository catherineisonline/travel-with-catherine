import React from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import reportWebVitals from "./reportWebVitals";
//Components
import MainPage from "./components/MainPage";
import SideMenu from "./components/SideMenu";
import Blog from "./components/Blog";
import About from "./components/About";
import Contact from "./components/Contact";
//Styles
import "./index.css";

const container = document.getElementById("root");
const root = createRoot(container);
root.render(
  <React.StrictMode>
    <Router>
      <SideMenu />
      <Routes>
        <Route path="/travel-with-catherine" element={<MainPage />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </Router>
  </React.StrictMode>
);

reportWebVitals();
