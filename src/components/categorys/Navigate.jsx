import React from "react";
import { Link } from "react-router-dom";

const Navigate = () => {
  const useScroll = () => {
    window.scroll({ top: 1425, left: 0, behavior: "smooth" });
  };
  return (
    <div className="flex  lg:flex-row p-5 mb-12 gap-5 items-center justify-center ">
      <Link to="/gelam" onClick={useScroll}>
        <div className="w-16 text-center rounded-3xl shadow-lg shadow-[#6057ca] hover:scale-105 duration-200  px-6 p-3 cursor-pointer  ">
          {/* <img
            src={logoGelam}
            alt="contact us"
            className="object-cover w-16 h-16   "
          /> */}
          1
        </div>
      </Link>
      <Link to="/dyel" onClick={useScroll}>
        <div className="w-16 text-center  rounded-3xl shadow-lg shadow-[#6057ca] hover:scale-105 duration-200  px-6 p-3 cursor-pointer  ">
          {/* <img
            src={logoGelam}
            alt="contact us"
            className="object-cover w-16 h-16   "
          /> */}
          2
        </div>
      </Link>
      <Link to="/astralic" onClick={useScroll}>
        <div className="w-16 text-center  rounded-3xl shadow-lg shadow-[#6057ca] hover:scale-105 duration-200  px-6 p-3 cursor-pointer ">
          {/* <img
            src={logoGelam}
            alt="contact us"
            className="object-cover w-16 h-16  "
          /> */}
          3
        </div>
      </Link>
      <Link to="/fajas" onClick={useScroll}>
        <div className="w-16 text-center   rounded-3xl shadow-lg shadow-[#6057ca] hover:scale-105 duration-200  px-6 p-3 cursor-pointer">
          {/* <img
            src={logoGelam}
            alt="contact us"
            className="object-cover w-16 h-16 "
          /> */}
          4
        </div>
      </Link>
    </div>
  );
};

export default Navigate;
