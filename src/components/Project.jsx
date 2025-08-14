import React from "react";
import { motion as _motion } from "framer-motion";
import { FaGithub } from "react-icons/fa";
import { ExternalLink } from "lucide-react";

import masterfood from "../assets/Project/masterfood.PNG";
import ecomreactapp from "../assets/Project/e-com-react.PNG";
import movieapp from "../assets/Project/movieapp.PNG";
import jobportal from "../assets/Project/jobportal.PNG";
import weatherapp from "../assets/Project/weatherapp.PNG";
import atmcard from "../assets/Project/atm.PNG";

const projects = [
    {
  title: "Job Portal Website",
  image: jobportal, 
  github: "https://github.com/Aksharass/job-portal", 
  preview: "https://job-portal-ashy-one.vercel.app/login/", 
  desc: "A full-stack job portal with role-based access for Admin, Employer, and Job Seeker, enabling job postings, applications, and admin moderation.",
  skills: "React.js, Node.js, Express.js, MongoDB, Tailwind CSS",
},
  {
    title: "E-commerce Site",
    image: ecomreactapp,
    github: "https://github.com/Aksharass/E-commerce-website",
    preview: "https://e-commerce-website-a9ez.vercel.app/",
    desc: "Built a responsive e-commerce store with cart functionality. Integrated Stripe for secure online payments.",
    skills: "React.js, Tailwind CSS, Node.js, Express.js, MongoDB, Stripe API",
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

{
  title: "Weather App",
  image: weatherapp,
  github: "https://github.com/Aksharass/Weather-app",
  preview: "https://weather-app-coral-iota-96.vercel.app/",
  desc: "A real-time weather application that fetches accurate weather data for any location using the OpenWeather API.",
  skills: "HTML, CSS, JavaScript, Bootstrap",
},
{
  title: "ATM Card",
  image: atmcard,
  github: "https://github.com/Aksharass/atm-card",
  preview: "https://atm-card-seven.vercel.app/",
  desc: "A modern and responsive digital card interface designed for showcasing personal and professional information in a stylish format.",
  skills: "HTML, CSS, JavaScript, Bootstrap",
},

];

const Projects = () => {
  return (
    <section id="projects" className=" py-20 px-4 text-white">
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
