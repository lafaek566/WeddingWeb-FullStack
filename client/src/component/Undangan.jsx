import React, { useState } from "react";
import { motion } from "framer-motion";
import {
  FaCalendarAlt,
  FaMapMarkerAlt,
  FaClock,
  FaChurch,
  FaBuilding,
} from "react-icons/fa"; // Import necessary icons

const Undangan = () => {
  const [clicked, setClicked] = useState(false); // State to track click

  // Variabel animasi untuk framer-motion
  const cardVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0 },
    hover: { scale: 1.05, boxShadow: "0px 10px 30px rgba(0, 0, 0, 0.2)" },
    click: { scale: 0.95, rotate: 5 }, // Add click animation
  };

  // Function to handle click
  const handleClick = () => {
    setClicked(!clicked); // Toggle clicked state
  };

  // Link untuk menambah ke Google Calendar
  const googleCalendarLinkNikah =
    "https://www.google.com/calendar/render?action=TEMPLATE&text=Pemberkatan+Nikah&dates=20240924T020000Z/20240924T040000Z&details=Gereja+Katedral+Atambua&location=Gereja+Katedral+Atambua&sf=true&output=xml";
  const googleCalendarLinkResepsi =
    "https://www.google.com/calendar/render?action=TEMPLATE&text=Resepsi+Pernikahan&dates=20240924T050000Z/20240924T080000Z&details=Gedung+Serba+Guna&location=Gedung+Serba+Guna&sf=true&output=xml";

  // Link untuk Google Maps
  const googleMapsLinkNikah =
    "https://www.google.com/maps/search/?api=1&query=Gereja+Katedral+Atambua";
  const googleMapsLinkResepsi = "https://maps.app.goo.gl/pN33rPxFTZdDX86ZA";

  return (
    <div className="bg-gray-100 dark:bg-gray-800 min-h-screen py-10 font-serif">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-10">
          <h1 className="text-3xl md:text-4xl font-bold text-gray-800 dark:text-white">
            Undangan Pernikahan
          </h1>

          <p className="text-gray-600 dark:text-gray-300 mt-3">
            <em>
              ("Aku mengucap syukur kepada AllahKu, setiap aku mengingat engkau
              dalam doaku")
            </em>
          </p>
          <p className="text-gray-600 dark:text-gray-300">
            <em>"(flm:1:4)"</em>
          </p>
        </div>

        {/* Box Pemberkatan Nikah */}
        <motion.div
          className={`bg-white dark:bg-gray-900 rounded-lg shadow-lg p-6 mb-8 max-w-md mx-auto ${
            clicked ? "rounded-full" : "rounded-lg" // Change to curved if clicked
          }`}
          initial="hidden"
          whileInView="visible"
          whileHover="hover"
          whileTap="click" // Add tap animation
          viewport={{ once: true }}
          variants={cardVariants}
          transition={{ duration: 0.8 }}
          onClick={handleClick} // Add click event
        >
          <h2 className="text-2xl font-bold text-orange-500 mb-4 text-center">
            Pemberkatan Nikah
          </h2>
          <div className="flex items-center justify-center mb-2">
            <FaChurch className="text-gray-800 dark:text-gray-300 mr-2" />
            <p className="text-gray-800 dark:text-gray-300">
              : Gereja Katedral Atambua
            </p>
          </div>
          <div className="flex items-center justify-center mb-2">
            <FaCalendarAlt className="text-gray-800 dark:text-gray-300 mr-2" />
            <p className="text-gray-800 dark:text-gray-300">
              : Jumat, 4 Oktober 2024
            </p>
          </div>
          <div className="flex items-center justify-center mb-2">
            <FaClock className="text-gray-800 dark:text-gray-300 mr-2" />
            <p className="text-gray-800 dark:text-gray-300">
              : 11:00 WITA (selesai).
            </p>
          </div>

          {/* Icon Tambah ke Kalender dan Google Maps dalam satu baris */}
          <div className="flex justify-center mt-4 space-x-4">
            <a
              href={googleCalendarLinkNikah}
              target="_blank"
              rel="noopener noreferrer"
              className="text-orange-500 hover:text-orange-600 text-3xl"
            >
              <FaCalendarAlt />
            </a>
            <a
              href={googleMapsLinkNikah}
              target="_blank"
              rel="noopener noreferrer"
              className="text-orange-500 hover:text-green-600 text-3xl"
            >
              <FaMapMarkerAlt />
            </a>
          </div>
        </motion.div>

        {/* Box Resepsi Pernikahan */}
        <motion.div
          className={`bg-white dark:bg-gray-900 rounded-lg shadow-lg p-6 mb-8 max-w-md mx-auto ${
            clicked ? "rounded-full" : "rounded-lg" // Change to curved if clicked
          }`}
          initial="hidden"
          whileInView="visible"
          whileHover="hover"
          whileTap="click" // Add tap animation
          viewport={{ once: true }}
          variants={cardVariants}
          transition={{ duration: 1 }}
          onClick={handleClick} // Add click event
        >
          <h2 className="text-2xl font-bold text-orange-500 mb-4 text-center">
            Resepsi Pernikahan
          </h2>
          <div className="flex items-center justify-center mb-2">
            <FaBuilding className="text-gray-800 dark:text-gray-300 mr-2" />
            <p className="text-gray-800 dark:text-gray-300">
              : Gedung Romei Atambua
            </p>
          </div>
          <div className="flex items-center justify-center mb-2">
            <FaCalendarAlt className="text-gray-800 dark:text-gray-300 mr-2" />
            <p className="text-gray-800 dark:text-gray-300">
              : Jumat, 4 Oktober 2024
            </p>
          </div>
          <div className="flex items-center justify-center mb-2">
            <FaClock className="text-gray-800 dark:text-gray-300 mr-2" />
            <p className="text-gray-800 dark:text-gray-300">
              : 18:00 WIB (selesai)
            </p>
          </div>

          {/* Icon Tambah ke Kalender dan Google Maps dalam satu baris */}
          <div className="flex justify-center mt-4 space-x-4">
            <a
              href={googleCalendarLinkResepsi}
              target="_blank"
              rel="noopener noreferrer"
              className="text-orange-500 hover:text-orange-600 text-3xl"
            >
              <FaCalendarAlt />
            </a>
            <a
              href={googleMapsLinkResepsi}
              target="_blank"
              rel="noopener noreferrer"
              className="text-orange-500 hover:text-orange-600 text-3xl"
            >
              <FaMapMarkerAlt />
            </a>
          </div>
        </motion.div>

        {/* Box Catatan */}
        <motion.div
          className={`bg-white dark:bg-gray-900 rounded-lg shadow-lg p-6 mb-8 max-w-md mx-auto ${
            clicked ? "rounded-full" : "rounded-lg" // Change to curved if clicked
          }`}
          initial="hidden"
          whileInView="visible"
          whileHover="hover"
          whileTap="click" // Add tap animation
          viewport={{ once: true }}
          variants={cardVariants}
          transition={{ duration: 1 }}
          onClick={handleClick} // Add click event
        >
          <h2 className="text-2xl font-bold text-orange-500 mb-4 text-center">
            Catatan
          </h2>
          <p className="text-gray-800 dark:text-gray-300 text-center">
            <strong>Acara:</strong> Bila ada.....
          </p>

          {/* Icon Tambah ke Kalender dan Google Maps dalam satu baris */}
          <div className="flex justify-center mt-4 space-x-4">
            <a
              href={googleCalendarLinkResepsi}
              target="_blank"
              rel="noopener noreferrer"
              className="text-orange-500 hover:text-orange-600 text-3xl"
            >
              <FaCalendarAlt />
            </a>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Undangan;
