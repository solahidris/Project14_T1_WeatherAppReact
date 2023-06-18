import logo from "../assets/logo.svg";
import weatherapp from "../assets/weatherapp.jpeg";
import React from "react";

const AppHeader = () => {
  return (
    <div className="text-center text-white font-mono text-xs px-10 lg:px-[30%] pt-10">
      <div className="flex justify-center"> 
        <img src={weatherapp} className="h-[15rem] rounded-2xl mb-8 border border-sky-700 border-[5px]" alt="logo" />
      </div>
      <div className="flex justify-center pb-4">
        <p className="mb-2 text-2xl font-bold uppercase">Weather App in React JS</p>
        <img src={logo} className="animate-bounce h-[20px] ml-[0.2rem]" alt="logo" />
      </div>
      <p className="px-10 pb-4"> 
        build a Weather app user can enter a city name and then it displays the
        data related to the Weather of the city through an external API.
      </p>
      <p className="my-2">-----------------------</p>
    </div>
  );
};

export default AppHeader;
