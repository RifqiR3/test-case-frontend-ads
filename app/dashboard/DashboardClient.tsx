"use client";
import React, { useState, useEffect } from "react";
import { Session } from "next-auth";
import Sidebar from "../components/Dashboard/Sidebar";
import PieChart from "../components/Dashboard/PieChart";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Message from "../components/Dashboard/Message";
import Image from "next/image";
import {
  faBell,
  faChevronDown,
  faCog,
  faMoon,
  faSun,
  faUser,
} from "@fortawesome/free-solid-svg-icons";
import { faCalendar } from "@fortawesome/free-regular-svg-icons";

interface DashboardClientProps {
  session: Session;
}

const DashboardClient: React.FC<DashboardClientProps> = ({ session }) => {
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [darkMode]);

  return (
    <div className="flex bg-white  dark:bg-[#121212]">
      <Sidebar />
      <div className="container mx-auto">
        <div className="bg-[#f3f5f8] p-10 my-10 rounded-lg dark:bg-[#1f1f21] dark:text-white">
          {/* Dark/Light Mode, Bell, Name, Setting */}
          <section className="flex justify-end items-center gap-3">
            {/* Dark/Light */}
            <button
              onClick={() => setDarkMode(!darkMode)}
              className="bg-white py-2 px-3 rounded-full text-black hover:text-white hover:bg-[#3366ff] cursor-pointer dark:bg-black dark:text-white dark:hover:bg-[#3366ff]"
            >
              <FontAwesomeIcon icon={darkMode ? faMoon : faSun} />
            </button>
            {/* Bell */}
            <div className="bg-white py-2 px-3 rounded-full text-black hover:text-white hover:bg-[#3366ff] cursor-pointer dark:bg-black dark:text-white dark:hover:bg-[#3366ff]">
              <FontAwesomeIcon icon={faBell} />
            </div>
            {/* Name */}
            <div className="flex items-center bg-white py-2 px-10 pr-16 rounded-full relative dark:bg-black">
              <p className="font-semibold  dark:text-white">
                {session.user.username}
              </p>
              <p className="bg-[#3366ff] rounded-full py-1 px-2 absolute right-1 text-white">
                <FontAwesomeIcon icon={faUser} />
              </p>
            </div>
            {/* Setting */}
            {/* Bell */}
            <div className="bg-white py-2 px-3 rounded-full text-black hover:text-white hover:bg-[#3366ff] cursor-pointer dark:bg-black dark:text-white dark:hover:bg-[#3366ff]">
              <FontAwesomeIcon icon={faCog} />
            </div>
          </section>

          {/* Greeting and date */}
          <section className="flex justify-between items-center mt-10">
            {/* Greeting */}
            <h1 className="text-3xl font-bold font-lexend-deca">
              Selamat siang, {session.user.name}
            </h1>
            {/* Date */}
            <div className="flex items-center">
              <div className="flex flex-col text-end">
                <p className="opacity-70">Tanggal hari ini</p>
                <p className="font-semibold">Selasa, 29 Agustus 2023</p>
              </div>
              <div className="ml-3">
                <FontAwesomeIcon icon={faCalendar} />
              </div>
            </div>
          </section>

          {/* SubsDetail, Message */}
          <section className="grid grid-cols-12 gap-3 mt-10">
            {/* SubsDetail */}
            <div className="col-span-8 bg-white rounded-lg flex relative dark:bg-[#1f1f21] dark:border dark:border-gray-500">
              <div className="p-14 w-full">
                {/* Package Info */}
                <div className="flex items-center mb-8">
                  <p className="w-18 mr-24 font-semibold">Paket saat ini</p>
                  <h1 className="text-2xl font-lexend-deca font-bold">
                    Starter
                  </h1>
                  <p className="bg-black text-white rounded-lg text-sm px-2 ml-1">
                    free
                  </p>
                  <div className="flex flex-col text-end w-full">
                    <p>Aktif sampai dengan</p>
                    <p className="font-bold">Selasa, 29 Agustus 2023</p>
                  </div>
                </div>
                {/* Device Info */}
                <div className="flex items-center">
                  <p className="w-18 mr-[6.5rem] font-semibold">Devices</p>
                  <div className="flex flex-col w-full">
                    <div className="bg-gray-200 rounded-full h-2.5">
                      <div className="bg-[#d14343] h-2.5 rounded-full w-4/5"></div>
                    </div>
                    <h1 className="">8 dari 10 device yang tersedia</h1>
                  </div>
                  <div className="flex flex-col text-end w-full">
                    <p className="font-semibold pl-1">
                      Upgrade paket untuk meningkatkan batasan fitur yang ada
                    </p>
                  </div>
                </div>
                {/* Contacts Info */}
                <div className="flex items-center mt-5">
                  <p className="w-18 mr-24 font-semibold">Contacts</p>
                  <div className="flex flex-col w-full">
                    <div className="bg-gray-200 rounded-full h-2.5">
                      <div className="bg-[#4fbeab] h-2.5 rounded-full w-[5%]"></div>
                    </div>
                    <h1 className="">5 dari 100 kontak yang tersedia</h1>
                  </div>
                  <div className="flex flex-col w-full items-end">
                    <button className="w-[75%] font-semibold p-2 outline outline-2 outline-[#3366ff] text-[#3366ff] rounded-lg flex justify-center hover:bg-blue-800 hover:text-white hover:outline-blue-800 transition-colors duration-200">
                      Upgrade Paket
                    </button>
                  </div>
                </div>

                <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 mb-4">
                  <p className="text-gray-500 cursor-pointer">
                    Tampilkan kapasitas fitur lainnya
                  </p>
                </div>
              </div>
            </div>

            {/* Messages */}
            <div className="col-span-4 bg-white rounded-lg flex flex-col dark:bg-[#1f1f21] dark:border dark:border-gray-500">
              <div className="p-6">
                <h1 className="font-bold text-2xl">Pesan Terakhir</h1>
                <Message />
              </div>

              <div className="flex justify-center mb-4">
                <p className="text-blue-600 cursor-pointer">
                  Tampilkan lainnya
                </p>
              </div>
            </div>
          </section>

          {/* Analytic */}
          <section className="mt-5 bg-white p-7 rounded-lg dark:bg-[#1f1f21] dark:border dark:border-gray-500">
            <h1 className="text-3xl font-lexend-deca font-bold">Analitik</h1>

            {/* Summary, Chart */}
            <div className="mt-8 grid grid-cols-12 gap-3">
              {/* Summary */}
              <section className="col-span-4 border border-gray-400 p-5 rounded-lg dark:border-1 dark:border-gray-500">
                <h1 className="font-bold text-xl font-lexend-deca">
                  Ringkasan hari ini
                </h1>

                {/* Row 1 */}
                <div className="grid grid-cols-12 gap-3">
                  <div className="col-span-8 bg-[#f3f5f8] dark:bg-black rounded-lg p-4 flex items-center justify-between mt-4">
                    <div>
                      <p className="text-sm text-gray-900 dark:text-white">
                        Device
                      </p>
                      <p className="text-xl font-bold">RMX3263</p>
                    </div>
                    <div>
                      <FontAwesomeIcon
                        icon={faChevronDown}
                        className="text-lg text-black dark:text-white"
                      />
                    </div>
                  </div>

                  <div className="col-span-4 bg-[#f3f5f8] dark:bg-black rounded-lg p-4 flex items-center mt-4">
                    <div>
                      <p className="text-sm text-gray-900 dark:text-white">
                        Aktif sejak
                      </p>
                      <p className="text-xl font-bold">29.8.2023</p>
                    </div>
                  </div>
                </div>

                {/* Row 2 */}
                <div className="grid grid-cols-12 gap-3 mt-4 place-items-center">
                  <div className="col-span-4">
                    <p className="text-sm">Pesan Keluar</p>
                    <p className="font-bold">24</p>
                  </div>
                  <div className="col-span-4">
                    <p className="text-sm">Pesan Masuk</p>
                    <p className="font-bold">7</p>
                  </div>
                  <div className="col-span-4">
                    <p className="text-sm">Pesan Gagal</p>
                    <p className="font-bold">0</p>
                  </div>
                </div>
              </section>

              {/* Chart */}
              <section className="col-span-8 border border-gray-400 p-5 rounded-lg dark:border-1 dark:border-gray-500">
                <h1 className="font-bold text-xl font-lexend-deca">
                  Total statistik pesan
                </h1>

                <PieChart
                  data={[45, 8, 23]}
                  labels={["Pesan Keluar", "Pesan Gagal", "Pesan Masuk"]}
                  bg={["#3366ff", "#f3f5f8", "#4fbeab"]}
                />
              </section>
            </div>

            {/* Line Chart */}
            <div className="p-12 mt-3  border border-gray-400 rounded-lg dark:border-1 dark:border-gray-500">
              {/* Row 1 */}
              <div className="flex space-x-5 items-center">
                <div className="p-3 pr-24 bg-[#f3f5f8] rounded-lg dark:bg-black dark:text-white">
                  <p className="text-sm">Hari ini</p>
                  <p className="font-bold text-xl">24</p>
                </div>
                <div className="p-3 bg-[#f3f5f8] rounded-lg dark:bg-black dark:text-white">
                  <p className="text-sm">Rata-rata harian</p>
                  <p className="font-bold text-xl">7</p>
                </div>
                <div className="p-3 pr-24 bg-[#f3f5f8] rounded-lg dark:bg-black dark:text-white">
                  <p className="text-sm">Bulan ini</p>
                  <p className="font-bold text-xl">23</p>
                </div>
                <div className="p-3 bg-[#f3f5f8] rounded-lg dark:bg-black dark:text-white">
                  <p className="text-sm">Rata-rata waktu</p>
                  <p className="font-bold text-xl">00:02:42</p>
                </div>
              </div>

              <p className="mt-8 font-bold font-lexend-deca text-xl">
                Grafik chart perjam
              </p>
              <Image
                src="/images/line_chart_hourly.png"
                alt="line_chart_hourly"
                width={750}
                height={750}
                className=" w-full h-auto"
              />

              <p className="mt-8 font-bold font-lexend-deca text-xl">
                Total Interaksi Pesan
              </p>
              <Image
                src="/images/line_chart_daily.png"
                alt="line_chart_daily"
                width={750}
                height={750}
                className=" w-full h-auto"
              />
            </div>
          </section>
        </div>
      </div>
    </div>
  );
};

export default DashboardClient;
