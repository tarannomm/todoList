import React, { useState } from "react";
import rightArrow from "../../assets/menu/rightArrow.svg";
import leftArrow from "../../assets/menu/leftArrow.svg";
import home from "../../assets/menu/home.svg";
import report from "../../assets/menu/report.svg";
import bank from "../../assets/menu/bank.svg";
import email from "../../assets/menu/email.svg";
import group from "../../assets/menu/group.svg";
import list from "../../assets/menu/list.svg";
import finance from "../../assets/menu/finance.svg";
import setting from "../../assets/menu/setting.svg";
import { IoMdMenu } from "react-icons/io";
import { MdMenuOpen } from "react-icons/md";

interface MenuItem {
  title: string;
  src: string;
  gap?: boolean;
}

export default function Menu() {
  const [hamburgerMenu, setHamburgerMenu] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [selectedMenu, setSelectedMenu] = useState<string>("");

  const menuItems: MenuItem[] = [
    { title: "Dashboard", src: home },
    { title: "Report", src: report },
    { title: "Bank", src: bank },
    { title: "Email", src: email },
    { title: "Group", src: group },
    { title: "List", src: list },
    { title: "Finance", src: finance },
    { title: "Setting", src: setting, gap: true },
  ];

  return (
    <div className="absolute top-0 left-0 md:relative z-50 duration-300">
      <div
        className={`transition-all duration-300 ease-in-out ${
          isMenuOpen ? "w-[200px]" : "w-[90px]"
        } md:bg-purple-700 md:h-screen ${
          hamburgerMenu ? "h-screen bg-purple-700" : "h-[100px] bg-transparent"
        } pt-7 relative text-center`}
      >
        <div
          className="absolute top-1 left-3 md:hidden duration-400 cursor-pointer"
          onClick={() => setHamburgerMenu(!hamburgerMenu)}
        >
          {hamburgerMenu ? (
            <MdMenuOpen className="mx-auto text-white" size={40} />
          ) : (
            <IoMdMenu className="mx-auto" size={40} />
          )}
        </div>
        <div
          className={`h-full duration-300 transform ${
            hamburgerMenu ? "" : "-translate-x-96"
          } md:translate-x-0`}
        >
          <img
            src={isMenuOpen ? rightArrow : leftArrow}
            className="absolute cursor-pointer -right-3 top-16 w-8 h-8 p-2 bg-white rounded-full shadow-md duration-400 hidden md:block"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            alt="toggle menu"
          />
          <h1 className="font-amita text-white origin-left font-medium text-xl duration-500">
            Drop
          </h1>
          <ul className="pt-6 mt-10 h-[90%]">
            {menuItems.map((menu, index) => (
              <li
                key={index}
                className={`flex px-7 py-[3px] my-8 cursor-pointer hover:bg-light-white text-gray-300 text-sm items-center transition-all duration-300 ease-in-out ${
                  menu.gap ? "mt-auto" : ""
                } ${
                  menu.title === selectedMenu
                    ? "border-l-4 border-white rounded-l-sm"
                    : ""
                }`}
                onClick={() => setSelectedMenu(menu.title)}
              >
                <img className="w-6 mr-4" src={menu.src} alt={menu.title} />
                <span
                  className={`transition-all duration-300 ease-in-out ${
                    !isMenuOpen ? "opacity-0 max-w-0" : "opacity-100 max-w-full"
                  } font-bold text-base text-white origin-left ${
                    menu.title === selectedMenu
                      ? "border-b-4 border-white rounded-b-sm"
                      : ""
                  }`}
                >
                  {menu.title}
                </span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}
