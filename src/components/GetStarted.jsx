import { arrowUp } from "../assets";

const GetStarted = () => {
  return (
    <div className="flex justify-center items-center border-blue-gradient border-2 w-[100px] h-[100px] rounded-full bg-blue p-[2px] cursor-pointer">
      <div className="flex flex-col justify-center items-center bg-primary w-[100%] h-[100%] rounded-full text-center">
        <div className="flex items-center">
          <p className="font-poppins font-medium text-[17px] leading-[23.4px] text-gradient">
            Get
          </p>
          <img
            src={arrowUp}
            alt="arrow-up"
            className="w-[23px] h-[23px] object-contain mx-1"
          />
        </div>
        <p className="font-poppins font-medium text-[17px] leading-[23.4px] text-gradient">
          Started
        </p>
      </div>
    </div>
  );
};

export default GetStarted;
