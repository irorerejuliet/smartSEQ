import React from 'react'

const DIgitalService = () => {
  return (
    <div className="flex flex-col-reverse md:flex-row items-center justify-center md:justify-between p-6 w-full ">
      <div className="mt-32 md:w-1/2 md:mt-0 w-screen px-6">
        <p className="text-sm  text-primary  font-semibold uppercase w-screen">Who We Are</p>
        <h2 className="text- text-primary font-bold font-quickSand w-[555px]">
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
      <div className=" relative mx-auto mt-10 md:mt-0">
        <img
          src="/images/digitalService-2.jpeg"
          alt="creativityAgency1"
          className="  rounded-xl shadow-md z-10 h-64"
        />
        <img
          src="/images/digitalService-1.jpeg"
          alt="creativitagency2"
          className="absolute top-[30%] right-24 h-64 rounded-xl shadow-lg z-20"
        />
        <img src="/images/star.png" alt="star" className='absolute left-12'/>
        <img src="/images/balls.png" alt="balls"  className='abso lute left-12'/>
      </div>


    </div>
  );
}

export default DIgitalService
