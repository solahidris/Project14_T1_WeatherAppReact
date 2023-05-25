import React, { useEffect, useState } from "react";
import "./App.css";
import AppHeader from "./components/AppHeader";
import WorkFlow from "./components/WorkFlow"; // For Self Flow

function App() {
  // Search City Input Data State
  const [searchCity, setSearchCity] = useState("");
  // Search City onChange Handler
  const searchCityHandler = (event) => {
    const searchCityUpdated = event.target.value;
    setSearchCity(searchCityUpdated);
  };

  // Access API Key from .env
  const apiKey = process.env.REACT_APP_API_KEY;
  // API URL & KEY
  const weatherAPI = `https://api.openweathermap.org/data/2.5/weather?q=${searchCity}&appid=${apiKey}`;
  // API Data useState
  const [apiData, setApiData] = useState(null);

  // API Fetch
  const fetchData = async () => {
    try {
      const response = await fetch(weatherAPI);
      const jsonData = await response.json();
      setApiData(jsonData);
      console.log(jsonData, "jsonDataFetched");

      if (!jsonData || jsonData.cod !== 200) {
        console.log("No match found");
      }
    } catch (error) {
      console.error("Error:", error);
    }
  };

  // data to show details (switch)
  const [getApiData, setGetApiData] = useState(false);
  // data handler true false
  const getApiDataHandler = (event) => {
    event.preventDefault();
    if (getApiData === false) {
      setGetApiData(true);
    } else {
      setGetApiData(false);
    }
  };

  useEffect(() => {
    if (getApiData && searchCity) {
      fetchData();
    }
  }, [getApiData, searchCity]);

  return (
    <div className="bg-zinc-800 h-screen">
      <AppHeader />
      {/* <WorkFlow /> */}

      <div className="mt-10">
        {/* Display Container for Search Result */}
        <div className="text-center text-white font-mono text-xs bg-gray-700 mx-20 rounded-lg mt-5 py-20 mb-5">
          {getApiData && apiData && apiData.cod === 200 && (
            <div>
              <div className="py-2 font-bold bg-gray-600 rounded-lg mx-10 mb-2">
                <p>Weather for {apiData.name}</p>
              </div>
              <p>Temperature: {((apiData.main.temp)-273.15).toFixed(2)}°C </p>
              <p>Weather: {apiData.weather[0].main}</p>
              <p>Humidity: {apiData.main.humidity}</p>
            </div>
          )}
          {getApiData && (!apiData || apiData.cod !== 200) && (
            <div>
              <p>No match found</p>
            </div>
          )}
        </div>

        {/* {CITY "text" Input Box} */}
        <div className="flex justify-center">
          <input
            type="text"
            onChange={searchCityHandler}
            placeholder="ex: London"
            className="rounded-md py-2 px-5"
          />
        </div>

        {/* Search City Button */}
        <div className="flex justify-center mt-5">
          <button
            onClick={getApiDataHandler}
            className="py-2 px-4 bg-zinc-300 rounded"
            disabled={!searchCity}
          >
            Search City
          </button>
        </div>

      </div>
    </div>
  );
}

export default App;
