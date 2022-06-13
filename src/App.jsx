import React from "react";
import ReactDom from "react-dom";

const renderTarget = document.querySelector("#render");

const App = () => {
  return <h1>yolo</h1>;
};

ReactDom.render(<App />, renderTarget);
