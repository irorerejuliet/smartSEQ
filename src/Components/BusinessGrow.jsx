import React from 'react'

const BusinessGrow = () => {
  return (
    <div className="grid md:grid-cols-2 grid-cols-1  items-center w-[1489px] mx-auto  gap-10  md:mt-0 mt-28">
      <div className="relative mr-10">
        <img
          src="/images/creativitAgency1.jpeg"
          alt="creativityAgency1"
          className="absolute -top-48 md:left-0 left-10  rounded-xl shadow-md z-10  md:w-[460px] w-[207px]"
        />
        <img
          src="/images/CreativitAgency2.jpeg"
          alt="creativitagency2"
          className="absolute md:top-[30%] -top-[120px] md:left-44 left-[9%] md:w-[460px] w-[207px]  rounded-xl shadow-lg z-20"
        />
      </div>
      <div className="md:mt-44 md:px-0 px-3 md:py-0 py-20">
        <p className="text-sm text-primary font-semibold">CREATIVE AGENCY</p>
        <h2 className="md:text-[3.375rem] text-[] text-primary font-bold font-quickSand md:w-[555px] w-[350px] ">
          WE HELP YOUR BUSINESS GROW
        </h2>
        <p className="text-secondary font-normal md:w-[534px] w-[350px]  py-6">
          Dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit
          aspernatur aut odit aut fugit, sed quia.
        </p>
        <div className="">
          <div className="flex items-center gap-6 ">
            <div>
              <img src="/images/creativDesign1.png" alt="creativiDesign" />
            </div>
            <div className="space-y-3">
              <h2 className="text-xl font-semibold text-primary">
                Creative design
              </h2>
              <p className="text-secondary font-normal">
                Natus error sit voluptatem accus antium doloremque.
              </p>
            </div>
          </div>
          <div className="flex items-center gap-6">
            <div className="w-[50px] mt-8">
              <img src="/images/creativeDesign2.png" alt="creativeDesign" />
            </div>
            <div className="space-y-3 pt-8">
              <h2 className="text-xl font-semibold text-primary">
                Endless possibilities
              </h2>
              <p className="text-secondary font-normal">
                Sit voluptatem accus antium doloremque laudan.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default BusinessGrow
