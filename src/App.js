import "./App.css";
import Weather from "./Weather.js";
export default function App() {
  return (
    <div className="App">
      <div className="container">
        <Weather defaultCity="Dallas" />
        <footer>
          This project was coded by{" "}
          <a href="https://tourmaline-swan-bb7a93.netlify.app/" target="_blank">
            Darcy Weipert
          </a>{" "}
          and is{" "}
          <a
            href="https://github.com/Darcy-Weipert/react-weather-app.git"
            target="_blank"
          >
            open-sourced on Github
          </a>
        </footer>
      </div>
    </div>
  );
}
