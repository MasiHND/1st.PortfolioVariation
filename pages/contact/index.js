import { useState } from "react";

// components
import Circles from "../../components/Circles";

// icons
import { RiWechatLine } from "react-icons/ri";

// framer motion
import { motion } from "framer-motion";

// variants
import { fadeIn } from "../../variants";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [status, setStatus] = useState("");

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus("Sending...");

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });
      const result = await res.json();
      setStatus(result.message || "Sent!");
    } catch (err) {
      setStatus("Failed to send.");
    }
  };

  return (
    <div className="bg-primary/30 h-full">
      <div className="flex items-center justify-center h-full container mx-auto py-32 text-center xl:text-left">
        {/* text & form */}
        <div className="flex flex-col w-full max-w-[700px]">
          <motion.h2
            variants={fadeIn("down", 0.2)}
            initial="hidden"
            animate="show"
            exit="hidden"
            className="h2 capitalize text-center mb-12"
          >
            let's <span className="text-accent">connect.</span>
          </motion.h2>
          {/* form */}
          <motion.form
            onSubmit={handleSubmit}
            variants={fadeIn("up", 0.2)}
            initial="hidden"
            animate="show"
            exit="hidden"
            className="flex flex-1 flex-col gap-6 w-full mx-auto"
          >
            <div className="flex gap-x-6 w-full">
              <input
                type="text"
                name="name"
                placeholder="Name"
                className="input"
                required
                onChange={handleChange}
              />
              <input
                type="email"
                name="email"
                placeholder="Email"
                className="input"
                required
                onChange={handleChange}
              />
            </div>
            <input
              type="text"
              name="subject"
              placeholder="Subject"
              className="input"
              required
              onChange={handleChange}
            />
            <textarea
              name="message"
              placeholder="Message"
              className="textarea"
              required
              onChange={handleChange}
            />
            <button
              type="submit"
              className="flex items-center justify-center btn rounded-full ring ring-3 ring-indigo-300 max-w-[170px] px-8 transition-all duration-300 overflow-hidden hover:ring-accent gap-1 group"
            >
              <span className="group-hover:-translate-y-[120%] group-hover:opacity-0 transition-all duration-300">
                Let's Talk
              </span>
              <RiWechatLine className="translate-x-[120%] opacity-0 group-hover:flex group-hover:translate-x-0 group-hover:opacity-100 text-4xl group-hover:text-accent transition-all duration-500 absolute" />
            </button>
            <p className="text-sm text-white mt-2">{status}</p>
          </motion.form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
