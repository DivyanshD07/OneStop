import Image from "next/image";
import Card from "../../components/Cards/DashBoardCard";
import React from "react";
// import Link from "next/link";


const DashBoard = () => {
  // const [activeService, setActiveService] = useState(false);

  const ServicesData = [
    {
      id:"Notes",
      service: "department",
    },
    {
      id:"PYQ",
      service: "department",
    },
    {
      id:"Q&A",
      service: "Q&A",
    },
  ]

  return (
    <div className="flex flex-row w-2/3 items-center justify-center gap-9 ">
      {ServicesData.map((data, index) => (
                  <Card key={index} {...data} />
                ))}
    </div>
  )
}

export default DashBoard;