import { useState } from "react";
import { useEffect } from "react";

function Navbar() {
  const [activeSection, setActiveSection] = useState("home");
  const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [prevScrollPos, setPrevScrollPos] = useState(0);
  const [isNavbarVisible, setNavbarVisible] = useState(true);
  const [isAtTop, setIsAtTop] = useState(true);

  const handleNavClick = (section) => {
    setActiveSection(section);
  };

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollPos = window.pageYOffset;
      const isScrollingUp = prevScrollPos > currentScrollPos;

      setNavbarVisible(isScrollingUp || currentScrollPos === 0);
      setIsAtTop(currentScrollPos === 0);
      setPrevScrollPos(currentScrollPos);

      // Logic to determine active section based on scroll position
      const sections = document.querySelectorAll("section");
      sections.forEach((section) => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.clientHeight;
        if (
          currentScrollPos >= sectionTop &&
          currentScrollPos < sectionTop + sectionHeight
        ) {
          setActiveSection(section.id);
        }
      });
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [prevScrollPos]);

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!isMobileMenuOpen);
  };

  const closeMobileMenu = () => {
    setMobileMenuOpen(false);
  };

  return (
    <>
      <nav
        className={`w-full flex h-16 items-center justify-between fixed top-0 z-50 px-6 md:px-16 2xl:px-32 font-Montserrat duration-300 ${
          isNavbarVisible ? "navbar-visible" : "navbar-hidden"
        } ${
          isAtTop
            ? "bg-primary/0 backdrop-blur-none duration-500 transition-transform"
            : "bg-primary/50 backdrop-blur-sm shadow shadow-secondary/30 duration-500 transition-transform"
        }`}
      >
        <a
          href="/"
          className="w-auto flex items-center gap-1 font-Poppins font-normal"
        >
          <p className="text-2xl 2xl:text-3xl text-white font-semibold">
            VEGAS.
          </p>
        </a>

        <ul className="hidden md:flex items-center justify-center font-Poppins font-normal text-white text-lg gap-12">
          <li
            className={`nav-item ${
              activeSection === "home" && "nav-item-active text-secondary"
            }`}
          >
            <a href="#home" onClick={() => handleNavClick("home")}>
              Home
            </a>
          </li>
          <li
            className={`nav-item ${
              activeSection === "layanan" && "nav-item-active text-secondary"
            }`}
          >
            <a href="#layanan" onClick={() => handleNavClick("layanan")}>
              Layanan
            </a>
          </li>
          <li
            className={`nav-item ${
              activeSection === "skill" && "nav-item-active text-secondary"
            }`}
          >
            <a href="#skill" onClick={() => handleNavClick("skill")}>
              Skill
            </a>
          </li>
          <li
            className={`nav-item ${
              activeSection === "portofolio" && "nav-item-active text-secondary"
            }`}
          >
            <a href="#portofolio" onClick={() => handleNavClick("portofolio")}>
              Portofolio
            </a>
          </li>
          <li
            className={`nav-item ${
              activeSection === "top" && "nav-item-active text-secondary"
            }`}
          >
            <a href="#top" onClick={() => handleNavClick("top")}>
              Highlight
            </a>
          </li>
        </ul>

        <a
          href="#kontak"
          className="bg-accent/30 hidden md:flex backdrop-blur-sm rounded-full px-8 py-2.5 text-white"
        >
          Kontak Saya
        </a>

        {/* Tombol hamburger untuk mobile */}
        <div className="lg:hidden">
          <button
            onClick={toggleMobileMenu}
            className="text-white focus:outline-none"
          >
            {isMobileMenuOpen ? (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                className={`h-6 w-6 close-icon ${
                  isMobileMenuOpen ? "rotate-close" : ""
                }`}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            ) : (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                className={`h-6 w-6 close-icon ${
                  isMobileMenuOpen ? "rotate-close" : ""
                }`}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16m-7 6h7"
                />
              </svg>
            )}
          </button>
        </div>

        {/* Daftar menu untuk mobile */}
        {isMobileMenuOpen && (
          <ul
            className={`absolute top-20 right-6 z-50 px-5 py-4 space-y-4 bg-primary backdrop-blur-xl outline-1 outline outline-secondary text-base text-white rounded-xl w-48 mobile-menu`}
          >
            <li
              className={`nav-item ${
                activeSection === "home" && "nav-item-active text-secondary"
              }`}
            >
              <a
                href="#home"
                onClick={(() => handleNavClick("home"), closeMobileMenu)}
              >
                Home
              </a>
            </li>
            <li
              className={`nav-item ${
                activeSection === "layanan" && "nav-item-active text-secondary"
              }`}
            >
              <a
                href="#layanan"
                onClick={(() => handleNavClick("layanan"), closeMobileMenu)}
              >
                Layanan
              </a>
            </li>
            <li
              className={`nav-item ${
                activeSection === "skill" && "nav-item-active text-secondary"
              }`}
            >
              <a
                href="#skill"
                onClick={(() => handleNavClick("skill"), closeMobileMenu)}
              >
                Skill
              </a>
            </li>
            <li
              className={`nav-item ${
                activeSection === "portofolio" &&
                "nav-item-active text-secondary"
              }`}
            >
              <a
                href="#portofolio"
                onClick={(() => handleNavClick("portofolio"), closeMobileMenu)}
              >
                Portofolio
              </a>
            </li>
            <li
              className={`nav-item ${
                activeSection === "top" && "nav-item-active text-secondary"
              }`}
            >
              <a
                href="#top"
                onClick={(() => handleNavClick("top"), closeMobileMenu)}
              >
                Highlight
              </a>
            </li>
            <div className="w-full">
              <a
                href="#kontak"
                className="bg-accent/30 w-full backdrop-blur-sm rounded-lg px-6 py-1.5 text-white"
              >
                Kontak Saya
              </a>
            </div>
          </ul>
        )}
      </nav>
    </>
  );
}

export default Navbar;
