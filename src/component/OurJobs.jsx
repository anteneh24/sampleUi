import React from "react";

export default function OurJobs() {
  return (
    <div className="max-h-screen flex p-12 px-20 bg-white">
      <div className="flex-1 flex flex-col gap-5">
        <div className="flex items-center gap-5">
          <img src="/img/🦆 icon _star_.png" alt="our-jobs" />
          <p className="font-bold">Our Jobs Speaks for Ourselves</p>
        </div>
        <div className="flex flex-col">
          <div className="flex items-center gap-5 py-5 border-b border-gray-200">
            <img src="/img/Ellipse 1.png" alt="person" />
            <div className="flex flex-1 flex-col gap-2">
              <h4 className="underline underline-offset-2 font-bold">
                Yeonseo Choi
              </h4>
              <div className="flex items-center gap-16">
                <p>1 Review</p>
                <div className="flex items-center gap-2">
                  <img
                    src="/img/ic_outline-place.png"
                    alt="location-icon"
                    className="w-4 h-fit"
                  />
                  <p>KR</p>
                </div>
              </div>
            </div>
          </div>
          <div className="py-8">
            <div className="flex items-center justify-between">
              <div className="flex gap-1">
                {Array(5)
                  .fill(null)
                  .map((_, i) => (
                    <img
                      key={i}
                      src="/img/Group 23.png"
                      alt="rating"
                      className="w-8 h-fit"
                    />
                  ))}
              </div>
              <p>Mar 20, 2023</p>
            </div>
            <div className="py-5">
              <h4 className="font-bold text-xl pb-5">Highly Recommended</h4>
              <p>
                Nikka was a very professional consultant, always ready to assist
                us each step of the way. I was reminded of everthing and I had
                to take with to the interview and also later to pick my passport
                and my son`s. Thanks once more, I certainly recommend the
                service.
              </p>
            </div>
            <div className="pt-10 font-bold">
              <p>Date of experience: February 28, 2023</p>
            </div>
          </div>
        </div>
        <div className="flex gap-8 justify-end">
          <img src="/img/arrow left 1_.png" alt="previous" />
          <img src="/img/arrow_right.png" alt="next" />
        </div>
      </div>
      <div>
        <img src="/img/Group.png" alt="location-icon" />
      </div>
    </div>
  );
}
