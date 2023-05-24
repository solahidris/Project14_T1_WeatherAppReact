import React from "react";
import "./App.css";
import AppHeader from "./components/AppHeader";
import WorkFlow from "./components/WorkFlow";

function App() {

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
      </div> 

    </div>
  )
};

export default App;