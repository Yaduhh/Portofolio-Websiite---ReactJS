import React from "react";
import { FaFigma } from "react-icons/fa";

const Uiux = ({ title, desc, images, url }) => {
  return (
    <>
      <div className="overflow-hidden max-w-[284px] w-full min-h-[402px] h-full bg-black/30 rounded-2xl p-8 outline outline-secondary hover:outline-secondary/30 duration-200 relative z-0 flex flex-col justify-center items-center">
        <div className="absolute inset-0 -z-10">
          <img
            src={images}
            loading="lazy"
            alt={title}
            className="w-full hover:scale-110 duration-500 ease-out"
          />
        </div>
        <p className="underline underline-offset-8 pt-20 text-lg font-semibold pointer-events-none">
          {title}
        </p>
        <p className="pt-1 text-sm text-center pointer-events-none">{desc}</p>
        <a
          href={url}
          target="_blank"
          rel="nofollow noreferrer"
          className="px-5 py-1.5 rounded-full bg-secondary text-primary hover:text-white hover:bg-primary duration-300 font-medium text-sm absolute bottom-8"
        >
          Open Figma
        </a>
        <div className="flex items-center text-secondary absolute top-4 left-4 gap-1">
          <FaFigma size={20} />
          <p className="font-semibold">Figma</p>
        </div>
      </div>
    </>
  );
};

export default Uiux;
