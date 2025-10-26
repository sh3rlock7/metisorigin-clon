"use Client";
import Link from "next/link";
import { ContactCards } from "../ui/components/kontakt/ContactCards";
import ContactInfo from "../ui/components/kontakt/ContactInfo";

import { HeroContact } from "../ui/components/kontakt/HeroContact";
import { Office } from "../ui/components/ueber-uns/Office";
import { WorkWithMetisCards } from "../ui/components/kontakt/WorkWithMetisCards";


export default function Kontakt() {
  return (
    <div className="flex flex-col bg-white text-black flex-1">
      <HeroContact />

      <ContactCards />

      <ContactInfo />

      <Office />

      <WorkWithMetisCards />
    </div>
  );
}
