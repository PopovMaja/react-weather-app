import React from "react";
import DateTime from "./DateTime";
import ConvertedTemperature from "./ConvertedTemperature";

export default function WeatherInfo(props) {
  return (
    <div className="WeatherInfo">
      <div className="row current-info">
        <div className="col-6">
          <h1 className="searched-city">{props.info.city}</h1>
          <DateTime date={props.info.date} />
        </div>
        <div className="col-6">
          <h2 className="current-description"> {props.info.description}</h2>
          <div className="row current-icon-temp">
            <div className="col-3 current-icon">
              <img src={props.info.icon} alt={props.info.description} />
            </div>
            <div className="col-9 ">
              <ConvertedTemperature celsius={props.info.temperature} />
            </div>
          </div>
        </div>
      </div>

      <ul className="extra-info">
        <li>Real feel: {Math.round(props.info.feelsLike)}</li>
        <li>Humidity: {props.info.humidity} %</li>
        <li>Wind: {Math.round(props.info.wind)} km/h</li>
      </ul>
    </div>
  );
}
