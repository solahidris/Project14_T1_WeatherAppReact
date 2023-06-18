import React, { useEffect, useState } from "react";
import "./App.css";
import AppHeader from "./components/AppHeader";
// eslint-disable-next-line
import WorkFlow from "./components/WorkFlow"; // For Self Flow
import SearchCityButton from "./components/SearchCityButton";
import CityInputBox from "./components/CityInputBox";
import WeatherDisplay from "./components/WeatherDisplay";

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
      // eslint-disable-next-line
      fetchData();
    }
    // eslint-disable-next-line
  }, [getApiData, searchCity]);

  return (
    <div className="bg-gradient-to-b from-sky-300 to-sky-950 min-h-[100vh] pb-20">
      <AppHeader />
      {/* <WorkFlow /> */}

      <div className="mt-10">
        <WeatherDisplay getApiData={getApiData} apiData={apiData} />
        <CityInputBox onChange={searchCityHandler} />
        <SearchCityButton onClick={getApiDataHandler} disabled={!searchCity} />
      </div>
    </div>
  );
}

export default App;
