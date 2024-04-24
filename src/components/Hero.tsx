import Image from "next/image";
import Card from "./Cards/HeroCard";
import React from "react";
// import Link from "next/link";


const Hero = () => {
  // const [activeService, setActiveService] = useState(false);


  return (
    <div className="flex flex-row w-2/3 items-center justify-center gap-9 ">
      <Card
        service="Notes"
      />
      <Card
        service="PYQ"
      />
      <Card
        service="Q&A"
      />
    </div>
  )
}

export default Hero;