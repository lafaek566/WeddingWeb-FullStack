import React, { useState } from "react";
import { motion } from "framer-motion";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import "./LoveStory.css"; // Import custom CSS for fonts

// Import the images you want to use as icons
import meetingImg from "../assets/imageData/love story/4.png";
import dateImg from "../assets/imageData/love story/8.png";
import togetherImg from "../assets/imageData/love story/2.png";

const LoveStory = () => {
  const [clickedIndex, setClickedIndex] = useState(null);
  const [zoomedImage, setZoomedImage] = useState(null);
  const [caption, setCaption] = useState(""); // State to hold the caption

  // Define captions for each image
  const captions = [
    "Pertemuan pertama kami di kos Asri Penfui, saat kami masih kuliah. Kesan pertama yang tak terlupakan.",
    "Kencan pertama kami yang berkesan, menandai awal dari hubungan yang penuh cinta.",
    "Saat kami memutuskan untuk bersama dan memulai perjalanan hidup yang baru.",
  ];

  // Animation variables for framer-motion
  const cardVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0 },
    hover: { scale: 1.05, boxShadow: "0px 10px 30px rgba(0, 0, 0, 0.2)" },
    zoomIn: { scale: 1.2, transition: { duration: 0.3 } }, // Zoom in when clicked/held
    reset: { scale: 1, transition: { duration: 0.3 } }, // Reset back to original size
  };

  const handleMouseDown = (index) => {
    setClickedIndex(index);
  };

  const handleMouseUp = () => {
    setClickedIndex(null);
  };

  const handleImageClick = (img, index) => {
    setZoomedImage(img); // Set the clicked image to zoom
    setCaption(captions[index]); // Set the corresponding caption
  };

  const handleCloseZoom = () => {
    setZoomedImage(null); // Close zoomed image
    setCaption(""); // Clear caption
  };

  return (
    <div className="bg-gray-100 dark:bg-gray-800 min-h-screen py-10 font-cute">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white tracking-wide">
            Our Love Story
          </h1>
          <p className="text-lg md:text-xl text-gray-600 dark:text-gray-300 mt-4 italic">
            Story of how we met and fell in love...
          </p>
        </div>

        <VerticalTimeline>
          {/* Box 1: First Meeting */}
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            contentStyle={{ background: "white", color: "#333" }}
            iconStyle={{ background: "orange", color: "#fff" }}
            icon={
              <motion.img
                src={meetingImg}
                alt="First Meeting"
                className="icon-image"
                whileTap={{ scale: 1.5 }} // Zoom in on click
                onClick={() => handleImageClick(meetingImg, 0)} // Handle image click with index
              />
            }
          >
            <motion.div
              className="rounded-lg shadow-lg p-4"
              initial="hidden"
              whileInView="visible"
              whileHover="hover"
              onMouseDown={() => handleMouseDown(1)} // Hold on click
              onMouseUp={handleMouseUp} // Reset on release
              onTouchStart={() => handleMouseDown(1)} // Hold on touch
              onTouchEnd={handleMouseUp} // Reset on release
              viewport={{ once: true }}
              variants={cardVariants}
              transition={{ duration: 0.8 }}
              animate={clickedIndex === 1 ? "zoomIn" : "reset"} // Trigger zoomIn and reset
            >
              <h2 className="text-xl font-semibold">Pertemuan Pertama</h2>
              <p className="text-sm font-semibold text-gray-600">
                <em>06 Januari 2019 - 15 Januari 2019</em>
              </p>
              <p className="text-justify">
                Kami bertemu pertama kali di kota Kupang tepatnya di kos Asri
                Penfui, waktu itu kami masih duduk di bangku kuliah, dan pada
                saat itu kami adalah tetangga kamar di kost tersebut, waktu
                pertama saat bertemu, saya sebagai anak kos baru di kos
                tersebut, dia adalah senior kos, saat itu dia baru saja pulang
                liburan semester, hmm.. Awalnya bertemu biasa saja, ketika itu,
                dia melihat saya, pikirnya dia menganggap saya adalah pacarnya
                pada waktu itu, itulah pertemuan awal pertama kami.
              </p>
            </motion.div>
          </VerticalTimelineElement>

          {/* Box 2: First Date */}
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            contentStyle={{ background: "white", color: "#333" }}
            iconStyle={{ background: "orange", color: "#fff" }}
            icon={
              <motion.img
                src={dateImg}
                alt="First Date"
                className="icon-image"
                whileTap={{ scale: 1.5 }} // Zoom in on click
                onClick={() => handleImageClick(dateImg, 1)} // Handle image click with index
              />
            }
          >
            <motion.div
              className="rounded-lg shadow-lg p-4"
              initial="hidden"
              whileInView="visible"
              whileHover="hover"
              onMouseDown={() => handleMouseDown(2)} // Hold on click
              onMouseUp={handleMouseUp} // Reset on release
              onTouchStart={() => handleMouseDown(2)} // Hold on touch
              onTouchEnd={handleMouseUp} // Reset on release
              viewport={{ once: true }}
              variants={cardVariants}
              transition={{ duration: 0.8 }}
              animate={clickedIndex === 2 ? "zoomIn" : "reset"} // Trigger zoomIn and reset
            >
              <h2 className="text-xl font-semibold">Kencan Pertama</h2>
              <p className="text-sm font-semibold text-gray-600">
                <em>15 Januari - 18 Agustus 2019</em>
              </p>
              <p className="text-justify">
                Kami meresmikan hubungan kami (pacaran), Tidak seperti pasangan
                lain yg saling tembak mengungkapkan perasaan dia pung langsung
                mengatakan pada semua orang kalau saya adalah pacarnya, Akhirnya
                hubungan yang saya pikir hanya bercanda pun berlanjut, ketika
                saya selesai wisuda dan pulang ke Atambua, hubungan itu terus
                berlanjut walaupun kami menjalankan hubungan jarak jauh. Namun,
                komunikasi adalah kunci kami untuk saling percaya dan terus
                bertahan Dalam hubungan itu dia selalu menyatakan kalau{" "}
                <em>
                  "hubungan yang tidak romantis seperti pasangan lain ini akan
                  berlanjut sampai palaminan"
                </em>
                , kata-kata itu yg selalu saya pegang ...
              </p>
            </motion.div>
          </VerticalTimelineElement>

          {/* Box 3: Deciding to be Together */}
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            contentStyle={{ background: "white", color: "#333" }}
            iconStyle={{ background: "orange", color: "#fff" }}
            icon={
              <motion.img
                src={togetherImg}
                alt="Together Forever"
                className="icon-image"
                whileTap={{ scale: 1.5 }} // Zoom in on click
                onClick={() => handleImageClick(togetherImg, 2)} // Handle image click with index
              />
            }
          >
            <motion.div
              className="rounded-lg shadow-lg p-4"
              initial="hidden"
              whileInView="visible"
              whileHover="hover"
              onMouseDown={() => handleMouseDown(3)} // Hold on click
              onMouseUp={handleMouseUp} // Reset on release
              onTouchStart={() => handleMouseDown(3)} // Hold on touch
              onTouchEnd={handleMouseUp} // Reset on release
              viewport={{ once: true }}
              variants={cardVariants}
              transition={{ duration: 0.8 }}
              animate={clickedIndex === 3 ? "zoomIn" : "reset"} // Trigger zoomIn and reset
            >
              <h2 className="text-xl font-semibold">Saat Memutuskan Bersama</h2>
              <p className="text-sm font-semibold text-gray-600">
                <em>20 Januari - 4 Oktober 2024</em>
              </p>
              <p className="text-justify">
                {" "}
                LDR Malaka-Atambua berujung bahagia ketika dia serius membawa
                keluarga besar-nya untuk datang ke Atambua, Penantian 5 tahun
                yang terbayarkan sudah pada Akhirnya ...
              </p>
              <p className="font-semibold mt-1 text-center">
                "Tanggal 04 Oktober 2024"
              </p>{" "}
              <p className="text-justify">
                kami resmi menjadi pasangan suami istri dalam pemberkatan kudus
                yang dilakukan di Gereja Katedral Atambua ...{" "}
                <p>
                  <p className="font-semibold text-center">
                    Seperti lagu Glenn Fredly{" "}
                    <p>
                      {" "}
                      <em>"Nyali terakhir"</em>
                    </p>
                    ,
                  </p>{" "}
                  <p className="text-center">
                    Hubungan ini akan kami bawa sampai napas terakhir kami ...
                  </p>{" "}
                  <p className="text-center">
                    Terima kasih atas dukungan dan Doa dari saudara/i dan teman
                    - teman semua ...
                  </p>
                  <p className="font-semibold text-center">-Love_Avelritta-</p>
                </p>
              </p>
            </motion.div>
          </VerticalTimelineElement>
        </VerticalTimeline>

        {/* Zoomed Image Modal */}
        {zoomedImage && (
          <div
            className="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center"
            onClick={handleCloseZoom} // Close zoom on click anywhere
          >
            <div className="text-center text-white">
              <motion.img
                src={zoomedImage}
                alt="Zoomed"
                className="max-w-full max-h-full cursor-pointer" // Add cursor pointer to indicate clickable
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                exit={{ scale: 0 }}
                transition={{ duration: 0.5 }}
              />
              <p className="mt-4 text-lg">{caption}</p>{" "}
              {/* Display caption here */}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default LoveStory;
