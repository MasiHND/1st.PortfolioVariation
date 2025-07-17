import React, { useState } from "react";

// icons
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
  SiJavascript,
  SiHtml5,
  SiCss3,
  SiReact,
  SiWordpress,
  SiFigma,
} from "react-icons/si";

//  data
const aboutData = [
  {
    title: "skills",
    info: [
      {
        title: "Front-end",
        icons: [
          <SiHtml5 key="html" />,
          <SiCss3 key="css" />,
          <SiReact key="react" />,
          <SiTailwindcss key="tailwind" />,
          <SiReactquery key="reactquery" />,
          <SiRedux key="redux" />,
        ],
      },
      {
        title: "Back-end",
        icons: [<SiSupabase key="supabase" />, <SiMysql key="mysql" />],
      },
      {
        title: "Frame Works",
        icons: [<SiNextdotjs key="nextjs" />, <SiWordpress key="wordpress" />],
      },
      {
        title: "Languages",
        icons: [
          <SiJavascript key="javascript" />,
          <SiTypescript key="typescript" />,
          <SiPython key="python" />,
          <SiCplusplus key="cpp" />,
          <SiDelphi key="delphi" />,
        ],
      },
      {
        title: "UI/UX Design",
        icons: [
          <SiFigma key="figma" />,
          <SiAdobexd key="xd" />,
          <SiAdobephotoshop key="photoshop" />,
          <SiCanva key="canva" />,
        ],
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
        title: "Software Eng. - USC University",
        stage: "2020 - 2023",
      },
      {
        title: "Aerospace Eng. - AUT University",
        stage: "2014 - 2018",
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
        className="hidden xl:flex absolute bottom-0 -left-[0px] h-[60%]"
      >
        <Avatar />
      </motion.div>
      <div className="container mx-auto h-full flex flex-col items-center xl:flex-row gap-x-6">
        {/* text */}
        <div className="flex flex-1 flex-col justify-center">
          <motion.h2
            variants={fadeIn("right", 0.3)}
            initial="hidden"
            animate="show"
            exit="hidden"
            className="h2 xl:h2 lg:text-4xl lg:mb-4 lg:font-bold capitalize"
          >
            Captivating <span className="text-accent">stories</span> birth
            magnificent designs.
          </motion.h2>
          <motion.p
            variants={fadeIn("right", 0.5)}
            initial="hidden"
            animate="show"
            exit="hidden"
            className="max-w-[500px] mx-auto xl:mx-0 mb-6 xl:mb-12 px-2 xl:px-0"
          >
            4 years ago, I began freelancing as a developer. Since then,
            I&apos;ve done on-site and remote work for companies and agencies,
            cunsulted for startups, and collabrated on digital products for
            bussiness and consumer use.
          </motion.p>
          {/* counter */}
          <div className="hidden lg:flex lg:max-w-xl xl:max-w-none mx-auto xl:mx-0 mb-8">
            <div className="flex flex-1 gap-x-6">
              {/* experience */}
              <motion.div
                variants={fadeIn("up", 0.3)}
                initial="hidden"
                animate="show"
                exit="hidden"
                className="relative flex-1 after:w-[1px] after:h-full after:bg-white/10 after:absolute after:top-0 after:right-0"
              >
                <div className="text-2xl xl:text-4xl font-extrabold text-accent mb-2">
                  <CountUp start={0} end={4} duration={5} />+
                </div>
                <div className="text-xs uppercase tracking-[1px] leading-[1.4] max-w-[100px]">
                  Years of experience
                </div>
              </motion.div>
              {/* companies */}
              <motion.div
                variants={fadeIn("up", 0.5)}
                initial="hidden"
                animate="show"
                exit="hidden"
                className="relative flex-1 after:w-[1px] after:h-full after:bg-white/10 after:absolute after:top-0 after:right-0"
              >
                <div className="text-2xl xl:text-4xl font-extrabold text-accent mb-2">
                  <CountUp start={0} end={6} duration={5} />+
                </div>
                <div className="text-xs uppercase tracking-[1px] leading-[1.4] max-w-[100px]">
                  companies worked with
                </div>
              </motion.div>
              {/* clients */}
              <motion.div
                variants={fadeIn("up", 0.7)}
                initial="hidden"
                animate="show"
                exit="hidden"
                className="relative flex-1 after:w-[1px] after:h-full after:bg-white/10 after:absolute after:top-0 after:right-0"
              >
                <div className="text-2xl xl:text-4xl font-extrabold text-accent mb-2">
                  <CountUp start={0} end={24} duration={5} />+
                </div>
                <div className="text-xs uppercase tracking-[1px] leading-[1.4] max-w-[100px]">
                  Satisfied clients
                </div>
              </motion.div>
              {/* projects */}
              <motion.div
                variants={fadeIn("up", 0.9)}
                initial="hidden"
                animate="show"
                exit="hidden"
                className="relative flex-1 after:w-[1px] after:h-full after:bg-white/10 after:absolute after:top-0 after:right-0"
              >
                <div className="text-2xl xl:text-4xl font-extrabold text-accent mb-2">
                  <CountUp start={0} end={60} duration={5} />+
                </div>
                <div className="text-xs uppercase tracking-[1px] leading-[1.4] max-w-[100px]">
                  successful projects
                </div>
              </motion.div>
            </div>
          </div>
        </div>
        {/* info */}
        <div className="flex flex-col w-full xl:max-w-[48%] h-[480px] mt-1">
          <motion.div
            variants={fadeIn("left", 0.3)}
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
                    `text-accent after:w-full after:bg-cyan-500 after:transition-all after:duration-500`
                  } cursor-pointer capitalize xl:text-lg relative after:w-4 after:h-[2px] after:bg-white after:absolute after:-bottom-1 after:left-0 after:rounded-3xl`}
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
            variants={fadeIn("left", 0.5)}
            initial="hidden"
            animate="show"
            exit="hidden"
            className="py-2 xl:py-6 flex flex-col gap-y-4 xl:gap-y-6 items-center xl:items-start"
          >
            {aboutData[index].info.map((item, itemIndex) => {
              return (
                <div
                  key={itemIndex}
                  className="flex flex-1 flex-row max-w-max gap-x-2 items-center text-white/80"
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
                          className="transition-all duration-300 text-2xl text-white hover:text-accent"
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
