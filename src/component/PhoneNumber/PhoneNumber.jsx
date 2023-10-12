import React, { useState } from "react";
import { Link } from "react-router-dom";
import SingleStep from "./SingleStep";
import Countries from "./countries.json";

function PhoneNumber() {
  const [phone, setPhone] = useState("");
  const [scrollPosition, setScollPosition] = useState(0);
  const handleScroll = () => {
    const scrollPosition = window.scrollY;
    setScollPosition(scrollPosition);
    // console.log(scrollPosition);
  };
  return (
    <div className="flex flex-row ">
      <div className="flex flex-col bg-checkBackgroundColor  px-10 py-2 w-80  ">
        <div className="mb-20">
          <img src="/img/logo 2.png" alt="logo" className="w-32" />
        </div>
        <SingleStep
          isLast={false}
          passed={true}
          isCurrent={false}
          label={"Name"}
        />
        <SingleStep
          isLast={false}
          passed={false}
          isCurrent={true}
          label={"Contact Information"}
        />
        <SingleStep
          isLast={false}
          passed={false}
          isCurrent={false}
          label={"Gender"}
        />
        <SingleStep
          isLast={false}
          passed={false}
          isCurrent={false}
          label={"Birth Information"}
        />
        <SingleStep
          isLast={false}
          passed={false}
          isCurrent={false}
          label={"Country Of Eligibility"}
        />
        <SingleStep
          isLast={false}
          passed={false}
          isCurrent={false}
          label={"Photograph"}
        />
        <SingleStep
          isLast={false}
          passed={false}
          isCurrent={false}
          label={"Mailing Address"}
        />
        <SingleStep
          isLast={false}
          passed={false}
          isCurrent={false}
          label={"Additional Information "}
        />
        <SingleStep
          isLast={true}
          passed={false}
          isCurrent={false}
          label={"Payment"}
        />
      </div>
      <div className="flex flex-col w-full justify-between px-20 h-screen py-8">
        <div
          className={`${
            scrollPosition < 720 ? "w-11/12 rounded-3xl" : "w-full px-20"
          } flex p-5  mx-auto items-center justify-between`}
        >
          <img src="/img/logo 2.png" alt="logo" className="w-32" />
          <div className="flex gap-12">
            <div className="flex items-center">
              <img
                src="/img/us.png"
                alt=""
                className="w-6 h-4 align-middle mr-2"
              />
              <select
                name=""
                id=""
                className="bg-transparent text-black font-bold"
              >
                <option value="English">English</option>
                <option value=""></option>
              </select>
            </div>

            <button className="uppercase p-2 px-6 rounded-md border border-checkBackgroundColor text-black">
              Live Chat
            </button>
          </div>
        </div>
        <div>
          <div className="text-5xl  text-header font-light mb-12">
            2.1. - Phone number
          </div>
          <div>
            <div className="flex flex-row">
              <div>
                <div className="flex flex-row items-center">
                  <div className="flex flex-row items-center border-b border-gray py-8 h-2 gap-4 px-4">
                    <img src={"/img/us.png"} alt="" />
                    <img src={"/img/Vector 4.png"} alt="" className="w-4" />
                  </div>
                  <div className="  h-8  border border-header mx-2" />
                  <input
                    className="focus:outline-none border-b border-gray p-4 py-8 h-2 text-4xl w-8/12"
                    placeholder="+1 604 123 4567"
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                  />
                </div>
              </div>
            </div>
            <button className="flex flex-row items-center gap-3 mt-8 py-1 px-5 bg-buttonGray border-none rounded-lg text-white font-bold">
              <div>OK</div>
              <img src="/img/check.png" alt="" className="h-3" />
            </button>
          </div>
        </div>

        <div className="flex flex-col self-end ">
          <div className="bg-header w-max self-end flex flex-row px-2 rounded-md my-10">
            <button>
              <Link to="/check">
                <img src="/img/up.png" className="h-10 w-8 py-3 mx-2" alt="" />
              </Link>
            </button>
            <div className="border border-blue-900 mx-2 "> </div>
            <button>
              <img src="/img/down.png" className="h-10 w-8 py-3 mx-2" alt="" />
            </button>
          </div>
          <div style={{ marginRight: "-3rem" }}>
            <p className="text-header">
              Copyright © 2016-2023 GovAssist, LLC All Rights Reserved
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default PhoneNumber;
