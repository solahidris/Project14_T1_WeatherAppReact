import React from "react";

const WorkFlow = () => {
  return (
    <div>
      <div className="text-left ml-10 text-white font-mono text-xs">
        <p>1)user enter city name</p>
        <p>2)then it displays</p>
        <p>3)data related to city name</p>
        <p>4)via external api</p>
        <p>-----------</p>
        <p>actual flow</p>
        <p className="line-through">1)create display label</p>
        <p className="line-through">1.5)display label - city name & temp</p>
        <p className="line-through">2)create city name input</p>
        <p>3)find weather external api</p>
        <p>4)fetch api</p>
        <p>5)connect display to api search key</p>
        <p className="my-2">-----------------------</p>
      </div>
    </div>
  );
};

export default WorkFlow;
