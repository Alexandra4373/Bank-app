import { logo, discount, robot, arrowUp } from "./assets";

function App() {
  return (
    <div className="font-poppins">
      <nav className="bg-slate-800 w-full flex py-6 justify-between items-center navbar pl-10">
        <img src={logo} alt="hoobank" className="w-32 h-8" />

        <ul className=" text-white list-none sm:flex hidden md:flex-row sm:flex-col justify-end items-center flex-1 gap-10 px-40 cursor-pointer ">
          <li>
            <a href="#Home">Home</a>
          </li>
          <li>
            <a href="#About Us">About Us</a>
          </li>
          <li>
            <a href="#Features">Features</a>
          </li>
          <li>
            <a href="#Solution">Solution</a>
          </li>
        </ul>
      </nav>

      <div className="bg-slate-800 flex   md:flex-row sm:flex-col sm:py-16 pl-12">
        <div className="flex-1  justify-center items-start flex-col  xl:px-0 sm:px-16 px-6">
          <div className="flex  flex-row items-center bg-black py-[6px] px-4 rounded-[10px] mb-2 w-3/4">
            <img src={discount} alt="discount" className="[32px] h-[32px]" />

            <p className="font-poppins font-normal text-white text-[16px] leading-[30.8px]  ml-2">
              <span className="text-white">20%</span> Discount for{" "}
              <span className="text-white">1 Month</span> Account
            </p>
          </div>

          <h1 className="flex-1 font-poppins font-bold ss:text-[72px] text-[56px] text-white ss:leading-[100.8px] leading-[75px">
            The Next <br className="sm:block hidden" />
            <span className="text-gradient ">Generation</span>
          </h1>

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

          <h1 className=" flex-1 font-poppins font-semibold ss:text-[68px] text-[52px] text-white ss:leading-[100.8px] leading-[75px] w-full">
            Payment Method.
          </h1>
          <p className="flex-1 w-2/4 text-[10px] mt-5 font-thin text-white">
            Our team of experts uses a methodology to identify the credit cards
            most likely to fit your needs. We examine annual percentage rates,
            annual fees.
          </p>
        </div>
        <div className="flex-1 justify-end ">
          <img src={robot} alt="billing" className="w-[80%] h-[80%] " />
        </div>
      </div>
    </div>
  );
}

export default App;
