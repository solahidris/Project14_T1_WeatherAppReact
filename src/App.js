import logo from "./logo.svg";
import "./App.css";

function App() {
  return (
    <div className="bg-zinc-800 h-screen flex justify-center text-white font-mono text-xs px-20 py-10 ">
      <img src={logo} className="App-logo" alt="logo" />
      <p className="mx-4">Weather App in React JS</p>
      {/* <p>-----------------------</p> */}
      <p>build a Weather app user can enter a city name and then it displays the data related to the Weather of the city through an external API.</p>
    </div>
  );
}

export default App;
