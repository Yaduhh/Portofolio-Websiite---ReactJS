import React from "react";
import { MdNavigateNext } from "react-icons/md";

const Layanan = ({ logo, title, desc, shouldUseImage }) => {
  return (
    <>
      <div className="w-full max-w-sm flex flex-col bg-primary/30 backdrop-blur-sm p-6 md:p-8 rounded-2xl outline outline-1 outline-secondary shadow-inner shadow-white/30 space-y-3">
        <div>
          {shouldUseImage ? (
            <img src={logo} alt="Logo" className="w-14 h-12" loading="lazy" />
          ) : (
            logo // Logo dari React Icons
          )}
        </div>
        <h1 className="text-2xl font-semibold underline-offset-8 underline">
          {title}
        </h1>
        <p className="text-sm pt-2">{desc}</p>

        <button className="justify-end flex items-center gap-2 font-light text-sm text-secondary hover:text-accent">
          Lihat{" "}
          <span>
            <MdNavigateNext />
          </span>
        </button>
      </div>
    </>
  );
};

export default Layanan;
