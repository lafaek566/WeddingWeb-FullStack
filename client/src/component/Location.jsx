import React, { useState } from "react";
import { motion } from "framer-motion";

const Lokasi = () => {
  const [zoom, setZoom] = useState(10); // Initial zoom level
  const [loading, setLoading] = useState(false); // State for loading effect

  const handleZoomIn = () => {
    if (zoom < 21) {
      // Maximum zoom level
      setLoading(true);
      setZoom(zoom + 1);
    }
  };

  const handleZoomOut = () => {
    if (zoom > 0) {
      // Minimum zoom level
      setLoading(true);
      setZoom(zoom - 1);
    }
  };

  const baseUrl = "https://www.google.com/maps/embed?pb=";
  const mapUrl = `${baseUrl}!1m18!1m12!1m3!1d63034.06494468644!2d124.86626060894298!3d-9.097515137325574!2m3!1f${zoom}!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2cffbe8ab3179ed7%3A0xd204816086380b60!2sKota%20Atambua%2C%20Belu%20Regency%2C%20East%20Nusa%20Tenggara!5e0!3m2!1sen!2sid!4v1727057116093!5m2!1sen!2sid`;

  return (
    <section className="lokasi min-h-screen flex flex-col justify-center items-center p-4 bg-gray-100 dark:bg-gray-800">
      <motion.h2
        className="text-3xl font-bold text-center mb-4"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        Location
      </motion.h2>
      <motion.p
        className="text-center text-gray-700 dark:text-gray-300 mb-8"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.2 }}
      >
        Wedding Venue Address
      </motion.p>

      <div className="relative">
        {loading && (
          <div className="absolute inset-0 bg-gray-100 opacity-75 z-10"></div>
        )}
        <motion.iframe
          src={mapUrl}
          width="100%"
          height="450"
          style={{ border: 0 }}
          allowFullScreen=""
          loading="lazy"
          title="Wedding Location"
          className={`rounded-lg shadow-lg transition-transform duration-300 transform hover:scale-105 ${
            loading ? "opacity-0" : "opacity-100"
          }`}
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          onLoad={() => setLoading(false)} // Reset loading state after load
        />
      </div>

      <div className="mt-4 flex space-x-4">
        <motion.button
          className="bg-blue-500 text-white px-4 py-2 rounded-full shadow-md"
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          onClick={handleZoomIn}
          whileFocus={{ scale: 1.1 }} // Scale up on focus
          transition={{ type: "spring", stiffness: 300 }} // Spring effect
        >
          Zoom In
        </motion.button>
        <motion.button
          className="bg-red-500 text-white px-4 py-2 rounded-full shadow-md"
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          onClick={handleZoomOut}
          whileFocus={{ scale: 1.1 }} // Scale up on focus
          transition={{ type: "spring", stiffness: 300 }} // Spring effect
        >
          Zoom Out
        </motion.button>
      </div>
    </section>
  );
};

export default Lokasi;
