import logo from "./logo.svg";
import "./App.css";

let root = document.querySelector(":root");

let currentPalette = "standard";

function setPalette() {
  if (currentPalette === "standard") {
    root.setAttribute(
      "style",
      `
        --clr-pri-400: #85383c;
        --clr-acc-300: #fabadf;
        --clr-acc-400: #f296c3;
        --clr-acc-500: #f76cad;
        --clr-neu-400: #f7c0b9;
        --clr-bkg-400: #ecf8ff;
      `
    );
    currentPalette = "candy";
  } else {
    root.setAttribute(
      "style",
      `
        --clr-pri-400: hsl(228, 21%, 14%);
        --clr-acc-300: hsl(12, 88%, 75%);
        --clr-acc-400: hsl(12, 88%, 59%);
        --clr-acc-500: hsl(12, 60%, 45%);
        --clr-neu-400: hsl(14, 73%, 86%);
        --clr-bkg-400: hsl(12, 25%, 90%);
      `
    );
    currentPalette = "standard";
  }
}

function RegularSection() {
  return (
    <>
      <div className="title-p-button">
        <h1 className="fs-primary-heading fw-bold text-primary-400">
          Bring everyone together to build better products.
        </h1>
        <p>
          Manage makes it simple for software teams to plan day-to-day tasks
          while keeping the larger team goals in view.
        </p>
        <button onClick={setPalette} className="button">
          Let's Go!
        </button>
      </div>
    </>
  );
}

function App() {
  return (
    <>
      <div className="even-columns">
        {RegularSection()}
        {RegularSection()}
      </div>
    </>
  );
}

export default App;
