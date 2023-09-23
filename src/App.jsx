import { logo, discount, robot } from "./assets";

function App() {
  return (
    <div className="">
      <nav className="bg-slate-800 w-full flex py-6 justify-between items-center navbar pl-10">
        <img src={logo} alt="hoobank" className="w-32 h-8]" />

        <ul className=" text-white list-none sm:flex hidden justify-end items-center flex-1 gap-10 px-40 cursor-pointer  ">
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

      <div className="bg-slate-800 flex md:flex-col sm:py-16 pl-12">
        <div className="flex-1  justify-center items-start flex-col  xl:px-0 sm:px-16 px-6">
          <div className="flex  flex-row items-center bg-black py-[6px] px-4 rounded-[10px] mb-2 w-3/4">
            <img src={discount} alt="discount" className="[32px] h-[32px]" />

            <p className="font-poppins font-normal text-dimWhite text-[18px] leading-[30.8px]  ml-2">
              <span className="text-white">20%</span> Discount for{" "}
              <span className="text-white">1 Month</span> Account
            </p>
          </div>

          <div className=" flex justify-between items-center w-full">
            <h1 className="flex-1 font-poppins font-semibold ss:text-[72px] text-[52px] text-white ss:leading-[100.8px] leading-[75px">
              The Next <br className="sm:block hidden" />
              <span className="text-gradient ">Generation</span>
            </h1>
            {/* <div className="ss:flex md:mr-4 mr-0">
            <GetStarted />
          </div> */}
            <h1 className=" flex-1 font-poppins font-semibold ss:text-[68px] text-[52px] text-white ss:leading-[100.8px] leading-[75px] w-full">
              Payment Method.
            </h1>
            <p className="flex-1">
              Our team of experts uses a methodology to identify the credit
              cards most likely to fit your needs. We examine annual percentage
              rates, annual fees.
            </p>
          </div>
        </div>
        {/* <div className="flex-1 flex justify-center items-center  md:my-0 my-10 relative ">
        <img src={robot} alt="billing" className="w-[80%] h-[80%] " />
      </div> */}
      </div>
    </div>
  );
}

export default App;
