import React from "react";
import ReactDOM from "react-dom";
import "./styles.css";
import MyApp from "./components/MyApp";

ReactDOM.render(
  <ul>
    <li>Shubham</li>
    <li>Siddharth</li>
  </ul>,
  document.getElementById("root")
);

ReactDOM.render(<MyApp />, document.getElementById("root1"));
