import React from "react";
import { GoPlay } from "react-icons/go";
import { BiSolidVideos } from "react-icons/bi";
import { SiAdobeaftereffects } from "react-icons/si";
import { SiAdobepremierepro } from "react-icons/si";
import Placeholderimage from "../placeholderimage/placeholderimage";

const Videos = ({ images, url }) => {
  return (
    <>
      <div className="relative overflow-hidden z-0 w-auto h-[195px] md:max-w-[426px] md:w-full md:min-w-[426px] md:max-h-[240] md:min-h-[240px] md:h-full bg-black/20 outline-secondary outline-[1.5px] outline rounded-xl md:rounded-2xl flex flex-col justify-center items-center hover:text-white text-secondary duration-200 hover:shadow-xl hover:shadow-secondary/30">
        <div className="absolute inset-0 -z-10">
          <Placeholderimage
            src={images}
            alt="ads"
            className="w-full hover:scale-125 duration-1000 ease-out"
          />
        </div>
        <BiSolidVideos size={20} className="absolute top-5 left-5" />
        <a
          href={url}
          className="flex items-center gap-2 hover:text-white cursor-pointer"
          target="_blank"
          rel="nofollow noreferrer"
        >
          <GoPlay />
          <p>Lihat Video</p>
        </a>

        <div className="flex items-center absolute bottom-5 left-5 gap-2 text-sm">
          <p>Made with</p>
          <SiAdobepremierepro />
          <SiAdobeaftereffects />
        </div>
      </div>
    </>
  );
};

export default Videos;
