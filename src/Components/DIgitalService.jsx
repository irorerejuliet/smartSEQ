import React from 'react'

const DIgitalService = () => {
  return (
    <div className="flex items-center justify-center gap-28">
      <div className="mt-44">
        <p className="text-sm text-primary font-semibold">Who We Are</p>
        <h2 className="text-[3.375rem] text-primary font-bold font-quickSand w-[555px]">
          We provide best digital services
        </h2>
        <p className="text-secondary font-normal w-[534px] py-6">
          Dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit
          aspernatur aut odit aut fugit, sed quia.
        </p>
        <button className="py-3 px-10  bg-[#05BED6] rounded-[30px] text-lg font-medium text-white">
          Discover Now
        </button>
      </div>
      <div class="relative w-[459px] h-[400px]">
        <img
          src="/images/digitalService-2.jpeg"
          alt="creativityAgency1"
          className="absolute top-0 left-[50%]  rounded-xl shadow-md z-10 "
        />
        <img
          src="/images/digitalService-1.jpeg"
          alt="creativitagency2"
          className="absolute top-[30%] left-10  rounded-xl shadow-lg z-20"
        />
        <img src="/images/star.png" alt="star" />
        <img src="/images/balls.png" alt="balls"  className=''/>
      </div>
    </div>
  );
}

export default DIgitalService
