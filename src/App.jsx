import {
  logo,
  discount,
  robot,
  arrowUp,
  star,
  shield,
  send,
  bill,
  apple,
  google,
  card,
  airbnb,
  coinbase,
  binance,
  dropbox,
  instagram,
  facebook,
  twitter,
  linkedin,
} from "./assets";

function App() {
  return (
    <div className="font-poppins">
      <nav className="bg-slate-800 w-full flex py-6 justify-between items-center pl-10 ">
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
      <div className="bg-slate-800 py-20 flex  md:flex-row sm:flex-col ">
        <div className="container flex-1 flex-col w-full ">
          <div className="flex flex-row items-center bg-black py-[6px] px-4 rounded-[10px] mb-2 w-3/4">
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
            <div className="flex flex-col justify-center items-center w-[100%] h-[100%] rounded-full text-center">
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
        <div className="flex-1  ">
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
      <div className=" bg-slate-800 py-20 ">
        <div className="container flex gap-10 ">
          <div className="flex-1">
            <h1 className="font-poppins text-[38px] font-medium leading-[30px] text-white">
              You do the business, <br className="sm:block hidden" />{" "}
              <h1 className="mt-5">we’ll handle the money. </h1>
            </h1>
            <p className=" font-poppins font-thin text-white text-[12px] w-2/3 mt-10 tracking-wider">
              With the right credit card, you can improve your financial life by
              building credit, earning rewards and saving money. But with
              hundreds of credit cards on the market.
            </p>
            <div className="">
              <button className="mt-10"> Get started</button>
            </div>
          </div>
          <div className="flex-1 text-white  w-2/4 h-2/4 ">
            <div className="flex flex-wrap">
              <div className="flex border-white bg-secondary border-2 w-[45px] h-[45px] rounded-full">
                <img src={star} alt="" />
              </div>
              <p className="text-start ">Rewards</p>
              <p className="font-extralight text-[14px] text-start">
                The best credit cards offer some tantalizing combinations of
                promotions and prizes
              </p>
              <div className="bg-slate-600 border-2 rounded-3xl mt-5">
                <div className="flex justify-center items-center border-white bg-secondary border-2 w-[45px] h-[45px] rounded-full">
                  <img src={shield} alt="" />
                </div>
                <p className="">100% Secured</p>
                <p className="font-poppins font-extralight text-[14px]">
                  We take proactive steps make sure your information and
                  transactions are secure.
                </p>
              </div>
            </div>
            <div className="mt-10">
              <div className="flex justify-center items-center border-white bg-secondary border-2 w-[45px] h-[45px] rounded-full">
                <img src={send} alt="" />
              </div>
              <p className="font-poppins ">Balance Transfer</p>
              <p className="font-poppins font-extralight text-[14px]">
                A balance transfer credit card can save you a lot of money in
                interest charges.
              </p>
            </div>
          </div>
        </div>
      </div>
      {/* Bill section */}
      <div className="bg-slate-800 py-20">
        <div className="container flex gap-20">
          <div className="w-2/4 h-2/4">
            <img src={bill} alt="" />
          </div>
          <div className="flex-1 text-white ">
            <h1 className="font-medium text-white text-[38px]">
              Easily control your
              <br className="sm:block hidden" />{" "}
              <h1 className="mt-3"> billing & invoicing.</h1>
            </h1>

            <p className="font-extralight text-[11px] w-3/5 tracking-wider mt-10">
              Elit enim sed massa etiam. Mauris eu adipiscing ultrices ametodio
              aenean neque. Fusce ipsum orci rhoncus aliporttitor integer platea
              placerat.
            </p>

            <div className="flex mt-20 ">
              <img src={apple} alt="" />
              <img src={google} alt="" className="px-3" />
            </div>
          </div>
        </div>
      </div>
      {/* Card section */}
      <div className="bg-slate-800 py-20">
        <div className="container flex gap-10">
          <div className="flex-1 mt-5">
            <h1 className="font-poppins text-[38px] font-medium leading-[30px] text-white">
              Find a better card deal <br className="sm:block hidden" />{" "}
              <h1 className="mt-5">in few easy steps. </h1>
            </h1>
            <p className=" font-poppins font-thin text-white text-[12px] w-2/3 mt-10 tracking-wider">
              Arcu tortor, purus in mattis at sed integer faucibus. Aliquet quis
              aliquet eget mauris tortor.ç Aliquet ultrices ac, ametau.
            </p>
            <div className="">
              <button className="mt-10"> Get started</button>
            </div>
          </div>

          <div className="flex-1 w-2/5 h-1/4 ">
            <img src={card} />
          </div>
        </div>
      </div>

      <div className="bg-slate-800 py-20">
        <div className="container flex flex-col justify-center items-center ">
          <div className="gap-10 flex sm:flex-wrap sm:items-center sm:justify-center">
            <div className="">
              <img src={airbnb} alt="" />
            </div>
            <div className="">
              <img src={binance} alt="" />
            </div>
            <div className="">
              <img src={coinbase} alt="" />
            </div>
            <div className="">
              <img src={dropbox} alt="" />
            </div>
          </div>
        </div>
      </div>

      <div className=" bg-slate-800 py-20 ">
        <div className="container flex gap-10 justify-center items-center">
          <div className="flex-1 justify-center items-center">
            <h1 className="font-poppins text-[38px] font-medium leading-[30px] text-white">
              Let’s try our service now!
            </h1>
            <p className="font-poppins font-thin text-white text-[12px] w-2/3 mt-10 tracking-wider">
              Everything you need to accept card payments and grow your business
              anywhere on the planet.
            </p>{" "}
          </div>

          <div className="flex-1">
            <button className=""> Get started</button>
          </div>
        </div>
      </div>
      {/* footer */}
      <div className="bg-black py-20">
        {/* top  footer */}
        <div className="flex container flex-wrap md:flex-row sm:flex-col">
          <div className="flex-1 sm:mb-5">
            <img src={logo} alt="" />
            <p className="text-white">
              A new way to make the payments easy, reliable and secure.
            </p>
          </div>

          <div className="flex-1 sm:mb-5">
            <p className="mb-4">Useful Links</p>
            <ul className="text-white flex flex-col gap-2">
              <li>Content </li>
              <li>How it works </li>
              <li>Create </li>
              <li>Explore </li>
              <li>Terms&Services </li>
            </ul>
          </div>

          <div className="flex-1 sm:mb-5">
            <p className="mb-4">Community</p>
            <ul className="text-white flex flex-col gap-2">
              <li>Help Center </li>
              <li>Partners</li>
              <li>Suggestions </li>
              <li>Blog </li>
              <li>Newsletters </li>
            </ul>
          </div>

          <div className="flex-1 sm:mb-5">
            <p className="mb-4">Partner</p>
            <ul className="text-white flex flex-col gap-2">
              <li>Our Partner</li>
              <li>Become a Partner</li>
            </ul>
          </div>
        </div>

        <hr className="my-8" />

        <div className="" />
        {/* Top footer */}
        <div className="flex sm:flex-wrap justify-between mb-5">
          <div className="">
            <p className="flex text-white sm:flex-col sm:mb-5 gap-5">
              <p> Copyright &copy; 2021 Hoobank. All rights reserved.</p>
            </p>
          </div>

          {/* Social icons */}
          <div className="flex gap-5">
            <div className="">
              <img src={instagram} />
            </div>
            <div className="">
              <img src={facebook} />
            </div>
            <div className="">
              <img src={twitter} />
            </div>
            <div className="">
              <img src={linkedin} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
