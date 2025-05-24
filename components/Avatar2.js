// next Image
import Image from "next/image";

const Avatar2 = () => {
  return (
    <div className="hidden xl:flex xl:max-w-none">
      <Image
        src={"/Pouya-Hendy.png"}
        width={408}
        height={612}
        alt="Pouya Hendy"
        className="translate-z-0 w-full h-full"
      />
    </div>
  );
};

export default Avatar2;
