import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

export default function Hero() {
  const [countdown, setCountdown] = useState({
    days: 27,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  useEffect(() => {
    const timer = setInterval(() => {
      setCountdown((prevCountdown) => {
        const { days, hours, minutes, seconds } = prevCountdown;

        if (days === 0 && hours === 0 && minutes === 0 && seconds === 0) {
          clearInterval(timer);
          return prevCountdown;
        }

        if (seconds > 0) {
          return { days, hours, minutes, seconds: seconds - 1 };
        } else if (minutes > 0) {
          return { days, hours, minutes: minutes - 1, seconds: 59 };
        } else if (hours > 0) {
          return { days, hours: hours - 1, minutes: 59, seconds: 59 };
        } else {
          return { days: days - 1, hours: 23, minutes: 59, seconds: 59 };
        }
      });
    }, 1000);

    return () => clearInterval(timer);
  }, []);
  return (
    <div className="relative">
      <img
        src="/img/Home.png"
        alt="heroimage"
        className="absolute w-full h-full object-cover z-[-1]"
      />
      <div className="min-h-screen flex gap-20 items-center justify-between px-20 pt-20">
        <div className="text-white flex flex-col gap-4">
          <h1 className="text-5xl flex flex-col font-bold">
            <span className="text-accent">Win the right to live</span>
            <span>in the USA!</span>
          </h1>
          <div className="flex border-l-4 gap-8 border-white p-2 px-5">
            <p>
              The official deadline is running, so hurry up and{" "}
              <span>apply here!</span>
            </p>
            <div className="flex flex-col items-center justify-center rounded-xl bg-secondary w-20 h-fit py-2">
              <p className="text-xl font-extrabold">{countdown.days}</p>
              <p className="text-[10px] uppercase font-extralight">Days</p>
            </div>
            <div className="flex flex-col items-center justify-center rounded-xl bg-secondary w-20 h-fit py-2">
              <p className="text-xl font-extrabold">{countdown.hours}</p>
              <p className="text-[10px] uppercase font-extralight">Hours</p>
            </div>
            <div className="flex flex-col items-center justify-center rounded-xl bg-secondary w-20 h-fit py-2">
              <p className="text-xl font-extrabold">{countdown.minutes}</p>
              <p className="text-[10px] uppercase font-extralight">Minutes</p>
            </div>
            <div className="flex flex-col items-center justify-center rounded-xl bg-secondary w-20 h-fit py-2">
              <p className="text-xl font-extrabold">{countdown.seconds}</p>
              <p className="text-[10px] uppercase font-extralight">Seconds</p>
            </div>
          </div>
          <div className="text-white/80 flex flex-col gap-y-2">
            <div className="flex gap-2 items-center">
              <img src="/img/🦆 icon _people_.png" alt="" />
              <p>
                50,000 people and their families will Live, Work and Study in
                USA.
              </p>
            </div>
            <div className="flex gap-2 items-center">
              <img src="/img/🦆 icon _medal star_.png" alt="" />
              <p className="text-sm">OFFICIAL USA Governmental program.</p>
            </div>
            <div className="flex gap-2 items-center">
              <img src="/img/🦆 icon _wallet check_.png" alt="" />
              <p className="text-sm">
                Your chance to LIVE, WORK & STUDY in USA.
              </p>
            </div>
            <div className="flex gap-2 items-center">
              <img src="/img/🦆 icon _clock_.png" alt="" />
              <p className="text-sm">Simple registration within 5 minutes.</p>
            </div>
            <div className="flex gap-2 items-center">
              <img src="/img/🦆 icon _message_.png" alt="" />
              <p className="text-sm">Personal support in every step.</p>
            </div>
            <div className="flex gap-2 items-center">
              <img src="/img/🦆 icon _lovely_.png" alt="" />
              <p className="text-sm">
                Double chance for married people to win the Green Card.
              </p>
            </div>
          </div>
        </div>
        <div className="bg-white rounded-3xl">
          <div className="flex flex-col m-8 gap-4">
            <Link to="/check" className="flex gap-2 items-center">
              <img src="/img/next_grean.png" alt="arrow-right" />
              <p className="text-accent font-bold">Check now for free!</p>
            </Link>
            <h2 className="text-4xl font-bold">Green card eligibility</h2>
            <form className="flex flex-col gap-4">
              <div className="flex gap-2">
                <input
                  type="text"
                  className="bg-gray-200 rounded-xl p-2 outline-none px-4"
                  placeholder="First Name"
                />
                <input
                  type="text"
                  className="bg-gray-200 rounded-xl p-2 outline-none px-4"
                  placeholder="Last Name"
                />
              </div>
              <div className="flex gap-2">
                <input
                  type="text"
                  className="bg-gray-200 rounded-xl p-2 outline-none px-4"
                  placeholder="Email Address"
                />
                <input
                  type="text"
                  className="bg-gray-200 rounded-xl p-2 outline-none px-4"
                  placeholder="Your email again"
                />
              </div>
              <select
                className="bg-gray-200 rounded-xl p-2 outline-none px-4"
                placeholder="Your country of birth"
              >
                <option value="">Your country of birth</option>
              </select>
              <select
                type="text"
                className="bg-gray-200 rounded-xl p-2 outline-none px-4"
                placeholder="Marital Status"
              >
                <option value="" style={{ color: "red" }}>
                  Marital Status
                </option>
              </select>
              <div className="flex items-center gap-2 outline-none">
                <input type="checkbox" />
                <p className="text-sm">
                  Yes, I finished high school OR I have qualifying training.
                </p>
              </div>
              <button className="bg-accent w-full mx-auto py-2 rounded-xl text-white">
                <Link to="/check">Continue</Link>
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
