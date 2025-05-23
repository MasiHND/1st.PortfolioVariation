//next image
import Image from "next/image";

// next link
import Link from "next/link";

// icons
import {} from "react-icons/hi2";

const ProjectsBtn = () => {
  return (
    <div className="mx-auto xl:mx-0 ">
      <Link
        href={"/work"}
        className="transition delay-150 duration-500 ease-in-out hover:scale-105 relative w-[185px] h-[188px] flex justify-center items-center bg-circleStar bg-cover bg bg-no-repeat"
      >
        <Image
          src={"/rounded-text.png"}
          width={150}
          height={150}
          alt=""
          className="animate-spin-slow w-full h-full max-w-[140px] max-h-[140px] "
        />
      </Link>
    </div>
  );
};

export default ProjectsBtn;
