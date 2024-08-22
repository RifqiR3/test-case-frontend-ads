"use client";
import Navbar from "./components/Navbar";
import FaqSearchBar from "./components/Faq/FaqSearchbar";
import Image from "next/image";
import { ArrowRightIcon, ChevronDownIcon } from "@heroicons/react/24/solid";
import { useState, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faClock,
  faTowerBroadcast,
  faChartLine,
  faAddressBook,
  faMobileScreen,
  faFileInvoice,
  faLaptopFile,
} from "@fortawesome/free-solid-svg-icons";

const Home: React.FC = () => {
  const [activeItem, setActiveItem] = useState<string>("");
  const [isYearly, setIsYearly] = useState<boolean>(false);

  useEffect(() => {
    const sections = document.querySelectorAll<HTMLElement>("section");
    const options: IntersectionObserverInit = {
      rootMargin: "0px",
      threshold: 0.5,
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setActiveItem(entry.target.getAttribute("id") || "");
        }
      });
    }, options);

    sections.forEach((section) => {
      observer.observe(section);
    });

    return () => {
      sections.forEach((section) => {
        observer.unobserve(section);
      });
    };
  }, []);

  return (
    <>
      <Navbar />
      <html className="!scroll-smooth">
        <body>
          <section
            id="get-started"
            className="bg-gradient-to-tl from-[#ecf2fa] to-[#f9fafd]"
          >
            <div className="container mx-auto ">
              <div className="min-h-screen grid grid-cols-1 md:grid-cols-2 gap-3 items-center px-10 md:px-12 mt-10 md:mt-0">
                {/* Image */}
                <div className="order-1 md:order-2 flex justify-center">
                  <Image
                    src="/images/get_started_image.png"
                    alt="FORWARDIN"
                    width={750}
                    height={750}
                    className=""
                  />
                </div>

                <div className="order-2 md:order-1 space-y-6">
                  <div className="flex space-x-8">
                    {/* Sidebar*/}
                    <ul className="bg-opacity-0 2xl:block fixed hidden space-y-2 left-20">
                      <li>
                        <a
                          href="#get-started"
                          className={`block ${
                            activeItem === "get-started"
                              ? "text-black font-bold"
                              : activeItem === "faq"
                              ? "text-white"
                              : "opacity-50"
                          } hover:text-black hover:font-bold`}
                        >
                          Get Started
                        </a>
                      </li>
                      <li>
                        <a
                          href="#broadcast"
                          className={`block ${
                            activeItem === "broadcast"
                              ? "text-black font-bold"
                              : activeItem === "faq"
                              ? "text-white"
                              : "opacity-50"
                          } hover:text-black hover:font-bold`}
                        >
                          Broadcast
                        </a>
                      </li>
                      <li>
                        <a
                          href="#campaign"
                          className={`block ${
                            activeItem === "campaign"
                              ? "text-black font-bold"
                              : activeItem === "faq"
                              ? "text-white"
                              : "opacity-50"
                          } hover:text-black hover:font-bold`}
                        >
                          Campaign
                        </a>
                      </li>
                      <li>
                        <a
                          href="#auto-reply"
                          className={`block ${
                            activeItem === "auto-reply"
                              ? "text-black font-bold"
                              : activeItem === "faq"
                              ? "text-white"
                              : "opacity-50"
                          } hover:text-black hover:font-bold`}
                        >
                          Auto Reply
                        </a>
                      </li>
                      <li>
                        <a
                          href="#opportunity"
                          className={`block ${
                            activeItem === "opportunity"
                              ? "text-black font-bold"
                              : activeItem === "faq"
                              ? "text-white"
                              : "opacity-50"
                          } hover:text-black hover:font-bold`}
                        >
                          Opportunity
                        </a>
                      </li>
                      <li>
                        <a
                          href="#pricing"
                          className={`block ${
                            activeItem === "pricing"
                              ? "text-black font-bold"
                              : activeItem === "faq"
                              ? "text-white"
                              : "opacity-50"
                          } hover:text-black hover:font-bold`}
                        >
                          Pricing
                        </a>
                      </li>
                      <li>
                        <a
                          href="#faq"
                          className={`block ${
                            activeItem === "faq"
                              ? "text-white font-bold"
                              : activeItem === "contact-us"
                              ? "text-white"
                              : "opacity-50"
                          } hover:text-black hover:font-bold`}
                        >
                          FAQ
                        </a>
                      </li>
                      <li>
                        <a
                          href="#contact-us"
                          className={`block ${
                            activeItem === "contact-us"
                              ? "text-white font-bold"
                              : activeItem === "faq"
                              ? "text-white"
                              : "opacity-50"
                          } hover:text-black hover:font-bold`}
                        >
                          Contact Us
                        </a>
                      </li>
                    </ul>

                    <div className="flex-1 space-y-6 ">
                      <h1 className="text-3xl md:text-4xl font-bold font-lexend-deca">
                        Elevate Your Messaging Efficiency with Our Innovative
                        Admin Tools
                      </h1>
                      <p className="text-lg md:text-xl text-gray-600">
                        Selamat datang di Fowardin! Pengelolaan pesan Anda
                        menjadi lebih mudah dengan Admin Tools kami. Tingkatkan
                        komunikasi Anda dan pelanggan dengan fitur pesan
                        otomatis. Menyimpan kontak menjadi lebih praktis dengan
                        fitur sinkronisasi Google Concact. Dapatkan kendali
                        penuh pesan dengan manajemen konten yang praktis
                      </p>
                      <div className="flex">
                        <button className="bg-black text-white py-3 px-6 rounded-l-lg flex items-center">
                          Daftar Sekarang
                        </button>
                        <button className="ml-[0.1rem] bg-black text-white py-3 px-3 rounded-r-lg flex items-center">
                          <ArrowRightIcon className="h-5 w-5" />
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          <section id="broadcast" className="bg-[#ecf2fa] pb-60">
            <div className="container mx-auto">
              <div className="md:min-h-screen grid grid-cols-1 md:grid-cols-2 gap-3 items-center px-10 md:px-12 md:mt-0">
                {/* Image */}
                <div className="order-1 flex justify-center pt-40 mb-4">
                  <Image
                    src="/images/broadcast_image.png"
                    alt="FORWARDIN"
                    width={750}
                    height={750}
                    className=""
                  />
                </div>

                <div className="order-2 space-y-6">
                  <div className="flex space-x-8">
                    <div className="flex-1 space-y-6">
                      <h1 className="text-3xl md:text-4xl font-bold font-lexend-deca">
                        Reach Further With Ease
                      </h1>
                      <p className="text-lg md:text-xl text-gray-600">
                        Forwardin memberikan Anda akses cepat untuk memperluas
                        jangkauan komunikasi Anda. Dengan fitur Broadcast kami,
                        Anda dapat mengirim pesan kepada banyak kontak dan grup
                        sekaligus. Menjagkaui audiens Anda tidak pernah semudah
                        ini.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          <section id="campaign" className="bg-white pb-60">
            <div className="container mx-auto">
              <div className="md:min-h-screen grid grid-cols-1 md:grid-cols-2 gap-3 items-center px-10 md:px-12 md:mt-0">
                {/* Image */}
                <div className="order-1 md:order-2 flex justify-center pt-40 mb-4">
                  <Image
                    src="/images/campaign_image.png"
                    alt="FORWARDIN"
                    width={750}
                    height={750}
                    className=""
                  />
                </div>

                <div className="order-2 md:order-1 space-y-6">
                  <div className="flex space-x-8">
                    <div className="flex-1 space-y-6">
                      <h1 className="text-3xl md:text-4xl font-bold font-lexend-deca">
                        Right Time, Effective Messages
                      </h1>
                      <p className="text-lg md:text-xl text-gray-600">
                        Fowardin memungkinkan Anda untuk merencanakan pengiriman
                        iklan yang tepat sasaran. Manfaatkan fitur Campaign kami
                        untuk mengoptimalkan pesan iklan Anda sehingga hasilnya
                        lebih akurat dan sukses. Dengan Fowardin, setiap pesan
                        iklan memiliki dampak yang lebih besar.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          <section id="auto-reply" className="bg-[#ecf2fa] pb-60">
            <div className="container mx-auto">
              <div className="md:min-h-screen grid grid-cols-1 md:grid-cols-2 gap-3 items-center px-10 md:px-12 md:mt-0">
                {/* Image */}
                <div className="order-1 flex justify-center pt-40 mb-4">
                  <Image
                    src="/images/auto-reply_image.png"
                    alt="FORWARDIN"
                    width={600}
                    height={600}
                    className=""
                  />
                </div>

                <div className="order-2 space-y-20 ">
                  <div className="flex space-x-8">
                    <div className="flex-1 space-y-6 ">
                      <h1 className="text-3xl md:text-4xl font-bold font-lexend-deca">
                        Respond Faster with the Convenience of Auto Reply
                      </h1>
                      <p className="text-lg md:text-xl text-gray-600">
                        Fowardin mempermudah Anda untuk memberikan respon cepat
                        kepada pesan dari banyak kontak dan grup sekaligus.
                        Dengan fitur Auto Reply kami, Anda dapat menjawab
                        pertanyaan atau memberikan respon otomatis, menghemat
                        waktu dan energi Anda. Tanggap lebih cepat dengan
                        Fowardin.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          <section id="opportunity" className="bg-white pb-60">
            <div className="container mx-auto mt-10">
              <div className="flex items-center justify-center h-52">
                <div className="w-3/4">
                  <h1 className="text-[#3366ff] text-center text-3xl sm:text-5xl font-bold font-lexend-deca">
                    "One Step Closer to More Effective and Connected
                    Communication!"
                  </h1>
                </div>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-4 md:gap-2 items-center px-10 md:px-12 md:mt-10 mt-20">
                {/* Image */}
                <div className="order-1 col-span-1 flex justify-center md:pt-40 mb-4">
                  <Image
                    src="/images/opportunity_image.png"
                    alt="FORWARDIN"
                    width={750}
                    height={750}
                    className=""
                  />
                </div>

                <div className="md:ml-20 order-2 space-y-20 col-span-3">
                  <div className="flex space-x-8">
                    <div className="flex-auto space-y-6 ">
                      {/* Buttons */}
                      <div className="md:grid md:grid-cols-3 md:gap-8 hidden">
                        <div className="col-span-1">
                          <button className="bg-[#3366ff] text-white lg:px-3 xl:px-5 xl:py-3 rounded-lg flex justify-center w-full hover:bg-blue-800 transition-colors duration-300">
                            Bisnis dan Pemasaran
                          </button>
                        </div>
                        <div className="col-span-1">
                          <button className="bg-white lg:px-3 xl:px-5 xl:py-3 outline outline-2 outline-[#3366ff] text-[#3366ff] rounded-lg flex justify-center w-full hover:bg-blue-800 hover:text-white hover:outline-blue-800 transition-colors duration-200">
                            Komersial dan Penjualan
                          </button>
                        </div>
                        <div className="col-span-1">
                          <button className="bg-white lg:px-3 lg:h-full lg:items-center xl:px-5 xl:py-3 outline outline-2 outline-[#3366ff] text-[#3366ff] rounded-lg flex justify-center w-full hover:bg-blue-800 hover:text-white hover:outline-blue-800 transition-colors duration-200">
                            Organisasi Sosial
                          </button>
                        </div>
                      </div>
                      {/* Buttons for smaller screen size */}
                      <div className="md:hidden grid grid-cols-1">
                        <div className="col-span-1 space-y-3">
                          <button className="bg-[#3366ff] text-white p-2 rounded-lg flex justify-center w-full hover:bg-blue-800 transition-colors duration-300">
                            <div className="flex">
                              <p className="flex items-center">
                                Bisnis dan Pemasaran
                              </p>
                              <p className="flex items-center ml-2">
                                <ChevronDownIcon className="h-5 w-5 " />
                              </p>
                            </div>
                          </button>
                          <button className="bg-[#f3f5f8] text-[#3366ff] p-2 rounded-lg flex justify-center w-full hover:bg-blue-800 transition-colors duration-300">
                            <div className="flex">Bisnis dan Pemasaran</div>
                          </button>
                          <button className="bg-[#f3f5f8] text-[#3366ff] p-2 rounded-lg flex justify-center w-full hover:bg-blue-800 transition-colors duration-300">
                            <div className="flex">Organisasi Sosial</div>
                          </button>
                        </div>
                      </div>

                      <p className="text-lg md:text-xl text-gray-600">
                        Bidang ini dapat memanfaatkan fitur Broadcast untuk
                        mengirim promosi, pengumuman, dan informasi produk
                        kepada pelanggan dalam jumlah besar secara efisien.
                        Selain itu, fitur Campaign dapat membantu merencanakan
                        dan menyampaikan pesan iklan dengan waktu tepat kepada
                        target audiens yang sesuai.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          <section id="pricing" className="bg-white pb-60">
            <div className="container mx-auto mt-10">
              <div className="flex items-center justify-center h-52">
                <div className="w-3/4">
                  <h1 className="text-black text-center text-4xl font-bold font-lexend-deca">
                    Our Pricing
                  </h1>
                  <h1 className="md:hidden text-black text-center text-5xl font-bold font-lexend-deca">
                    Subscribtion
                  </h1>
                </div>
              </div>
              {/* Pricing Checkbox */}
              <div className="flex items-center justify-center">
                <label className="flex justify-between items-center text-black shadow-xl w-48 h-14 rounded-full relative px-4 cursor-pointer">
                  <input
                    type="checkbox"
                    id="check"
                    className="z-20 peer sr-only"
                    onChange={(e) => setIsYearly(e.target.checked)}
                    checked={isYearly}
                  />
                  <p className="ml-1 z-10 text-white peer-checked:text-black transition-colors duration-300">
                    Monthly
                  </p>
                  <p className="mr-3 z-10 text-black peer-checked:text-white transition-colors duration-300">
                    Yearly
                  </p>
                  <span className="w-1/2 h-full bg-[#3366ff] absolute rounded-full left-0 transition-transform duration-300 ease-in-out transform peer-checked:translate-x-full"></span>
                </label>
              </div>
              {/* Description */}
              <div className="hidden md:flex justify-center mt-10 p-5">
                <div className="flex-justify-center items-center bg-[#e6e8f0] p-3 rounded-xl">
                  <p className="text-[#3366ff] font-bold">
                    Hemat hingga 25% dengan paket tahunan
                  </p>
                </div>
              </div>
              {/* Subs Selection Card */}
              <div className="flex justify-center mt-10">
                {/* Cards */}
                <div className="grid xl:grid-cols-4 md:grid-cols-2 gap-3">
                  {/* Card 1*/}
                  <section className="p-10">
                    <h1 className="text-3xl font-bold font-lexend-deca">
                      Starter
                    </h1>
                    <p className="text-sm">
                      Mulai perjalanan Anda dengan paket Starter selama 14 hari.
                      Nikamti pesan otomatis, siaran pesan, dan manajemen kontak
                      yang efisien. Dapatkan integrasi yang membantu dan
                      sinkronisasi kontak WhatsApp.
                    </p>
                    {/* Price Monthly */}
                    <h1 className="text-3xl font-bold font-lexend-deca mt-3">
                      {isYearly ? <>-</> : <>Gratis</>}
                    </h1>
                    {/* Price Yearly*/}
                    <p className="mt-2 text-gray-500">
                      {isYearly ? <>Gratis</> : <>-</>}
                    </p>
                    {/* Buy Button */}
                    {isYearly ? (
                      <>
                        <button
                          disabled
                          className="mt-9 flex justify-center items-center disabled:bg-gray-500 w-full rounded-lg p-2 text-white"
                        >
                          Start Now
                        </button>
                      </>
                    ) : (
                      <>
                        <button className="mt-9 flex justify-center items-center bg-[#3366ff] w-full rounded-lg p-2 text-white">
                          Start Now
                        </button>
                      </>
                    )}

                    {/* Subs Description */}
                    <ul className="mt-5 font-semibold">
                      <li className="flex items-center">
                        <FontAwesomeIcon
                          className="align-middle text-blue-600"
                          icon={faClock}
                        />
                        <p className="ml-3">100 Auto reply</p>
                      </li>
                      <li className="flex items-center mt-3">
                        <FontAwesomeIcon
                          className="align-middle text-blue-600"
                          icon={faTowerBroadcast}
                        />
                        <p className="ml-3">500 Broadcast</p>
                      </li>
                      <li className="flex items-center mt-3">
                        <FontAwesomeIcon
                          className="align-middle text-blue-600"
                          icon={faChartLine}
                        />
                        <p className="ml-3">50 Campaign</p>
                      </li>
                      <li className="flex items-center mt-3">
                        <FontAwesomeIcon
                          className="align-middle text-blue-600"
                          icon={faAddressBook}
                        />
                        <p className="ml-3">50 Contact</p>
                      </li>
                      <li className="flex items-center mt-3">
                        <FontAwesomeIcon
                          className="align-middle text-blue-600"
                          icon={faMobileScreen}
                        />
                        <p className="ml-3">50 Device</p>
                      </li>
                      <li className="flex items-center mt-3">
                        <FontAwesomeIcon
                          className="align-middle text-blue-600"
                          icon={faFileInvoice}
                        />
                        <p className="ml-3">Excel / CSV Contact Import</p>
                      </li>
                      <li className="flex items-center mt-3">
                        <FontAwesomeIcon
                          className="align-middle text-blue-600"
                          icon={faLaptopFile}
                        />
                        <p className="ml-3">Google Contact Sync</p>
                      </li>
                    </ul>
                  </section>

                  {/* Card 2*/}
                  <section className="p-10 shadow-2xl rounded-lg">
                    <h1 className="text-3xl font-bold font-lexend-deca">
                      Basic
                    </h1>
                    <p className="text-sm">
                      Dapatkan akses selama 1 bulan dengan paket Basic.
                      Manfaatkan fitur pesan otomatis, siaran pesan, dan
                      manajemen kontak yang ditingkatkan. Rasakan kenyamanan
                      integrasi yang luas dengan sinkronasi kontak Google dan
                      WhatsApp.
                    </p>
                    {/* Price Monthly */}
                    <h1 className="text-3xl font-bold font-lexend-deca mt-3 peer-checked:hidden">
                      {isYearly ? (
                        <>
                          Rp. 650.000
                          <span className="font-normal text-base">/tahun</span>
                        </>
                      ) : (
                        <>
                          Rp. 65.000
                          <span className="font-normal text-base">/bulan</span>
                        </>
                      )}
                    </h1>
                    {/* Price Yearly*/}
                    <p className="mt-2 text-gray-500">
                      {isYearly ? (
                        <>Rp. 65.000 /bulan</>
                      ) : (
                        <>Rp. 650.000 /tahun</>
                      )}
                    </p>
                    {/* Buy Button */}
                    <button className="mt-4 flex justify-center items-center bg-[#ffb020] w-full rounded-lg p-2 text-white">
                      Get Started
                    </button>
                    {/* Subs Description */}
                    <ul className="mt-5 font-semibold">
                      <li className="flex items-center">
                        <FontAwesomeIcon
                          className="align-middle text-blue-600"
                          icon={faClock}
                        />
                        <p className="ml-3">100 Auto reply</p>
                      </li>
                      <li className="flex items-center mt-3">
                        <FontAwesomeIcon
                          className="align-middle text-blue-600"
                          icon={faTowerBroadcast}
                        />
                        <p className="ml-3">500 Broadcast</p>
                      </li>
                      <li className="flex items-center mt-3">
                        <FontAwesomeIcon
                          className="align-middle text-blue-600"
                          icon={faChartLine}
                        />
                        <p className="ml-3">50 Campaign</p>
                      </li>
                      <li className="flex items-center mt-3">
                        <FontAwesomeIcon
                          className="align-middle text-blue-600"
                          icon={faAddressBook}
                        />
                        <p className="ml-3">50 Contact</p>
                      </li>
                      <li className="flex items-center mt-3">
                        <FontAwesomeIcon
                          className="align-middle text-blue-600"
                          icon={faMobileScreen}
                        />
                        <p className="ml-3">50 Device</p>
                      </li>
                      <li className="flex items-center mt-3">
                        <FontAwesomeIcon
                          className="align-middle text-blue-600"
                          icon={faFileInvoice}
                        />
                        <p className="ml-3">Excel / CSV Contact Import</p>
                      </li>
                      <li className="flex items-center mt-3">
                        <FontAwesomeIcon
                          className="align-middle text-blue-600"
                          icon={faLaptopFile}
                        />
                        <p className="ml-3">Google Contact Sync</p>
                      </li>
                    </ul>
                  </section>

                  {/* Card 3*/}
                  <section className="p-10">
                    <h1 className="text-3xl font-bold font-lexend-deca">
                      Premium
                    </h1>
                    <p className="text-sm">
                      Perpanjang pengalaman Anda dengan paket Premium selama 1
                      bulan. Nikmati manfaat pesan otomatis, siaran pesan, dan
                      manajemen kontak tanpa batasan. Aktifkan integrasi yang
                      luas dengan sinkronisasi kontak Google dan WhatsApp.
                    </p>
                    {/* Price Monthly */}
                    <h1 className="text-3xl font-bold font-lexend-deca mt-3">
                      {isYearly ? (
                        <>
                          Rp. 800.000
                          <span className="font-normal text-base">/tahun</span>
                        </>
                      ) : (
                        <>
                          Rp. 76.000
                          <span className="font-normal text-base">/bulan</span>
                        </>
                      )}
                    </h1>
                    {/* Price Yearly*/}
                    <p className="mt-2 text-gray-500">
                      {isYearly ? (
                        <>Rp. 76.000 /bulan</>
                      ) : (
                        <>Rp. 800.000 /tahun</>
                      )}
                    </p>
                    {/* Buy Button */}
                    <button className="mt-4 flex justify-center items-center bg-[#3366ff] w-full rounded-lg p-2 text-white">
                      Get Started
                    </button>
                    {/* Subs Description */}
                    <ul className="mt-5 font-semibold">
                      <li className="flex items-center">
                        <FontAwesomeIcon
                          className="align-middle text-blue-600"
                          icon={faClock}
                        />
                        <p className="ml-3">100 Auto reply</p>
                      </li>
                      <li className="flex items-center mt-3">
                        <FontAwesomeIcon
                          className="align-middle text-blue-600"
                          icon={faTowerBroadcast}
                        />
                        <p className="ml-3">500 Broadcast</p>
                      </li>
                      <li className="flex items-center mt-3">
                        <FontAwesomeIcon
                          className="align-middle text-blue-600"
                          icon={faChartLine}
                        />
                        <p className="ml-3">50 Campaign</p>
                      </li>
                      <li className="flex items-center mt-3">
                        <FontAwesomeIcon
                          className="align-middle text-blue-600"
                          icon={faAddressBook}
                        />
                        <p className="ml-3">50 Contact</p>
                      </li>
                      <li className="flex items-center mt-3">
                        <FontAwesomeIcon
                          className="align-middle text-blue-600"
                          icon={faMobileScreen}
                        />
                        <p className="ml-3">50 Device</p>
                      </li>
                      <li className="flex items-center mt-3">
                        <FontAwesomeIcon
                          className="align-middle text-blue-600"
                          icon={faFileInvoice}
                        />
                        <p className="ml-3">Excel / CSV Contact Import</p>
                      </li>
                      <li className="flex items-center mt-3">
                        <FontAwesomeIcon
                          className="align-middle text-blue-600"
                          icon={faLaptopFile}
                        />
                        <p className="ml-3">Google Contact Sync</p>
                      </li>
                    </ul>
                  </section>

                  {/* Card 4*/}
                  <section className="p-10">
                    <h1 className="text-3xl font-bold font-lexend-deca">Pro</h1>
                    <p className="text-sm">
                      Jelajahi seluruh fitur dengan paket Pro selama 1 bulan.
                      Dapatkan keuntungan dari pesan otomatis, siaran pesan,
                      serta manajemen kontak yang tidak terbatas. Aktifkan
                      integrasi yang luas dengan sinkronasi kontak Google dan
                      WhatsApp.
                    </p>
                    {/* Price Monthly */}
                    <h1 className="text-3xl font-bold font-lexend-deca mt-3">
                      {isYearly ? (
                        <>
                          Rp. 900.000
                          <span className="font-normal text-base">/tahun</span>
                        </>
                      ) : (
                        <>
                          Rp. 86.000
                          <span className="font-normal text-base">/bulan</span>
                        </>
                      )}
                    </h1>
                    {/* Price Yearly*/}
                    <p className="mt-2 text-gray-500">
                      {isYearly ? (
                        <>Rp. 86.000 /bulan</>
                      ) : (
                        <>Rp. 900.000 /tahun</>
                      )}
                    </p>
                    {/* Buy Button */}
                    <button className="mt-4 flex justify-center items-center bg-[#3366ff] w-full rounded-lg p-2 text-white">
                      Get Started
                    </button>
                    {/* Subs Description */}
                    <ul className="mt-5 font-semibold">
                      <li className="flex items-center">
                        <FontAwesomeIcon
                          className="align-middle text-blue-600"
                          icon={faClock}
                        />
                        <p className="ml-3">100 Auto reply</p>
                      </li>
                      <li className="flex items-center mt-3">
                        <FontAwesomeIcon
                          className="align-middle text-blue-600"
                          icon={faTowerBroadcast}
                        />
                        <p className="ml-3">500 Broadcast</p>
                      </li>
                      <li className="flex items-center mt-3">
                        <FontAwesomeIcon
                          className="align-middle text-blue-600"
                          icon={faChartLine}
                        />
                        <p className="ml-3">50 Campaign</p>
                      </li>
                      <li className="flex items-center mt-3">
                        <FontAwesomeIcon
                          className="align-middle text-blue-600"
                          icon={faAddressBook}
                        />
                        <p className="ml-3">50 Contact</p>
                      </li>
                      <li className="flex items-center mt-3">
                        <FontAwesomeIcon
                          className="align-middle text-blue-600"
                          icon={faMobileScreen}
                        />
                        <p className="ml-3">50 Device</p>
                      </li>
                      <li className="flex items-center mt-3">
                        <FontAwesomeIcon
                          className="align-middle text-blue-600"
                          icon={faFileInvoice}
                        />
                        <p className="ml-3">Excel / CSV Contact Import</p>
                      </li>
                      <li className="flex items-center mt-3">
                        <FontAwesomeIcon
                          className="align-middle text-blue-600"
                          icon={faLaptopFile}
                        />
                        <p className="ml-3">Google Contact Sync</p>
                      </li>
                    </ul>
                  </section>
                </div>
              </div>
            </div>
          </section>

          <section id="faq" className="bg-[#3366ff]">
            <div className="container mx-auto">
              <FaqSearchBar />
            </div>
          </section>

          <section id="contact-us" className="bg-[#3366ff]">
            <div className="container mx-auto">
              <div className="py-20 px-4 sm:py-32 sm:px-6 md:py-40 md:px-10 flex justify-center items-center">
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 text-white">
                  <section className="flex flex-col items-start p-6">
                    <Image
                      src="/images/forwardin_logo_white.png"
                      alt="FORWARDIN"
                      width={3000}
                      height={3000}
                      className="w-full max-w-[18rem] md:max-w-[20rem] lg:max-w-[25rem] h-auto"
                    />
                    <p className="mt-7 text-left">
                      Forwardin is your ultimate communication management
                      solution. We empower businesses of all sizes with
                      efficient message campaign scheduling. Our mission is to
                      simplify your communication processes, helping you engage
                      with your audience effectively and effortlessly. Join us
                      in Transforming your commincation game today.
                    </p>
                  </section>

                  <section className="p-6 flex flex-col items-start">
                    <h1 className="text-left font-bold text-2xl">Contact Us</h1>
                    <p className="mt-3">
                      Join our mailing list to receive updates, exclusive
                      content, and early access to upcoming events. By signing
                      up, you become an integral part of out community,
                      spreading the message of compassion and making a
                      difference
                    </p>
                    <div className="mt-10">
                      <p className="mt-10">Email: info@fowarin</p>
                      <p>Phone: +1 (123) 456-7890</p>
                    </div>
                  </section>

                  <section className="p-6 flex flex-col items-start">
                    <h1 className="text-left font-bold text-2xl">Let's Talk</h1>
                    <div className="mt-10">
                      <p>Email: info@fowarin</p>
                      <p>Phone: +1 (123) 456-7890</p>
                    </div>
                  </section>
                </div>
              </div>
            </div>
          </section>

          <section id="footer" className="bg-[#3366ff]">
            <div className="container mx-auto">
              <div className="flex justify-center py-20">
                <Image
                  src="/images/forwardin_logo_white_2.png"
                  alt="FORWARDIN"
                  width={3000}
                  height={3000}
                  className="w-full max-w-[18rem] md:max-w-[20rem] lg:max-w-[25rem] h-auto"
                />
              </div>
            </div>
          </section>
        </body>
      </html>
    </>
  );
};

export default Home;
