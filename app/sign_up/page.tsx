import React from "react";
import Image from "next/image";
import Link from "next/link";

const Signup = () => {
  return (
    <>
      <div className="md:bg-[#ecf2fa] min-h-screen relative">
        <div className="absolute top-10 left-1/2 transform -translate-x-1/2 md:left-24 lg:left-28">
          <Image
            src="/images/forwardin_logo_tp.png"
            alt="FORWARDIN"
            width={750}
            height={750}
            className=" w-full max-w-[10rem] h-auto"
          />
        </div>
        <div className="container mx-auto">
          <div className="py-20 px-4 sm:py-32 sm:px-6 md:py-40 md:px-10 flex justify-center items-center">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-black">
              <section className="flex-col items-start p-6 hidden md:flex">
                <Image
                  src="/images/get_started_image.png"
                  alt="FORWARDIN"
                  width={3000}
                  height={3000}
                  className="w-full max-w-[18rem] md:max-w-[50rem] lg:max-w-full h-auto"
                />
                <h1 className="mt-7 font-bold text-2xl md:text-4xl text-left font-lexend-deca">
                  Elevate Your Messaging Efficiency with Our Innovative Admin
                  Tools
                </h1>
                <p className="mt-5 text-lg lg:text-xl">
                  Selamat datang di Fowardin! Pengelolaan pesan Anda menjadi
                  lebih mudah dengan Admin Tools kami. Tingkatkan komunikasi
                  Anda dan pelanggan dengan fitur pesan otomatis. Menyimpan
                  kontak menjadi lebih praktis dengan fitur sinkronisasi Google
                  Concact. Dapatkan kendali penuh pesan dengan manajemen konten
                  yang praktis
                </p>
              </section>
              <section className="p-6 flex flex-col justify-center items-center">
                <div className="bg-white p-5 lg:p-10 rounded-lg md:shadow-lg w-full lg:w-3/4">
                  <h1 className="font-bold text-xl md:text-2xl text-center font-lexend-deca">
                    Welcome to Fowardin
                  </h1>
                  <h1 className="text-center font-semibold text-sm w-75 lg:w-80 mx-auto">
                    Revolutionize your communication journey with Fowardin today
                  </h1>

                  <form action="">
                    <input
                      type="text"
                      placeholder="Email / Username"
                      name=""
                      id=""
                      className="mt-10 w-full py-2 px-4 border rounded-lg border-gray-400 outline-none focus:border-black"
                    />
                    <input
                      type="text"
                      inputMode="numeric"
                      placeholder="Whatsapp Phone Number"
                      name=""
                      id=""
                      className="col-span-2 mt-2 w-full py-2 px-4 border rounded-lg border-gray-400 outline-none focus:border-black"
                    />

                    <div className="md:grid grid-cols-3 gap-2 hidden">
                      <select
                        className="col-span-1 font-semibold text-xs mt-2 w-full py-2 px-2 border rounded-lg border-gray-400 outline-none focus:border-black"
                        name="numPrefix"
                        id="numPrefix"
                      >
                        <option value="62">(ID) +62</option>
                        <option value="60">(MY) +60</option>
                        <option value="65">(MY) +65</option>
                      </select>

                      <input
                        type="text"
                        inputMode="numeric"
                        placeholder="Whatsapp Phone Number"
                        name=""
                        id=""
                        className="col-span-2 mt-2 w-full py-2 px-4 border rounded-lg border-gray-400 outline-none focus:border-black"
                      />
                    </div>

                    <input
                      type="password"
                      placeholder="Password"
                      name=""
                      id=""
                      className="mt-2 w-full py-2 px-4 border rounded-lg border-gray-400 outline-none focus:border-black"
                    />

                    <div className="mt-5">
                      <button className="w-full bg-blue-600 text-white py-2 rounded-lg">
                        Sign In
                      </button>
                      <p className="text-center text-sm font-semibold mt-5">
                        Sudah punya akun? {""}
                        <Link href="/login" className="text-blue-600">
                          Masuk di sini
                        </Link>
                      </p>
                    </div>
                  </form>
                </div>
              </section>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Signup;
