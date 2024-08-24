"use client";
import React, { useState } from "react";
import { signIn } from "next-auth/react";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";

const Login = () => {
  const [username, setUsername] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const router = useRouter();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const res = await signIn("credentials", {
      redirect: false,
      username,
      password,
    });
    if (!res?.error) {
      router.push("/dashboard");
    } else {
      alert("Daftar Dulu");
    }
  };
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
                  <h1 className="font-bold text-2xl text-center font-lexend-deca">
                    Welcome Back!
                  </h1>
                  <h1 className="text-center font-semibold text-sm">
                    We`re so excited to see you again!
                  </h1>

                  <form onSubmit={handleSubmit}>
                    <input
                      required
                      type="text"
                      placeholder="Username / Email"
                      value={username}
                      onChange={(e) => setUsername(e.target.value)}
                      className="mt-10 w-full py-2 px-4 border rounded-lg border-gray-400 outline-none focus:border-black"
                    />
                    <input
                      required
                      type="password"
                      placeholder="Password"
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                      className="mt-2 w-full py-2 px-4 border rounded-lg border-gray-400 outline-none focus:border-black"
                    />
                    <div className="mt-5">
                      <Link href="/" className="text-blue-600 font-semibold">
                        Lupa Password?
                      </Link>
                    </div>
                    <button className="mt-5 w-full bg-blue-600 text-white py-2 rounded-lg">
                      Sign In
                    </button>
                  </form>

                  <div className="mt-5">
                    <p className="text-center text-sm font-semibold mt-5">
                      Butuh buat akun? {""}
                      <Link href="/sign_up" className="text-blue-600">
                        Daftar di sini
                      </Link>
                    </p>
                  </div>
                </div>
              </section>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default Login;
