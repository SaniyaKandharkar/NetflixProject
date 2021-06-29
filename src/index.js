import React from "react";
import ReactDOM from "react-dom";
import 'react-dropdown-now/style.css';
// import App from './App'
import Card from "./Cards";
import "./index.css";
import Sdata from "./Sdata";

const displaydata = Sdata.map((val, indexval) => {
  return (
    //<div>
      <Card
      imgsrc={val.imgsrc}
      title={val.title}
      sname={val.sname}
      link={val.link}
    />
//</div>
  );
});
ReactDOM.render(
  <>
    <h1 className="heading_style">Top Netflix Recommendations</h1>
    {displaydata}
  </>,
  document.getElementById("root")
);
