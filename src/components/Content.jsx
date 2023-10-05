import React from "react";
import { CircularProgressBar } from "@tomickigrzegorz/react-circular-progress-bar";

const Content = () => {
  const focusManagement = {
    id: 1,
    percent: 59,
    colorSlice: "#00a1ff",
    colorCircle: "#95D4FE",
    fontColor: "#000",
    fontSize: "2.2rem",
    fontWeight: 600,
    size: 60,
    stroke: 15,
    strokeBottom: 0,
    fill: "#fff",
    unit: "",
    round: true,
    number: true,
    linearGradient: ["#0280D4"],
    styles: {
      borderRadius: "50%",
      boxShadow: "inset 0 0 25px 10px #a2caff",
    },
  };
  const timeManagement = {
    id: 2,
    percent: 89,
    colorSlice: "#02BC63",
    colorCircle: "#94E1BC",
    fontColor: "#000",
    fontSize: "2.2rem",
    fontWeight: 600,
    size: 60,
    stroke: 15,
    strokeBottom: 0,
    fill: "#fff",
    unit: "",
    round: true,
    number: true,
    linearGradient: ["#02BC63"],
    styles: {
      borderRadius: "50%",
      boxShadow: "inset 0 0 25px 10px #a2caff",
    },
  };
  const criticalThinking = {
    id: 3,
    percent: 39,
    colorSlice: "#EB5757",
    colorCircle: "#FFA9A9",
    fontColor: "#000",
    fontSize: "2.2rem",
    fontWeight: 600,
    size: 60,
    stroke: 15,
    strokeBottom: 0,
    fill: "#fff",
    unit: "",
    round: true,
    number: true,
    linearGradient: ["#EB5757"],
    styles: {
      borderRadius: "50%",
      boxShadow: "inset 0 0 25px 10px #a2caff",
    },
  };

  return (
    // Section - 1
    <div className="h-[90vh] w-[60%]">
      <div className="h-[44vh]">
        <p className="font-semibold px-6 pt-4 pb-1">Your Answer:</p>
        <p className="text-[0.92rem] pl-6 pr-12 leading-5">
          The most challenging software for me is specifically to be
          specifically Telluride is Figma. Yeah. Figma and Adobe Illustrator,
          which is, uh, they are quite{" "}
          <span className="bg-[#DCA11D] text-white px-[0.15rem]">
            nuance and
          </span>{" "}
          all the constraints and, uh spill small, small things that needs to be
          learned up. Yeah. This question, it almost took{" "}
          <span className="bg-[#E26161] text-white px-[0.15rem]">
            three to four
          </span>{" "}
          months to{" "}
          <span className="bg-[#1C98EB] text-white px-[0.15rem]">complete</span>{" "}
          a entire software of the Adobe Illustrator.
        </p>
        <p className="text-[0.92rem] pl-6 pr-12 leading-5 pt-1">
          The most challenging software for me is specifically to be
          specifically Telluride is Figma. Yeah. Figma and Adobe Illustrator,
          which is, uh, they are quite nuance and all the constraints and, uh
          spill small, small things that needs to be learned up. Yeah. This
          question, it almost took three to four months to complete a entire
          software of the Adobe Illustrator.
        </p>
        <p className="text-[0.92rem] pl-6 pr-12 leading-5 pt-1">
          The most challenging software for me is specifically to be
          specifically Telluride is Figma. Yeah. Figma and Adobe Illustrator,
          which is, uh, they are quite nuance and all the constraints and, uh
          spill small, small things that needs to be learned up.
        </p>
        <div className="flex items-center justify-center pl-28 py-2">
          <div className="flex items-center px-3">
            <div className="bg-[#E26161] w-8 h-3 text-sm mx-2"></div>
            <span className="text-sm font-medium">Grammatical error</span>
          </div>
          <div className="flex items-center px-3">
            <div className="bg-[#DCA11D] w-8 h-3 text-sm mx-2"></div>
            <span className="text-sm font-medium">Vocabulary error</span>
          </div>
          <div className="flex items-center px-3">
            <div className="bg-[#1C98EB] w-8 h-3 text-sm mx-2"></div>
            <span className="text-sm font-medium">Spelling error</span>
          </div>
        </div>
      </div>

      {/* Section - 2 */}
      <div className="border-t border-[#1C98EB] h-[48vh]">
        <p className="font-semibold px-6 pt-3 pb-2">Management Score:</p>
        <div className="flex px-6">
          <div className="mr-5">
            <CircularProgressBar {...focusManagement} />
            <span className="text-xs text-[#1C98EB] font-medium">
              Score: {focusManagement.percent}%
            </span>
          </div>
          <div>
            <h6 className="font-medium text-sm">Focus Management</h6>
            <p className="text-sm py-1">
              Focus Score: Focus score refers to the ability of an individual to
              concentrate and direct their attention towards a specific task or
              information.{" "}
            </p>
          </div>
        </div>
        <hr className="my-2" />
        <div className="flex px-6">
          <div className="mr-5">
            <CircularProgressBar {...timeManagement} />
            <p className="text-xs text-[#02BC63] font-medium">
              Score: {timeManagement.percent}%
            </p>
          </div>
          <div>
            <h6 className="font-medium text-sm">Time Management</h6>
            <p className="text-sm py-1">
              Time Management: Time management is the practice of planning,
              organizing, and allocating time to tasks and activities in a way
              that maximizes productivity and efficiency.{" "}
            </p>
          </div>
        </div>
        <hr className="my-2" />
        <div className="flex px-6">
          <div className="mr-5">
            <CircularProgressBar {...criticalThinking} />
            <span className="text-xs text-[#EB5757] font-medium">
              Score: {criticalThinking.percent}%
            </span>
          </div>
          <div>
            <h6 className="font-medium text-sm">Critical Thinking</h6>
            <p className="text-sm py-1">
              Critical thinking is the process of analyzing, evaluating, and
              interpreting information or situations in a logical and systematic
              manner.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Content;
