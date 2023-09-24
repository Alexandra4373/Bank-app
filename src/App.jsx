import { logo, discount, robot, arrowUp, star, shield, send } from "./assets";

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
      {/* Hero */}
      <div className="bg-slate-800 flex   md:flex-row sm:flex-col sm:py-16 pl-12">
        <div className="flex-1  justify-center items-start flex-col  xl:px-0 sm:px-16 px-6">
          <div className="flex  flex-row items-center bg-black py-[6px] px-4 rounded-[10px] mb-2 w-3/4">
            <img src={discount} alt="discount" className="[32px] h-[32px]" />

            <p className="font-poppins font-normal text-white text-[16px] leading-[30.8px]  ml-2">
              <span className="text-white">20%</span> Discount for{" "}
              <span className="text-white">1 Month</span> Account
            </p>
          </div>

          <h1 className="flex-1 font-poppins font-bold sm:text-[72px] text-[56px] text-white sm:leading-[100.8px] leading-[75px] ">
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

      {/* Stats*/}
      <div className="bg-slate-800 py-20 flex sm:flex-wrap sm:items-center sm:justify-center">
        <div className="">
          <ul className=" flex justify-center items-center gap-10 font-poppins font-semibold text-white text-[28px] leading-[43.16px] ">
            <li>
              3800+
              {/* <hr className="h-0.1 rotate-90" /> */}
              <span className="font-poppins font-normal text-gradient ml-5 text-[18px]">
                USER ACTIVE
              </span>
            </li>
            <li>
              230+
              <span className="text-gradient ml-5 text-[18px]">
                TRUSTED BY COMPANY
              </span>
            </li>
            <li>
              $230M+
              <span className="text-gradient ml-5 text-[18px]">
                TRANSACTION
              </span>
            </li>
          </ul>
        </div>
      </div>
      {/* Business */}
      <div className=" bg-slate-800  ">
        <div className="container flex gap-10">
          <div className="flex-1">
            <h1 className="font-poppins text-[30px] leading-[30px] text-white">
              You do the business, <br className="sm:block hidden" /> we’ll
              handle the money.{" "}
            </h1>
            <p className=" font-poppins font-light text-white text-[12px] w-1/2 mt-5">
              With the right credit card, you can improve your financial life by
              building credit, earning rewards and saving money. But with
              hundreds of credit cards on the market.
            </p>
            <div className="">
              <button className="mt-5"> Get started</button>
            </div>
          </div>
          <div className="flex-1 ">
            <div className="flex flex-wrap">
              <div className="flex justify-center items-center border-white bg-secondary border-2 w-[45px] h-[45px] rounded-full">
                <img src={star} alt="" />
              </div>
              <p className="">Rewards</p>
              <p className="">
                The best credit cards offer some tantalizing combinations of
                promotions and prizes
              </p>
              <div className="">
                <div className="flex justify-center items-center border-white bg-secondary border-2 w-[45px] h-[45px] rounded-full">
                  <img src={shield} alt="" />
                </div>
                <p className="">100% Secured</p>
                <p className="">
                  We take proactive steps make sure your information and
                  transactions are secure.
                </p>
              </div>
            </div>
            <div className="">
              <div className="flex justify-center items-center border-white bg-secondary border-2 w-[45px] h-[45px] rounded-full">
                <img src={send} alt="" />
              </div>
              <p className="font-poppins">Balance Transfer</p>
              <p className="font-poppins">
                A balance transfer credit card can save you a lot of money in
                interest charges.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
    // </div>
  );
}

export default App;
