import React from "react";
import { FaAngleRight } from "react-icons/fa6";
import { LazyLoadImage } from "react-lazy-load-image-component";
import "react-lazy-load-image-component/src/effects/blur.css";

const Card = ({
  title,
  date,
  desc,
  accent,
  images,
  alamat,
  logo1,
  logo2,
  logo3,
}) => {
  return (
    <>
      <div className="relative px-6 py-5 z-0 w-full overflow-hidden flex flex-col hover:text-secondary duration-200 gap-5 max-h-96 min-h-96 h-full rounded-2xl max-w-xs bg-black/30 backdrop-blur outline shadow-inner shadow-secondary/30 outline-secondary outline-[0.5px] font-Montserrat hover:outline-third my-0.5">
        <div className="w-full bg-primary min-h-20 rounded-b-full relative flex justify-center items-center -mt-8 scale-110 border-[0.5px] border-secondary hover:border-[0.5px] hover:border-white duration-300">
          <LazyLoadImage
            src={images}
            width={80}
            height={80}
            alt={title}
            effect="blur"
            className="h-20 absolute rounded-full bg-primary top-1/2 border-[0.5px] border-secondary hover:border-[0.5px] hover:border-white duration-300"
          />
        </div>
        <p className="text-5xl absolute -rotate-12 bottom-20 -z-10 text-secondary/5 disabled cursor-default scale-150 blur-[3px]">
          {accent}
        </p>
        <div className="space-y-1 pt-10 text-center">
          <p className="text-xl">{title}</p>
          <div className="h-0.5 w-full rounded bg-primary"></div>
          <p className="text-secondary text-xs">{date}</p>
        </div>

        <p className="text-sm text-justify mt-0">{desc}</p>

        <div className="flex items-center justify-end absolute bottom-7 w-full right-7">
          <div className="flex items-center gap-2 absolute bottom-0 left-14">
            <div className="text-secondary">{logo1}</div>
            <div className="text-secondary">{logo2}</div>
            <div className="text-secondary">{logo3}</div>
          </div>
          <a
            href={alamat}
            target="_blank"
            rel="nofollow noreferrer"
            className="text-secondary text-sm font-light flex items-center gap-2 hover:text-white"
          >
            Lihat
            <FaAngleRight />
          </a>
        </div>
      </div>
    </>
  );
};

export default Card;
