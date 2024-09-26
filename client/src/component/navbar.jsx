import React, { useState } from "react";
import { Link } from "react-scroll";
import { FaBars, FaTimes } from "react-icons/fa"; // Icon untuk hamburger menu

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false); // State untuk membuka/menutup menu

  const toggleMenu = () => {
    setIsOpen(!isOpen); // Toggle state ketika tombol ditekan
  };

  return (
    <nav className="bg-white dark:bg-gray-900 shadow-lg">
      <div className="container mx-auto px-4 py-3 flex justify-between items-center">
        {/* Logo atau Judul */}
        <div className="text-gray-800 dark:text-white text-1xl font-bold">
          Avel & Ritha
        </div>

        {/* Hamburger Menu untuk Mobile */}
        <div className="md:hidden">
          <button
            onClick={toggleMenu}
            className="text-gray-800 dark:text-white"
          >
            {isOpen ? <FaTimes size={20} /> : <FaBars size={20} />}
          </button>
        </div>

        {/* Links untuk Desktop */}
        <ul className="hidden md:flex space-x-6 justify-center">
          <li>
            <Link
              to="header"
              smooth={true}
              duration={500}
              className="text-gray-800 dark:text-white hover:text-orange-500"
            >
              Home
            </Link>
          </li>
          <li>
            <Link
              to="mempelai"
              smooth={true}
              duration={500}
              className="text-gray-800 dark:text-white hover:text-orange-500"
            >
              Mempelai
            </Link>
          </li>
          <li>
            <Link
              to="undangan"
              smooth={true}
              duration={500}
              className="text-gray-800 dark:text-white hover:text-orange-500"
            >
              Undangan
            </Link>
          </li>
          <li>
            <Link
              to="lokasi"
              smooth={true}
              duration={500}
              className="text-gray-800 dark:text-white hover:text-orange-500"
            >
              Lokasi
            </Link>
          </li>
          <li>
            <Link
              to="cerita-cinta"
              smooth={true}
              duration={500}
              className="text-gray-800 dark:text-white hover:text-orange-500"
            >
              Cerita
            </Link>
          </li>
          <li>
            <Link
              to="photo-galeri"
              smooth={true}
              duration={500}
              className="text-gray-800 dark:text-white hover:text-orange-500"
            >
              Photo
            </Link>
          </li>
          <li>
            <Link
              to="kado"
              smooth={true}
              duration={500}
              className="text-gray-800 dark:text-white hover:text-orange-500"
            >
              Kado
            </Link>
          </li>
          <li>
            <Link
              to="doa-ucapan"
              smooth={true}
              duration={500}
              className="text-gray-800 dark:text-white hover:text-orange-500"
            >
              Ucapan
            </Link>
          </li>
        </ul>

        {/* Menu untuk Mobile */}
        {isOpen && (
          <ul className="md:hidden absolute top-10 left-50 right-0 bg-white font-semibold bg-opacity-50 dark:bg-gray-900 dark:bg-opacity-90 shadow-md py-1 space-y-1 text-center z-50">
            <li>
              <Link
                to="header"
                smooth={true}
                duration={500}
                className="text-gray-800 dark:text-white hover:text-orange-500"
                onClick={toggleMenu}
              >
                Home
              </Link>
            </li>
            <li>
              <Link
                to="mempelai"
                smooth={true}
                duration={500}
                className="text-gray-800 dark:text-white hover:text-orange-500"
                onClick={toggleMenu}
              >
                Mempelai
              </Link>
            </li>
            <li>
              <Link
                to="undangan"
                smooth={true}
                duration={500}
                className="text-gray-800 dark:text-white hover:text-orange-500"
                onClick={toggleMenu}
              >
                Undangan
              </Link>
            </li>
            <li>
              <Link
                to="lokasi"
                smooth={true}
                duration={500}
                className="text-gray-800 dark:text-white hover:text-orange-500"
                onClick={toggleMenu}
              >
                Lokasi
              </Link>
            </li>
            <li>
              <Link
                to="cerita-cinta"
                smooth={true}
                duration={500}
                className="text-gray-800 dark:text-white hover:text-orange-500"
                onClick={toggleMenu}
              >
                Cerita
              </Link>
            </li>
            <li>
              <Link
                to="photo-galeri"
                smooth={true}
                duration={500}
                className="text-gray-800 dark:text-white hover:text-orange-500"
                onClick={toggleMenu}
              >
                Photo
              </Link>
            </li>
            <li>
              <Link
                to="kado"
                smooth={true}
                duration={500}
                className="text-gray-800 dark:text-white hover:text-orange-500"
                onClick={toggleMenu}
              >
                Kado
              </Link>
            </li>
            <li>
              <Link
                to="doa-ucapan"
                smooth={true}
                duration={500}
                className="text-gray-800 dark:text-white hover:text-orange-500"
                onClick={toggleMenu}
              >
                Doa dan Ucapan
              </Link>
            </li>
            <li>
              <Link
                to="prayer-wishes"
                smooth={true}
                duration={500}
                className="text-gray-800 dark:text-white hover:text-orange-500"
                onClick={toggleMenu}
              >
                Doa dan Ucapan
              </Link>
            </li>
          </ul>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
