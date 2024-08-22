import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import FaqQuestion from "./FaqQuestion";

const Searchbar = () => {
  return (
    <>
      <div className="container mx-auto">
        <div className="flex items-center justify-center min-h-[13rem] py-16">
          <div className="w-3/4 mt-32 lg:p-56">
            <h1 className="text-white text-center text-4xl font-bold font-lexend-deca">
              Frequently Asked Question
            </h1>
            <div className="flex justify-center items-center mt-32">
              <input
                className="w-full h-10 rounded-md"
                type="text"
                name=""
                id=""
              />

              <button>
                <FontAwesomeIcon className="text-white p-5" icon={faSearch} />
              </button>
            </div>
            <FaqQuestion
              question="Apa itu Forwardin?"
              answer="Forwardin adalah sebuah platform alat pengelolaan pesan WhatsApp yang dirancang untuk membantu Anda mengirim pesan ke banyak nomor dan grup WhatsApp secara bersamaan. Forwardin juga menyediakan berbagai fitur canggih seperti auto-reply, fitur broadcast, manajemen kampanye, serta sinkronisasi kontak WhatsApp dan kontak Google."
            />
            <FaqQuestion
              question="Apakah Forwardin cocok untuk saya?"
              answer="Lorem ipsum dolor sit amet consectetur, adipisicing elit.
            Praesentium ullam dolores autem suscipit obcaecati soluta dolore non
            quibusdam voluptates ea!"
            />
            <FaqQuestion
              question="Apakah Forwardin perlu di-install ke komputer?"
              answer="Lorem ipsum dolor sit amet consectetur, adipisicing elit.
            Praesentium ullam dolores autem suscipit obcaecati soluta dolore non
            quibusdam voluptates ea!"
            />
          </div>
        </div>
      </div>
      ;
    </>
  );
};

export default Searchbar;
