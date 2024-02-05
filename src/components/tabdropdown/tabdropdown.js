import React from "react";
import { IoMdArrowDropdown } from "react-icons/io";

const Tabdropdown = ({ activeTab, setActiveTab }) => {
  return (
    <>
      <div className="w-full relative">
        <select
          className="block w-full px-4 py-3 bg-primary text-white focus:outline-none focus:bg-primary border border-secondary rounded-2xl appearance-none"
          value={activeTab}
          onChange={(e) => setActiveTab(parseInt(e.target.value))}
        >
          <option value={1}>ALL</option>
          <option value={2}>UI/UX</option>
          <option value={3}>WEB DEVELOPMENT</option>
          <option value={4}>VIDEOS</option>
          <option value={5}>DESIGN</option>
        </select>
        <IoMdArrowDropdown
          size={30}
          className="text-secondary absolute right-4 top-1/2 transform -translate-y-1/2"
        />
      </div>
    </>
  );
};

export default Tabdropdown;
