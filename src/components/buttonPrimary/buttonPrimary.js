import React from "react";

const ButtonPrimary = ({ title, icons }) => {
  return (
    <>
      <button className="flex items-center backdrop-blur-sm px-7 md:px-10 py-2.5 rounded-full text-primary font-semibold bg-gradient-to-tr from-secondary to-accent hover:from-accent hover:to-secondary duration-200 hover:tracking-widest">
        <div>{title}</div>
        <div className="ml-3">{icons}</div>
      </button>
    </>
  );
};

export default ButtonPrimary;
