import React, { useState, useEffect } from "react";
import axios from "axios";
import "./FiveDaysForecast.css";
import ForecastPerDay from "./ForecastPerDay";

export default function FiveDaysForecast(props) {
  let [loaded, setLoaded] = useState(false);
  let [forecast, setForecast] = useState(null);

  useEffect(() => {
    setLoaded(false);
  }, [props.info.city]);

  function displayForecast(response) {
    setForecast(response.data.daily);
    setLoaded(true);
  }

  if (loaded) {
    return (
      <div className="FiveDaysForecast">
        <div className="row">
          {forecast.map(function (dailyForecast, index) {
            if (index < 5) {
              return (
                <div className="col PerDay" key={index}>
                  <ForecastPerDay data={dailyForecast} />
                </div>
              );
            } else {
              return null;
            }
          })}
        </div>
      </div>
    );
  } else {
    let apiKey = "594t1344a33ebb79a8c028f85db36co0";
    let apiUrl = `https://api.shecodes.io/weather/v1/forecast?query=${props.info.city}&key=${apiKey}&units=metric`;
    axios(apiUrl).then(displayForecast);

    return null;
  }
}
