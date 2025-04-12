

const CreativeSolution = () => {
  return (
    <div className="md:flex items-center flex-col md:flex-row justify-center gap-8 my-28 md:px-0 px-2">
      <div>
        <p className="text-sm text-primary font-semibold">CREATIVE SOLUTION</p>
        <h2 className="md:text-[3.375rem] text-[1.625rem] text-primary font-bold font-quickSand md:w-[555px]">
          We make unique & memorable brands
        </h2>
      </div>
      <div className="text-secondary font-normal font-dmSans md:w-[534px] w-[350px] py-6 space-y-4">
        <p>
          At vero eos et accusamus et iusto odio dignissimos ducimus qui
          blanditiis praesentium voluptatum deleniti atque lorem in voluptate
          velit iusto odio dignissimos duci esse.
        </p>
        <p>
          At vero eos et accusamus et iusto odio dignissimos ducimus qui
          blanditiis praesentium voluptatum deleniti atque lorem in voluptate
          velit iusto odio dignissimos duci esse.
        </p>
        <div className="relative h-fit w-fit md:px-0 px-2">
          <p className="text-lg text-primary font-semibold relative ">
            Read More
            <span className="absolute -bottom-2 -left-2 h-1 -right-2 origin-left rounded-full transition-transform duration-300 ease-out bg-primary"></span>
          </p>
        </div>
      </div>
    </div>
  );
}

export default CreativeSolution
