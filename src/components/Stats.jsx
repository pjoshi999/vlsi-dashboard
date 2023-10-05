import React from "react";
import ChartPie from "@garvae/react-pie-chart";

const Stats = () => {
  const ref = React.useRef(null);

  const DATA = [
    {
      color: "#235784",
      order: 1,
      segmentId: "001",
      value: 75,
    },
    {
      color: "#40A8C4",
      order: 2,
      segmentId: "002",
      value: 10,
    },
    {
      color: "#BCDBDF",
      order: 3,
      segmentId: "003",
      value: 15,
    },
  ];

  return (
    <div className="h-[90vh] w-[40%]">
      <div className="relative bg-[#BAE2FD] py-4 flex justify-center items-center font-semibold text-xl">
        Results
        <div className="absolute flex justify-center items-center -bottom-5 -left-5 bg-gradient-to-r from-[#0280D4] to-[#0ADAB0] rounded-full h-10 w-10">
          <img src="/img/icons/arrow_forward.png" alt="" />
        </div>
      </div>
      <div className="py-6 px-8 border-l border-t border-[#1C98EB]">
        <h1 className="text-2xl font-semibold pb-3">Results</h1>
        <p className="font-semibold text-lg">Score: 74%</p>

        {/* PIE CHART */}
        <div className="flex justify-between px-5 py-3">
          <div
            ref={ref}
            // here we use parent container size to resize chart depends on it
            style={{
              width: "150px",
              height: "150px",
            }}
          >
            <ChartPie data={DATA} parentRef={ref} className="" />
          </div>
          <div>
            <div className="flex items-center">
              <div className="w-10 h-4 bg-[#235784] mx-3 my-2"></div>
              <span>Correct Answer</span>
            </div>
            <div className="flex items-center">
              <div className="w-10 h-4 bg-[#BCDBDF] mx-3 my-2"></div>
              <span>Not Answered</span>
            </div>
            <div className="flex items-center">
              <div className="w-10 h-4 bg-[#40A8C4] mx-3 my-2"></div>
              <span>Wrong</span>
            </div>
          </div>
        </div>

        <div>
          <div className="flex border px-16 py-2">
            <span className="font-medium">Analysis</span>
          </div>
          <div className="flex justify-between border px-16 py-2">
            <div className="flex justify-end">
              <span className="font-medium">Correct Answers:</span>
            </div>
            <span className="font-medium">9</span>
          </div>
          <div className="flex justify-between border px-16 py-2">
            <div className="flex justify-end">
              <span className="font-medium">Wrong Answers:</span>
            </div>
            <span className="font-medium">1</span>
          </div>
          <div className="flex justify-between border px-16 py-2">
            <div className="flex justify-end">
              <span className="font-medium">Unanswered:</span>
            </div>
            <span className="font-medium">1</span>
          </div>
          <div className="flex justify-between border px-16 py-2">
            <div className="flex justify-end">
              <span className="text-[#9C9C9C]">Skipped:</span>
            </div>
            <span className="font-medium">0</span>
          </div>
          <div className="flex justify-between border px-16 py-2">
            <div className="flex justify-end">
              <span className="text-[#9C9C9C]">Out of Time:</span>
            </div>
            <span className="font-medium">0</span>
          </div>
          <div className="flex justify-between border px-16 py-2">
            <div className="flex justify-end">
              <span className="font-medium">Time Used:</span>
            </div>
            <span className="font-medium">2:30</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Stats;
