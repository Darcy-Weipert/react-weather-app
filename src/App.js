import React from "react";
import "./App.css";
import Weather from "./Weather.js";

export default function App() {
  return (
    <div className="App">
      <div className="container">
        <Weather defaultCity="Dallas" />
        <footer>
          This project was coded by Darcy Weipert and is{" "}
          <a
            href="https://github.com/Darcy-Weipert/react-weather-app.git"
            target="_blank"
            rel="noreferrer"
          >
            open-sourced on Github
          </a>{" "}
          and{" "}
          <a
            href="https://voluble-granita-09fa7a.netlify.app/"
            target="_blank"
            rel="noreferrer"
          >
            hosted on Netlify
          </a>
        </footer>
      </div>
    </div>
  );
}
