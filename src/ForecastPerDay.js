import React from "react";

export default function ForecastPerDay(props) {
  function maxTemp() {
    let temperature = Math.round(props.data.temperature.maximum);

    return `${temperature}°`;
  }
  function minTemp() {
    let temperature = Math.round(props.data.temperature.minimum);

    return `${temperature}°`;
  }
  function day() {
    let date = new Date(props.data.time * 1000);
    let day = date.getDay();

    let days = ["Sun", "Mon", "Tue", "Wed", "Tru", "Fri", "Sat"];

    return days[day];
  }
  return (
    <div>
      <div className="FiveDaysForecast-day">{day()}</div>
      <div className="FiveDaysForecast-icon">
        <img
          src={props.data.condition.icon_url}
          alt={props.data.condition.description}
        />
      </div>
      <div className="FiveDaysForecast-temperature">
        <span className="FiveDaysForecast-max">{maxTemp()}/</span>
        <span className="FiveDaysForecast-min">{minTemp()}</span>
      </div>
    </div>
  );
}
