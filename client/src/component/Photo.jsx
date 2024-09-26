import React, { useState } from "react";
import DataProduct from "../assets/DataProduct";
import { motion } from "framer-motion";
import {
  FaInstagram,
  FaWhatsapp,
  FaDownload,
  FaTimes,
  FaSearchPlus,
  FaSearchMinus,
  FaChevronLeft,
  FaChevronRight,
} from "react-icons/fa";

const Photo = () => {
  const [selectedImage, setSelectedImage] = useState(null);
  const [zoomLevel, setZoomLevel] = useState(1);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [showIcons, setShowIcons] = useState(true); // Icons are visible by default

  const handleImageClick = (img, index) => {
    setSelectedImage(img);
    setCurrentIndex(index);
    setZoomLevel(1);
    setShowIcons(true); // Keep icons visible when opening image
  };

  const closeImage = () => {
    setSelectedImage(null);
    setZoomLevel(1);
    setCurrentIndex(0);
    setShowIcons(true); // Ensure icons are visible on close
  };

  const toggleIcons = () => {
    setShowIcons((prev) => !prev); // Toggle icon visibility
  };

  const shareToWhatsApp = (img) => {
    const url = `https://wa.me/?text=${encodeURIComponent(
      "Check out this image: " + img
    )}`;
    window.open(url, "_blank");
  };

  const shareToInstagramStory = (img) => {
    const storyUrl = `https://www.instagram.com/create/story/`;
    navigator.clipboard.writeText(img).then(() => {
      alert(
        "Link copied! Now open Instagram and paste the link in your story: " +
          storyUrl
      );
      window.open(storyUrl, "_blank");
    });
  };

  const downloadImage = (img) => {
    const link = document.createElement("a");
    link.href = img;
    link.download = "downloaded-image.jpg";
    link.click();
  };

  const goToNextImage = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex < DataProduct.length - 1 ? prevIndex + 1 : 0
    );
    setSelectedImage(DataProduct[(currentIndex + 1) % DataProduct.length].img);
  };

  const goToPreviousImage = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex > 0 ? prevIndex - 1 : DataProduct.length - 1
    );
    setSelectedImage(
      DataProduct[(currentIndex - 1 + DataProduct.length) % DataProduct.length]
        .img
    );
  };

  return (
    <div className="container mx-auto py-10">
      <div className="text-center mb-20">
        <p className="text-sm text-second">Our</p>
        <motion.h1
          className="text-3xl font-bold"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
        >
          Photo Gallery
        </motion.h1>
        <motion.p
          className="text-xs text-gray-400"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2 }}
        >
          Kisah romantis yang tak terlupakan sampai maut memisahkan
        </motion.p>
      </div>

      <motion.div
        className="grid grid-cols-2 md:grid-cols-3 gap-2 place-items-center"
        initial="hidden"
        animate="visible"
        transition={{ staggerChildren: 0.1 }}
      >
        {DataProduct.map((data, index) => (
          <motion.div
            key={data.id}
            style={{ overflow: "hidden", maxWidth: "350px" }}
            whileHover={{
              scale: 1.05,
              boxShadow: "0 4px 20px rgba(0,0,0,0.5)",
            }}
            whileTap={{ scale: 0.95 }}
          >
            <motion.div
              className="h-[250px]"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5 }}
            >
              <img
                src={data.img}
                alt={`Photo ${data.id}`}
                className="w-80 h-90 object-cover transform group-hover:scale-105 duration-300"
                onClick={() => handleImageClick(data.img, index)}
              />
            </motion.div>
          </motion.div>
        ))}
      </motion.div>

      {selectedImage && (
        <motion.div
          className="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center z-50"
          onClick={closeImage}
        >
          <motion.img
            src={selectedImage}
            alt="Selected full size"
            className="w-full h-full object-cover cursor-pointer"
            style={{
              transform: `scale(${zoomLevel})`,
              transition: "transform 0.3s ease",
            }}
            onClick={(e) => {
              e.stopPropagation();
              toggleIcons(); // Toggle icons on image click
            }}
          />

          {showIcons && (
            <>
              <div className="absolute top-5 right-5 flex flex-col space-y-2 rounded-full">
                <button
                  onClick={(e) => {
                    e.stopPropagation();
                    setZoomLevel((prev) => prev + 0.1);
                  }}
                  className="bg-gray-600 text-white p-2 rounded-full "
                  title="Zoom In"
                >
                  <FaSearchPlus size={20} />
                </button>
                <button
                  onClick={(e) => {
                    e.stopPropagation();
                    setZoomLevel((prev) => Math.max(prev - 0.1, 1));
                  }}
                  className="bg-gray-600 text-white p-2 rounded-full"
                  title="Zoom Out"
                >
                  <FaSearchMinus size={20} />
                </button>
              </div>

              <div className="absolute top-1/2 left-5 transform -translate-y-1/2 rounded-3xl ">
                <button
                  onClick={(e) => {
                    e.stopPropagation();
                    goToPreviousImage();
                  }}
                  className="bg-gray-600 bg-opacity-50 text-white p-2 rounded-full"
                  title="Previous"
                >
                  <FaChevronLeft size={20} />
                </button>
              </div>
              <div className="absolute top-1/2 right-5 transform -translate-y-1/2 rounded-full">
                <button
                  onClick={(e) => {
                    e.stopPropagation();
                    goToNextImage();
                  }}
                  className="bg-gray-600 bg-opacity-50 text-white p-2 rounded-full"
                  title="Next"
                >
                  <FaChevronRight size={20} />
                </button>
              </div>

              <div className="absolute top-5 left-5 flex space-x-4 items-center rounded-full ">
                <button
                  onClick={closeImage}
                  className="text-white p-2 rounded-full"
                >
                  <FaTimes size={20} />
                </button>
                <button
                  onClick={(e) => {
                    e.stopPropagation();
                    downloadImage(selectedImage);
                  }}
                  className="text-white p-2 rounded-full"
                >
                  <FaDownload size={20} />
                </button>
                <button
                  onClick={(e) => {
                    e.stopPropagation();
                    shareToInstagramStory(selectedImage);
                  }}
                  className="text-white p-2 rounded-full"
                >
                  <FaInstagram size={20} />
                </button>
                <button
                  onClick={(e) => {
                    e.stopPropagation();
                    shareToWhatsApp(selectedImage);
                  }}
                  className="text-white p-2 rounded-full"
                >
                  <FaWhatsapp size={20} />
                </button>
              </div>
            </>
          )}
        </motion.div>
      )}
    </div>
  );
};

export default Photo;
