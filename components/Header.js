// next image
import Image from "next/image";

//next Link
import Link from "next/link";

//components
import Socials from "../components/Socials";

const Header = () => {
  return (
    <header className="absolute z-30 w-full flex items-center px-16 xl:px-0 xl:h-[150px] h-[130px]">
      <div className="container mx-auto">
        <div className="flex flex-col lg:flex-row justify-between items-center gap-y-6 py-8">
          {/* Logo */}
          <Link href={"/"}>
            <Image
              src={"/pouyaLogo.png"}
              width={220}
              height={48}
              alt="Pouya-Logo"
              priority={true}
            />
          </Link>

          <div className="justify-center items-center gap-8 hidden lg:flex">
            <Socials />
            <Image
              src={"/MasiHND-Logo1.png"}
              width={150}
              height={150}
              alt="MasiHND-Logo"
            />
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
