import Header from "./Header";
import { Link } from "react-router-dom";

function CheckStatus() {
  return (
    <div className="min-h-screen flex">
      <Header />
      <div className="bg-primary w-2/5 flex flex-col justify-center gap-12 text-white px-20">
        <h1 className="text-5xl font-bold">
          Electronic <span className="block text-accent">diversity visa</span>{" "}
          entry form
        </h1>
        <h2 className="text-3xl font-light">
          Here you will fill all your information to reach your dream.
        </h2>
        <div className="flex items-center gap-2">
          <img
            src="/img/🦆 icon _forward 10 seconds_.png"
            alt="time"
            className="w-5 h-fit"
          />
          <p>10 minutes to finish</p>
        </div>
        <p className="px-8 border-l-4 border-white p-2 text-sm">
          This is a full copy of the official DV Lottery application form. Use
          it for training only. You will need to apply on the official website
          www.dvlottery.state.gov when it opens to take part in the lottery.
        </p>
      </div>
      <div className="w-3/5 px-20 flex flex-col pt-72">
        <div className="flex flex-col items-center justify-center w-full">
          <p className="text-5xl font-light mb-8">Are you ready to begin?</p>

          <Link
            to="/start"
            className="w-3/5 bg-accent py-2 rounded-xl text-white text-center"
          >
            <button>Start!</button>
          </Link>
        </div>
        <div className="self-end justify-self-end mt-auto">
          <p className="text-primary text-sm pb-5">
            Copyright © 2016-2023 GovAssist, LLC All Rights Reserved
          </p>
        </div>
      </div>
    </div>
  );
}
export default CheckStatus;
