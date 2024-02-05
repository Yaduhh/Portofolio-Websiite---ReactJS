import React from "react";
import { IoOpenOutline } from "react-icons/io5";

const Toplist = ({ images, title, desc, customLink }) => {
  const handleLinkClick = (e) => {
    e.preventDefault();
    const newTab = window.open(customLink, "_blank");
    newTab.focus();
  };

  return (
    <>
      <div className="bg-black/40 h-56 rounded-3xl w-full max-w-xs flex flex-col justify-center items-center relative z-0 hover:border-2 hover:border-secondary border-2 border-transparent">
        <div className="absolute -top-1/4 hover:-top-1/3 duration-150">
          <img
            src={images}
            alt="toplist"
            className="w-28 h-28 rounded-full border-secondary border-2"
          />
        </div>
        <div className="-mt-10 text-center tracking-wide">
          <h5 className="font-medium uppercase">{title}</h5>
          <p className="text-sm text-secondary">{desc}</p>
        </div>

        <a
          href={customLink}
          onClick={handleLinkClick} // Menambahkan event onClick
          className="bg-secondary gap-2 flex justify-center items-start hover:bg-secondary/30 text-center text-primary hover:text-white duration-150 w-full rounded-2xl absolute bottom-0 py-7 z-10 cursor-pointer"
        >
          Lihat{" "}
          <span>
            <IoOpenOutline size={20} />
          </span>
        </a>
      </div>
    </>
  );
};

export default Toplist;
