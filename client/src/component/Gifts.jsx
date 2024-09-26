import React, { useState } from "react";
import { motion } from "framer-motion";
import {
  FaHandHoldingHeart,
  FaCreditCard,
  FaBarcode,
  FaCopy,
  FaCheck,
} from "react-icons/fa";

const GiftWedding = () => {
  const [isClicked, setIsClicked] = useState(false);
  const [isCopied, setIsCopied] = useState(false); // State to track copy action

  // Nomor rekening
  const rekening = "1234567890";

  // Fungsi untuk menyalin nomor rekening
  const handleCopyRekening = () => {
    navigator.clipboard.writeText(rekening);
    setIsCopied(true);

    // Reset copy state setelah beberapa detik
    setTimeout(() => {
      setIsCopied(false);
    }, 2000);
  };

  // Variabel animasi untuk framer-motion
  const cardVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0 },
    hover: { scale: 1.05, boxShadow: "0px 10px 30px rgba(0, 0, 0, 0.2)" },
    click: { scale: 0.95, rotate: 5 },
  };

  return (
    <div className="bg-gray-100 dark:bg-gray-800 min-h-screen py-10 font-serif">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-10">
          <h1 className="text-3xl md:text-4xl font-bold text-gray-800 dark:text-white">
            Kado Pernikahan
          </h1>
          <p className="text-gray-600 dark:text-gray-300 mt-2">
            Terima kasih atas kado dan doa yang telah diberikan.
          </p>
        </div>

        {/* Ucapan Terima Kasih */}
        <motion.div
          className="bg-white dark:bg-gray-900 rounded-lg shadow-lg p-6 mb-8 max-w-md mx-auto"
          initial="hidden"
          whileInView="visible"
          whileHover="hover"
          whileTap="click"
          variants={cardVariants}
          transition={{ duration: 0.8 }}
        >
          <div className="text-center">
            <FaHandHoldingHeart className="text-pink-500 text-4xl mx-auto mb-4" />
            <h2 className="text-2xl font-bold text-orange-500 mb-4">
              Terima Kasih
            </h2>
            <p className="text-gray-800 dark:text-gray-300">
              Kami sangat bersyukur atas setiap doa, ucapan, dan kado yang
              diberikan. Terima kasih telah menjadi bagian dari hari istimewa
              kami.
            </p>
          </div>
        </motion.div>

        {/* Informasi Bank */}
        <motion.div
          className="bg-white dark:bg-gray-900 rounded-lg shadow-lg p-6 mb-8 max-w-md mx-auto"
          initial="hidden"
          whileInView="visible"
          whileHover="hover"
          whileTap="click"
          variants={cardVariants}
          transition={{ duration: 0.8 }}
        >
          <div className="text-center mb-4">
            <FaCreditCard className="text-green-500 text-4xl mx-auto mb-4" />
            <h2 className="text-2xl font-bold text-orange-500 mb-4">
              Informasi Bank
            </h2>
          </div>

          {/* Detail Bank */}
          <div className="text-center">
            <p className="text-gray-800 dark:text-gray-300">
              <strong>Bank:</strong> BCA
            </p>
            <p className="text-gray-800 dark:text-gray-300 flex justify-center items-center">
              <strong>Nomor Rekening:</strong> {rekening}{" "}
              <button
                onClick={handleCopyRekening}
                className="ml-2 text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-200"
              >
                {isCopied ? <FaCheck className="text-green-500" /> : <FaCopy />}
              </button>
            </p>
            <p className="text-gray-800 dark:text-gray-300">
              <strong>Atas Nama:</strong> Nama Mempelai
            </p>
          </div>

          {/* QR Code */}
          <div className="flex justify-center mt-4">
            <motion.img
              src="/path/to/qrcode.png" // Ganti dengan path file QR code
              alt="QR Code"
              className="w-40 h-40"
              whileHover={{ scale: 1.1 }} // Animasi saat hover di desktop
              whileTap={{ scale: 0.9 }} // Animasi saat tap di mobile
            />
          </div>
        </motion.div>

        {/* Pesan di QR Code */}
        <motion.div
          className="bg-white dark:bg-gray-900 rounded-lg shadow-lg p-6 mb-8 max-w-md mx-auto"
          initial="hidden"
          whileInView="visible"
          whileHover="hover"
          whileTap="click"
          variants={cardVariants}
          transition={{ duration: 0.8 }}
        >
          <div className="text-center">
            <FaBarcode className="text-purple-500 text-4xl mx-auto mb-4" />
            <h2 className="text-2xl font-bold text-orange-500 mb-4">
              Scan Barcode
            </h2>
            <p className="text-gray-800 dark:text-gray-300">
              Silakan scan barcode di atas untuk memberikan kado melalui
              transfer.
            </p>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default GiftWedding;
