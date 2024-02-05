import React from "react";
import { FiPenTool } from "react-icons/fi";
import { AiOutlineAntDesign } from "react-icons/ai";
import { BiSolidVideos } from "react-icons/bi";
import { BsGlobeAsiaAustralia } from "react-icons/bs";

const All = () => {
  return (
    <>
      <div className="w-full h-full flex-none space-y-5">
        <div className="bg-primary outline outline-secondary outline-[1.5px] w-full h-auto p-8 rounded-2xl flex items-center gap-2 justify-center ">
          <BsGlobeAsiaAustralia />
          <p>Website</p>
        </div>
        <div className="w-full rounded-2xl flex grow gap-5">
          <div className="p-8 outline-secondary outline-[1.5px] outline bg-primary w-full h-full rounded-2xl flex items-center justify-center gap-2">
            <FiPenTool />
            <p>Design</p>
          </div>
          <div className="p-8 outline-secondary outline-[1.5px] outline bg-primary w-full h-full rounded-2xl flex items-center justify-center gap-2">
            <AiOutlineAntDesign />
            <p>UI/UX</p>
          </div>
        </div>
        <div className="bg-primary outline outline-secondary outline-[1.5px] w-full h-auto p-8 rounded-2xl flex items-center gap-2 justify-center ">
          <BiSolidVideos />
          <p>Video</p>
        </div>
      </div>
    </>
  );
};

export default All;
