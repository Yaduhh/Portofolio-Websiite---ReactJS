import React from "react";
import { MdEmail } from "react-icons/md";
import { TbBrandFiverr } from "react-icons/tb";
import { IoLogoWhatsapp } from "react-icons/io";
import { FaLinkedin, FaGithub } from "react-icons/fa";
import { AiFillInstagram } from "react-icons/ai";

const Footer = () => {
  const currentYear = new Date().getFullYear();
  return (
    <>
      <footer className="bg-primary text-white py-8 relative z-0 font-Montserrat">
        <div className="h-[0.5px] bg-secondary w-full absolute top-0"></div>
        <div className="px-6 md:px-16 flex flex-wrap justify-between w-full 2xl:px-32 2xl:justify-center">
          <div className="w-full md:w-[20%] mb-4 md:mb-0 flex flex-col justify-center items-center md:items-start">
            <h3 className="text-5xl tracking-wider font-semibold mb-4 hover:tracking-widest select-none duration-150">
              VEGAS.
            </h3>
            <div className="flex justify-start gap-6 text-secondary">
              <IoLogoWhatsapp
                size={30}
                className="hover:text-white hover:scale-105 duration-150"
              />
              <a
                href="www.linkedin.com/in/vegaanggara"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaLinkedin
                  size={30}
                  className="hover:text-white hover:scale-105 duration-150"
                />
              </a>
              <a
                href="https://www.instagram.com/las_vegaaas/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <AiFillInstagram
                  size={30}
                  className="hover:text-white hover:scale-105 duration-150"
                />
              </a>
              <a
                href="https://github.com/Yaduhh"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaGithub
                  size={30}
                  className="hover:text-white hover:scale-105 duration-150"
                />
              </a>
            </div>
          </div>
          <div className="w-full md:w-[60%] mb-4 md:mb-0">
            <div className="flex flex-col md:flex-row w-full justify-around text-center text-md md:text-base 2xl:text-xl">
              <a href="#home" className="text-secondary hover:text-white">
                Home
              </a>
              <a href="#layanan" className="text-secondary hover:text-white">
                Layanan
              </a>
              <a href="#portofolio" className="text-secondary hover:text-white">
                Portofolio
              </a>
              <a href="#portofolio" className="text-secondary hover:text-white">
                Kontak
              </a>
            </div>
          </div>
          <div className="w-full md:w-[20%] flex flex-col items-center md:items-start space-y-1 text-md md:text-base 2xl:text-xl">
            <p className="text-secondary">Kontak Informasi : </p>
            <div className="flex items-center gap-2 mt-3">
              <TbBrandFiverr />
              <p>yaduh6</p>
            </div>
            <div className="flex items-center gap-2">
              <MdEmail />
              <p>putra61002@gmail.com</p>
            </div>
          </div>
        </div>
        <p className="text-sm pt-8 px-6 md:px-16 2xl:px-32 disabled select-none text-center md:text-start">
          Copyright &copy; {currentYear} Created by{" "}
          <span className="text-secondary">Yaduh Creative</span>
        </p>
      </footer>
    </>
  );
};

export default Footer;
