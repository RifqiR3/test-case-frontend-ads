import React, { useState } from "react";

interface FaqQuestionProps {
  question: string;
  answer: string;
}

const FaqQuestion: React.FC<FaqQuestionProps> = ({ question, answer }) => {
  const [questionOpen, setQuestionOpen] = useState(false);

  return (
    <div className="mt-5 bg-white rounded-lg">
      <div className="p-3">
        <button
          onClick={() => setQuestionOpen(!questionOpen)}
          className="flex justify-between items-center w-full"
        >
          <span className="font-bold text-xs md:text-xl align-left">
            {question}
          </span>
          {questionOpen ? (
            <div className="bg-[#3366ff] w-7 h-7">
              <span className="text-white">-</span>
            </div>
          ) : (
            <div className="bg-[#3366ff] w-7 h-7">
              <span className="text-white">+</span>
            </div>
          )}
        </button>
        <div
          className={`grid overflow-hidden transition-all duration-300 ease-in-out text-slate-600 text-small ${
            questionOpen
              ? "grid-rows-[1fr] opacity-100"
              : "grid-rows-[0fr] opacity-0"
          }`}
        >
          <div className="overflow-hidden">
            <div className="mt-3">{answer}</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FaqQuestion;
