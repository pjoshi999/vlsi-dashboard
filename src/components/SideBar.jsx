import React from "react";

const SideBar = () => {
  return (
    <div className="flex flex-col justify-between mb-12 rounded-e-3xl shadow-md shadow-gray-400 w-[15%]">
      <div className="flex flex-col">
        <div className="">
          <div className="px-6 pt-5 h-[10%] relative">
            {/* Logo */}
            <img src="/img/logo.png" alt="" className="h-10" />
            <span className="flex flex-col justify-center items-center w-10 h-10 bg-[#0280D4] rounded-full absolute top-4 -right-5">
              <span className="bg-white h-1 w-[55%] my-[0.15rem] rounded-full"></span>
              <span className="bg-white h-1 w-[55%] my-[0.15rem] rounded-full"></span>
            </span>
          </div>
          <div>
            {/* Menu Options */}
            <ul className="pt-4">
              <li className="flex items-center px-3 py-1 rounded-full">
                <div className="flex items-center justify-center rounded-full py-2 pr-3 pl-1 cursor-pointer">
                  <img
                    src="/img/icons/dashboard.png"
                    alt=""
                    className="px-2 h-4"
                  />
                  <span className="">Dashboard</span>
                </div>
              </li>
              <li className="flex items-center px-3 py-1 rounded-full">
                <div className="flex items-center justify-center rounded-full py-2 pr-3 pl-1 cursor-pointer">
                  <img
                    src="/img/icons/1-on-1.png"
                    alt=""
                    className="px-2 h-4"
                  />
                  <span className="">1 on 1 mentor</span>
                </div>
              </li>
              <li className="flex items-center px-3 py-1 rounded-full">
                <div className="flex items-center justify-center rounded-full py-2 pr-3 pl-1 cursor-pointer">
                  <img src="/img/icons/mock.png" alt="" className="px-2 h-4" />
                  <span className="">Mock Interviews</span>
                </div>
              </li>
              <li className="flex items-center px-3 py-1 rounded-full">
                <div className="flex items-center justify-center rounded-full py-2 pr-3 pl-1 cursor-pointer">
                  <img
                    src="/img/icons/practice.png"
                    alt=""
                    className="px-2 h-4"
                  />
                  <span className="">Practice Test</span>
                </div>
              </li>
              <li className="flex items-center px-3 py-1 rounded-full">
                <div className="flex items-center justify-center rounded-full py-2 pr-3 pl-1 cursor-pointer">
                  <img
                    src="/img/icons/readme.png"
                    alt=""
                    className="px-2 h-4"
                  />
                  <span className="">Communication</span>
                </div>
              </li>
              <li className="flex items-center px-3 py-1 rounded-full">
                <div className="flex items-center justify-center rounded-full py-2 pr-3 pl-1 cursor-pointer active">
                  <img
                    src="/img/icons/reports.png"
                    alt=""
                    className="px-2 h-4"
                  />
                  <span className="">Reports</span>
                </div>
              </li>
              <li className="flex items-center px-3 py-1 rounded-full">
                <div className="flex items-center justify-center rounded-full py-2 pr-3 pl-1 cursor-pointer">
                  <img
                    src="/img/icons/premium.png"
                    alt=""
                    className="px-2 h-4"
                  />
                  <span className="">Premium</span>
                </div>
              </li>
            </ul>
          </div>
          <hr className="my-2 border" />
          <div>
            <ul>
              <li className="flex items-center px-3 py-1 rounded-full">
                <div className="flex items-center justify-center rounded-full py-2 pr-3 pl-1 cursor-pointer">
                  <img
                    src="/img/icons/resume.png"
                    alt=""
                    className="px-3 h-4"
                  />
                  <span className=" text-[#A8A8A8]">Resume</span>
                </div>
              </li>
              <li className="flex items-center px-3 py-1 rounded-full">
                <div className="flex items-center justify-center rounded-full py-2 pr-3 pl-1 cursor-pointer">
                  <img
                    src="/img/icons/courses.png"
                    alt=""
                    className="px-[0.55rem] h-3"
                  />
                  <span className=" text-[#A8A8A8]">Courses</span>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Profile */}
      <div className="flex items-center justify-between px-5 pb-5">
        <div className="flex items-center">
          <div className="bg-[#0280D4] w-10 h-10 flex justify-center items-center rounded-full">
            <img
              src="/img/icons/User.png"
              alt=""
              className="h-5 cursor-pointer"
            />
          </div>
          <div className="px-2">
            <p className="bg-gradient-to-r from-[#0280D4] to-[#0ADAB0] bg-clip-text	text-transparent font-semibold text-sm">
              Josephine
            </p>
            <p className="bg-gradient-to-r from-[#0280D4] to-[#0ADAB0] bg-clip-text	text-transparent font-semibold text-sm">
              Langford
            </p>
          </div>
        </div>
        <div>
          <img
            src="/img/icons/logout.png"
            alt=""
            className="h-6 cursor-pointer"
          />
        </div>
      </div>
    </div>
  );
};

export default SideBar;
