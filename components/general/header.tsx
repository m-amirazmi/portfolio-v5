import Link from "next/link";

export default function Header() {
  return (
    <header className="h-full w-screen">
      <div className="max-w-5xl px-3 py-6 font-bold tracking-widest">
        <Link
          href="/"
          className="relative inline-block text-2xl leading-none after:absolute after:-right-[10px] after:bottom-[3.5px] after:h-2 after:w-2 after:rounded-full  after:bg-emerald-500 after:bg-transparent after:content-['']"
        >
          AMIRAZMI
        </Link>
      </div>
      <div></div>
    </header>
  );
}
