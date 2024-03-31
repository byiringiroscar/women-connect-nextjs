import Image from "next/image";
import MainSec from "@/components/MainSec";
import About from "@/components/About";
import Features from "@/components/Features";
import Team from "@/components/Team";
import Maininfo from "@/components/Maininfo";

export default function Home() {
  return (
    <>
      <MainSec />
      <About />
      <Features />
      <Team />
      <Maininfo />
    </>
  );
}
