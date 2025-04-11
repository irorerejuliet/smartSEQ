import React from 'react';
import CountUp from 'react-countup';
import { useInView } from 'react-intersection-observer';
import { StatsData } from './Contant/StatsData';

const StatsSection = () => {
  return (
    <div className="mt-[20%]">
      <div className="max-w-6xl mx-auto flex justify-around items-center text-center gap-4 px-4 flex-wrap">
        {StatsData.map((stat, index) => {
          const { ref, inView } = useInView({
            triggerOnce: false,
            threshold: 0.5,
          });

          return (
            <div key={index} ref={ref}>
              <div className="relative">
                <p className="text-[11.188rem] font-bold text-white leading-none drop-shadow-md">
                  {inView ? <CountUp start={0} end={parseInt(stat.number)} duration={2} /> : '0'}
                </p>
                <p className="text-2xl font-semibold text-[#0f172a] absolute left-[35%] top-[47%]">
                  {stat.label}
                </p>
              </div>
              {/* Divider, but not after the last item */}
              {index < StatsData.length - 1 && (
                <div className="w-px h-20 bg-slate-300 hidden md:block"></div>
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default StatsSection;
