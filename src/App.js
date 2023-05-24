import React from "react";
import "./App.css";
import AppHeader from "./components/AppHeader";
import WorkFlow from "./components/WorkFlow";

function App() {
  return (
    <div className="bg-zinc-800 h-screen">
      <AppHeader />
      <WorkFlow />

      <div>
        <p>test dev1</p>
      </div>
    </div>
  );
}

export default App;
