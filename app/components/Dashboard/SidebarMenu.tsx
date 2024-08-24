"use client";
import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { IconDefinition } from "@fortawesome/fontawesome-svg-core";
import { faChevronDown, faChevronUp } from "@fortawesome/free-solid-svg-icons";

interface ButtonProps {
  bg: string;
  icon: IconDefinition;
  text: string;
  textColor: string;
  onClick?: () => void;
}

interface MenuProps extends ButtonProps {
  dropdown?: boolean;
  dropdownItems?: ButtonProps[];
}

const Button: React.FC<ButtonProps> = ({
  bg,
  icon,
  text,
  textColor,
  onClick,
}) => (
  <button
    className={`${bg} ${textColor} w-full rounded-lg p-3 text-sm flex items-center font-semibold pl-10 hover:bg-[#3366ff] hover:text-white dark:bg-[#121212] dark:text-white dark:hover:bg-[#1f1f21]`}
    onClick={onClick}
  >
    <FontAwesomeIcon icon={icon} className="mr-3" />
    {text}
  </button>
);

const SidebarMenu: React.FC<MenuProps> = ({
  bg,
  icon,
  text,
  textColor,
  dropdown = false,
  dropdownItems = [],
  onClick,
}) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleDropdown = () => {
    if (dropdown) {
      setIsOpen(!isOpen);
    } else if (onClick) {
      onClick();
    }
  };

  return (
    <div>
      <button
        className={`${bg} ${textColor} w-full rounded-lg p-3 text-sm text-start flex items-center justify-between font-semibold mb-2 hover:bg-[#3366ff] hover:text-white dark:${
          bg === "bg-[#3366ff]"
            ? "bg-[#3366ff]"
            : bg === "bg-[#f3f5f8]"
            ? "bg-[#1f1f21]"
            : "bg-[#121212]"
        } dark:text-white dark:hover:bg-[#1f1f21]`}
        onClick={toggleDropdown}
      >
        <div className="flex items-center">
          <FontAwesomeIcon icon={icon} className="mr-3" />
          {text}
        </div>
        {dropdown && (
          <FontAwesomeIcon icon={isOpen ? faChevronUp : faChevronDown} />
        )}
      </button>
      {dropdown && (
        <div
          className={`mt-2 space-y-2 overflow-hidden transition-all duration-300 ease-in-out ${
            isOpen ? "max-h-96 opacity-100 " : "max-h-0 opacity-0"
          }`}
        >
          {dropdownItems.map((item, index) => (
            <Button key={index} {...item} />
          ))}
        </div>
      )}
    </div>
  );
};

export default SidebarMenu;
