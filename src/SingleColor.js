import React, { useState, useEffect } from "react";
import rgbToHex from "./utils";

const SingleColor = (props) => {
  const [alert, setAlert] = useState(false);
  let { rgb, weight, index } = props;

  const copyColor = () => {
    setAlert(true);
    navigator.clipboard.writeText(rgbToHex(...rgb)); //js object, copy to clipboard
  };

  useEffect(() => {
    const timer = setTimeout(() => {
      setAlert(false);
    }, 2000);

    //clean function
    return () => {
      clearTimeout(timer);
    };
  }, [alert]);

  return (
    <article
      className={`color ${index > 10 && "color-light"}`} // when colors are darker change color text to white
      style={{ backgroundColor: `rgb(${[...rgb]})` }}
      onClick={copyColor}
    >
      <p className="percent-value">{weight}%</p>
      <p className="color-value">{rgbToHex(...rgb)}</p>
      {alert ? <p className="alert">Copied to Clipboard</p> : ""}
    </article>
  );
};

export default SingleColor;
