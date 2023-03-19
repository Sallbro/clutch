import React, { useEffect, useContext } from "react";
import Card from "./card";
import { UserContext } from "../context/context";

export default function Bids() {
  const { show, setShow } = useContext(UserContext);

  useEffect(() => {
    setTimeout(() => {
      setShow(false);
    }, 3000);
  }, [show]);

  return (
    <div>
      <div className="text-2xl flex justify-start font-bold px-5 mb-5  w-full">
        <p>All Bids</p>
      </div>
      <div className="flex justify-center ">
        <div className="grid md:grid-cols-3  px-5 grid-cols-1 gap-2 ">
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
        </div>
      </div>
      {show ? <Success /> : <></>}
    </div>
  );
}

const Success = () => {
  return (
    <div className="alert wi-3/4 alert-success shadow-lg max-w-screen-2xl fixed top-10 animate-bounce">
      <div>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="stroke-current flex-shrink-0 h-6 w-6"
          fill="none"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
          />
        </svg>
        <span>Your purchase has been confirmed!</span>
      </div>
    </div>
  );
};
