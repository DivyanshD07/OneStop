// import { Barlow } from "next/font/google";
// const barlow = Barlow({
//   subsets: ["latin"],
//   weight: ["400", "500", "600", "700"],
// });

const QAheader = (props: { title: string; desc: string[] }) => {
  return (
    <div
      className= 'border-light-grey w-full text-center text-white py-[6vw]'
    >
      <h1 className="text-[6vw] md:text-[3vw] font-semibold">{props.title}</h1>
      <h5 className=" w-9/12 m-auto text-[3vw] md:text-[1.2vw]">
        {props.desc.map((item,index) => (
          <p key={index} className="text-[3vw] md:text-[1.2vw]">
            {item} <br/>
          </p>
        ))}
      </h5>
    </div>
  );
};

export default QAheader;