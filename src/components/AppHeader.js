import logo from "../logo.svg";
import React from "react";

const AppHeader = () => {
  return (
    <div className="text-center text-white font-mono text-xs px-20 pt-10">
      <div className="flex justify-center">
        <img src={logo} className="animate-bounce h-20" alt="logo" />
      </div>
      <p className="mb-2">Weather App in React JS</p>
      <p>
        build a Weather app user can enter a city name and then it displays the
        data related to the Weather of the city through an external API.
      </p>
      <p className="my-2">-----------------------</p>
    </div>
  );
};

export default AppHeader;
