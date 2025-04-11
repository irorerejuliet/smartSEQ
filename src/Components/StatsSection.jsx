import React from 'react'
import { StatsData } from './Contant/StatsData'

const StatsSection = (stats) => {
  return (
    <div className=" mt-[20%]">
      <div className="max-w-6xl mx-auto flex justify-around items-center text-center gap-4 px-4 flex-wrap">
        {StatsData.map((stat, index) => (
          <div key={index}>
            <div className="relative">
              <p className="text-[11.188rem] font-bold text-white leading-none drop-shadow-md">
                {stat.number}
              </p>
              <p className="text-2xl font-semibold text-[#0f172a] absolute left-[35%] top-[47%]">
                {stat.label}
              </p>
            </div>
            {/* Divider, but not after the last item */}
            {index < stats.length - 1 && (
              <div className="w-px h-20 bg-slate-300 hidden md:block"></div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}

export default StatsSection
