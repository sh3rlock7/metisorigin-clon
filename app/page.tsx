import Image from "next/image";
import { Navbar } from "./ui/Navbar";
import { HeroVideo } from "./ui/components/home-components/HeroVideo";


export default function Home() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-zinc-50 font-sans ">
        <HeroVideo src="/metisoriginvideo.mp4" poster="/weiss.png" />
    </div>
  );
}
