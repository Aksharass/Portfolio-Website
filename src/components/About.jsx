import React from "react";
import { motion as _motion } from "framer-motion";
import { Code, User, Rocket } from "lucide-react";

const aboutItems = [
  {
    icon: <User className="w-8 h-8 text-accent" />,
    title: "Who Am I?",
    text: "I'm a Full Stack developer with a passion for building elegant UIs and smooth user experiences. I focus on modern frontend tools like Tailwind, MUI, and Framer Motion.",
  },
  {
    icon: <Code className="w-8 h-8 text-accent" />,
    title: "What I Do",
    text: "I specialize in frontend development, turning designs into pixel-perfect, responsive, and interactive websites and apps.",
  },
  {
    icon: <Rocket className="w-8 h-8 text-accent" />,
    title: "Goals",
    text: "I aim to continuously learn, grow with tech, and contribute to real-world projects that make a difference.",
  },
];

export default function About() {
  return (
    <section className=" text-white py-20 px-5">
      <div className="max-w-4xl mx-auto text-center">
        <_motion.h2
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-5xl font-bold mb-8 text-accent"
        >
          About Me
        </_motion.h2>

        <_motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3, duration: 0.6 }}
          className="text-gray-400 text-lg mb-16"
        >
          I'm a self-motivated developer who enjoys crafting intuitive, responsive, and performance-focused user interfaces.
        </_motion.p>

        <div className="grid md:grid-cols-3 gap-10">
          {aboutItems.map((item, i) => (
            <_motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 * i, duration: 0.5 }}
              className="bg-gray-800 p-6 rounded-2xl shadow-lg hover:shadow-accent transition-shadow"
            >
              <div className="flex items-center justify-center mb-4">
                {item.icon}
              </div>
              <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
              <p className="text-gray-400 text-sm">{item.text}</p>
            </_motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
