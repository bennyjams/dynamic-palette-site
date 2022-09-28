export let paletteArray = [
  {
    name: "standard",
    pri: "#1c1f2b",
    acc: "#f25f3a",
    neu: "#f5cdc1",
    bkg: "#f7efec",
    modUp: 1.1,
    modDown: 0.9,
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

export function getAllPalettes() {
  return paletteArray;
}
export function getPalette(paletteName) {
  return paletteArray.find(({ name }) => {
    return name === paletteName;
  });
}
