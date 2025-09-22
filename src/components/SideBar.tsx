"use client";

import React, { useState } from "react";
import { LuDot } from "react-icons/lu";
import { RxDashboard } from "react-icons/rx";
import { RiUser3Line, RiCalendarLine, RiBarChartBoxLine } from "react-icons/ri";
import { SlCloudUpload } from "react-icons/sl";
import { FaRegMap } from "react-icons/fa6";
import { IoOptionsOutline, IoMoonOutline } from "react-icons/io5";
import Link from "next/link";
import Image from "next/image";
import { MdLogout, MdKeyboardArrowRight } from "react-icons/md";
import { GoPlus } from "react-icons/go";
import { FiSun } from "react-icons/fi";

const sideIcons = [
  { icon: RxDashboard, label: "dashboard", href: "/" },
  { icon: RiUser3Line, label: "user", href: "#" },
  { icon: RiCalendarLine, label: "calendar", href: "#" },
  { icon: RiBarChartBoxLine, label: "analytics", href: "#" },
  { icon: SlCloudUpload, label: "upload", href: "#" },
  { icon: FaRegMap, label: "map", href: "#" },
  { icon: IoOptionsOutline, label: "settings", href: "#" },
];

export default function Sidebar() {
  const [activeItem, setActiveItem] = useState<string | null>(null);

  const handleClick = (item: string) => {
    setActiveItem((prev) => (prev === item ? null : item));
  };

  return (
    <aside className="text-white h-screen flex fixed z-50">
      <section className="flex flex-col bg-[#1C1D22] py-6 px-2 items-center gap-8">
        <span className="flex items-center">
          <LuDot size={12} />
          <LuDot size={12} />
          <LuDot size={12} />
        </span>
        <Link href={"/"}>
          <Image src={"/images/logo.png"} alt="Logo" width={22} height={22} />
        </Link>
        <div className="flex flex-col gap-4">
          {sideIcons.map((item, index) => (
            <Link
              href={item.href}
              key={index}
              className="p-3 rounded-full hover:bg-white/5"
            >
              {<item.icon size={16} color="#FFFFFF" />}
            </Link>
          ))}
        </div>
        <div className="h-[45vh] flex flex-col justify-end items-center">
          <span className="">
            <MdLogout size={16} color="#FFFFFF" />
          </span>
        </div>
      </section>
      <section className="w-[300px] flex flex-col bg-[#FFF] pt-8 px-6 shadow-[40px_180px_80px_0px_#1C1D220F] gap-8">
        <div className="flex items-center justify-between w-full">
          <h1 className="hidden md:block text-[30px] text-[#1C1D22] font-exo font-bold capitalize">
            {activeItem ?? "Dashboard"}
          </h1>
          <button
            aria-label="new"
            className="bg-[#1C1D2214] hover:bg-white/20 p-2 rounded-full"
          >
            <GoPlus size={12} color="#1C1D22" />
          </button>
        </div>

        <div className="flex flex-col gap-6">
          {["team", "projects", "tasks", "reminders", "messengers"].map(
            (item, index) => {
              const isActive = activeItem === item;
              return (
                <div className="flex flex-col gap-4" key={index}>
                  <header
                    onClick={() => handleClick(item)}
                    className="flex items-center justify-between"
                  >
                    <h3
                      className={`capitalize font-exo font-bold text-[16px] ${
                        activeItem === item
                          ? "text-[#1C1D22]"
                          : "text-[#1C1D2280]"
                      }`}
                    >
                      {item}
                    </h3>
                    <MdKeyboardArrowRight
                      size={16}
                      color={`${activeItem === item ? "#1C1D22" : "#1C1D2280"}`}
                      className={`transform transition-transform duration-300 ${
                        activeItem === item ? "rotate-90" : ""
                      }`}
                    />
                  </header>
                  {isActive &&  (
                    <div className="">
                      {activeItem === "tasks" && (
                        <div className="border-l-2 border-[#1C1D221A] flex flex-col gap-4">
                            {["All tasks", "To do", "In progress", "Done"].map((i, idx) => (
                                <div className="flex items-center gap-3" key={idx}>
                                    <span className="h-[2px] w-3 bg-[#1C1D221A]"></span>
                                    <h4 className="text-[#1C1D2280] font-exo font-semibold normal-case">{i}</h4>
                                </div>
                            ))}
                        </div>
                      )}
                      {activeItem === "projects" && (
                        <div className="border-l-2 border-[#1C1D221A] flex flex-col gap-4">
                            {["All projects", "Design system","User flow", "Ux research"].map((i, idx) => (
                                <div className="flex items-center gap-3" key={idx}>
                                    <span className="h-[2px] w-3 bg-[#1C1D221A]"></span>
                                    <h4 className="text-[#1C1D2280] font-exo font-semibold normal-case">{i}</h4>
                                </div>
                            ))}
                        </div>
                      )}
                    </div>
                  )}
                </div>
              );
            }
          )}
        </div>

        <div className="h-[56vh] flex flex-col justify-end pb-4 w-full">
          <div className="flex gap-2 bg-[#1C1D220A] rounded-[22px] w-full justify-between">
            <button className="bg-white text-black rounded w-1/2 flex gap-2 items-center justify-center">
              <FiSun />
              Light
            </button>
            <button className="border-white/10 rounded text-white w-1/2 flex gap-2 items-center justify-center">
             <IoMoonOutline />
              Dark
            </button>
          </div>
        </div>
      </section>
    </aside>
  );
}
