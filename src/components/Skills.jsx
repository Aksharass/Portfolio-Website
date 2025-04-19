import React from "react";
import { motion as _motion} from "framer-motion";
import Tilt from "react-parallax-tilt";

import {
  FaReact, FaHtml5, FaCss3Alt, FaJs, FaGithub, FaNodeJs,
  FaBootstrap, FaPython,
} from "react-icons/fa";
import {
  SiTailwindcss, SiMongodb, SiRedux, SiJquery,
  SiDjango, SiPostman, SiTypescript, SiExpress, SiVuedotjs,
} from "react-icons/si";

const skills = {
  Frontend: [
    { name: "React", icon: <FaReact className="text-blue-400" />, url: "https://reactjs.org" },
    { name: "HTML", icon: <FaHtml5 className="text-orange-500" />, url: "https://developer.mozilla.org/en-US/docs/Web/HTML" },
    { name: "CSS", icon: <FaCss3Alt className="text-blue-500" />, url: "https://developer.mozilla.org/en-US/docs/Web/CSS" },
    { name: "JavaScript", icon: <FaJs className="text-yellow-400" />, url: "https://developer.mozilla.org/en-US/docs/Web/JavaScript" },
    { name: "Tailwind", icon: <SiTailwindcss className="text-cyan-300" />, url: "https://tailwindcss.com/" },
    { name: "Bootstrap", icon: <FaBootstrap className="text-indigo-300" />, url: "https://getbootstrap.com/" },
    { name: "Redux", icon: <SiRedux className="text-purple-500" />, url: "https://redux.js.org/" },
    { name: "jQuery", icon: <SiJquery className="text-blue-kkkkkkkkkkkkkkkkk00" />, url: "https://jquery.com/" },
  ],
  Backend: [
    { name: "Node.js", icon: <FaNodeJs className="text-green-400" />, url: "https://nodejs.org/" },
    { name: "Express", icon: <SiExpress className="text-gray-300" />, url: "https://expressjs.com/" },
    { name: "MongoDB", icon: <SiMongodb className="text-green-600" />, url: "https://www.mongodb.com/" },
    { name: "Python", icon: <FaPython className="text-yellow-300" />, url: "https://www.python.org/" },
    { name: "Django", icon: <SiDjango className="text-green-300" />, url: "https://www.djangoproject.com/" },
  ],
  Tools: [
    { name: "GitHub", icon: <FaGithub className="text-white" />, url: "https://github.com/" },
    { name: "Postman", icon: <SiPostman className="text-orange-400" />, url: "https://www.postman.com/" },
  ],
};

const SkillCard = ({ icon, name, url }) => (
    <a
      href={url}
      target="_blank"
      rel="noopener noreferrer"
      className="w-24 h-24"
    >
      <Tilt
        tiltMaxAngleX={20}
        tiltMaxAngleY={20}
        perspective={1000}
        transitionSpeed={1000}
        scale={1.05}
        gyroscope={true}
        className="w-full h-full"
      >
        <_motion.div
          className="flex flex-col items-center justify-center w-full h-full bg-gray-800 text-white rounded-xl shadow-md transition-all duration-300 ease-in-out"
          whileHover={{
            scale: 1.08,
            y: -8,
            boxShadow: "0px 0px 15px rgba(0, 255, 255, 0.5)",
          }}
          whileTap={{ scale: 0.95 }}
        >
          <div className="text-3xl transition-transform duration-300 group-hover:scale-110">
            {icon}
          </div>
          <span className="text-sm mt-2 text-center">
            {name}
          </span>
        </_motion.div>
      </Tilt>
    </a>
  );
  


const Skills = () => {
  return (
    <section className="bg-black text-white py-20 px-4" id="skills">
      <div className="max-w-7xl mx-auto">
        <_motion.h2
          className="text-4xl font-bold text-center mb-16  text-accent"
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          Skills
        </_motion.h2>

        <div className="grid md:grid-cols-3 gap-10">
          {Object.entries(skills).map(([category, skillList], i) => (
            <_motion.div
              key={category}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.2, duration: 0.6 }}
              viewport={{ once: true }}
            >
              <h3 className="text-xl font-semibold mb-6 text-center">
                {category}
              </h3>
              <div className="flex flex-wrap gap-6 justify-center">
                {skillList.map((skill) => (
                  <SkillCard
                    key={skill.name}
                    icon={skill.icon}
                    name={skill.name}
                    url={skill.url}
                  />
                ))}
              </div>
            </_motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
