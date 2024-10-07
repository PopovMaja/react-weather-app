import React, { useState } from "react";

export default function ConvertedTemperature(props) {
  const [unit, setUnit] = useState("celsius");

  function showFahrenheit(event) {
    event.preventDefault();
    setUnit("fahrenheit");
  }
  function showCelsius(event) {
    event.preventDefault();
    setUnit("celsius");
  }

  function fahrenheit() {
    return (props.celsius * 9) / 5 + 32;
  }
  if (unit === "celsius") {
    return (
      <div className="ConvertedTemperature">
        <span className="current-temp">{Math.round(props.celsius)}</span>
        <span className="unit">
          ℃|
          <a href="/" onClick={showFahrenheit}>
            ℉
          </a>
        </span>
      </div>
    );
  } else {
    return (
      <div className="ConvertedTemperature">
        <span className="current-temp">{Math.round(fahrenheit())}</span>
        <span className="unit">
          <a href="/" onClick={showCelsius}>
            ℃
          </a>
          |℉
        </span>
      </div>
    );
  }
}
