import React from "react";
import { motion as _motion } from "framer-motion";

const education = [
    {
        degree: "B.E. Electronics and Communication Engineering",
        institution: "Amrita College of Engineering and Technology, Nagercoil",
        year: "2019 - 2023",
    },
    {
        degree: "State Board (12th)",
        institution: "Christuraja Matriculation Higher Secondary School, Marthandam",
        year: "2018 - 2019",
    },
    {
        degree: "State Board (10th)",
        institution: "Sacred Heart Matriculation Higher Secondary School, Padanthalumoodu",
        year: "2016 - 2017",
    },
];

const experience = [
    {
        role: "React JS Developer Intern",
        company: "ATEAM Soft Solutions Pvt Ltd",
        year: "Nov 2024 – Mar 2025",
        description: [
            "Built responsive and dynamic web applications using React.js and Tailwind CSS, enhancing UI/UX and performance.",
            "Collaborated with cross-functional teams to deliver high-quality software solutions on time.",
        ],
    },
    {
        role: "Research Analyst",
        company: "Ecesis Groups Private Limited",
        year: "Apr 2024 - Sep 2024",
        description: [
            "Conducted in-depth market research, analyzed industry trends, and provided actionable insights to support business strategies.",
            "Prepared detailed reports and presentations for management, improving decision-making processes.",
        ],
    },
];

const itemVariants = {
    hidden: { opacity: 0, y: 40, scale: 0.95 },
    visible: { opacity: 1, y: 0, scale: 1 },
};

export default function Qualification() {
    return (
        <div className=" py-12 px-2 min-h-screen flex flex-col items-center justify-center">
            <_motion.h2
                initial={{ opacity: 0, y: -30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                className="text-4xl mt-6 font-extrabold text-sky-400 mb-8 text-center drop-shadow-lg"
            >
                Qualification
            </_motion.h2>
            <div className="flex flex-col md:flex-row gap-8 w-full max-w-5xl">
                {/* Education */}
                <_motion.div
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    transition={{ staggerChildren: 0.2 }}
                    className="flex-1  rounded-2xl shadow-2xl p-4 sm:p-6 bg-gray-800 "
                >
                    <h3 className="text-2xl font-bold text-sky-300 mb-6 text-center">Education</h3>
                    {education.map((edu, idx) => (
                        <_motion.div
                            key={idx}
                            variants={itemVariants}
                            whileHover={{ scale: 1.03, boxShadow: "0 8px 32px 0 rgba(0, 255, 255, 0.2)" }}
                            className="mb-6 p-4 rounded-xl bg-slate-900 hover:bg-sky-800 transition-all duration-300 shadow-lg cursor-pointer"
                        >
                            <div className="text-sky-300 font-semibold text-lg">{edu.degree}</div>
                            <div className="text-gray-200">{edu.institution}</div>
                            <div className="text-sky-400 text-sm font-mono">{edu.year}</div>
                        </_motion.div>
                    ))}
                </_motion.div>
                {/* Experience */}
                <_motion.div
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    transition={{ staggerChildren: 0.2 }}
                    className="flex-1 bg-gray-800 rounded-2xl shadow-2xl p-4 sm:p-6"
                >
                    <h3 className="text-2xl font-bold text-sky-300 mb-6 text-center">Experience</h3>
                    {experience.map((exp, idx) => (
                        <_motion.div
                            key={idx}
                            variants={itemVariants}
                            whileHover={{ scale: 1.03, boxShadow: "0 8px 32px 0 rgba(0, 255, 255, 0.2)" }}
                            className="mb-6 p-4 rounded-xl bg-slate-900 hover:bg-sky-800 transition-all duration-300 shadow-lg cursor-pointer"
                        >
                            <div className="text-sky-300 font-semibold text-lg">{exp.role}</div>
                            <div className="text-gray-200">{exp.company}</div>
                            <div className="text-sky-400 text-sm font-mono">{exp.year}</div>
                            <ul className="text-gray-400 text-xs mt-2 list-disc pl-5 space-y-1">
                                {exp.description.map((point, i) => (
                                    <li key={i}>{point}</li>
                                ))}
                            </ul>
                        </_motion.div>
                    ))}
                </_motion.div>
            </div>
        </div>
    );
}