import { discount, robot } from "../assets";
import GetStarted from "./GetStarted";

const Hero = () => {
  return (
    <div className="">
      <div className="flex flex-col">
        <div className="flex bg-black py-[6px] px-4  rounded-[10px] mb-2 w-1/4">
          <img src={discount} alt="discount" className="[32px] h-[32px]" />

          <p className="text-white">
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
        <h1 className="">Payment Method.</h1>
        <p className="">
          Our team of experts uses a methodology to identify the credit cards
          most likely to fit your needs. We examine annual percentage rates,
          annual fees.
        </p>
      </div>
      <div className="flex-1 justify-end">
        <img src={robot} alt="billing" className="w-[80%] h-[80%] " />
      </div>
    </div>
  );
};

export default Hero;
