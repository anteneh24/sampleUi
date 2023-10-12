import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

export default function Header({ home }) {
  const [scrollPosition, setScollPosition] = useState(0);
  const handleScroll = () => {
    const scrollPosition = window.scrollY;
    setScollPosition(scrollPosition);
    // console.log(scrollPosition);
  };

  useEffect(() => {
    handleScroll();
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div
      className={`${
        home && scrollPosition < 720 ? "top-10 px-3" : "top-0"
      } w-full mx-auto fixed z-50`}
    >
      <div
        className={`${
          home && scrollPosition < 720 ? "w-11/12 rounded-3xl" : "w-full px-20"
        } flex p-5 mx-auto items-center justify-between ${home && "bg-header"}`}
      >
        <Link to="/">
          <img src="/img/logo 2.png" alt="logo" className="w-32" />
        </Link>
        <div className="flex gap-12">
          <div className="flex items-center gap-1">
            <img src="/img/us.png" alt="english" className="pt-1 w-5 h-fit" />
            <select
              name=""
              id=""
              className={`bg-transparent outline-none ${home && "text-white"}`}
            >
              <option value="English">English</option>
            </select>
          </div>
          <button
            className={`uppercase p-2 px-6 rounded-md border ${
              home ? "border-white text-white" : "border-primary text-primary"
            } text-white`}
          >
            Live Chat
          </button>
        </div>
      </div>
    </div>
  );
}
