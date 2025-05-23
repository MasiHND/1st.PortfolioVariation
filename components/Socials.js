// links
import Link from "next/link";

// icons
import {
  RiTelegramLine,
  RiWhatsappLine,
  RiGithubLine,
  RiLinkedinFill,
} from "react-icons/ri";

const Socials = () => {
  return (
    <div className="flex items-center gap-4 text-2xl">
      <Link
        href={"https://t.me/JesusHND"}
        rel="noopener noreferrer"
        target="_blank"
        className="hover:text-accent transition-all duration-500 "
      >
        <RiTelegramLine />
      </Link>

      <Link
        href={"http://Wa.me/+989120597807"}
        rel="noopener noreferrer"
        target="_blank"
        className="hover:text-accent transition-all duration-500 "
      >
        <RiWhatsappLine />
      </Link>

      <Link
        href={"https://github.com/MasiHND"}
        rel="noopener noreferrer"
        target="_blank"
        className="hover:text-accent transition-all duration-500 "
      >
        <RiGithubLine />
      </Link>

      <Link
        href={"https://www.linkedin.com/in/pouya-hendy/"}
        rel="noopener noreferrer"
        target="_blank"
        className="hover:text-accent transition-all duration-500 "
      >
        <RiLinkedinFill />
      </Link>
    </div>
  );
};

export default Socials;
