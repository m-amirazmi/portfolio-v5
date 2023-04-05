import Link from "next/link";
import {
  FaTiktok,
  FaLinkedinIn,
  FaGithub,
  FaWhatsapp,
  FaEnvelope,
} from "react-icons/fa";

export default function SocialLinks() {
  const linkClass =
    "text-xl hover:text-emerald-700 md:text-2xl transition-colors duration-300 ease-linear";
  return (
    <div className="flex items-center gap-4 md:gap-6">
      <Link
        className={linkClass}
        href="https://github.com/m-amirazmi"
        title="github"
        target="_blank"
      >
        <FaGithub />
      </Link>
      <Link
        className={linkClass}
        href="https://www.linkedin.com/in/m-amirazmi/"
        title="linkedin"
        target="_blank"
      >
        <FaLinkedinIn />
      </Link>
      <Link
        className={linkClass}
        href="https://www.tiktok.com/@mamirazmi"
        title="tiktok"
        target="_blank"
      >
        <FaTiktok />
      </Link>
      <Link
        className={linkClass}
        href="https://wa.me/601119821105"
        title="whatsapp"
        target="_blank"
      >
        <FaWhatsapp />
      </Link>
      <Link
        className={linkClass}
        href="mailto:m.amirazmi@hotmail.com"
        title="mail"
        target="_blank"
      >
        <FaEnvelope />
      </Link>
    </div>
  );
}
