import React, { useState } from "react";

// icons
import {
  FaHtml5,
  FaCss3,
  FaJs,
  FaReact,
  FaWordpress,
  FaFigma,
  FaAws,
} from "react-icons/fa";

import {
  SiNextdotjs,
  SiSupabase,
  SiMysql,
  SiAdobexd,
  SiAdobephotoshop,
  SiPython,
  SiCplusplus,
  SiTailwindcss,
  SiRedux,
  SiDelphi,
  SiReactquery,
  SiCanva,
  SiTypescript,
} from "react-icons/si";

//  data
const aboutData = [
  {
    title: "skills",
    info: [
      {
        title: "Front-end",
        icons: [
          <FaHtml5 />,
          <FaCss3 />,
          <FaReact />,
          <SiTailwindcss />,
          <SiReactquery />,
          <SiRedux />,
        ],
      },
      {
        title: "Back-end",
        icons: [<SiSupabase />, <FaAws />, <SiMysql />],
      },
      {
        title: "Frame Works",
        icons: [<SiNextdotjs />, <FaWordpress />],
      },
      {
        title: "Programming Language",
        icons: [
          <FaJs />,
          <SiTypescript />,
          <SiPython />,
          <SiCplusplus />,
          <SiDelphi />,
        ],
      },
      {
        title: "UI/UX Design",
        icons: [<FaFigma />, <SiAdobexd />, <SiAdobephotoshop />, <SiCanva />],
      },
    ],
  },
  {
    title: "experience",
    info: [
      {
        title: "Software/Web Developer - Arnika-TDR Company",
        stage: "2024 - Present",
      },
      {
        title: "IT Management - Arnika-TDR Company",
        stage: "2024 - Present",
      },
      {
        title: "Software Developer - Holoo Software",
        stage: "2023 - 2024",
      },
      {
        title: "Freelance Developer",
        stage: "2020 - Present",
      },
    ],
  },
  {
    title: "credentials",
    info: [
      {
        title: "Bachelor of Software Eng. - USC University",
        stage: "2020 - 2023",
      },
      {
        title: "Bachelor of Aerospace Eng. - AUT University",
        stage: "2009",
      },
    ],
  },
  {
    title: "Languages",
    info: [
      {
        title: "English",
        stage: "(Proficient)",
      },
      {
        title: "Persian",
        stage: "(Native)",
      },
    ],
  },
];

// framer motion
import { motion } from "framer-motion";
import { fadeIn } from "../../variants";

// counter
import CountUp from "react-countup";

// components
import Avatar from "../../components/Avatar";
import Circles from "../../components/Circles";

const About = () => {
  const [index, setIndex] = useState(0);

  return (
    <div className="h-full bg-primary/30 py-48 text-center xl:text-left -my-10 md:my-0">
      <Circles />
      {/* Avatar */}
      <motion.div
        variants={fadeIn("right", 0.2)}
        initial="hidden"
        animate="show"
        exit="hidden"
        className="hidden xl:flex absolute bottom-0 -left-[120px]"
      >
        <Avatar />
      </motion.div>
      <div className="container mx-auto h-full flex flex-col items-center xl:flex-row gap-x-6">
        {/* text */}
        <div className="flex flex-1 flex-col justify-center">
          <motion.h2
            variants={fadeIn("down", 0.3)}
            initial="hidden"
            animate="show"
            exit="hidden"
            className="h2 capitalize"
          >
            Captivating <span className="text-accent">stories</span> birth
            magnificent designs.
          </motion.h2>
          <motion.p
            variants={fadeIn("down", 0.4)}
            initial="hidden"
            animate="show"
            exit="hidden"
            className="max-w-[500px] mx-auto xl:mx-0 mb-6 xl:mb-12 px-2 xl:px-0"
          >
            4 years ago, I began freelancing as a developer. Since then, I've
            done on-site and remote work for companies and agencies, cunsulted
            for startups, and collabrated on digital products for bussiness and
            consumer use.
          </motion.p>
          {/* counter */}
          <div>
            <div>
              <div></div>
            </div>
          </div>
        </div>
        {/* info */}
        <div className="flex flex-col w-full xl:max-w-[48%] h-[480px]">
          <motion.div
            variants={fadeIn("left", 0.6)}
            initial="hidden"
            animate="show"
            exit="hidden"
            className="flex gap-x-4 xl:gap-x-8 mx-auto xl:mx-0 mb-4"
          >
            {aboutData.map((item, itemIndex) => {
              return (
                <div
                  key={itemIndex}
                  className={`${
                    index === itemIndex &&
                    `text-accent after:w-full after:bg-cyan-400 after:transition-all after:duration-500`
                  } cursor-pointer capitalize xl:text-lg relative after:w-4 after:h-[2px] after:bg-white after:absolute after:-bottom-1 after:left-0`}
                  onClick={() => {
                    setIndex(itemIndex);
                  }}
                >
                  {item.title}
                </div>
              );
            })}
          </motion.div>
          <motion.div
            variants={fadeIn("left", 0.7)}
            initial="hidden"
            animate="show"
            exit="hidden"
            className="py-2 xl:py-6 flex flex-col gap-y-4 xl:gap-y-6 items-center xl:items-start"
          >
            {aboutData[index].info.map((item, itemIndex) => {
              return (
                <div
                  key={itemIndex}
                  className="flex flex-1 flex-col md:flex-row max-w-max gap-x-2 items-center text-white/80"
                >
                  {/* title */}
                  <div className="font-light mb-2 md:mb-0">{item.title}</div>
                  <div className="hidden xl:flex">-</div>
                  <div>{item.stage}</div>
                  <div className="flex gap-x-4">
                    {/* icons */}
                    {item.icons?.map((icon, iconIndex) => {
                      return (
                        <div
                          key={iconIndex}
                          className="transition-all duration-500 text-2xl text-white hover:text-accent"
                        >
                          {icon}
                        </div>
                      );
                    })}
                  </div>
                </div>
              );
            })}
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default About;
