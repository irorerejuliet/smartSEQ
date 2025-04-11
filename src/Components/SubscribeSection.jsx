import { PiTelegramLogoBold } from "react-icons/pi";

const SubscribeSection = () => {
  return (
    <div className="text-white flex flex-col md:flex-row  justify-center gap-12 my-28 px-8">
   
        <p className="text-xl md:text-3xl md:w-1/2 text-primary font-semibold">
          Subscribe for the exclusive updates!
        </p>
   
      <div>
        <div className="flex items-center gap-3 border-red-400 border justify-center flex-row w-full ">
          
           <input
          type="text"
          placeholder="Enter Your Email Address"
          className="py-3 px-6  rounded-[40px] text-left w-full"
        />
        <button className="bg-[#4703FF]  font-medium py-3 px-6 rounded-[30px] md:ml-3 flex-row items-center flex gap-2  md:mt-0 ">
          <PiTelegramLogoBold />
          Subcribe
        </button>
       </div>
        <div className="flex items-center gap-2 py-8">
          <input type="checkbox" className="border-none outline-none" />
          <p className="text-secondary text-sm font-medium">
            I agree to the Privacy Policy.
          </p>
        </div>
      </div>
    </div>
  );
};

export default SubscribeSection;
