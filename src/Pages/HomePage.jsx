import React from "react";
import NavBar from "../Components/Layouts/NavBar";
const HomePage = () => {
  return (
    <>
      <header className="bg-heroImg bg-repeat bg-cover w-full h-[100vh] pt-6">
        <NavBar />
        <div className="text-center pt-[20%] w-[1290] m-auto  text-white space-y-2">
          <h1 className="text-[4.375rem] font-bold">
            Turning Creative Ideas into Success
          </h1>
          <p className="text-[1.063rem] font-medium w-[1260px] m-auto">
            Consectetur adipiscing elit, sed do eiusmod tempor incididunt dolore
            magna aliqua quis nostrud exerc.
          </p>
          <button className="py-3 px-10  bg-[#05BED6] rounded-[30px] text-lg font-medium">
            Discover Now
          </button>
        </div>
      </header>

      <main className="container w-[80%] mx-auto py-10">
        <div>
          <div>
            <img src="/images/creativityAgency1.jpeg" alt="creativityAgency1" />
            <img src="/images/creativityAgency2.jpeg" alt="creativityAgency2" />
          </div>
          <div></div>
        </div>
      </main>
    </>
  );
};

export default HomePage;
