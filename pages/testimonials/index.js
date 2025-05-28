// framer motion
import { motion } from "framer-motion";
import { fadeIn } from "../../variants";

// components
import TestimonialSlider from "../../components/TestimonialSlider";

const Testimonials = () => {
  return (
    <div className="h-full bg-primary/30 py-32 text-center">
      <div className="flex flex-col justify-center container mx-auto h-full">
        {/* title */}
        <motion.h2
          variants={fadeIn("up", 0.2)}
          initial="hidden"
          animate="show"
          exit="hidden"
          className="h2 capitalize mb-12 xl:mb-0"
        >
          What clients <sapn className="text-accent">say.</sapn>
        </motion.h2>
        {/* slider */}
        <motion.div
          variants={fadeIn("down", 0.4)}
          initial="hidden"
          animate="show"
          exit="hidden"
        >
          <TestimonialSlider />
        </motion.div>
      </div>
    </div>
  );
};

export default Testimonials;
