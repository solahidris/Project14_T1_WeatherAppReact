import React, { useEffect } from "react";
import "./App.css";
import AppHeader from "./components/AppHeader";
import WorkFlow from "./components/WorkFlow";
import { useState } from "react";

function App() {

  // API URL & KEY
  const weatherAPI = "http://api.openweathermap.org/data/2.5/forecast?id=524901&appid=00141ae9f28c569a9dfeb43dae67a990";

  // API Data useState
  const [apiData, setApiData] = useState(null);

  // API Fetch
  const fetchData = async () => {
    try {
    const response = await fetch(weatherAPI);
    const jsonData = await response.json();
    setApiData(jsonData);
    console.log(jsonData);} catch (error) {
      console.error("Error: ", error);
    }
  };

  // Render API Fetch on Load
  useEffect(()=>{
    fetchData();
  },[]);


  return (
    <div className="bg-zinc-800 h-screen">
      <AppHeader />
      <WorkFlow />

      <div className="mt-5">

        {/* {Display API Box} */}
        <div className="flex justify-center">
          <label className="bg-zinc-700 rounded px-3 py-2 border-2 border-zinc-800 ">display api</label>
        </div>
        
        {/* {Display CITY & TEMP text below} */}
        <div className="flex justify-center text-white font-mono text-xs mt-2 mb-10">
         <p>display city</p><p>display temp here</p>
        </div>

        {/* {CITY "text" Input Box} */}
        <div className="flex justify-center">
          <input type="text" placeholder="city input here" />
        </div>

        <div>
          
          {/* <p>{data.city.name}</p> */}
          {/* <p>{data.city.country}</p> */}
        </div>

        <div className="ml-10 mt-10 text-white">
          <p>https://openweathermap.org/history-bulk</p>
          <p>https://openweathermap.org/weather-dashboard</p>
          <p>https://agromonitoring.com/dashboard</p>
          <p>---</p>
          <p>Your API key is 00141ae9f28c569a9dfeb43dae67a990</p>
          <p>endpoint api.openweathermap.org for your API calls</p>
          <p>- Example of API call:
api.openweathermap.org/data/2.5/weather?q=London,uk&APPID=00141ae9f28c569a9dfeb43dae67a990</p>
          <p>- API documentation https://openweathermap.org/api</p>
          <p>- Details of your plan https://openweathermap.org/price</p>
        </div>

      </div> 

    </div>
  )
};

export default App;