import { AiOutlineArrowUp } from "react-icons/ai";

const Footer = () => {
  const useScroll = () => {
    window.scroll({ top: 0, left: 0, behavior: "smooth" });
  };

  return (
    <footer className={`sm:p-16 xs:p-8 px-6 py-12 relative`}>
      <div className="footer-gradient" />

      <div className={`2xl:max-w-[1280px] w-full mx-auto flex flex-col gap-8`}>
        <div className="flex items-center justify-center flex-col">
          <p className=" font-bold text-4xl my-8 text-center text-transparent bg-clip-text  bg-gradient-to-r from-[#ffcdc2] to-[#6057ca] hover:from-[#6057ca] hover:to-[#ffcdc2] transition duration-500 ease-in-out transform   md:text-5xl">
            Eliana Caro Suaza
          </p>
          <button type="button" onClick={useScroll}>
            <AiOutlineArrowUp
              className="text-gray-400 text-2xl animate-pulse"
              size={40}
            />
          </button>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
