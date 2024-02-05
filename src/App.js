import "./App.css";
import { useState, useEffect } from "react";
import Navbar from "./components/navbar/navbar";
import ButtonPrimary from "./components/buttonPrimary/buttonPrimary";
import {
  FaGithub,
  FaTiktok,
  FaInstagram,
  FaLinkedin,
  FaReact,
  FaHtml5,
  FaWordpress,
  FaFigma,
} from "react-icons/fa";
import { GiPlayButton } from "react-icons/gi";
import Layanan from "./components/frameLayanan/layanan";
import { CgDesignmodo } from "react-icons/cg";
import { PiVideoFill } from "react-icons/pi";
import { RiJavascriptFill } from "react-icons/ri";
import {
  SiTailwindcss,
  SiAdobephotoshop,
  SiAdobepremierepro,
  SiAdobeaftereffects,
} from "react-icons/si";
import Toplist from "./components/toplist/toplist";
import Kontak from "./components/kontak/kontak";
import Footer from "./components/footer/footer";
import Tabdropdown from "./components/tabdropdown/tabdropdown";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { motion, useScroll, useSpring } from "framer-motion";
import AOS from "aos";
import "aos/dist/aos.css";
import { Swiper, SwiperSlide } from "swiper/react";
import {
  Navigation,
  Pagination,
  Scrollbar,
  A11y,
  Autoplay,
} from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import Card from "./components/card/card";
import Uiux from "./components/uiux/uiux";
import Videos from "./components/videos/videos";
import { FiPenTool } from "react-icons/fi";
import { AiOutlineAntDesign } from "react-icons/ai";
import { BiSolidVideos } from "react-icons/bi";
import { BsGlobeAsiaAustralia } from "react-icons/bs";
import { LazyLoadImage } from "react-lazy-load-image-component";
import "react-lazy-load-image-component/src/effects/blur.css";
import Placeholderimage from "./components/placeholderimage/placeholderimage";

