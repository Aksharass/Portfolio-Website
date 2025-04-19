import React from 'react'
import { useState } from "react";
import { X } from "lucide-react";
import akLogo from "../assets/aklogo.png";
import { motion as _motion } from "framer-motion";


export default function Header() {

  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-black text-white relative z-50 sticky top-0">

      <div className="container mx-auto flex justify-between items-center px-4 py-3">
        {/* Logo */}
        <a href="#" className="text-xl font-bold"> <img src={akLogo} alt="Logo" className="h-10 w-auto" /></a>

        {/* Desktop Menu */}
        <ul className="hidden lg:flex space-x-6 px-5">
          <li>
            <a
              href="#home"
              className="px-5 relative transition-all duration-300 hover:text-blue-400 hover:scale-105 font-semibold"
            >
              Home
              <span className="absolute left-0 bottom-0 w-0 h-0.5 bg-blue-400 transition-all duration-300 ease-out group-hover:w-full"></span>
            </a>
          </li>
          <li>
            <a
              href="#about"
              className="px-5 relative transition-all duration-300 hover:text-blue-400 hover:scale-105 font-semibold"
            >
              About
              <span className="absolute left-0 bottom-0 w-0 h-0.5 bg-blue-400 transition-all duration-300 ease-out group-hover:w-full"></span>
            </a>
          </li>
          <li>
            <a
              href="#skills"
              className="px-5 relative transition-all duration-300 hover:text-blue-400 hover:scale-105 font-semibold"
            >
              Skill
              <span className="absolute left-0 bottom-0 w-0 h-0.5 bg-blue-400 transition-all duration-300 ease-out group-hover:w-full"></span>
            </a>
          </li>
          <li>
            <a
              href="#projects"
              className="px-5 relative transition-all duration-300 hover:text-blue-400 hover:scale-105 font-semibold"
            >
              Project
              <span className="absolute left-0 bottom-0 w-0 h-0.5 bg-blue-400 transition-all duration-300 ease-out group-hover:w-full"></span>
            </a>
          </li>
          <li>
            <a
              href="#contact"
              className="px-5 relative transition-all duration-300 hover:text-blue-400 hover:scale-105 font-semibold"
            >
              Contact
              <span className="absolute left-0 bottom-0 w-0 h-0.5 bg-blue-400 transition-all duration-300 ease-out group-hover:w-full"></span>
            </a>
          </li>
        </ul>

        {/* Mobile Menu Button */}
        <button
          className="block lg:hidden text-white focus:outline-none"
          onClick={() => setIsOpen(true)}
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7" />
          </svg>
        </button>
      </div>

      {/* Blurred Background Overlay */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 backdrop-blur-md lg:hidden"
          onClick={() => setIsOpen(false)} // Clicking outside closes the menu
        />
      )}

      {/* Animated Sidebar Menu */}
      <_motion.div
        initial={{ opacity: 0, x: "100%" }}
        animate={isOpen ? { opacity: 1, x: 0 } : { opacity: 0, x: "100%" }}
        transition={{ duration: 0.4, ease: "easeInOut" }}
        className={`fixed top-0 right-0 w-64 h-full bg-gray-800 text-white shadow-lg lg:hidden ${isOpen ? "block" : "hidden"
          }`}
      >
        {/* X Close Button */}
        <button
          className="absolute top-3 right-4 text-white hover:text-gray-400"
          onClick={() => setIsOpen(false)}
        >
          <X className="w-6 h-6" />
        </button>

        {/* Menu Items */}
        <ul className="p-6 space-y-6 text-lg mt-10">
          <li><a href="#home" onClick={() => setIsOpen(false)} className="block hover:text-gray-300">Home</a></li>
          <li><a href="#about" onClick={() => setIsOpen(false)} className="block hover:text-gray-300">About</a></li>
          <li><a href="#skills" onClick={() => setIsOpen(false)} className="block hover:text-gray-300">Skill</a></li>
          <li><a href="#projects" onClick={() => setIsOpen(false)} className="block hover:text-gray-300">Project</a></li>
          <li><a href="#contact" onClick={() => setIsOpen(false)} className="block hover:text-gray-300">Contact</a></li>
        </ul>
      </_motion.div>
    </nav>
  );
}
