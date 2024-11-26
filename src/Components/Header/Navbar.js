import { useState } from "react";
import { FaBurger } from "react-icons/fa6";
import { Link } from "react-router-dom";
import { GiTireIronCross } from "react-icons/gi";
import { FaChevronDown, FaChevronUp } from "react-icons/fa";
import { FaChevronRight } from "react-icons/fa";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const toggleMenu = () => setIsMenuOpen((prev) => !prev);
  const toggleDropdown = () => setIsDropdownOpen((prev) => !prev);

  return (
    <header className="bg-gray-500 body-font shadow-md">
      <div className="container mx-auto flex flex-wrap p-5 items-center justify-between">
        {/* Logo */}
        <Link
          to="#"
          className="flex title-font font-medium items-center text-white"
        >
          <img
            src="https://thechefkart.com/_next/image?url=https%3A%2F%2Fchefkart-strapi-media.s3.ap-south-1.amazonaws.com%2FLogo_black_0c2ca67725.webp&w=1920&q=75"
            alt="Logo"
            className="w-48 h-auto"
          />
        </Link>

        {/* Desktop Menu */}
        <nav className="hidden md:flex md:ml-auto md:mr-auto items-center text-base justify-center">
          <div className="relative">
            <button
              className="mr-5 text-2xl text-white hover:text-orange-500 hover:underline focus:outline-none flex items-center"
              onClick={toggleDropdown}
            >
              Our Services
              <span className="ml-2">
                {isDropdownOpen ? <FaChevronUp /> : <FaChevronDown />}
              </span>
            </button>
            {isDropdownOpen && (
              <div className="absolute mt-2 w-60 h-44 hover:text-orange-500 bg-white shadow-lg rounded-md z-10">
                <Link
                  to="#"
                  className="block px-4  text-md mt-2 py-2 text-gray-800 text-1xl h-11 hover:text-orange-500 flex justify-between items-center"
                  onClick={() => setIsDropdownOpen(false)}
                >
                  Cook for a month
                  <FaChevronRight className="ml-2" />
                </Link>
                <hr/>
                <Link
                  to="#"
                  className="block px-4  text-md py-2 mt-2 text-gray-800 text-1xl h-11 hover:text-orange-500 flex justify-between items-center"
                  onClick={() => setIsDropdownOpen(false)}
                >
                  Cheift: One time cook
                  <FaChevronRight className="ml-2" />
                </Link>
                <hr/>
                 <Link
                  to="#"
                  className="block px-4 text-md py-2 mt-2 text-gray-800 text-1xl h-11 hover:text-orange-500 flex justify-between items-center"
                  onClick={() => setIsDropdownOpen(false)}
                >
                  Chef for Party
                  <FaChevronRight className="ml-2" />
                </Link>
              
              </div>
            )}
          </div>
          <Link to="#" className="mr-5 text-2xl text-white hover:underline">
            ChefKart से जुड़ें
          </Link>
          <Link to="#" className="mr-5 text-2xl text-white hover:underline">
            Cooks Near Me
          </Link>
        </nav>

        {/* Hamburger Menu Button */}
        <button
          className="md:hidden text-white focus:outline-none"
          onClick={toggleMenu}
          aria-label="Toggle Menu"
        >
          <FaBurger className="w-10 h-10" />
        </button>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="absolute top-0 right-0 w-3/4 h-full bg-black shadow-lg z-50 md:hidden transition-transform duration-300">
          <div className="flex flex-col p-5">
            {/* Close Button */}
            <button
              className="self-end mb-4 text-gray-900 focus:outline-none"
              onClick={toggleMenu}
              aria-label="Close Menu"
            >
              <GiTireIronCross className="w-10 h-10 text-white" />
            </button>

            {/* Mobile Menu Links */}
            

           
            <Link
              to="#"
              className="mb-4 font-bold text-white text-lg"
              onClick={toggleMenu}
            >
             About us
            </Link>
            <hr/>
            <Link
              to="#"
              className="mb-4 font-bold text-white text-lg"
              onClick={toggleMenu}
            >
              Blog
            </Link>
            <hr/>
            <Link
              to="#"
              className="mb-4 font-bold text-white text-lg"
              onClick={toggleMenu}
            >
             Career
            </Link>
            <hr/>
            <Link
              to="#"
              className="mb-4 font-bold text-white text-lg"
              onClick={toggleMenu}
            >
             Investors Relation
            </Link>
            <hr/>
            <Link
              to="#"
              className="mb-4 font-bold text-white text-lg"
              onClick={toggleMenu}
            >
             Testimonials
            </Link>
            <hr/>
            {/* Contact Us Button */}
            <button className="mt-4 inline-flex items-center bg-orange-500 border-0 py-2 px-4 focus:outline-none rounded text-white text-lg">
              Contact Us
              <svg
                fill="none"
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                className="w-5 h-5 ml-1"
                viewBox="0 0 24 24"
              >
                <path d="M5 12h14M12 5l7 7-7 7"></path>
              </svg>
            </button>
          </div>
        </div>
      )}
    </header>
  );
};

export default Navbar;
