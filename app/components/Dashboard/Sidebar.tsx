"use client";
import React from "react";
import Image from "next/image";
import SidebarMenu from "./SidebarMenu";
import {
  faAddressBook,
  faBullhorn,
  faChartBar,
  faCog,
  faEnvelope,
  faEnvelopeOpenText,
  faInbox,
  faLocationCrosshairs,
  faMessage,
  faMobileScreenButton,
  faReplyAll,
  faTableColumns,
  faTowerBroadcast,
  faUserGroup,
  faUserTie,
} from "@fortawesome/free-solid-svg-icons";

const Sidebar = () => {
  return (
    <div className="w-60 h-screen bg-white rounded-lg dark:bg-[#121212]">
      <div className="px-6 py-10">
        <div className="flex flex-col justify-center w-full relative">
          <Image
            src="/images/forwardin_logo_blue.png"
            alt="FORWARDIN"
            width={300}
            height={300}
            className="mb-5"
          />

          <SidebarMenu
            bg="bg-[#3366ff]"
            icon={faTableColumns}
            text="Dashboard"
            textColor="text-white"
            onClick={() => console.log("Dashboard")}
          />

          <SidebarMenu
            bg="bg-white"
            icon={faMobileScreenButton}
            text="Device"
            textColor="text-black"
          />

          <SidebarMenu
            bg="bg-[#f3f5f8]"
            icon={faAddressBook}
            text="Contacts"
            textColor="text-black"
            dropdown={true}
            dropdownItems={[
              {
                bg: "bg-white",
                icon: faAddressBook,
                text: "Contacts",
                textColor: "text-black",
                onClick: () => console.log("Contacts"),
              },
              {
                bg: "bg-white",
                icon: faUserGroup,
                text: "Groups",
                textColor: "text-black",
                onClick: () => console.log("Groups"),
              },
            ]}
          />

          <SidebarMenu
            bg="bg-[#f3f5f8]"
            icon={faMessage}
            text="Message List"
            textColor="text-black"
            dropdown={true}
            dropdownItems={[
              {
                bg: "bg-white",
                icon: faEnvelopeOpenText,
                text: "Messanger",
                textColor: "text-black",
                onClick: () => console.log("Messanger"),
              },
              {
                bg: "bg-white",
                icon: faInbox,
                text: "Incoming Chat",
                textColor: "text-black",
                onClick: () => console.log("IncomingChat"),
              },
              {
                bg: "bg-white",
                icon: faEnvelope,
                text: "Outgoing Chat",
                textColor: "text-black",
                onClick: () => console.log("OutgoingChat"),
              },
            ]}
          />
          <p className="text-sm mt-3 dark:text-white">Tools</p>
          <SidebarMenu
            bg="bg-white"
            icon={faTowerBroadcast}
            text="Broadcast"
            textColor="text-black"
          />

          <SidebarMenu
            bg="bg-white"
            icon={faBullhorn}
            text="Campaign"
            textColor="text-black"
          />

          <SidebarMenu
            bg="bg-white"
            icon={faReplyAll}
            text="Auto Reply"
            textColor="text-black"
          />

          <SidebarMenu
            bg="bg-white"
            icon={faUserTie}
            text="Customer Service"
            textColor="text-black"
          />

          <SidebarMenu
            bg="bg-white"
            icon={faChartBar}
            text="Analytics"
            textColor="text-black"
          />

          <SidebarMenu
            bg="bg-white"
            icon={faLocationCrosshairs}
            text="Forwardin API"
            textColor="text-black"
          />

          <p className="text-sm mt-3 dark:text-white">Others</p>

          <SidebarMenu
            bg="bg-white"
            icon={faCog}
            text="Settings"
            textColor="text-black"
          />
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
