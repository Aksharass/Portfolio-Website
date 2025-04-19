import React, { useRef, useState } from "react";
import { motion as _motion } from "framer-motion";
import emailjs from "@emailjs/browser";
import { MapPin, Github, Linkedin } from "lucide-react";

const fadeIn = (direction = "up", delay = 0) => ({
  initial: { opacity: 0, y: direction === "up" ? 40 : 0 },
  whileInView: { opacity: 1, y: 0 },
  transition: { duration: 0.6, delay },
  viewport: { once: true },
});

const Contact = () => {
  const form = useRef();
  const [sent, setSent] = useState(false);

  const sendEmail = (e) => {
    e.preventDefault();
    emailjs
      .sendForm(
        "service_qpv3ln2", // replace with actual ID
        "template_j6ji2zj", // replace with actual ID
        form.current,
        "312nfiGKe9Yf_H5_9" // replace with actual key
      )
      .then(
        () => {
          setSent(true);
          e.target.reset();
        },
        (error) => {
          console.log(error.text);
        }
      );
  };

  return (
    <section id="contact" className="bg-black text-white py-20 px-6 md:px-12">
      <div className="max-w-6xl mx-auto">

        {/* Heading & Top Content */}
        <_motion.div
          className="text-center mb-12"
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl font-bold text-cyan-400 mb-2">Get in Touch</h2>
          <p className="text-gray-300 max-w-2xl mx-auto text-base">
            I'm currently open to freelance projects, collaboration opportunities, or full-time roles. Whether you have a question, an idea, or just want to say hi — drop a message below. Let’s build something awesome together!
          </p>
        </_motion.div>

        {/* Grid for larger screens */}
        <div className="grid md:grid-cols-2 items-start gap-x-6 gap-y-10">

          {/* Left Column - Contact Info */}
          <_motion.div
            {...fadeIn("up", 0.2)}
            className="flex flex-col space-y-4 ml-10 md:ml-40 mt-4 sm:mt-0 self-start"
          >
            <div className="flex items-center gap-3">
              <MapPin className="text-cyan-400" />
              <span className="text-gray-300">Kanyakumari, India</span>
            </div>
            <div className="flex items-center gap-3">
              <Github className="text-cyan-400" />
              <a
                href="https://github.com/Aksharass"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-300 hover:text-cyan-400 transition"
              >
                github.com/Aksharass
              </a>
            </div>
            <div className="flex items-center gap-3">
              <Linkedin className="text-cyan-400" />
              <a
                href="https://www.linkedin.com/in/akshara-s-s/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-300 hover:text-cyan-400 transition"
              >
                linkedin.com/in/akshara-s-s
              </a>
            </div>
          </_motion.div>

          {/* Right Column - Feedback Form */}
          <_motion.form
            ref={form}
            onSubmit={sendEmail}
            className="space-y-4"
            {...fadeIn("up", 0.3)}
          >
            <input
              type="text"
              name="user_name"
              placeholder="Your Name"
              className="w-full p-3 rounded-lg bg-gray-700 focus:outline-none"
              required
            />
            <input
              type="email"
              name="user_email"
              placeholder="Your Email"
              className="w-full p-3 rounded-lg bg-gray-700 focus:outline-none"
              required
            />
            <textarea
              name="message"
              rows="5"
              placeholder="Your Message"
              className="w-full p-3 rounded-lg bg-gray-700 focus:outline-none"
              required
            />
            <button
              type="submit"
              className="w-full bg-cyan-500 hover:bg-cyan-600 text-white py-3 px-6 rounded-lg transition-all font-semibold"
            >
              Send Message
            </button>
            {sent && (
              <p className="text-green-400 text-center">
                ✅ Message sent successfully!
              </p>
            )}
          </_motion.form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
