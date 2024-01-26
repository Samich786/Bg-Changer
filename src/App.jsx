import { useState } from "react";
import "./App.css";
import ReactSVG from "./assets/react.svg";

function App() {
  const [count, setCount] = useState(15);
  function hnadleClick() {
    setCount(count + 1);
  }
  function hnadleRemove() {
    if (count > 1) {
      setCount(count - 1);
    }
  }

  return (
    <>
      {/* <div className="logo-spin">
        <img className="logo" src={ReactSVG} alt="" />
      </div>
      <h1>Vite + React</h1>
      <p className="text-blue-500 font-bold text-lg">Count:{count}</p>
      <div className="flex gap-5 mt-5">
        <button
          className="bg-green-700 text-white border border-green-600"
          onClick={hnadleClick}
        >
          Add Count
        </button>
        <button
          className="bg-red-700 text-white border border-red-600"
          onClick={hnadleRemove}
        >
          remove Count
        </button>
      </div> */}
    </>
  );
}

export default App;
