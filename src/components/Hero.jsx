import React from "react";
import { discount, robot } from "../assets";
import GetStarted from "./GetStarted";

const Hero = () => {
  return (
    <div className="">
      <div className="">
        <img src={discount} alt="discount" className="" />

        <p className="">
          <span className="">20%</span> Discount for{" "}
          <span className="">1 Month</span> Account
        </p>
      </div>

      <div className="">
        <h1 className="">
          The Next <br className="" />
          <span className="">Generation</span>
        </h1>
        <div className="ss:flex hidden md:mr-4 mr-0">
          <GetStarted />
        </div>
      </div>
    </div>
  );
};

export default Hero;
