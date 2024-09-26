import React, { useRef, useState } from "react";
import { useParams } from "react-router-dom";
import Slider from "react-slick";
import Img1 from "../assets/hero/h1.jpg";
import Img2 from "../assets/hero/h2.jpg";
import Img3 from "../assets/hero/h3.jpg";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import CountdownTimer from "./CountdownTimer";
import { scroller } from "react-scroll";
import "../component/header.css";
import weddingSong from "../assets/music/NyaliTerakhir.mp3";
import ClosedEnvelope from "../assets/icons/closed.png"; // Closed envelope icon
import OpenEnvelope from "../assets/icons/open.png"; // Open envelope icon

const ImageList = [
  {
    id: 1,
    img: Img1,
    title: "Avel & Rhita",
    description: "Our Wedding Invitation",
  },
  {
    id: 2,
    img: Img2,
    title: "Avel & Rhita",
    description: "Our Wedding Invitation",
  },
  {
    id: 3,
    img: Img3,
    title: "Avel & Rhita",
    description: "Our Wedding Invitation",
  },
];

const Header = () => {
  const { name } = useParams();
  const decodedName = decodeURIComponent(name);

  const audioRef = useRef(null); // Ref to control the audio element
  const [isEnvelopeOpen, setIsEnvelopeOpen] = useState(false); // State for envelope open/close

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
  };

  const handleScrollToMempelai = () => {
    // Start playing music
    if (audioRef.current) {
      audioRef.current.play();
    }

    // Set envelope to open
    setIsEnvelopeOpen(true);

    // Scroll to the "mempelai" section
    scroller.scrollTo("mempelai", {
      duration: 900,
      delay: 0,
      smooth: "easeInOutQuart",
    });
  };

  return (
    <header className="relative overflow-hidden min-h-screen bg-gray-50 dark:bg-gray-950 dark:text-white flex justify-center items-center">
      <div className="container relative z-10 px-4 sm:px-8 lg:px-16 pb-8 rounded-full">
        <div className="slider-container mx-auto max-w-3xl rounded-full">
          <Slider {...settings}>
            {ImageList.map((data) => (
              <div key={data.id} className="relative">
                <div className="image-wrapper">
                  <img
                    src={data.img}
                    alt={data.title}
                    className="w-40 h-50 object-cover rounded-lg shadow-md"
                  />
                </div>

                <div className="absolute inset-0 flex flex-col justify-center items-center text-center bg-black bg-opacity-20 text-white py-10">
                  <h1 className="text-4xl sm:text-6xl lg:text-8xl font-bold shadow-sm">
                    {data.title}
                  </h1>
                  <div className="text-md text-white sm:text-lg mt-[-10]">
                    {data.description}
                  </div>

                  <CountdownTimer />
                  <div className="invitee-detail-container p-3 bg-white bg-opacity-30 rounded-lg shadow-md text-center py-1 mt-20 transition-transform duration-500 ease-in-out transform hover:scale-105 mx-auto max-w-md">
                    <div>
                      <div className="invitee-name font-extralight text-shadow">
                        Kpd Bpk/Ibu/Saudara/i{" "}
                        <div>
                          <span className="text-1xl font-semibold tekt-shadow">
                            <strong>{decodedName}</strong>
                          </span>
                        </div>
                      </div>
                    </div>
                    <p className="invite-message text-md">di tempat</p>

                    <button
                      className="bg-[#FFA500] text-base small-font hover-increase-font hover:scale-105 transition-transform duration-200 text-white font-semibold py-0.5 px-4 rounded-full mt-3 flex items-center justify-center"
                      onClick={handleScrollToMempelai}
                    >
                      <img
                        src={isEnvelopeOpen ? OpenEnvelope : ClosedEnvelope}
                        alt="Amplop"
                        className="w-8 h-8 mr-2" // Reduce icon size if needed
                      />
                      Buka Undangan
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </Slider>
        </div>
        {/* Audio element for background music */}
        <audio ref={audioRef} src={weddingSong} loop />{" "}
        {/* Added loop attribute */}
      </div>
    </header>
  );
};

export default Header;
