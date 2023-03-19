import React, { useState } from "react";
import Bids from "./tabs/bids";
import Your_Arts from "./tabs/Your_art";
import Arts from "./tabs/bought";

function Home() {
  const [tabs, setTabs] = useState(<Bids />);
  const [check, setCheck] = useState("Bids");
  return (
    <>
      <div className="tabs w-full flex max-w-screen-2xl mx-auto pt-5  justify-center ">
        <div
          className={`tab tab-bordered text-md ${
            check === "Bids" ? " tab-active" : ""
          }`}
          onClick={() => {
            setTabs(<Bids />);
            setCheck("Bids");
          }}
        >
          Bids
        </div>
        <div
          className={`tab tab-bordered text-md ${
            check === "Your" ? " tab-active" : ""
          }`}
          onClick={() => {
            setTabs(<Your_Arts />);
            setCheck("Your");
          }}
        >
          Your arts
        </div>
        <div
          className={`tab tab-bordered text-md ${
            check === "Arts" ? " tab-active" : ""
          }`}
          onClick={() => {
            setTabs(<Arts />);
            setCheck("Arts");
          }}
        >
          Bought arts
        </div>
      </div>
      <div className="mt-5 max-w-screen-2xl mx-auto ">{tabs}</div>
    </>
  );
}

export default Home;
