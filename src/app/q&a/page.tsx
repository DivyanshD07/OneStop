"use client";
import QAheader from "../../components/Cards/q&aCard";
// import { Barlow } from "next/font/google";
import Image from "next/image";
import { useState } from "react";

const Faqs = () => {
  const initialFaq = Array(6).fill(false);
  const [visibleFaq, setVisibleFaq] = useState(initialFaq);

  const NumberCard = ({ num, active }: { num: number; active: boolean }) => {
    return (
      <div
        className={`rounded bg-gradient-to-b from-[#232323] to-[#0e0e0e] w-[18%] md:w-[8%] py-2 flex justify-center items-center`}
      >
        <h1
          className={` font-semibold text-xl ${active ? "text-bright-green" : "text-white"
            } `}
        >
          {"0" + num}
        </h1>
      </div>
    );
  };

  const faq = [
    {
      id: 1,
      title: "What is your name?",
      desc: ["Lorem ipsum", "dolor sit amet","helloworld"],
    },
    {
      id: 2,
      title: "College name?",
      desc: ["SMVDU","IIT"],
    },
  ];

  const handleShowFaq = (id: number) => {
    setVisibleFaq((visibleFaq) => {
      const temp = [...initialFaq];
      temp[id] = !visibleFaq[id];
      console.log(temp);

      return temp;
    });
  };

  return (
    <main className="flex flex-col w-3/4">
      <div className="flex flex-row justify-around items-center w-full mt-8 mb-3">
      <div className="flex justify-center mb-2 font-bold text-3xl">
        Discussion Forum
      </div>
      <button className="border text-white bg-slate-600 border-solid-2 px-4 py-1 rounded hover:bg-slate-500 hover:text-black">
        Ask a question
      </button>
      </div>
      <div className={`m-auto flex flex-wrap w-full`}>
        <div className={`flex w-full flex-col md:w-[100%]`}>
          {faq.map((item, index) => (
            <div
              key={index}
              className={` border-collapse text-white border rounded-xl border-light-grey min-h-[8vw]  w-full flex flex-col p-[2vw] `}
            >
              <button
                className=" w-full text-start flex md:gap-[3%] items-center mt-1 md:mt-0"
                onClick={() => handleShowFaq(item.id - 1)}
              >
                <NumberCard num={item.id} active={visibleFaq[item.id - 1]} />
                <h1
                  className={`w-10/12 font-semibold text-xl ${visibleFaq[item.id - 1] && " text-bright-green"
                    }`}
                >
                  {item.title}
                </h1>
                <Image
                  src={`${visibleFaq[item.id - 1]
                    ? "/assets/add-rotated.svg"
                    : "/assets/add.svg"
                    }`}
                  alt=""
                  width={25}
                  height={20}
                  className={`${visibleFaq[item.id - 1] && "rotate-45"
                    } transition-all`}
                />
              </button>
              <p
                className={`transition-all duration-300 bg-gray-900 p-2 rounded-xl  md:ml-[11%] mt-[2vh] ${visibleFaq[item.id - 1] ? "block" : "hidden"
                  }`}
              >
                {item.desc.map((descItem, descIndex) => (
                  <p
                    key={descIndex}
                    className="bg-black rounded-xl mb-2 p-2 opacity-90"
                  >
                    <div>{descIndex + 1} : {descItem}</div>
                  </p>
                ))}
              </p>
              <CardFooter reply="Reply" report="Report" />
            </div>
          ))}
        </div>
      </div>
    </main>
  );
};

const CardFooter = ({ reply, report }: { reply: string; report: string }) => {
  const [showTextarea, setShowTextarea] = useState(false);
  const [replyText, setReplyText] = useState("");

  const handleReplyClick = () => {
    setShowTextarea(true);
  };

  const handleCancelReply = () => {
    setShowTextarea(false);
    setReplyText("");
  };

  const handleReplyTextChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setReplyText(e.target.value);
  };

  const handleSendReply = () => {
    console.log("Reply sent!");
    setShowTextarea(false);
    setReplyText("");
  };

  return (
    <div className="flex flex-row justify-around items-center w-full mt-8 mb-3">
      {showTextarea ? (
        <div className="flex flex-col w-full">
          <textarea
            className="w-full h-24 p-2 border text-black border-gray-300 rounded-md mb-2"
            value={replyText}
            onChange={handleReplyTextChange}
            placeholder="Write your reply here..."
          />
          <div className="flex justify-end">
            <button
              className="text-white bg-blue-500 hover:bg-blue-600 font-normal hover:font-semibold border-2 rounded-xl px-4 py-0.5 mr-2"
              onClick={handleSendReply}
            >
              Send
            </button>
            <button
              className="text-black bg-gray-200 hover:bg-gray-300 font-normal hover:font-semibold border-2 rounded-xl px-4 py-0.5"
              onClick={handleCancelReply}
            >
              Cancel
            </button>
          </div>
        </div>
      ) : (
        <button
          className="text-white bg-gray-500 hover:bg-gray-600 font-normal hover:font-semibold border-2 rounded-xl px-4 py-0.5"
          onClick={handleReplyClick}
        >
          {reply}
        </button>

      )}
      {!showTextarea && (
        <button className="text-white bg-gray-500 hover:bg-gray-600 font-normal hover:font-semibold border-2 rounded-xl px-4 py-0.5">
          {report}
        </button>
      )}

    </div>
  );
};

export default Faqs;
