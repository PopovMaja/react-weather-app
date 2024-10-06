import React from "react";
import "./Weather.css";

export default function Weather() {
  return (
    <div className="Weather">
      <form>
        <div className="row">
          <div className="col-9">
            <input
              type="search"
              placeholder="Enter a city..."
              className="form-control enter-city"
            />
          </div>
          <div className="col-3">
            <input
              type="submit"
              value="Search"
              className="btn btn-primary search-city"
            />
          </div>
        </div>
      </form>
      <div className="row current-info">
        <div className="col-6">
          <h1 className="searched-city">New York</h1>
          <ul className="current-time-date">
            <li>12:16</li>
            <li>Oct/4/2027</li>
            <li>Friday</li>
          </ul>
        </div>
        <div className="col-6">
          <h2 className="current-description"> clear sky</h2>
          <div className="row current-icon-temp">
            <div className="col-4 current-icon">
              <img
                src="https://shecodes-assets.s3.amazonaws.com/api/weather/icons/clear-sky-day.png"
                alt="sunny"
              />
            </div>
            <div className="col-6 current-temp"> 22</div>
            <div className="col-2 unit">℃</div>
          </div>
        </div>
      </div>

      <ul className="extra-info">
        <li>Real feel: 22</li>
        <li>Humidity: 68 %</li>
        <li>Wind: 4 km/h</li>
      </ul>
    </div>
  );
}
