import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import BgChanger from "./BgChanger.jsx";

// function MyApp() {
//   return (
//     <div>
//       <h1>My Fucntion</h1>
//     </div>
//   );
// }
// const newElement = <a href="https//google.com">Visit Google </a>;
// const reactElement = React.createElement(
//   "a",
//   { href: "https://google.com", target: "_blank" },
//   "Click to visit Google"
// );
ReactDOM.createRoot(document.getElementById("root")).render(<BgChanger />);
