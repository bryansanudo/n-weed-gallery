import React from "react";

import { AiOutlineArrowUp } from "react-icons/ai";

import IconInstagram from "@/icons/IconInstagram";

import Home from "@/components/Home";

const Dyel = () => {
  const portfolios = [
    {
      id: 1,
      src: "https://i.ibb.co/KXGxRJ4/l1.jpg",
      category: "@elianacaro12",
      codeInstagram: "https://www.instagram.com/elianacaro12/",
      codeWpp: "https://api.whatsapp.com/send?phone=573045571083",
    },
    {
      id: 2,
      src: "https://i.ibb.co/jTB2fGQ/l2.jpg",
      category: "@elianacaro12",
      codeInstagram: "https://www.instagram.com/elianacaro12/",
      codeWpp: "https://api.whatsapp.com/send?phone=573045571083",
    },
    {
      id: 3,
      src: "https://i.ibb.co/DRh41Jh/l3.jpg",
      category: "@elianacaro12",
      codeInstagram: "https://www.instagram.com/elianacaro12/",
      codeWpp: "https://api.whatsapp.com/send?phone=573045571083",
    },
    {
      id: 4,
      src: "https://i.ibb.co/gzNKNc1/l4.jpg",
      category: "@elianacaro12",
      codeInstagram: "https://www.instagram.com/elianacaro12/",
      codeWpp: "https://api.whatsapp.com/send?phone=573045571083",
    },
    {
      id: 5,
      src: "https://i.ibb.co/vQBvQMD/l5.jpg",
      category: "@elianacaro12",
      codeInstagram: "https://www.instagram.com/elianacaro12/",
      codeWpp: "https://api.whatsapp.com/send?phone=573045571083",
    },
    {
      id: 6,
      src: "https://i.ibb.co/F6jxcDn/l6.jpg",
      category: "@elianacaro12",
      codeInstagram: "https://www.instagram.com/elianacaro12/",
      codeWpp: "https://api.whatsapp.com/send?phone=573045571083",
    },
    {
      id: 7,
      src: "https://i.ibb.co/HB7YZmH/l7.jpg",
      category: "@elianacaro12",
      codeInstagram: "https://www.instagram.com/elianacaro12/",
      codeWpp: "https://api.whatsapp.com/send?phone=573045571083",
    },
    {
      id: 8,
      src: "https://i.ibb.co/ncPp2Vy/l8.jpg",
      category: "@elianacaro12",
      codeInstagram: "https://www.instagram.com/elianacaro12/",
      codeWpp: "https://api.whatsapp.com/send?phone=573045571083",
    },
    {
      id: 9,
      src: "https://i.ibb.co/Nxqsq8q/l9.jpg",
      category: "@elianacaro12",
      codeInstagram: "https://www.instagram.com/elianacaro12/",
      codeWpp: "https://api.whatsapp.com/send?phone=573045571083",
    },
    {
      id: 10,
      src: "https://i.ibb.co/t84M1mC/l10.jpg",
      category: "@elianacaro12",
      codeInstagram: "https://www.instagram.com/elianacaro12/",
      codeWpp: "https://api.whatsapp.com/send?phone=573045571083",
    },
    {
      id: 11,
      src: "https://i.ibb.co/TkrVyBJ/l11.jpg",
      category: "@elianacaro12",
      codeInstagram: "https://www.instagram.com/elianacaro12/",
      codeWpp: "https://api.whatsapp.com/send?phone=573045571083",
    },
    {
      id: 12,
      src: "https://i.ibb.co/zrwmCDm/l12.jpg",
      category: "@elianacaro12",
      codeInstagram: "https://www.instagram.com/elianacaro12/",
      codeWpp: "https://api.whatsapp.com/send?phone=573045571083",
    },
    /* {
      id: 13,
      src: "https://i.ibb.co/Prsn65x/l13.jpg",
      category: "@elianacaro12",
      codeInstagram: "https://www.instagram.com/elianacaro12/",
      codeWpp: "https://api.whatsapp.com/send?phone=573045571083",
    }, */
  ];

  const useScroll = () => {
    window.scroll({ top: 580, left: 0, behavior: "smooth" });
  };

  return (
    <div className="max-w-screen-xl mx-auto h-fit">
      <Home />

      <div className="my-10 mx-8 text-center lg:text-center lg:border-black">
        <div className="w-full bg-gradient-to-b from-gray-800 to-black text-white mt-12">
          <div className="mx-auto flex h-full w-full max-w-screen-lg flex-col justify-center p-4 ">
            <div className="grid gap-8 md:px-12 grid-cols-1 sm:grid-cols-2  lg:grid-cols-2">
              {/* {portfolios.map(
                ({ id, src, codeInstagram, category, codeWpp }) => (
                  <div
                    key={id}
                    className="rounded-lg shadow-lg shadow-[#c36501] group"
                  >
                    <div className="flex flex-col items-center justify-center">
                      <video
                        autoPlay
                        src={video2}
                        loop
                        type="video/mp4"
                        playsInline
                        muted
                        className="h-[330px] md:h-[500px]  w-full  object-cover rounded-t-xl"
                      />
                      <p className="m-4 capitalize text-sm md:text-lg">
                        {category}
                      </p>
                      <div className="flex gap-5">
                        <p>Beneficios del producto</p>
                      </div>
                      <div className="m-4 capitalize text-sm md:text-lg flex items-center justify-center gap-5">
                        <article className="group-hover:scale-125 duration-300">
                          <a
                            href={codeInstagram}
                            target="_blank"
                            rel="noreferrer"
                          >
                            <IconInstagram />
                          </a>
                        </article>
                      </div>
                    </div>
                  </div>
                )
              )} */}
              {portfolios.map(
                ({ id, src, codeInstagram, category, codeWpp }) => (
                  <div
                    key={id}
                    className="rounded-lg shadow-lg shadow-[#ffcdc2] "
                  >
                    <div className="flex flex-col items-center justify-center">
                      <img
                        src={src}
                        className="h-[330px] md:h-[500px]  w-full  object-cover rounded-t-xl "
                      />

                      <div className="m-4 capitalize text-sm md:text-lg flex items-center justify-center gap-5">
                        <article className="flex hover:scale-125 duration-300">
                          <a
                            href={codeInstagram}
                            target="_blank"
                            rel="noreferrer"
                          >
                            <div className="flex gap-2 m-4 capitalize text-sm md:text-lg">
                              {category}
                              <IconInstagram />
                            </div>
                          </a>
                        </article>
                      </div>
                    </div>
                  </div>
                )
              )}
            </div>
            <button
              onClick={useScroll}
              className="flex items-center justify-center mt-10"
            >
              <AiOutlineArrowUp className="text-[#ffcdc2] " size={40} />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dyel;
