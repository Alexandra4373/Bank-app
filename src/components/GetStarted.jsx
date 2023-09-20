import { arrowUp } from "../assets";

const GetStarted = () => {
  return (
    <div className="w-36  h-36 rounded-full bg-blue-gradient p-[2px] cursor-pointer">
      <p className="font-poppins font-medium text-[18px] leading-[23.4px]">
        <span className="text-gradient">Get</span>
      </p>
      <img
        src={arrowUp}
        alt="arrow-up"
        className="w-[23px] h-[23px] object-contain"
      />

      <p className="font-poppins font-medium text-[18px] leading-[23.4px]">
        <span className="text-gradient">Started</span>
      </p>
    </div>
  );
};

export default GetStarted;
