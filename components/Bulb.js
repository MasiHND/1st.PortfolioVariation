// next Image
import Image from "next/image";

const Bulb = () => {
  return (
    <Image
      src={"/bulb.png"}
      width={260}
      height={200}
      alt=""
      className="w-full h-full"
    />
  );
};

export default Bulb;
