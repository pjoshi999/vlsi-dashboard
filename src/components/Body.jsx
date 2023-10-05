import React from "react";
import Header from "./Header";
import Content from "./Content";
import Stats from "./Stats";

const Body = () => {
  return (
    <div className="w-[85%] overflow-y-hidden">
      <Header />
      <div className="flex">
        <Content />
        <Stats />
      </div>
    </div>
  );
};

export default Body;
