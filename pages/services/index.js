// components
import ServiceSlider from "../../components/ServiceSlider";
import Bulb from "../../components/Bulb";
import Circles from "../../components/Circles";

// farmer motion
import { motion } from "framer-motion";
import { fadeIn } from "../../variants";

// icons

// service data
export const serviceData = [];

const Services = () => {
  return (
    <div className="h-full bg-primary/30 py-36 flex items-center">
      <Circles />
      <div className="container mx-auto">
        <div className="flex flex-col xl:flex-row gap-x-8">
          {/* text */}
          <div className="text-center flex flex-col xl:w-[30vm] lg:text-left mb-4 xl:mb-0">
            <motion.h2
              variants={fadeIn("right", 0.4)}
              initial="hidden"
              animate="show"
              exit="hidden"
              className="h2 xl:mt-8"
            >
              My Services <span className="text-accent">.</span>
            </motion.h2>
            <motion.p
              variants={fadeIn("right", 0.6)}
              initial="hidden"
              animate="show"
              exit="hidden"
              className="mb-4 max-w-[400px] mx-auto lg:mx-0"
            >
              Lorem ipsum dolor sit amet consectetur adipiscing elit. Quisque
              faucibus ex sapien vitae pellentesque sem placerat.
            </motion.p>
          </div>
          <motion.div
              variants={fadeIn("left", 0.4)}
              initial="hidden"
              animate="show"
              exit="hidden" className="w-full xl:max-w-[65%]">
            {/* slider */}
            <ServiceSlider />
          </motion.div>
        </div>
      </div>
      <div className="absolute -left-20 bottom-0 md:-left-15 md:bottom-8 xl:left-10 xl:bottom-0 mix-blend-color-dodge animate-pulse duration-75 z-10 w-[200px] xl:w-[260px]">
        <Bulb />
      </div>
    </div>
  );
};

export default Services;