function App() {
  const [activeTab, setActiveTab] = useState(1);
  const ref = useRef(null);
  const isInView = useInView(ref);
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  });

  useEffect(() => {
    AOS.init({
      disable: false,
      startEvent: "DOMContentLoaded",
      initClassName: "aos-init",
      animatedClassName: "aos-animate",
      useClassNames: false,
      disableMutationObserver: false,
      debounceDelay: 50,
      throttleDelay: 99,
      delay: 0,
      duration: 400,
      easing: "ease",
      once: false,
      mirror: true,
      anchorPlacement: "top-bottom",
    });
    AOS.refresh();
  }, []);

  const [slidesPerView, setSlidesPerView] = useState(5);
  const [slidesPerVideo, setSlidesPerVideo] = useState(3);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth <= 640) {
        setSlidesPerView(1);
        setSlidesPerVideo(1);
      } else if (window.innerWidth <= 1536) {
        setSlidesPerView(4);
        setSlidesPerVideo(3);
      } else {
        setSlidesPerView(5);
        setSlidesPerVideo(2);
      }
    };
    handleResize();

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const images = [
    "/design/vector (1).jpg",
    "/design/vector (2).jpg",
    "/design/vector (17).jpg",
    "/design/vector (5).jpg",
    "/design/vector (3).jpg",
    "/design/vector (18).jpg",
    "/design/vector (6).jpg",
    "/design/vector (7).jpg",
    "/design/vector (9).jpg",
    "/design/vector (10).jpg",
    "/design/vector (11).jpg",
    "/design/vector (12).jpg",
    "/design/vector (4).jpg",
    "/design/vector (13).jpg",
    "/design/vector (14).jpg",
    "/design/vector (15).jpg",
    "/design/vector (8).jpg",
    "/design/vector (16).jpg",
    "/design/vector (17).jpg",
    "/design/vector (18).jpg",
  ];

  const cardsData = [
    {
      title: "Divitation",
      date: "As a Frontend Designer",
      images: "./divitationn.png",
      accent: "web development web development",
      desc: "Undangan digital pernikahan dengan tampilan eksklusif untuk moment kebahagiaanmu! Lihat sekarang dan temukan paket impianmu.",
      alamat: "https://www.divitation.com",
      logo1: [<FaReact size={20} />],
      logo2: [<SiTailwindcss size={20} />],
    },
    {
      title: "Web FIKOM UNPAM",
      date: "For Pamulang University",
      images: "./fikom.png",
      accent: "wordpress wordpress wordpress",
      desc: "Website media publikasi dan informasi yang dibuat untuk fakultas ilmu komunikasi universitas pamulang. Project ini dibuat menggunakan wordpress.",
      alamat: "https://fikom.unpam.ac.id/",
      logo1: [<FaWordpress size={20} />],
    },
    {
      title: "Project Test DETIK - MSIB",
      date: "Hanya untuk Test!",
      images: "./msib2.jpg",
      accent: "reactjs reactjs reactjs",
      desc: "Dibuang sayang, Jadi ini adalah project test menggunakan html, css, javascript dengan bantuan tailwindCSS. Goals: Slicing & Responsive. Walaupun NT :)",
      alamat: "https://github.com/Yaduhh/MSIB-FrontEnd",
      logo1: [<SiTailwindcss size={20} />],
      logo2: [<FaHtml5 size={20} />],
      logo3: [<FaGithub size={20} />],
    },
    {
      title: "Web Portofolio",
      date: "Dibuat Untuk Pribadi",
      images: "./webportofolio.jpg",
      accent: "reactjs reactjs reactjs",
      desc: "Portofolio website yang ditunjukan ketika HR menanyakan website portofolio :(. Soalnya waktu itu ditanya terus kalo interview dan belum sempet buat.",
      alamat: "#",
      logo1: [<FaReact size={20} />],
      logo2: [<FaFigma size={20} />],
      logo3: [<SiTailwindcss size={20} />],
    },
    {
      title: "Test Suitmedia - MSIB",
      date: "Hanya untuk Test!",
      images: "./msib1.jpg",
      accent: "reactjs reactjs reactjs",
      desc: "Dibuang sayang, Walaupun NT tapi test ini bikin greget karena telat ngumpulin :). Kemakan deadline karena bug yang anomali.",
      alamat: "https://github.com/Yaduhh/FrontEnd-Suitmedia",
      logo1: [<SiTailwindcss size={20} />],
      logo2: [<FaReact size={20} />],
      logo3: [<FaGithub size={20} />],
    },
  ];

  const videosList = [
    {
      url: "https://www.instagram.com/reel/C1-_EwspH_f/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA==",
      images: "./videos/ads.png",
    },
    {
      url: "https://youtu.be/4bMOx-6TomA",
      images: "./videos/gemastikuhuy.png",
    },
    {
      url: "https://www.youtube.com/watch?v=WRUrwa_LIoU&ab_channel=SistemInformasiUnpam",
      images: "./videos/videoProfil.png",
    },
  ];

  return (
    <>
      <motion.div className="progress-bar" style={{ scaleX }} />
      <Navbar />
      <section id="home" ref={ref}>
        <div className="w-full h-screen bg-primary flex flex-col text-white justify-center items-center font-Montserrat relative z-0">
          <img
            src="labalaba.png"
            loading="lazy"
            alt="labalaba"
            className="absolute -top-20 md:-top-44 right-0 hover:top-0 duration-200 w-44 md:w-auto -z-0"
          />
          <img
            src="bgAccent.png"
            alt="accent"
            className="absolute top-0 md:-top-32 left-0 -z-10 h-max 2xl:scale-110 select-none"
            style={{
              transform: isInView ? "none" : "translateX(-200px)",
              opacity: isInView ? 1 : 0,
              transition: "all 0.9s cubic-bezier(0.17, 0.55, 0.55, 1) 0.5s",
            }}
          />
          <img
            src="background.png"
            loading="lazy"
            alt="accent"
            className="absolute bottom-48 md:-top-14 left-0 w-full -z-10 select-none"
          />
          <div className="px-6 md:px-64 space-y-3">
            <h3
              className="text-xl md:text-3xl"
              style={{
                transform: isInView ? "none" : "translateX(-200px)",
                opacity: isInView ? 1 : 0,
                transition: "all 0.6s cubic-bezier(0.17, 0.55, 0.55, 1) 0.5s",
              }}
            >
              Hello <br />
              Saya Vega Anggara Saputra
            </h3>
            <h1
              className="font-bold text-5xl md:text-6xl tracking-wide"
              style={{
                transform: isInView ? "none" : "translateX(-200px)",
                opacity: isInView ? 1 : 0,
                transition: "all 0.7s cubic-bezier(0.17, 0.55, 0.55, 1) 0.5s",
              }}
            >
              FRONT-<span className="text-secondary">END</span>
              <span className="designer"> DESIGNER</span>
            </h1>
            <p
              className="text-pretty pt-2 md:pt-3 md:text-base text-sm"
              style={{
                transform: isInView ? "none" : "translateX(-200px)",
                opacity: isInView ? 1 : 0,
                transition: "all 0.8s cubic-bezier(0.17, 0.55, 0.55, 1) 0.5s",
              }}
            >
              Keterampilan teknis yang kuat dalam HTML, CSS, dan JavaScript.
              Berpengalaman dalam berbagai framework dan library front end,
              seperti React JS. Berfokus pada menciptakan pengalaman pengguna
              yang menarik dan intuitif.
            </p>
            <div
              className="pt-10 md:pt-5 flex"
              style={{
                transform: isInView ? "none" : "translateX(-200px)",
                opacity: isInView ? 1 : 0,
                transition: "all 0.9s cubic-bezier(0.17, 0.55, 0.55, 1) 0.5s",
              }}
            >
              <ButtonPrimary
                title="About Me"
                icons={<GiPlayButton size={20} />}
              />
            </div>
          </div>
          <div className="text-white absolute bottom-20 md:bottom-10 md:left-10 max-sm:right-6 space-y-7">
            <FaGithub
              size={30}
              className="hover:text-secondary hover:scale-105 duration-150"
            />
            <FaTiktok
              size={30}
              className="hover:text-secondary hover:scale-105 duration-150"
            />
            <FaInstagram
              size={30}
              className="hover:text-secondary hover:scale-105 duration-150"
            />
            <FaLinkedin
              size={30}
              className="hover:text-secondary hover:scale-105 duration-150"
            />
          </div>
        </div>
      </section>

      <section id="layanan">
        <div className="w-full h-auto md:h-screen bg-primary flex flex-col text-white justify-center items-center font-Montserrat relative -z-0 overflow-hidden px-6 md:px-0 pb-20 md:p-0">
          <div className="absolute inset-0 flex items-center justify-center">
            <img
              src="./bgAccent2.png"
              alt="bgaccent"
              className="max-w-full max-h-full"
              loading="lazy"
            />
          </div>
          <div className="text-center max-w-64 2xl:max-w-md w-full z-50 2xl:space-y-3">
            <p
              className="text-secondary 2xl:text-xl text-center"
              data-aos="fade-up"
            >
              Info Freelance
            </p>
            <p
              className="text-white text-3xl 2xl:text-5xl text-center"
              data-aos="fade-up"
            >
              Jasa Layanan
            </p>
            <div className="relative w-full mt-2" data-aos="fade-up">
              <div className="h-0.5 w-16 rounded-full bg-primary/50 absolute top-0 right-0 z-20"></div>
              <div className="h-0.5 w-full rounded-full bg-secondary absolute top-0 z-10"></div>
              <div className="h-0.5 w-16 rounded-full bg-primary/50 absolute top-0 left-0 z-20"></div>
            </div>
          </div>

          <div
            className="mt-10 2xl:mt-20 flex md:flex-row flex-col gap-8 2xl:gap-16"
            data-aos-mirror="true"
            data-aos="fade-up"
            data-aos-easing="ease-in-sine"
            data-aos-duration="600"
          >
            <Layanan
              logo={<CgDesignmodo size={60} className="text-secondary" />}
              title={"UI/UX Design"}
              desc={
                "Desain UI/UX yang baik adalah kunci untuk kesuksesan produk. Keterampilan untuk membuat produk Anda mudah digunakan, menarik, dan efektif."
              }
              shouldUseImage={false}
            />
            <Layanan
              logo="./divitation.png"
              shouldUseImage={true}
              title={"Digital Wedding Invitation - Divitation"}
              desc={
                "Undangan digital yang elegan dan berkesan. Kami menawarkan berbagai pilihan paket yang beragam untuk anda."
              }
            />
            <Layanan
              logo={<PiVideoFill size={60} className="text-secondary" />}
              title={"Video Editor"}
              desc={
                "Ciptakan video promosi, produk, atau explainer yang memukau audiens dan meningkatkan brand awareness. Use Premiere Pro & After Effect."
              }
              shouldUseImage={false}
            />
          </div>
        </div>
      </section>

      <section id="skill">
        <div className="w-full h-auto md:h-screen bg-primary flex flex-col-reverse md:flex-row text-white justify-center items-center font-Montserrat relative -z-0 overflow-hidden px-6 md:px-0 pb-20 md:p-0">
          <img
            src="bgAccent.png"
            loading="lazy"
            alt="accent"
            className="absolute bottom-0 md:-bottom-56 2xl:-bottom-64 right-0 -z-10 h-full select-none -scale-100 max-sm:hidden"
          />
          <div
            className="w-full md:w-[50%] h-auto md:h-screen flex flex-wrap justify-center items-end p-0 md:p-20 2xl:p-40 gap-12 2xl:gap-16 pt-10 md:pt-24 text-white/70"
            data-aos-mirror="true"
            data-aos="fade-up"
            data-aos-easing="ease-in-sine"
            data-aos-duration="700"
          >
            <FaReact className="text-7xl md:text-9xl transition-all duration-300 hover:text-secondary hover:scale-110 hover:-skew-y-12" />
            <RiJavascriptFill className="text-7xl md:text-9xl transition-all duration-300 hover:text-secondary hover:scale-110 hover:-skew-y-12" />
            <FaHtml5 className="text-7xl md:text-9xl transition-all duration-300 hover:text-secondary hover:scale-110 hover:-skew-y-12" />
            <FaWordpress className="text-7xl md:text-9xl transition-all duration-300 hover:text-secondary hover:scale-110 hover:-skew-y-12" />
            <FaFigma className="text-7xl md:text-9xl transition-all duration-300 hover:text-secondary hover:scale-110 hover:-skew-y-12" />
            <SiTailwindcss className="text-7xl md:text-9xl transition-all duration-300 hover:text-secondary hover:scale-110 hover:-skew-y-12" />
            <SiAdobephotoshop className="text-7xl md:text-9xl transition-all duration-300 hover:text-secondary hover:scale-110 hover:-skew-y-12" />
            <SiAdobepremierepro className="text-7xl md:text-9xl transition-all duration-300 hover:text-secondary hover:scale-110 hover:-skew-y-12" />
            <SiAdobeaftereffects className="text-7xl md:text-9xl transition-all duration-300 hover:text-secondary hover:scale-110 hover:-skew-y-12" />
          </div>

          <div className="w-full md:w-[50%] h-auto md:h-screen flex flex-col justify-center items-start pr-0 md:pr-20 2xl:pr-56 space-y-2 2xl:space-y-4">
            <p
              className="text-secondary uppercase font-semibold animate-pulse 2xl:text-xl"
              data-aos-mirror="true"
              data-aos="fade-up"
              data-aos-easing="ease-in-sine"
              data-aos-duration="700"
            >
              My Skills
            </p>
            <h3
              className="text-3xl 2xl:text-4xl"
              data-aos-mirror="true"
              data-aos="fade-up"
              data-aos-easing="ease-in-sine"
              data-aos-duration="700"
            >
              Keahlian yang baik <br /> datang dari Hobi.
            </h3>
            <p
              className="text-sm "
              data-aos-mirror="true"
              data-aos="fade-up"
              data-aos-easing="ease-in-sine"
              data-aos-duration="700"
            >
              Ini bukan tentang kemampuan ataupun keahlian, tapi ini tentang
              ketekunan dalam mempelajari dan mengeksplor banyak hal. Konsisten
              selalu menjadi hal rutin untuk terus dilakukan. Percaya proses
              karena proses tidak akan mengkhianati hasil.
            </p>
          </div>
        </div>
      </section>

      <section id="portofolio">
        <div className="w-full h-auto md:h-screen bg-primary flex flex-col text-white justify-center items-center font-Montserrat relative -z-0 overflow-hidden px-6 md:px-0 md:pb-0 pb-10">
          <img
            src="bgAccent.png"
            loading="lazy"
            alt="accent"
            className="absolute bottom-0 md:-bottom-56 left-0 -z-10 h-full select-none -scale-y-100 2xl:hidden max-sm:hidden"
          />
          <img
            src="bgAccent.png"
            loading="lazy"
            alt="accent"
            className="absolute top-0 md:-top-56 2xl:-top-64 right-0 -z-10 h-full select-none -scale-x-100 max-sm:hidden"
          />
          <div
            className="uppercase text-secondary font-semibold pt-10"
            data-aos-mirror="true"
            data-aos="fade-up"
            data-aos-easing="ease-in-sine"
            data-aos-duration="700"
          >
            My Portofolio
          </div>
          <div
            className="text-3xl text-center"
            data-aos-mirror="true"
            data-aos="fade-up"
            data-aos-easing="ease-in-sine"
            data-aos-duration="700"
          >
            My Masterpiece Collection
          </div>

          <div
            className="mt-3 w-full md:w-auto max-w-7xl"
            data-aos-mirror="true"
            data-aos="fade-up"
            data-aos-easing="ease-in-sine"
            data-aos-duration="700"
          >
            <div className="hidden md:flex space-x-2 md:space-x-8 w-full max-w-7xl justify-center items-center">
              <button
                className={`px-4 py-2 rounded focus:outline-none tracking-wider ${
                  activeTab === 1
                    ? "text-secondary"
                    : "bg-gray-200 text-gray-800"
                }`}
                onClick={() => setActiveTab(1)}
              >
                ALL
              </button>
              <button
                className={`px-4 py-2 rounded focus:outline-none tracking-wider ${
                  activeTab === 2
                    ? "text-secondary"
                    : "bg-gray-200 text-gray-800"
                }`}
                onClick={() => setActiveTab(2)}
              >
                UI/UX
              </button>
              <button
                className={`px-4 py-2 rounded focus:outline-none tracking-wider ${
                  activeTab === 3
                    ? "text-secondary"
                    : "bg-gray-200 text-gray-800"
                }`}
                onClick={() => setActiveTab(3)}
              >
                WEBSITE
              </button>
              <button
                className={`px-4 py-2 rounded focus:outline-none tracking-wider ${
                  activeTab === 4
                    ? "text-secondary"
                    : "bg-gray-200 text-gray-800"
                }`}
                onClick={() => setActiveTab(4)}
              >
                VIDEOS
              </button>
              <button
                className={`px-4 py-2 rounded focus:outline-none tracking-wider ${
                  activeTab === 5
                    ? "text-secondary"
                    : "bg-gray-200 text-gray-800"
                }`}
                onClick={() => setActiveTab(5)}
              >
                DESIGN
              </button>
            </div>
            <div className="flex md:hidden pb-4 w-full">
              <Tabdropdown activeTab={activeTab} setActiveTab={setActiveTab} />
            </div>
            <div className="mt-4 w-full flex flex-col justify-center items-center">
              {activeTab === 1 && (
                <>
                  <div className="w-full h-full flex-none 2xl:flex-col space-y-5 2xl:space-y-10">
                    <button
                      className="bg-primary relative z-0 overflow-hidden hover:bg-secondary/30 hover:tracking-widest duration-300 outline outline-secondary outline-[1.5px] w-full h-auto p-8 md:py-10 2xl:py-16 rounded-2xl flex items-center gap-2 justify-center "
                      onClick={() => setActiveTab(3)}
                    >
                      <BsGlobeAsiaAustralia />
                      <p>Website</p>
                      <img
                        src="./allwebsite.png"
                        loading="lazy"
                        alt="all-website"
                        className="absolute inset-0 -z-10 object-cover opacity-40"
                      />
                    </button>
                    <div className="w-full rounded-2xl flex grow gap-5 2xl:gap-10">
                      <button
                        className="relative z-0 overflow-hidden p-8 outline-secondary outline-[1.5px] outline bg-primary hover:tracking-widest hover:bg-secondary/30 duration-300 w-full h-full md:py-10 2xl:py-16 rounded-2xl flex items-center justify-center gap-2"
                        onClick={() => setActiveTab(5)}
                      >
                        <FiPenTool />
                        <p>Design</p>
                        <img
                          src="./allDesign.png"
                          loading="lazy"
                          alt="all-uiux"
                          className="absolute inset-0 -z-10 scale-150 opacity-40"
                        />
                      </button>
                      <button
                        className="relative z-0 overflow-hidden p-8 outline-secondary outline-[1.5px] outline bg-primary hover:tracking-widest hover:bg-secondary/30 duration-300 w-full h-full md:py-10 2xl:py-16 rounded-2xl flex items-center justify-center gap-2"
                        onClick={() => setActiveTab(2)}
                      >
                        <AiOutlineAntDesign />
                        <p>UI/UX</p>
                        <img
                          src="./allUiux.png"
                          loading="lazy"
                          alt="all-uiux"
                          className="absolute inset-0 -z-10 scale-150 opacity-40"
                        />
                      </button>
                    </div>
                    <button
                      className="bg-primary relative z-0 overflow-hidden hover:tracking-widest hover:bg-secondary/30 duration-300 outline outline-secondary outline-[1.5px] w-full h-auto p-8 md:py-10 2xl:py-16 rounded-2xl flex items-center gap-2 justify-center "
                      onClick={() => setActiveTab(4)}
                    >
                      <BiSolidVideos />
                      <p>Video</p>
                      <img
                        src="./allVideos.png"
                        loading="lazy"
                        alt="all-videos"
                        className="absolute inset-0 -z-10 object-cover opacity-40"
                      />
                    </button>
                  </div>
                </>
              )}
              {activeTab === 2 && (
                <>
                  <div className="w-full flex flex-col items-center md:items-start">
                    <Uiux
                      title="GEMASTIK 2023"
                      desc="Design Pengalaman Pengguna"
                      images="./uiux/homics.png"
                      url="https://www.figma.com/file/IV3i0vNiDkTsxpLltGtCru/GEMASTIK?type=design&node-id=48%3A4&mode=design&t=8CmQJIMd3dSNt7uU-1"
                    />
                  </div>
                </>
              )}
              {activeTab === 3 && (
                <>
                  <div className="md:w-screen w-full flex justify-center items-center">
                    <Swiper
                      modules={[Pagination]}
                      autoplay={{
                        delay: 2500,
                        disableOnInteraction: false,
                      }}
                      spaceBetween={0}
                      slidesPerView={slidesPerView}
                      pagination={{ clickable: true }}
                    >
                      {cardsData.map((data, index) => (
                        <SwiperSlide
                          key={index}
                          className="w-full flex justify-around items-center px-4 2xl:px-10"
                        >
                          <Card {...data} key={index} />
                        </SwiperSlide>
                      ))}
                    </Swiper>
                  </div>
                </>
              )}
              {activeTab === 4 && (
                <>
                  <div className="w-screen 2xl:hidden max-sm:hidden">
                    <Swiper
                      modules={[Navigation, Pagination]}
                      spaceBetween={0}
                      slidesPerView={slidesPerVideo}
                      navigation
                      pagination={{ clickable: true }}
                    >
                      {videosList.map((video, index) => (
                        <SwiperSlide
                          key={index}
                          className="w-full flex flex-row items-center justify-center pb-10 pt-1 px-4"
                        >
                          <Videos url={video.url} images={video.images} />
                        </SwiperSlide>
                      ))}
                    </Swiper>
                  </div>
                  <div className="w-full flex flex-col justify-center items-center md:hidden 2xl:flex 2xl:flex-row">
                    {videosList.map((video, index) => (
                      <div key={index} className="w-full m-3">
                        <Videos url={video.url} images={video.images} />
                      </div>
                    ))}
                  </div>
                </>
              )}
              {activeTab === 5 && (
                <>
                  <div className="w-full 2xl:flex hidden mb-5">
                    <Swiper
                      dir="rtl"
                      rewind={true}
                      modules={[
                        Navigation,
                        Pagination,
                        Scrollbar,
                        A11y,
                        Autoplay,
                      ]}
                      autoplay={{
                        delay: 2500,
                        disableOnInteraction: false,
                      }}
                      spaceBetween={20}
                      slidesPerView={4}
                      navigation
                      pagination={{ clickable: true }}
                      onSwiper={(swiper) => console.log(swiper)}
                      onSlideChange={() => console.log("slide change")}
                    >
                      {images.map((image, index) => (
                        <SwiperSlide key={index}>
                          <LazyLoadImage
                            src={image}
                            width="100%"
                            height="100%"
                            placeholder={<Placeholderimage src={image} />}
                            effect="blur"
                            alt={`Image ${index + 1}`}
                            className="rounded-xl"
                          />
                        </SwiperSlide>
                      ))}
                    </Swiper>
                  </div>
                  <div className="w-full md:flex hidden">
                    <Swiper
                      rewind={true}
                      modules={[
                        Navigation,
                        Pagination,
                        Scrollbar,
                        A11y,
                        Autoplay,
                      ]}
                      autoplay={{
                        delay: 2500,
                        disableOnInteraction: false,
                      }}
                      spaceBetween={20}
                      slidesPerView={4}
                      navigation
                      pagination={{ clickable: true }}
                      onSwiper={(swiper) => console.log(swiper)}
                      onSlideChange={() => console.log("slide change")}
                    >
                      {images.map((image, index) => (
                        <SwiperSlide key={index}>
                          <LazyLoadImage
                            src={image}
                            width="100%"
                            height="100%"
                            placeholder={<Placeholderimage src={image} />}
                            effect="blur"
                            alt={`Image ${index + 1}`}
                            className="rounded-xl"
                          />
                        </SwiperSlide>
                      ))}
                    </Swiper>
                  </div>
                  <div className="w-full flex md:hidden mt-3">
                    <Swiper
                      rewind={true}
                      modules={[
                        Navigation,
                        Pagination,
                        Scrollbar,
                        A11y,
                        Autoplay,
                      ]}
                      autoplay={{
                        delay: 2500,
                        disableOnInteraction: false,
                      }}
                      spaceBetween={20}
                      slidesPerView={1}
                      navigation
                      pagination={{ clickable: true }}
                      onSwiper={(swiper) => console.log(swiper)}
                      onSlideChange={() => console.log("slide change")}
                    >
                      {images.map((image, index) => (
                        <SwiperSlide key={index}>
                          <LazyLoadImage
                            src={image}
                            width="100%"
                            height="100%"
                            placeholder={<Placeholderimage src={image} />}
                            effect="blur"
                            alt={`Image ${index + 1}`}
                            className="rounded-xl"
                          />
                        </SwiperSlide>
                      ))}
                    </Swiper>
                  </div>
                </>
              )}
            </div>
          </div>
        </div>
      </section>

      <section id="top">
        <div className="w-full h-auto md:h-screen 2xl:h-auto 2xl:py-20 bg-primary flex flex-col md:flex-row text-white justify-center items-center font-Montserrat relative -z-0 overflow-hidden px-0 pb-20 md:p-0 2xl:px-32">
          <img
            src="bgAccent.png"
            alt="accent"
            className="absolute top-0 md:-top-56 left-0 -z-10 h-full select-none 2xl:hidden max-sm:hidden"
          />
          <div className="w-full md:w-[40%] h-auto md:h-screen 2xl:h-auto flex flex-col justify-center items-start p-6 md:p-16 space-y-3">
            <p
              className="text-secondary 2xl:text-xl"
              data-aos-mirror="true"
              data-aos="fade-up"
              data-aos-easing="ease-in-sine"
              data-aos-duration="700"
            >
              Highlight
            </p>
            <h1
              className="text-3xl 2xl:text-4xl"
              data-aos-mirror="true"
              data-aos="fade-up"
              data-aos-easing="ease-in-sine"
              data-aos-duration="700"
            >
              Top List <br />
              My Portofolio.
            </h1>
            <p
              className="pt-2"
              data-aos-mirror="true"
              data-aos="fade-up"
              data-aos-easing="ease-in-sine"
              data-aos-duration="700"
            >
              Ini bukan untuk menunjukan yang paling bagus, tapi ini menunjukan
              sebuah proses point untuk terus berkembang dan belajar.{" "}
            </p>
          </div>
          <div className="w-full md:w-[60%] h-auto md:h-screen 2xl:h-auto flex flex-col md:flex-row gap-20 md:gap-10 justify-center items-center pt-16 md:pt-0">
            <Toplist
              data-aos-mirror="true"
              data-aos="fade-up"
              data-aos-easing="ease-in-sine"
              data-aos-duration="700"
              images="./gemastik.jpg"
              title="Gemastik"
              desc="Design Pengalaman Pengguna"
              customLink="https://www.figma.com/file/IV3i0vNiDkTsxpLltGtCru/GEMASTIK?type=design&node-id=48%3A4&mode=design&t=8CmQJIMd3dSNt7uU-1"
            />
            <Toplist
              data-aos-mirror="true"
              data-aos="fade-up"
              data-aos-easing="ease-in-sine"
              data-aos-duration="700"
              images="./divitationn.png"
              title="Divitation"
              desc="Digital Wedding Invitation"
              customLink="https://www.divitation.com"
            />
          </div>
        </div>
      </section>

      <section id="kontak">
        <div className="w-full h-auto md:h-screen 2xl:h-auto 2xl:pb-20 bg-primary flex flex-col md:flex-row text-white justify-center items-center font-Montserrat relative -z-0 overflow-hidden px-6 md:px-0 pb-20 md:p-0">
          <div className="absolute right-0 top-0 flex items-center justify-center">
            <img src="./bgAccent2.png" alt="bgaccent" className="h-full" />
          </div>
          <div
            className="w-full md:w-[40%] h-auto md:h-screen 2xl:h-auto flex flex-col justify-center items-center"
            data-aos-mirror="true"
            data-aos="fade-up"
            data-aos-easing="ease-in-sine"
            data-aos-duration="700"
          >
            <div className="w-full flex flex-col justify-center items-end h-auto md:h-screen 2xl:h-auto pt-5">
              <img
                src="./kontak.jpg"
                loading="lazy"
                alt="kontak"
                className="w-96 2xl:w-[75%] rounded-3xl outline-[1.5px] border-secondary/30 border-4 hover:scale-105 duration-500 ease-in-out"
              />
            </div>
          </div>
          <div
            className="w-full md:w-[60%] h-auto md:h-screen 2xl:h-auto flex flex-col justify-center items-center"
            data-aos-mirror="true"
            data-aos="fade-up"
            data-aos-easing="ease-in-sine"
            data-aos-duration="700"
          >
            <Kontak />
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
}

export default App;
