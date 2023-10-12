import React from "react";

export default function Contact() {
  return (
    <div className="pt-10 p-20">
      <div className="text-accent border-t border-gray-200 pt-10 text-[54px] mb-7 bg-white">
        Let's keep in touch for news
      </div>
      <div className="flex justify-center bg-grayLight border-l-8 border-l-headerLight rounded-lg h-36 items-center">
        <p className="text-black justify-center flex-1 ml-6">
          Subscribe to be the first do receive updates and be in advantage on
          your application proccess
        </p>
        <div className="relative flex flex-1 justify-end mr-6 h-14">
          <input
            className="flex-grow px-4 py-2 border border-white rounded-[16px] h-14"
            type="text"
            placeholder="Enter text"
          />
          <button className="absolute flex right-1 top-1 bottom-2 bg-buttonOrange text-white text-center h-fit px-3 py-2 rounded-full items-center mt-2 mr-2">
            <span className="text-xs flex flex-1 items-center">Subscribe</span>
            <img
              src="/img/imageNext.png"
              className="flex flex-1 ml-2 items-center"
              alt=""
            />
          </button>
        </div>
      </div>
    </div>
  );
}
