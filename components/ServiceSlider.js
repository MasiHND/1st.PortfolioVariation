// Swiper
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/pagination";
import { FreeMode, Pagination } from "swiper";

// icons
import {
  RxCrop,
  RxPencil2,
  RxDesktop,
  RxReader,
  RxRocket,
  RxArrowTopRight,
} from "react-icons/rx";

// data
const serviceData = [
  {
    icon: <RxCrop />,
    title: "Branding",
    description:
      "Craft a bold identity that connects, communicates, and captivates your audience across every screen, platform, and digital interaction.",
  },
  {
    icon: <RxPencil2 />,
    title: "Design",
    description:
      "Create intuitive, pixel-perfect designs that turn visitors into loyal users through beauty, clarity, and seamless user experience.",
  },
  {
    icon: <RxDesktop />,
    title: "Development",
    description:
      "From idea to launch, build clean, scalable, and high-performance web and software solutions tailored for your success.",
  },
  {
    icon: <RxRocket />,
    title: "SEO",
    description:
      "Boost your visibility, drive organic traffic, and climb search rankings with smart, ethical SEO that delivers long-term results.",
  },
];

const ServiceSlider = () => {
  return (
    <Swiper
      breakpoints={{
        320: {
          slidesPerView: 1,
          spaceBetween: 15,
        },

        640: {
          slidesPerView: 3,
          spaceBetween: 15,
        },
      }}
      freeMode={true}
      pagination={{
        clickable: true,
      }}
      modules={[FreeMode, Pagination]}
      className="h-[300px] sm:h-[480px] md:h-[430px] lg:h-[370px] xl:h-[430px]"
    >
      {serviceData.map((item, index) => {
        return (
          <SwiperSlide key={index}>
            <div className="flex sm:flex-col transition-all duration-300 justify-between hover:bg-indigo-500/10 bg-indigo-700/10 h-[250px] sm:h-[440px] md:h-[375px] lg:h-[325px] xl:h-[375px] rounded-lg px-6 py-8 gap-x-6 sm:gap-x-0 group cursor-pointer">
              <div>
                {/* icon */}
                <div className="text-4xl text-accent mb-4">{item.icon}</div>
                {/* title & desc */}
                <div className="mb-8">
                  <div className="mb-2 text-lg capitalize">{item.title}</div>
                  <p className="max-w-[350px] leading-normal">
                    {item.description}
                  </p>
                </div>
              </div>
              {/* arrow */}
              <div className="text-3xl bottom-0">
                <RxArrowTopRight className="transition-all duration-300 group-hover:rotate-45 group-hover:text-accent" />
              </div>
            </div>
          </SwiperSlide>
        );
      })}
    </Swiper>
  );
};

export default ServiceSlider;
