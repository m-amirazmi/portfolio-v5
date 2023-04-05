import Link from "next/link";
import { useEffect, useRef } from "react";
import menuData from "@/data/menu.json";
import { useRouter } from "next/router";

export default function Header() {
  const refLogoIndicator = useRef(null);
  const { pathname } = useRouter();

  useEffect(() => {
    const timer = setInterval(() => {
      if (!refLogoIndicator.current) return;
      const indicator = refLogoIndicator.current as HTMLElement;

      if (indicator.classList.contains("hidden"))
        indicator.classList.remove("hidden");
      else indicator.classList.add("hidden");
    }, 700);
    return () => clearInterval(timer);
  }, []);

  return (
    <header className="relative mx-auto h-full w-full max-w-5xl py-6">
      <div className="flex flex-col items-center justify-between gap-2 md:items-start">
        <div className="relative">
          <Link
            href="/"
            className="relative inline-block text-2xl font-bold leading-none tracking-widest"
          >
            AMIRAZMI.DEV
          </Link>
          <div
            ref={refLogoIndicator}
            className="absolute -right-[16px] bottom-[6px] h-1 w-4 bg-emerald-700"
          ></div>
        </div>
        <nav className="flex flex-row gap-8">
          {menuData.map((i) => (
            <Link
              key={i.id}
              href={i.url}
              className={`${
                pathname.includes(i.url)
                  ? "after:w-3 after:bg-emerald-700"
                  : "after:w-1"
              } relative after:absolute after:-bottom-1 after:right-0 after:h-1 after:transition-all after:duration-100 after:ease-linear after:content-[''] hover:after:w-5 hover:after:bg-emerald-700/50`}
            >
              {i.name}
            </Link>
          ))}
        </nav>
      </div>
    </header>
  );
}
