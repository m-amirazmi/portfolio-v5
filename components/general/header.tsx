import Link from "next/link";
import { useEffect, useRef } from "react";
import menuData from "@/data/menu.json";

export default function Header() {
  const refLogoIndicator = useRef(null);

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
    <header className="h-full w-screen">
      <div className="mx-auto max-w-5xl px-3 py-6">
        <div className="flex flex-col items-center justify-between gap-2">
          <div className="relative">
            <Link
              href="/"
              className="relative inline-block text-2xl font-bold leading-none tracking-widest"
            >
              AMIRAZMI
            </Link>
            <div
              ref={refLogoIndicator}
              className="absolute -right-[16px] bottom-[6px] h-1 w-4 bg-emerald-500"
            ></div>
          </div>
          <nav className="flex flex-row gap-4">
            {menuData.map((i) => (
              <Link key={i.id} href={i.url}>
                {i.name}
              </Link>
            ))}
          </nav>
        </div>
      </div>
    </header>
  );
}
