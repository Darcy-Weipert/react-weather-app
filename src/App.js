import "./App.css";

export default function App() {
  return (
    <div className="App">
      <div className="container">
        <h1>Weather App</h1>
        <Weather />
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
