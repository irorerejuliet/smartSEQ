import { PiTelegramLogoBold } from "react-icons/pi";

const SubscribeSection = () => {
  return (
    <div className="text-white flex justify-center gap-12 my-28">
      <div className="w-[415px]">
        <p className="text-5xl text-primary font-semibold">
          Subscribe for the exclusive updates!
        </p>
      </div>
      <div>
        <input
          type="text"
          placeholder="Enter Your Email Address"
          className="py-4 px-6 rounded-[40px] text-left w-[564px]"
        />
        <button className="bg-[#4703FF] font-medium py-3 px-10 rounded-[30px] ml-3 flex-row-reverse">
          <PiTelegramLogoBold />
          Subcribe
        </button>
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
