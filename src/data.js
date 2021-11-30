import reactLogoPng from "./assets/logoreact-180x180.png";
import craLogoSvg from "./assets/logo-cra.svg";
import scLogoPng from "./assets/sc-256x256.png";
import nodeLogoPng from "./assets/node-180px.png";

// define keys and aliases TODO
// "node", "react", ...
// define colors interface
// {base: <color>, lighter? : <color> , darker?: <color>}
const colors = {
  react: { base: "#61dafb", darker: "#282c34", bg:"#222222" },
  cra: { base: "#09d3ac", darker: "#303846" },
  sc: { base: "palevioletred" },
  node: { base: "#339933", lighter: "#66cc33" },
};

// import logos
const logos = {
  react: {
    main: reactLogoPng,
  },
  cra: {
    main: craLogoSvg,
  },
  sc: {
    main: scLogoPng,
  },
  node: {
    main: nodeLogoPng,
  },
};

// brand interface
// ...
// brands
const brands = {
  react: {
    name: "React",
    colors: {
      ...colors.react,
    },
    logos: {
      ...logos.react,
    },
  },

  cra: {
    name: "Create React App",
    colors: {
      ...colors.cra,
    },
    logos: {
      ...logos.cra,
    },
  },
  sc: {
    name: "Styled-Components",
    colors: {
      ...colors.sc,
    },
    logos: {
      ...logos.sc,
    },
  },
  node: {
    name: "Node",
    colors: {
      ...colors.node,
    },
    logos: {
      ...logos.node,
    },
  },
};

// custum strucuture compiled with generic data, made for this web app
// rigid structure: who read have to know how to deal with before start - contrast to generic, which enables dynamic reading with no previous knowledge
const testData = {
  top: {
    article: {
      title: brands.react.name,
      subtitle: "font end",
      content: "working on it and something else",
      dateTime: new Date("1995-12-17T03:24:00"),
      ...brands.react,
    },
    list: [
      { link: { ...brands.sc }, id: "asdbfyuab32" },
      { link: { ...brands.cra }, id: "ioj78ginoi" },
      // { list: [] },
    ],
  },
  base: {},
  tools: {},
  others: {
    articleMini: {
      title: "Node",
      subtitle: "native app",
      content: "working on it",
      dateTime: new Date("1995-12-17T03:24:00"),
      ...brands.node,
    },
    list: [
      { link: { ...brands.sc }, id: "asdbfyuab32" },
      { link: { ...brands.cra }, id: "ioj78ginoi" },
    ],
  },
};

export default testData;
