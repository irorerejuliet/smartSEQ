import React from 'react'

const DIgitalService = () => {
  return (
    <div className="grid md:grid-cols-2 grid-cols-1 items-center  p-6  w-[1489px] mx-auto my-44">
      <div className="mt-32 md:w-1/2 md:mt-0 w-screen px-6">
        <p className="text-sm  text-primary  font-semibold uppercase w-screen">
          Who We Are
        </p>
        <h2 className="md:text-[3.375rem] text-[1.625rem] text-primary font-bold  font-quickSand md:w-[534px] w-[350px]">
          We provide best digital services
        </h2>
        <p className="text-secondary font-normal  py-6">
          Dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit
          aspernatur aut odit aut fugit, sed quia.
        </p>
        <button className="py-3 px-10  bg-[#05BED6] rounded-[30px] text-lg font-medium text-white">
          Discover Now
        </button>
      </div>
      <div className="relative mr-10 mb-32 md:mt-0 mt-56">
        <img
          src="/images/digitalService-2.jpeg"
          alt="creativityAgency1"
          className="absolute -top-48 md:left-0 left-10  rounded-xl shadow-md z-10  md:w-[400px] w-[207px]"
        />
        <img
          src="/images/digitalService-1.jpeg"
          alt="creativitagency2"
          className="absolute md:top-[30%] -top-[120px] md:left-44 left-[9%] md:w-[400px] w-[207px]  rounded-xl shadow-lg z-20"
        />
      </div>
    </div>
  );
}

export default DIgitalService
