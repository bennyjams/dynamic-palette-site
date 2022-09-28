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
