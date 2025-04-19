import React from "react";
import { FaGithub, FaLinkedin, FaGoogle, FaFacebookF, FaInstagram } from "react-icons/fa";
import img from "../assets/aklogo.png";

export default function Footer() {
  return (
    <footer className="bg-black text-white py-8 shadow-2xl">
      <div className="container mx-auto px-4 flex flex-col md:flex-row items-start justify-start">

        {/* Logo on the left */}
        <div className="mb-6 md:mb-0">
          <img
            src={img}
            alt="Logo"
            width={80}
            className="rounded-full shadow-lg hover:scale-105 transition-transform duration-300"
          />
        </div>

        {/* Centered Content with left margin */}
        <div className="ml-[400px] text-center">

          {/* Social Icons (GitHub, LinkedIn, Google, Facebook, Instagram) */}
          <div className="flex justify-center space-x-4 mb-4">
            <a
              href="https://github.com/Aksharass"
              target="_blank"
              rel="noopener noreferrer"
              className="w-10 h-10 flex items-center justify-center border border-white rounded-full hover:bg-white hover:text-black transition-all duration-300"
            >
              <FaGithub />
            </a>

            <a
              href="https://www.linkedin.com/in/akshara-s-s/"
              target="_blank"
              rel="noopener noreferrer"
              className="w-10 h-10 flex items-center justify-center border border-white rounded-full hover:bg-white hover:text-black transition-all duration-300"
            >
              <FaLinkedin />
            </a>

            <a
              href="mailto:aksharass128@gmail.com"
              className="w-10 h-10 flex items-center justify-center border border-white rounded-full hover:bg-white hover:text-black transition-all duration-300"
            >
              <FaGoogle />
            </a>

            {/* Facebook Icon */}
            <a
              href="https://www.facebook.com/profile.php?id=100041351497601"
              target="_blank"
              rel="noopener noreferrer"
              className="w-10 h-10 flex items-center justify-center border border-white rounded-full hover:bg-white hover:text-black transition-all duration-300"
            >
              <FaFacebookF />
            </a>

            {/* Instagram Icon */}
            <a
              href="https://www.instagram.com/_aksh_s_s_/"
              target="_blank"
              rel="noopener noreferrer"
              className="w-10 h-10 flex items-center justify-center border border-white rounded-full hover:bg-white hover:text-black transition-all duration-300"
            >
              <FaInstagram />
            </a>
          </div>

          {/* Navigation Links */}
          <div className="flex justify-center space-x-6 mb-4 text-sm md:text-base">
            <a href="#home" className="hover:underline hover:text-gray-400 transition duration-300">
              Home
            </a>
            <a href="#about" className="hover:underline hover:text-gray-400 transition duration-300">
              About
            </a>
            <a href="#contact" className="hover:underline hover:text-gray-400 transition duration-300">
              Contact
            </a>
            <a href="#skills" className="hover:underline hover:text-gray-400 transition duration-300">
              Skill
            </a>
            <a href="#projects" className="hover:underline hover:text-gray-400 transition duration-300">
              Project
            </a>
          </div>

          {/* Copyright */}
          <div className="text-gray-500 text-sm">© 2025 | Designed by Akshara S S</div>
        </div>
      </div>
    </footer>
  );
}
