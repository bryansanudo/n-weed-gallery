import { useState } from "react";

import { BrowserRouter, Route, Routes } from "react-router-dom";

import Astralic from "@/components/categorys/Astralic";
import Dyel from "@/components/categorys/Dyel";
import Gelam from "@/components/categorys/Gelam";
import Fajas from "@/components/categorys/Fajas";
import Home from "@/components/Home";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Footer from "@/components/Footer";

function App() {
  const [isMenuShown, setIsMenuShown] = useState(false);
  const [darkMode, setDarkMode] = useState(false);

  return (
    <div className={darkMode && "dark"}>
      {/* <Navbar isMenuShown={isMenuShown} setIsMenuShown={setIsMenuShown} /> */}
      {/* <HeroSection isMenuShown={isMenuShown} /> */}
      <Header darkMode={darkMode} setDarkMode={setDarkMode} />

      <main className="bg-white dark:bg-gray-900 text-gray-900 dark:text-white">
        <Hero />
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/gelam" element={<Gelam />} />
            <Route path="/dyel" element={<Dyel />} />
            <Route path="/astralic" element={<Astralic />} />
            <Route path="/fajas" element={<Fajas />} />
          </Routes>
        </BrowserRouter>
        <Footer />
      </main>
    </div>
  );
}

export default App;
