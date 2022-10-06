import "./App.css";

import {
  RegularSection,
  InvertedRegularSection,
} from "./components/RegularSections.js";

import {
  paletteArray,
  setRandomColors,
  colorAdjust,
  colorRand,
  setPalette,
} from "./Palettes";

import { BulletPoints3 } from "./components/Lists";

//

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

//

export function setCurrentTheme(newTheme) {
  currentTheme = newTheme.name;
  currentThemeIsDark = newTheme.dark;
}
export function getCurrentTheme() {
  return currentTheme;
}
export function getCurrentThemeIsDark() {
  return currentThemeIsDark;
}

//
let offset = 0;
let body = document.querySelector("body");

let out = true;

export function gradientShift(size) {
  // body.setAttribute(
  //   "style",
  //   `
  //     background: rgb(${offset},${offset},${offset});
  //   );`
  // );

  // body.setAttribute(
  //   "style",
  //   `

  //     background: repeating-radial-gradient(
  //       circle at -4000% -8000%,
  //       var(--clr-bkg-300),
  //       var(--clr-bkg-300) ${offset}px,
  //       var(--clr-bkg-400) ${offset}px,
  //       var(--clr-bkg-400) ${offset + size}px,
  //       var(--clr-bkg-300) ${offset + size}px,
  //       var(--clr-bkg-300) ${offset + 2 * size}px
  //   );`
  // );

  body.setAttribute(
    "style",
    `
      
      background: repeating-linear-gradient(
        -45deg,
        var(--clr-bkg-300),
        var(--clr-bkg-300) ${offset}px,
        var(--clr-bkg-400) ${offset}px,
        var(--clr-bkg-400) ${offset + size}px,
        var(--clr-bkg-300) ${offset + size}px,
        var(--clr-bkg-300) ${offset + 2 * size}px
    );`
  );

  // backround: repeating-radial-gradient(
  //   circle at 0 -100%,
  //   var(--clr-bkg-300),
  //   var(--clr-bkg-300) ${offset}px,
  //   var(--clr-bkg-400) ${offset}px,
  //   var(--clr-bkg-400) ${offset + size}px,
  //   var(--clr-bkg-300) ${offset + size}px,
  //   var(--clr-bkg-300) ${offset + 2 * size}px

  if (out) {
    offset += 0.1 + 0.01 * offset;
  } else {
    offset -= 0.001 + 0.09 * offset;
  }

  if (offset >= 20) {
    out = false;
  }
  if (offset <= 0) {
    out = true;
  }
}

function startGradientShift() {
  requestAnimationFrame((e) => {
    console.log(offset);
    gradientShift(50);
  });
}

setPalette("standard");
startGradientShift();

window.setInterval(startGradientShift, 50);

//

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
