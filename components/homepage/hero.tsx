import Link from "next/link";
import SocialLinks from "./social-links";

export default function Hero() {
  return (
    <section className="mx-auto h-screen max-w-5xl px-3">
      <div className="flex h-full flex-col items-center justify-center gap-10 md:items-start md:gap-12">
        <div className="flex flex-col items-center md:items-start">
          <p className="mb-3 text-sm font-semibold tracking-wide md:text-base">
            HELLO, <span className="text-emerald-700/80">MY NAME IS</span>
          </p>
          <h1 className="mb-3 text-5xl font-bold md:text-6xl">
            <span className="text-shadow text-emerald-700">AMIR</span>
            <span className="text-shadow text-gray-100"> AZMI</span>
          </h1>
          <p className="">
            <span className="font-semibold tracking-wide">I AM</span>
            <span className="ml-4 font-caveat text-2xl font-bold md:text-4xl">
              Front End Developer
            </span>
          </p>
        </div>
        <p className="text-center text-base text-gray-500 md:w-3/5 md:text-start md:text-lg">
          <span>
            Based in Kuala Lumpur, Malaysia. 2+ years in front-end development
            building and maintaining web applications, specializes in
            <span className="font-semibold text-emerald-700"> React </span>&amp;
            <span className="font-semibold text-emerald-700"> Next</span>.
          </span>
        </p>
        <div className="flex flex-col items-center justify-center gap-6 md:items-start">
          <SocialLinks />
          <Link
            href="/contact"
            className="btn-shadow rounded-full border-2 border-gray-800 px-12 py-3 font-semibold tracking-wider transition-all duration-200 ease-linear hover:bg-emerald-700 hover:text-gray-100 hover:shadow-none"
          >
            LET&apos;S TALK
          </Link>
        </div>
      </div>
    </section>
  );
}
