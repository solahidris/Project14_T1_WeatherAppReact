import React from "react";

const WeatherDisplay = ({ getApiData, apiData }) => {
  if (getApiData && apiData && apiData.cod === 200) {
    return (
      <div className="text-center text-white font-mono text-xs bg-gradient-to-b from-sky-200 to-sky-700 mx-20 lg:mx-[35%] rounded-lg mt-5 py-20 mb-5">
        <div>
          <div className="py-2 font-bold bg-sky-400 rounded-lg mx-10 mb-2">
            <p>Weather for {apiData.name}</p>
          </div>
          <p>Temperature: {((apiData.main.temp) - 273.15).toFixed(2)}°C</p>
          <p>Weather: {apiData.weather[0].main}</p>
          <p>Humidity: {apiData.main.humidity}</p>
        </div>
      </div>
    );
  }

  if (getApiData && (!apiData || apiData.cod !== 200)) {
    return (
      <div className="text-center text-white font-mono text-xs bg-gray-700 mx-20 rounded-lg mt-5 py-20 mb-5">
        <div>
          <p>No match found</p>
        </div>
      </div>
    );
  }

  return null;
};

export default WeatherDisplay;
