import React from "react";
import { motion as _motion } from "framer-motion";
import { FaGithub } from "react-icons/fa";
import { ExternalLink } from "lucide-react";

import masterfood from "../assets/Project/masterfood.PNG";
import ecomreactapp from "../assets/Project/e-com-react.PNG";
import movieapp from "../assets/Project/movieapp.PNG";

const projects = [
  {
    title: "E-commerce Site",
    image: ecomreactapp,
    github: "https://github.com/Aksharass/E-commerce-website",
    preview: "https://e-commerce-website-a9ez.vercel.app/",
    desc: "Built a responsive e-commerce store with cart functionality. Integrated Stripe for secure online payments.",
    skills: "React.js, Tailwind CSS, Stripe API",
  },
  {
    title: "Movie App",
    image: movieapp,
    github: "https://github.com/Aksharass/Movie-app",
    preview: "https://movie-app-tan-beta.vercel.app/",
    desc: "Created a movie browser app using TMDB API. Features include trending movies, responsive UI, and search functionality.",
    skills: "React.js, TMDB API, Tailwind CSS",
  },
  {
    title: "Master Food Website",
    image: masterfood,
    github: "https://github.com/Aksharass/Master-foods",
    preview: "https://master-foods.vercel.app/",
    desc: "A responsive food app for exploring recipes, ingredients, and nutrition details with a clean React.js interface.",
    skills: "React.js, Tailwind CSS",
  },
];

const Projects = () => {
  return (
    <section id="projects" className="bg-black py-20 px-4 text-white">
      <_motion.h2
        className="text-4xl font-bold text-center mb-12 text-accent"
        initial={{ opacity: 0, y: -30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
      >
        Projects
      </_motion.h2>

      <div className="max-w-6xl mx-auto grid md:grid-cols-3 gap-10">
        {projects.map((proj, i) => (
          <_motion.div
            key={proj.title}
            className="bg-gray-800 rounded-2xl overflow-hidden shadow-lg hover:shadow-cyan-500/30 group transition-all duration-300"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.2, duration: 0.6 }}
            viewport={{ once: true }}
          >
            <img
              src={proj.image}
              alt={proj.title}
              className="w-full h-56 object-cover transition-transform duration-500"
            />
            <div className="p-5">
              <h3 className="text-xl font-semibold mb-2">{proj.title}</h3>
              <p className="text-sm text-gray-300 mb-2">{proj.desc}</p>
              <p className="text-xs italic text-gray-400 mb-4">
                Skills: {proj.skills}
              </p>
              <div className="flex justify-between items-center">
                <a
                  href={proj.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-1 hover:text-cyan-400"
                >
                  <FaGithub /> Code
                </a>
                <a
                  href={proj.preview}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-1 hover:text-cyan-400"
                >
                  <ExternalLink size={18} /> Preview
                </a>
              </div>
            </div>
          </_motion.div>
        ))}
      </div>
    </section>
  );
};

export default Projects;
