import { TLayout } from "@/utils/types";
import { Caveat, Jost } from "next/font/google";
import Footer from "./footer";
import Header from "./header";

const jost = Jost({ subsets: ["latin"] });
const caveat = Caveat({ subsets: ["latin"], variable: "--font-caveat" });

export default function Layout({ children }: TLayout) {
  return (
    <main
      className={`${jost.className} ${caveat.variable} max-w-screen flex min-h-screen flex-col bg-[#F0EBE3] text-gray-800`}
    >
      <Header />
      {children}
      {/* <Footer /> */}
    </main>
  );
}
