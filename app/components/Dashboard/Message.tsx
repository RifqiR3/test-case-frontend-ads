import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser } from "@fortawesome/free-solid-svg-icons";

const Message = () => {
  return (
    <>
      {/* Message */}
      <div className="bg-[#f3f5f8] mt-5 dark:bg-[#1f1f21]">
        <div className="p-5 flex items-center rounded-lg dark:border dark:border-gray-500">
          <span className="bg-[#3366ff] text-white rounded-full px-3 py-2">
            <FontAwesomeIcon icon={faUser} />
          </span>
          <div className="flex flex-col ml-5">
            <span className="font-bold">Anda</span>
            <span className="text-sm">Hai apa kabarmu hari ini? Semoga...</span>
          </div>
          <span className="bg-[#3366ff] text-sm text-white rounded-lg px-1 ml-auto">
            Terkirim
          </span>
        </div>
      </div>

      {/* Message */}
      <div className="bg-[#f3f5f8] mt-2 dark:bg-[#1f1f21]">
        <div className="p-5 flex items-center rounded-lg dark:border dark:border-gray-500">
          <span className="bg-[#3366ff] text-white rounded-full px-3 py-2 ">
            <FontAwesomeIcon icon={faUser} />
          </span>
          <div className="flex flex-col ml-5">
            <span className="font-bold">Anda</span>
            <span className="text-sm">Hai apa kabarmu hari ini? Semoga...</span>
          </div>
          <span className="bg-[#3366ff] text-sm text-white rounded-lg px-1 ml-auto">
            Terkirim
          </span>
        </div>
      </div>

      {/* Message */}
      <div className="bg-[#f3f5f8] mt-2 dark:bg-[#1f1f21]">
        <div className="p-5 flex items-center rounded-lg dark:border dark:border-gray-500">
          <span className="bg-[#4fbeab] text-white rounded-full px-3 py-2">
            IA
          </span>
          <div className="flex flex-col ml-5 ">
            <span className="font-bold">Insanul Akbar</span>
            <span className="text-sm">Hai apa kabarmu hari ini? Semoga...</span>
          </div>
          <span className="bg-[#4fbeab] text-sm text-white rounded-lg px-1 ml-auto">
            Terkirim
          </span>
        </div>
      </div>
    </>
  );
};

export default Message;
