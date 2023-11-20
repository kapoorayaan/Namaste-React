import React, { useState } from "react";
import ReactDOM from "react-dom/client";
import Header from "./title";

const pizza = {
  name: "Pizza",
  image:
    "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/nuobpz8wp7d5qfzdr84q",
  cusines: ["Pizza", "American"],
  rating: "4.5",
};
const Rcard = () => (
  <div className="card">
    <img src={pizza.image}></img>
    <h2>{pizza.name}</h2>
    <h3>{pizza.cusines.join(", ")}</h3>
    <h4>{pizza.rating}</h4>
  </div>
);

const Body = () => {
  const [txt, settxt] = useState("KFC");
  return (
    <>
      <div className="search">
        <input
          className="Sinput"
          placeholder="Search"
          value={txt}
          onChange={(e) => settxt(e.target.value)}
        />
        <button
          className="btn"
          onClick={() => {
            //filter data
          }}
        >
          Search
        </button>
      </div>
      <div className="list">
        <Rcard />
        <Rcard />
        <Rcard />
        <Rcard />
        <Rcard />
        <Rcard />
      </div>
    </>
  );
};

const Footer = () => {
  return <h4>Footer</h4>;
};
const Layy = () => (
  <>
    <Header />
    <Body />
  </>
);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<Layy />);
