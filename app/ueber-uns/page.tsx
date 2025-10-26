import { Hero } from "../ui/components/ueber-uns/Hero";
import AboutContent from "../ui/components/ueber-uns/AboutContent";
import { MetisOriginInfo } from "../ui/components/ueber-uns/MetisOriginInfo";

export default function About() {
  return (
    <div className="flex flex-col bg-white text-black flex-1">
      <Hero />

      {/* CONTENIDO PRINCIPAL */}
      <AboutContent />

      <MetisOriginInfo />
    </div>
  );
}
