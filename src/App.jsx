import { Routes, Route } from "react-router-dom";
import Hero from "./pages/Hero";
import About from "./pages/About";
import Projects from "./pages/Projects";
import Contact from "./pages/Contact";
import NotFound from "./pages/NotFound"; // 404 Page
import Header from "./components/Header";
import Footer from "./components/footer";
import "./styles/App.css";

export default function App() {
  return (
    <div className="min-h-screen bg-[#001021] text-white">
      <Routes>
        {/* Hero Page (Only Hero, No Header/Footer) */}
        <Route path="/" element={<Hero />} />

        {/* Pages with Header & Footer */}
        <Route
          element={
            <>
              <Header />
              <Routes>
                <Route path="/about" element={<About />} />
                <Route path="/projects" element={<Projects />} />
                <Route path="/contact" element={<Contact />} />
              </Routes>
              <Footer />
            </>
          }
        />

        {/* 404 Not Found Page */}
        <Route path="*" element={<NotFound />} />
      </Routes>
    </div>
  );
}
