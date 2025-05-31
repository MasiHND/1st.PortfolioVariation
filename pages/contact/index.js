// components
import Circles from "../../components/Circles";

// icons
import { RiWechatLine } from "react-icons/ri";

// framer motion
import { motion } from "framer-motion";

// variants
import { fadeIn } from "../../variants";

const Contact = () => {
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
            variants={fadeIn("up", 0.2)}
            initial="hidden"
            animate="show"
            exit="hidden"
            className="flex flex-1 flex-col gap-6 w-full mx-auto"
          >
            {/* input group */}
            <div className="flex gap-x-6 w-full">
              <input type="text" placeholder="Name" className="input" />
              <input type="text" placeholder="Email" className="input" />
            </div>
            <input type="text" placeholder="Subject" className="input" />
            <textarea placeholder="Message" className="textarea" />
            <button className="flex items-center justify-center btn rounded-full ring ring-3 ring-indigo-300 max-w-[170px] px-8 transition-all duration-300 overflow-hidden hover:ring-accent gap-1 group">
              <span className="group-hover:-translate-y-[120%] group-hover:opacity-0 transition-all duration-300">
                Let's Talk
              </span>
              <RiWechatLine className="translate-x-[120%] opacity-0 group-hover:flex group-hover:translate-x-0 group-hover:opacity-100 text-4xl group-hover:text-accent transition-all duration-500 absolute" />
            </button>
          </motion.form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
