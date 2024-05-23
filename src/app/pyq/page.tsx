"use client";
import QAheader from "../../components/Cards/q&aCard";
import Image from "next/image";
import { useState, useEffect } from "react";
import { FaCircleQuestion } from "react-icons/fa6";
import axios from "axios";

// Define an interface for question data
interface Question {
  id: number;
  title: string;
  desc: string[];
}

const Faqs = () => {
  const initialFaq = Array(6).fill(false);
  const [visibleFaq, setVisibleFaq] = useState(initialFaq);
  const [showForm, setShowForm] = useState(false);
  const [selectedQuestion, setSelectedQuestion] = useState("");
  const [questionData, setQuestionData] = useState<Question[]>([]);

  useEffect(() => {
    // Fetch questions from the API
    const fetchQuestions = async () => {
      try {
        const response = await axios.get("http://localhost:8080/api/v1/questions");
        if (response.data.success) {
          setQuestionData(response.data.questions);
        } else {
          console.error('Error: Response does not contain questions or success is false', response.data);
        }
      } catch (error) {
        console.error("Error fetching questions:", error);
      }
    };

    fetchQuestions();
  }, []);

  const NumberCard = ({ num, active }: { num: number; active: boolean }) => {
    return (
      <div className={`rounded bg-gradient-to-b from-[#232323] to-[#0e0e0e] w-[18%] md:w-[8%] py-2 flex justify-center items-center`}>
        <h1 className={`font-semibold text-xl ${active ? "text-bright-green" : "text-white"}`}>
          {"0" + num}
        </h1>
      </div>
    );
  };

  const handleShowFaq = (id: number) => {
    setVisibleFaq((visibleFaq) => {
      const temp = [...initialFaq];
      temp[id] = !visibleFaq[id];
      return temp;
    });
  };

  const handleAddQuestion = async () => {
    if (selectedQuestion) {
      try {
        const response = await axios.post("http://localhost:8080/api/v1/questions", { title: selectedQuestion });
        if (response.data.success) {
          setQuestionData([...questionData, response.data.question]);
          setSelectedQuestion("");
          setShowForm(false);
        } else {
          console.error('Error: Question upload failed', response.data);
        }
      } catch (error) {
        console.error("Error uploading question:", error);
      }
    }
  };

  return (
    <main className="flex flex-col w-3/4">
      <div className="flex flex-row justify-around items-center w-full mt-8 mb-3">
        <div className="flex justify-center mb-2 font-bold text-3xl">
          Discussion Forum
        </div>
        <div className="bg-white font-semibold text-black hover:bg-blue-400 flex items-center border-0 rounded-xl px-3 py-2">
          <div className="mr-2">
            <FaCircleQuestion className='text-black' />
          </div>
          <button onClick={() => setShowForm(true)} className="">Ask a Question!</button>
        </div>
      </div>
      <div className={`m-auto flex flex-wrap w-full`}>
        <div className={`flex w-full flex-col md:w-[100%]`}>
          {questionData.map((item, index) => (
            <div key={index} className={`border-collapse text-white border rounded-xl border-light-grey min-h-[8vw] w-full flex flex-col p-[2vw]`}>
              <button className="w-full text-start flex md:gap-[3%] items-center mt-1 md:mt-0" onClick={() => handleShowFaq(index)}>
                <NumberCard num={item.id} active={visibleFaq[index]} />
                <h1 className={`w-10/12 font-semibold text-xl ${visibleFaq[index] && "text-bright-green"}`}>
                  {item.title}
                </h1>
                <Image src={`${visibleFaq[index] ? "/assets/add-rotated.svg" : "/assets/add.svg"}`} alt="" width={25} height={20} className={`${visibleFaq[index] && "rotate-45"} transition-all`} />
              </button>
              <p className={`transition-all duration-300 bg-gray-900 p-2 rounded-xl md:ml-[11%] mt-[2vh] ${visibleFaq[index] ? "block" : "hidden"}`}>
                {item.desc.map((descItem, descIndex) => (
                  <p key={descIndex} className="bg-black rounded-xl mb-2 p-2 opacity-90">
                    <div>{descIndex + 1} : {descItem}</div>
                  </p>
                ))}
              </p>
              <CardFooter reply="Reply" report="Report" />
            </div>
          ))}
        </div>
      </div>
      {showForm && (
        <div className="fixed top-1/4 left-1/2 w-1/4 h-1/2 bg-gray-900 flex border-2 border-white border-inherit justify-center items-start rounded-xl p-6">
          <div className="flex flex-col w-full h-full bg-gray-900 bg-opacity-50">
            <h1 className="text-xl">Ask a question</h1>
            <div className="flex flex-row items-start w-full h-full mt-8 mb-3">
              <input type="text" name="" id="" placeholder="Type your question here..." className="text-black rounded-xl h-full w-full" value={selectedQuestion} onChange={(e) => setSelectedQuestion(e.target.value)} />
            </div>
            <div className="flex flex-row justify-around items-center w-full mt-8 mb-3">
              <button onClick={handleAddQuestion} className="bg-blue-500 text-white px-4 py-2 rounded-md">Add</button>
              <button onClick={() => setShowForm(false)} className="bg-gray-300 text-gray-700 px-4 py-2 rounded-md ml-4">Cancel</button>
            </div>
          </div>
        </div>
      )}
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
          <textarea className="w-full h-24 p-2 border text-black border-gray-300 rounded-md mb-2" value={replyText} onChange={handleReplyTextChange} placeholder="Write your reply here..." />
          <div className="flex justify-end">
            <button className="text-white bg-blue-500 hover:bg-blue-600 font-normal hover:font-semibold border-2 rounded-xl px-4 py-0.5 mr-2" onClick={handleSendReply}>Send</button>
            <button className="text-black bg-gray-200 hover:bg-gray-300 font-normal hover:font-semibold border-2 rounded-xl px-4 py-0.5" onClick={handleCancelReply}>Cancel</button>
          </div>
        </div>
      ) : (
        <button className="text-white bg-gray-500 hover:bg-gray-600 font-normal hover:font-semibold border-2 rounded-xl px-4 py-0.5" onClick={handleReplyClick}>{reply}</button>
      )}
      {!showTextarea && (
        <button className="text-white bg-gray-500 hover:bg-gray-600 font-normal hover:font-semibold border-2 rounded-xl px-4 py-0.5">{report}</button>
      )}
    </div>
  );
};

export default Faqs;
