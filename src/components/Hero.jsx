import { discount, robot } from "../assets";
import GetStarted from "./GetStarted";

const Hero = () => {
  return (
    <div className="bg-slate-800 flex md:flex-row flex-col sm:py-16 py-6">
      <div className="flex-1  justify-center items-start flex-col  xl:px-0 sm:px-16 px-6">
        <div className="flex  flex-row items-center bg-black py-[6px] px-4 rounded-[10px] mb-2 w-3/4">
          <img src={discount} alt="discount" className="[32px] h-[32px]" />

          <p className="font-poppins font-normal text-dimWhite text-[18px] leading-[30.8px]  ml-2">
            <span className="text-white">20%</span> Discount for{" "}
            <span className="text-white">1 Month</span> Account
          </p>
        </div>

        <div className=" flex flex-row justify-between items-center w-full">
          <h1 className="flex-1 font-poppins font-semibold ss:text-[72px] text-[52px] text-white ss:leading-[100.8px] leading-[75px">
            The Next <br className="sm:block hidden" />
            <span className="text-gradient ">Generation</span>
          </h1>
          <div className="ss:flex hidden md:mr-4 mr-0">
            <GetStarted />
          </div>
          <h1 className="font-poppins font-semibold ss:text-[68px] text-[52px] text-white ss:leading-[100.8px] leading-[75px] w-full">
            Payment Method.
          </h1>
          <p className=" font-poppins font-normal text-dimWhite text-[18px] leading-[30.8px] max-w-[470px] mt-5">
            Our team of experts uses a methodology to identify the credit cards
            most likely to fit your needs. We examine annual percentage rates,
            annual fees.
          </p>
        </div>
      </div>
      <div className="flex-1 flex justify-center items-center  md:my-0 my-10 relative ">
        <img
          src={robot}
          alt="billing"
          className="w-[80%] h-[80%] relative z-[5]"
        />
      </div>
      <div className="ss:hidden flex justify-center items-center ">
        <GetStarted />
      </div>
    </div>
  );
};

export default Hero;
