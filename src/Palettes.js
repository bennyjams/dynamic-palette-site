import { setCurrentTheme } from "./App";

let root = document.querySelector(":root");

export let paletteArray = [
  {
    name: "standard",
    pri: "#1c1f2b",
    acc: "#f25f3a",
    neu: "#f5cdc1",
    bkg: "#f7efec",
    modUp: 1.2,
    modDown: 0.7,
    dark: false,
  },
  {
    name: "candy",
    pri: "#85383c",
    acc: "#f296c3",
    neu: "#f7c0b9",
    bkg: "#ecf8ff",
    modUp: 1.1,
    modDown: 0.9,
    dark: false,
  },
  {
    name: "forest",
    pri: "#0d5e42",
    acc: "#3cd19d",
    neu: "#6eef81",
    bkg: "#dcf5f3",
    modUp: 1.1,
    modDown: 0.9,
    dark: false,
  },
  {
    name: "business",
    pri: "#e0d3cc",
    acc: "#f58f54",
    neu: "#37627d",
    bkg: "#37627d",
    modUp: 1.1,
    modDown: 0.5,
    dark: true,
  },
  {
    name: "hacker",
    pri: "#60f51b",
    acc: "#2d9615",
    neu: "#1a1b1c",
    bkg: "#1a1b1c",
    modUp: 1.1,
    modDown: 0.7,
    dark: true,
  },
  {
    name: "night",
    pri: "#f2eed5",
    acc: "#808ded",
    neu: "#3b4699",
    bkg: "#15255e",
    modUp: 1.1,
    modDown: 0.1,
    dark: true,
  },
  {
    name: "poison",
    pri: "#94fcb3",
    acc: "#53cc45",
    neu: "#775fe0",
    bkg: "#471fa3",
    modUp: 1.1,
    modDown: 0.7,
    dark: true,
  },
];

//

export function setPalette(newPalette) {
  function setColors(theme) {
    root.setAttribute(
      "style",
      `
      --clr-pri-300: ${colorAdjust(theme.pri, theme.modUp)};
      --clr-pri-400: ${colorAdjust(theme.pri, 1)};
      --clr-pri-500: ${colorAdjust(theme.pri, theme.modDown)};
        --clr-acc-300: ${colorAdjust(theme.acc, theme.modUp)};
        --clr-acc-400: ${colorAdjust(theme.acc, 1)};
        --clr-acc-500: ${colorAdjust(theme.acc, theme.modDown)};
        --clr-neu-400: ${theme.neu};
        --clr-bkg-300: ${colorAdjust(theme.bkg, theme.modUp)};
        --clr-bkg-400: ${theme.bkg};
        --clr-bkg-500: ${colorAdjust(theme.bkg, theme.modDown)};
        `
    );
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
  setCurrentTheme(paletteRef);
}

export function setRandomColors() {
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
}

export function colorAdjust(hexValue, multMod) {
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

export function colorRand(multMod) {
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

//

export function getAllPalettes() {
  return paletteArray;
}
export function getPalette(paletteName) {
  return paletteArray.find(({ name }) => {
    return name === paletteName;
  });
}
