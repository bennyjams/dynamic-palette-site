import "./App.css";

let root = document.querySelector(":root");

let currentPalette = "standard";

let berry = "#112233";
// colorAdjust("#123456", 1.2)
function setPalette(theme) {
  let standard = {
    name: "standard",
    pri: "#1c1f2b",
    acc: "#f25f3a",
    neu: "#f5cdc1",
    bkg: "#ece2df",
    modUp: 1.1,
    modDown: 0.9,
  };
  let candy = {
    name: "candy",
    pri: "#85383c",
    acc: "#f296c3",
    neu: "#f7c0b9",
    bkg: "#ecf8ff",
    modUp: 1.1,
    modDown: 0.9,
  };
  let forest = {
    name: "forest",
    pri: "#218a69",
    acc: "#56e3c9",
    neu: "#6eef81",
    bkg: "#dcf5f3",
    modUp: 1.1,
    modDown: 0.9,
  };

  function setColors(theme) {
    root.setAttribute(
      "style",
      `
      --clr-pri-400: ${theme.pri};
      --clr-acc-300: ${colorAdjust(theme.acc, theme.modUp)};
      --clr-acc-400: ${colorAdjust(theme.acc, 1)};
      --clr-acc-500: ${colorAdjust(theme.acc, theme.modDown)};
      --clr-neu-400: ${theme.neu};
      --clr-bkg-400: ${theme.bkg};
      `
    );
    currentPalette = theme.name;
  }

  if (currentPalette === "standard") {
    setColors(candy);
  } else if (currentPalette === "candy") {
    setColors(forest);
  } else {
    setColors(standard);
  }
}

function RegularSection() {
  return (
    <>
      <div className="title-p-button">
        <h1 className="fs-primary-heading fw-bold text-primary-400">
          Bring everyone together to build better products.
        </h1>
        <p className="text-primary-400">
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
function InvertedRegularSection() {
  return (
    <>
      <div className="title-p-button">
        <h1 className="fs-primary-heading fw-bold text-background-400">
          Bring everyone together to build better products.
        </h1>
        <p className="text-background-400">
          Manage makes it simple for software teams to plan day-to-day tasks
          while keeping the larger team goals in view.
        </p>
        <button onClick={setPalette} className="button" data-type="inverted">
          Let's Go!
        </button>
      </div>
    </>
  );
}

function colorAdjust(hexValue, multMod) {
  hexValue = hexValue.slice(1);
  let arr = [0, 0, 0];

  arr.forEach((el, i, thisArr) => {
    el = Number("0x" + hexValue.slice(i * 2, i * 2 + 2));

    el *= multMod;

    el > 255 ? (el = 255) : (el = el);
    el < 0 ? (el = 0) : (el = el);

    el = parseInt(el).toString(16);

    //console.log(el);
    thisArr[i] = el;
  });

  //console.log("#" + arr[0] + arr[1] + arr[2]);
  return "#" + arr[0] + arr[1] + arr[2];
}

function App() {
  return (
    <>
      <div className="even-columns">
        {RegularSection()}
        {RegularSection()}
      </div>
      <div className="even-columns | bg-accent-400">
        {InvertedRegularSection()}
        {InvertedRegularSection()}
      </div>
    </>
  );
}

export default App;
