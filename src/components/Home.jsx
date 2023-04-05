import React from "react";

import Navigate from "@/components/categorys/Navigate";

const Home = () => {
  return (
    <div className="max-w-screen-xl mx-auto h-fit">
      <div className="my-10 mx-8 text-center lg:text-left">
        {/*  <h1 className="text-4xl lg:text-5xl text-center">
          ¡Bienvenidos a Gel<span className="text-[#7abd22]">am </span>
          Bienestar!
        </h1>
        <p className="my-4 text-center">
          Estás buscando los potenciadores perfectos para tus rutinas de
          entreno?
        </p>
        <p className="my-4 text-center">
          Nuestros productos son 100% naturales y contamos con registro Invima.
        </p>
        <p className="my-4 text-center">
          ¡No esperes más y compra tus suplementos! Mira nuestra amplia
          selección de productos.
        </p> */}

        <Navigate />
      </div>
    </div>
  );
};

export default Home;
