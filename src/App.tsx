import "./core-ui/index.css";
import { FC } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HomePage from "./routes/homepage/HomePage";
import SideMenu from "./components/renameTemp/SideMenu";
import Blog from "./routes/blog/BlogPage";
import About from "./routes/about/About";
import Contact from "./routes/contact/ContactPage";
import BlogPost from "./routes/blog-post/BlogPost";
import NotFound from "./routes/not-found/NotFound";

const App: FC = () => {
  return (
    <Router>
      <SideMenu />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/blog/:title" element={<BlogPost />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </Router>
  );
};

export default App;
