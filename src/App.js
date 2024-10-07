import "./App.css";
import Weather from "./Weather";
import React from "react";

export default function App() {
  return (
    <div className="App">
      <div className="container">
        <Weather defaultCity="New York" />

        <footer>
          This website was created by{" "}
          <a
            href="https://github.com/PopovMaja"
            target="_blank"
            rel="noreferrer"
          >
            Maja Popov
          </a>{" "}
          is it open-sorced on{" "}
          <a
            href="https://github.com/PopovMaja/react-weather-app"
            target="_blank"
            rel="noreferrer"
          >
            GitHub
          </a>{" "}
          and hosted on{" "}
          <a
            href="https://reactappforweatherforecast.netlify.app/"
            target="_blank"
            rel="noreferrer"
          >
            Netlify
          </a>
          .
        </footer>
      </div>
    </div>
  );
}
