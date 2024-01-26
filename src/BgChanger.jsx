import { useState } from "react";
import ManShoeIcon from "./MenShoes.jsx";

function BgChanger() {
  const [shoe, setShoe] = useState("white");
  const [color, setColor] = useState("red");
  const redClick = () => {
    setShoe("blue");
    setColor("red");
    console.log(shoe);
  };
  const blueClick = () => {
    setShoe("red");
    setColor("blue");
    console.log(shoe);
  };
  const blackClick = () => {
    setColor("black");
    setShoe("red");
    console.log(shoe);
  };
  const orangeClick = () => {
    setColor("orange");
    setShoe("black");
    console.log(shoe);
  };
  const purpleClick = () => {
    setColor("purple");
    setShoe("white");
    console.log(shoe);
  };
  const roseClick = () => {
    setColor("rgb(159 18 57)");
    setShoe("green");
    console.log(shoe);
  };
  const yellowClick = () => {
    setColor("yellow");
    setShoe("black");
    console.log(shoe);
  };
  const greenClick = () => {
    setColor("green");
    setShoe("yellow");
    console.log(shoe);
  };
  const pinkClick = () => {
    setColor("pink");
    setShoe("white");
  };
  return (
    <div
      className="h-screen w-full duration-200  flex justify-center"
      style={{ backgroundColor: color }}
    >
      <div className="flex flex-col">
        <div className="text-white block font-bold text-3xl mt-10 text-center">
          <span className="block">Welcome to React Series BgChnager App</span>
        </div>
        <div className=" block text-white font-bold text-xl mt-10 text-center">
          <span>
            Active Color is <b className="uppercase">{color}</b>
          </span>
        </div>
        <div className="mt-5">
          <ManShoeIcon color={shoe} />
        </div>
      </div>
      <div className="bg-white fixed bottom-10 rounded-lg px-5 py-3 mx-10 flex flex-wrap gap-10 items-center">
        <button
          className="bg-red-500 text-white rounded-lg px-3 py-2"
          onClick={redClick}
        >
          Red
        </button>
        <button
          className="bg-blue-500 text-white rounded-lg px-3 py-2"
          onClick={blueClick}
        >
          Blue
        </button>
        <button
          className="bg-green-500 text-white rounded-lg px-3 py-2"
          onClick={greenClick}
        >
          Green
        </button>
        <button
          className="bg-yellow-500 text-white rounded-lg px-3 py-2"
          onClick={yellowClick}
        >
          Yellow
        </button>
        <button
          className="bg-orange-500 text-white rounded-lg px-3 py-2"
          onClick={orangeClick}
        >
          Orange
        </button>
        <button
          className="bg-black text-white rounded-lg px-3 py-2"
          onClick={blackClick}
        >
          Black
        </button>
        <button
          className="bg-pink-500 text-white rounded-lg px-3 py-2"
          onClick={pinkClick}
        >
          Pink
        </button>
        <button
          className="bg-rose-500 text-white rounded-lg px-3 py-2"
          onClick={roseClick}
        >
          Rose
        </button>
        <button
          className="bg-purple-500 text-white rounded-lg px-3 py-2"
          onClick={purpleClick}
        >
          Purple
        </button>
      </div>
    </div>
  );
}
export default BgChanger;
