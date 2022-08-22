import logo from "./logo.svg";
import "./App.css";

function RegularSection() {
  return (
    <>
      <div class="">
        <h1 class="fs-primary-heading fw-bold">
          Bring everyone together to build better products.
        </h1>
        <p>
          Manage makes it simple for software teams to plan day-to-day tasks
          while keeping the larger team goals in view.
        </p>
        <button class="button">Let's Go!</button>
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
