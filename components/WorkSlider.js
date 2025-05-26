// Swiper
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/pagination";
import { Pagination } from "swiper";

// icons
import { BsArrowRight } from "react-icons/bs";

// next Image
import Image from "next/image";

// data
const workSlides = {
  slides: [
    {
      images: [
        {
          title: "title",
          path: "/thumb1.jpg",
        },
        {
          title: "title",
          path: "/thumb2.jpg",
        },
        {
          title: "title",
          path: "/thumb3.jpg",
        },
        {
          title: "title",
          path: "/thumb4.jpg",
        },
      ],
    },
    {
      images: [
        {
          title: "title",
          path: "/thumb4.jpg",
        },
        {
          title: "title",
          path: "/thumb1.jpg",
        },
        {
          title: "title",
          path: "/thumb2.jpg",
        },
        {
          title: "title",
          path: "/thumb3.jpg",
        },
      ],
    },
  ],
};

const WorkSlider = () => {
  return (
    <Swiper
      spaceBetween={10}
      pagination={{
        clickable: true,
      }}
      modules={[Pagination]}
      className="h-[280px] sm:h-[480px]"
    >
      {workSlides.slides.map((slide, index) => {
        return (
          <SwiperSlide key={index}>
            <div className="grid grid-cols-2  grid-rows-2 gap-4 cursor-pointer">
              {slide.images.map((image, index) => {
                return (
                  <div
                    key={index}
                    className="relative rounded-lg overflow-hidden flex items-center justify-center group"
                  >
                    <div className="flex relative items-center justify-center overflow-hidden ">
                      {/* image */}
                      <Image src={image.path} width={500} height={300} alt="" />
                      {/* overlay gradient */}
                      <div className="absolute inset-0 bg-gradient-to-br from-transparent via-black/70 to-indigo-900/70 opacity-0 group-hover:opacity-95 transition-all duration-700" />
                      {/* title */}
                      <div className="absolute bottom-0 translate-y-full group-hover:-translate-y-10 group-hover:xl:-translate-y-20 transition-all duration-700">
                        <div className="flex items-center gap-x-2 text-[13px] tracking-[0.2em]">
                          {/* title #1 */}
                          <div className="translate-y-[500%] group-hover:translate-y-0 transition-all duration-700 delay-100 uppercase font-extrabold">
                            live
                          </div>
                          {/* title #1 */}
                          <div className="translate-y-[500%] group-hover:translate-y-0 transition-all duration-700 delay-200 uppercase font-extrabold">
                            project
                          </div>
                          {/* title #1 */}
                          <div className="translate-y-[500%] group-hover:translate-y-0 transition-all duration-700 delay-300">
                            3
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </SwiperSlide>
        );
      })}
    </Swiper>
  );
};

export default WorkSlider;
