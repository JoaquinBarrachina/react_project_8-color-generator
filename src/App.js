import "./App.css";
import Values from "values.js"; // npm i values.js
import React, { useState, useEffect } from "react";
import SingleColor from "./SingleColor";

function App() {
  const [color, setColor] = useState("#f15025");
  const [error, setError] = useState(false);
  const [list, setList] = useState([]);

  const handleSubmit = (e) => {
    e.preventDefault();
    try {
      setError(false);
      let colors = new Values(color).all(10); //return array of colors
      setList(colors);
      console.log(colors);
    } catch (e) {
      setError(true);
      console.log(e);
    }
  };

  useEffect(() => {
    let colors = new Values(color).all(5);
    setList(colors);
  }, []);

  return (
    <>
      <h1>Color Generator Project</h1>
      <section className="container">
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            value={color}
            onChange={(e) => setColor(e.target.value)}
            placeholder="#f15025"
            className={error ? "error" : null}
          />
          <button className="btn" type="submit">
            Submit
          </button>
        </form>
      </section>
      <section className="colors">
        {list.map((color, index) => {
          console.log(color);
          return <SingleColor key={index} {...color} index={index} />;
        })}
      </section>
    </>
  );
}

export default App;
