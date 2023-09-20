import { Navbar, Hero } from "./components";

function App() {
  return (
    <>
      <div className="bg-primary w-full overflow-hidden">
        <div className="">
          <Navbar />
        </div>

        <div className="bg-primary flex justify-center items-start">
          <div className="">
            <Hero />
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
