import "./App.css";

import {
  RegularSection,
  InvertedRegularSection,
} from "./components/RegularSections.js";
import { paletteArray } from "./Palettes";

let root = document.querySelector(":root");

let currentTheme = "standard";
let currentThemeIsDark = false;

let berry = "#112233";

let testHeader = "Displaying arbitrary text since 2022.";
let testBody = `Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quis vitae aut quos officia eius sint velit a dignissimos magnam reiciendis, expedita delectus quibusdam similique dolores repellendus facere, est harum! Repellat minus ea possimus maxime blanditiis animi unde, sed perferendis deserunt alias tenetur placeat adipisci consectetur, reprehenderit itaque! Soluta, accusamus totam.`;

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

export function setPalette(newPalette) {
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

  let paletteRef = paletteArray.find(({ name }) => {
    return name === newPalette;
  });

  setColors(paletteRef);
  UpdateShadows(paletteRef.dark);
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
  currentThemeIsDark = false;
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

function App() {
  return (
    <div className="container">
      <div className="even-columns">
        {RegularSection(testHeader, testBody, setRandomColors)}
        {RegularSection(testHeader, testBody, setRandomColors)}
      </div>
      <div className="inverted-ribbon">
        <div className="even-columns | bg-accent-400">
          {InvertedRegularSection(
            testHeader,
            ArbitraryBinary(200),
            setRandomColors
          )}
          {InvertedRegularSection(
            testHeader,
            ArbitraryBinary(200),
            setRandomColors
          )}
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
