import "./App.css";

let root = document.querySelector(":root");

let currentTheme = "standard";
let currentThemeIsDark = false;

let berry = "#112233";

let testHeader = "Bring everyone together to build better products.";
let testBody = `Manage makes it simple for software teams to plan day-to-day tasks
while keeping the larger team goals in view.`;

function ArbitraryBinary(characters) {
  let ret = "",
    bin = ["0", "1", " "];

  for (let i = 0; i < characters; i++) {
    ret += bin[parseInt(Math.random() * 3)];
  }

  return ret;
}

export function getCurrentTheme() {
  return currentTheme;
}
export function getCurrentThemeIsDark() {
  return currentThemeIsDark;
}

// colorAdjust("#123456", 1.2)
export function setPalette(newPalette) {
  let standard = {
    name: "standard",
    pri: "#1c1f2b",
    acc: "#f25f3a",
    neu: "#f5cdc1",
    bkg: "#f7efec",
    modUp: 1.1,
    modDown: 0.9,
    dark: false,
  };
  let candy = {
    name: "candy",
    pri: "#85383c",
    acc: "#f296c3",
    neu: "#f7c0b9",
    bkg: "#ecf8ff",
    modUp: 1.1,
    modDown: 0.9,
    dark: false,
  };
  let forest = {
    name: "forest",
    pri: "#0d5e42",
    acc: "#3cd19d",
    neu: "#6eef81",
    bkg: "#dcf5f3",
    modUp: 1.1,
    modDown: 0.9,
    dark: false,
  };
  let business = {
    name: "business",
    pri: "#e0d3cc",
    acc: "#f58f54",
    neu: "#353580",
    bkg: "#37627d",
    modUp: 1.1,
    modDown: 0.5,
    dark: true,
  };
  let hacker = {
    name: "hacker",
    pri: "#60f51b",
    acc: "#2d9615",
    neu: "#1a1b1c",
    bkg: "#1a1b1c",
    modUp: 1.1,
    modDown: 0.7,
    dark: true,
  };
  let night = {
    name: "night",
    pri: "#f2eed5",
    acc: "#808ded",
    neu: "#3b4699",
    bkg: "#15255e",
    modUp: 1.1,
    modDown: 0.1,
    dark: true,
  };
  let poison = {
    name: "poison",
    pri: "#94fcb3",
    acc: "#53cc45",
    neu: "#775fe0",
    bkg: "#471fa3",
    modUp: 1.1,
    modDown: 0.7,
    dark: true,
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
      --clr-bkg-300: ${colorAdjust(theme.bkg, theme.modUp)};
      --clr-bkg-400: ${theme.bkg};
      --clr-bkg-500: ${colorAdjust(theme.bkg, theme.modDown)};
      `
    );
    currentTheme = theme.name;
    currentThemeIsDark = theme.dark;
  }

  function UpdateShadows(isdark) {
    if (isdark) {
      document
        .querySelectorAll("button")
        .forEach((node) =>
          node.setAttribute(`data-shadow-color`, "background")
        );
      document
        .querySelectorAll(".header-navigation")
        .forEach((node) =>
          node.setAttribute(`data-shadow-color`, "background")
        );
    } else {
      document
        .querySelectorAll("button")
        .forEach((node) => node.setAttribute(`data-shadow-color`, ""));
      document
        .querySelectorAll(".header-navigation")
        .forEach((node) => node.setAttribute(`data-shadow-color`, ""));
    }
  }

  if (newPalette === "standard") {
    setColors(standard);
    UpdateShadows(false);
  } else if (newPalette === "candy") {
    setColors(candy);
    UpdateShadows(false);
  } else if (newPalette === "forest") {
    setColors(forest);
    UpdateShadows(false);
  } else if (newPalette === "business") {
    setColors(business);
    UpdateShadows(true);
  } else if (newPalette === "hacker") {
    setColors(hacker);
    UpdateShadows(true);
  } else if (newPalette === "night") {
    setColors(night);
    UpdateShadows(true);
  } else if (newPalette === "poison") {
    setColors(poison);
    UpdateShadows(true);
  }

  // if (currentPalette === "standard") {
  //   setColors(candy);
  // } else if (currentPalette === "candy") {
  //   setColors(forest);
  // } else {
  //   setColors(standard);
  // }
}

function setRandomColors() {
  let pri = colorRand(0.5);
  let acc = colorRand(2);
  let neu = colorRand(3);
  let bkg = colorRand(4);

  console.log(pri, acc, neu, bkg);

  root.setAttribute(
    "style",
    `
    --clr-pri-400: ${pri};
    --clr-acc-300: ${colorAdjust(acc, 1.2)};
    --clr-acc-400: ${colorAdjust(acc, 1)};
    --clr-acc-500: ${colorAdjust(acc, 0.8)};
    --clr-neu-400: ${neu};
    --clr-bkg-300: ${colorAdjust(bkg, 1.2)};
    --clr-bkg-400: ${bkg};
    --clr-bkg-500: ${colorAdjust(bkg, 0.8)};
    `
  );
  currentTheme = "random";
  currentThemeIsDark = true;
}

function RegularSection(headerText, bodyText) {
  return (
    <>
      <div className="title-p-button">
        <h1 className="fs-primary-heading fw-bold text-primary-400">
          {headerText}
        </h1>
        <p className="text-primary-400">{bodyText}</p>
        <button onClick={setRandomColors} className="button" id="button">
          Let's Go!
        </button>
      </div>
    </>
  );
}
function InvertedRegularSection(headerText, bodyText) {
  return (
    <>
      <div className="title-p-button">
        <h1 className="fs-primary-heading fw-bold text-background-400">
          {headerText}
        </h1>
        <p className="text-background-400">{bodyText}</p>
        <button
          onClick={setRandomColors}
          className="button"
          id="button"
          data-type="inverted"
        >
          Let's Go!
        </button>
      </div>
    </>
  );
}

function BulletPoints3(text1, text2, text3) {
  return (
    <div className="triple-bullet-points">
      <ul>
        <li>
          <p className="text-primary-400">{text1}</p>
        </li>
        <li>
          <p className="text-primary-400">{text2}</p>
        </li>
        <li>
          <p className="text-primary-400">{text3}</p>
        </li>
      </ul>
    </div>
  );
}

function ImageCard() {}

function colorAdjust(hexValue, multMod) {
  hexValue = hexValue.slice(1);
  let arr = [0, 0, 0];

  arr.forEach((el, i, thisArr) => {
    el = Number("0x" + hexValue.slice(i * 2, i * 2 + 2));

    el *= multMod;

    el > 255 ? (el = 255) : (el = el);
    el < 0 ? (el = 0) : (el = el);

    el = parseInt(el).toString(16);

    if (el.length < 2) {
      el = "0" + el;
    }

    thisArr[i] = el;
  });

  //console.log("#" + arr[0] + arr[1] + arr[2]);
  return "#" + arr[0] + arr[1] + arr[2];
}

function colorRand(multMod) {
  let arr = [0, 0, 0];

  arr.forEach((el, i, thisArr) => {
    el = parseInt(Math.random() * 64);

    el *= multMod;

    el > 255 ? (el = 255) : (el = el);
    el < 0 ? (el = 0) : (el = el);

    el = parseInt(el).toString(16);

    if (el.length < 2) {
      el = "0" + el;
    }

    thisArr[i] = el;
  });
  return "#" + arr[0] + arr[1] + arr[2];
}

function App() {
  return (
    <div className="container">
      <div className="even-columns">
        {RegularSection(testHeader, testBody)}
        {RegularSection(testHeader, testBody)}
      </div>
      <div className="inverted-ribbon">
        <div className="even-columns | bg-accent-400">
          {InvertedRegularSection(testHeader, ArbitraryBinary(200))}
          {InvertedRegularSection(testHeader, ArbitraryBinary(200))}
        </div>
      </div>
      <div className="container">
        <div className="even-columns">
          {BulletPoints3(
            ArbitraryBinary(200),
            ArbitraryBinary(200),
            ArbitraryBinary(200)
          )}
          {BulletPoints3(
            ArbitraryBinary(200),
            ArbitraryBinary(200),
            ArbitraryBinary(200)
          )}
        </div>
      </div>
    </div>
  );
}

export default App;
