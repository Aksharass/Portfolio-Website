import React, { useState } from "react";
import { motion as _motion, AnimatePresence } from "framer-motion";
import TypeAnimation from "react-type-animation"; // 
import { X } from "lucide-react"; 
import { FaLinkedin, FaGithub } from "react-icons/fa";

// Update these paths as needed:
import resumePDF from "../assets/Akshara_Resume.pdf"; // Path to your resume PDF

export default function Home() {
    const [showResume, setShowResume] = useState(false);

    return (
        <div className=" py-20 px-4 text-white min-h-screen flex items-center justify-center relative overflow-hidden">
            <div className="max-w-6xl mx-auto px-6 md:flex md:items-center md:justify-between w-full">
                {/* Left Side */}
                <div className="md:w-1/2 text-center md:text-left">
                    <h4 className="text-sky-400 text-xl font-semibold mb-2">HELLO!</h4>

                    <h2 className="text-4xl md:text-5xl font-extrabold leading-tight flex flex-col">
                        {/* Fixed Name */}
                        <span className="whitespace-nowrap">
                            I Am <span className="text-sky-300">Akshara S S</span>
                        </span>

                        {/* Slowly Typing Title */}
                        <span className="whitespace-nowrap mt-2 text-sky-300 transition-all duration-700 ease-in-out">
                            <TypeAnimation
                                sequence={[
                                    "Frontend Developer",
                                    3000,
                                    "Web Developer",
                                    3000,
                                    "Full Stack Developer",
                                    3000,
                                ]}
                                speed={200} // Slower typing speed (milliseconds per letter)
                                repeat={Infinity}
                                wrapper="span"
                                cursor={true}
                            />
                        </span>
                    </h2>


                    <p className="text-gray-300 mt-4">
                        I'm a Front End Developer crafting modern and responsive websites.
                        Passionate about clean design, seamless UX, and cutting-edge
                        technologies.
                    </p>

                    {/* Social Icons */}
                    <div className="mt-4 flex gap-6 justify-center md:justify-start text-2xl">
                        <a
                            href="https://www.linkedin.com/in/akshara-s-s/"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-sky-400 hover:text-sky-300 transition"
                        >
                            <FaLinkedin />
                        </a>
                        <a
                            href="https://github.com/Aksharass"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-sky-400 hover:text-sky-300 transition"
                        >
                            <FaGithub />
                        </a>
                    </div>

                    <div className="mt-6 flex justify-center md:justify-start gap-4">
                        <a href="#projects">
                            <button className="bg-sky-500 hover:bg-sky-600 px-6 py-2 rounded-full font-semibold transition">
                                View Work
                            </button>
                        </a>
                        <button
                            onClick={() => setShowResume(true)}
                            className="border-2 border-white hover:bg-white hover:text-slate-900 px-6 py-2 rounded-full font-semibold transition"
                        >
                            Hire Me
                        </button>
                    </div>
                </div>
            </div>

            {/* Side Resume Canvas */}
            <AnimatePresence>
                {showResume && (
                    <>
                        {/* Overlay */}
                        <_motion.div
                            className="fixed inset-0 bg-black bg-opacity-70 z-40"
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            onClick={() => setShowResume(false)}
                        />

                        {/* Slide-in Resume Panel */}
                        <_motion.div
                            className="fixed top-0 right-0 w-full sm:w-[420px] h-full bg-slate-900 z-50 shadow-lg flex flex-col p-4"
                            initial={{ x: "100%" }}
                            animate={{ x: 0 }}
                            exit={{ x: "100%" }}
                            transition={{ type: "tween", duration: 0.4 }}
                        >
                            {/* Optional close button */}
                            <button
                                className="absolute top-3 right-4 text-gray-400 hover:text-white"
                                onClick={() => setShowResume(false)}
                            >
                                <X size={24} />
                            </button>

                            {/* Heading */}
                            <h2 className="text-center text-lg font-bold mt-8 mb-4">My Resume</h2>

                            {/* Resume PDF Viewer */}
                            <div className="flex-1 px-4 pb-4 flex items-center justify-center overflow-hidden">
                                <iframe
                                    src={resumePDF}
                                    title="Resume PDF"
                                    className="w-full h-[75vh] rounded-lg border border-gray-700 shadow-lg"
                                    style={{ overflow: "hidden" }}
                                />
                            </div>

                            {/* Download Button */}
                            <div className="mb-4 flex justify-center">
                                <a
                                    href={resumePDF}
                                    download="Akshara_SS_Resume.pdf"
                                    className="bg-sky-500 hover:bg-sky-600 text-sm text-white px-4 py-2 rounded-full transition"
                                >
                                    Download PDF
                                </a>
                            </div>
                        </_motion.div>
                    </>
                )}
            </AnimatePresence>
        </div>
    );
}
