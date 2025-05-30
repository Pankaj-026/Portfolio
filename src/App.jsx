import { Routes, Route } from "react-router-dom";
import Hero from "./pages/Hero";
import About from "./pages/About";
import Projects from "./pages/Projects";
import Contact from "./pages/Contact";
import NotFound from "./pages/NotFound"; // 404 Page
import "./styles/App.css";
import { Outlet } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Skills from "./pages/Skills";

function Layout() {
  return (
    <>
      <Header />
      <Outlet /> 
      <Footer />
    </>
  );
}



export default function App() {
  return (
    <div className="min-h-screen bg-[#001021] text-white">
      <Routes>
        {/* Home page with everything */}
        <Route path="/" element={<Layout />}>
          <Route index element={<Hero />} />
          <Route path="home" element={<Hero />} />
          <Route path="skills" element={<Skills />} />
          <Route path="about" element={<About />} />
          <Route path="projects" element={<Projects />} />
          <Route path="contact" element={<Contact />} />
          <Route path="notFound" element={<NotFound />} />
        </Route>

        {/* 404 Not Found Page */}
        <Route path="*" element={<NotFound />} />
      </Routes>
    </div>
  );
}
