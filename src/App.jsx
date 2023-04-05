import { useState } from "react";

import { BrowserRouter, Route, Routes } from "react-router-dom";

import Astralic from "@/components/categorys/Astralic";
import Dyel from "@/components/categorys/Dyel";
import Gelam from "@/components/categorys/Gelam";
import Fajas from "@/components/categorys/Fajas";
import Home from "@/components/Home";
import Header from "@/components/Header";
import Hero from "@/components/Hero";

function App() {
  const [isMenuShown, setIsMenuShown] = useState(false);

  return (
    <>
      {/* <Navbar isMenuShown={isMenuShown} setIsMenuShown={setIsMenuShown} /> */}
      {/* <HeroSection isMenuShown={isMenuShown} /> */}

      <BrowserRouter>
        <Header />
        <Hero />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/gelam" element={<Gelam />} />
          <Route path="/dyel" element={<Dyel />} />
          <Route path="/astralic" element={<Astralic />} />
          <Route path="/fajas" element={<Fajas />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
