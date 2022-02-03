import reactLogoPng from "./assets/logoreact-180x180.png";
import craLogoSvg from "./assets/logo-cra.svg";
import scLogoPng from "./assets/sc-256x256.png";
import nodeLogoPng from "./assets/node-180px.png";

// define keys and aliases TODO
// "node", "react", ...
const keys = [
  "react",
  "cra",
  "sc",
  "node",
  "vercel",
  "electron",
  "js",
  "html",
  "css",
];
// define colors interface
// {base: <color>, lighter? : <color> , darker?: <color>}
// {base: <color>, bg: <color> , reversible: <boolean>}
const colors = {
  react: { base: "#61dafb", darker: "#282c34", bg: "#222222" },
  cra: { base: "#09d3ac", darker: "#303846" },
  sc: { base: "palevioletred" },
  node: { base: "#339933", lighter: "#66cc33" },
  vercel: { base: "black", bg: "white" },
  electron: { base: "black", bg: "white" },
  js: { base: "black", bg: "#f7e018" },
  html: { base: "orange", bg: "white" },
  css: { base: "deepskyblue", bg: "white" },
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
  vercel: {
    main: "",
  },
  html: {
    main: "",
  },
  css: {
    main: "",
  },
  js: {
    main: "",
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
  vercel: {
    name: "Vercel",
    colors: {
      ...colors.vercel,
    },
    logos: {
      ...logos.vercel,
    },
  },
  html: {
    name: "Html",
    colors: {
      ...colors.html,
    },
    logos: {
      // ...
    },
  },
  css: {
    name: "Css",
    colors: {
      ...colors.css,
    },
    logos: {
      // ...
    },
  },
  js: {
    name: "Javascript",
    colors: {
      ...colors.js,
    },
    logos: {
      // ...
    },
  },
};

// hardcoded data sample
// model <-> UI
// note: https://reactjs.org/docs/thinking-in-react.html#step-1-break-the-ui-into-a-component-hierarchy
const testData = {
  top: {
    // emphasis
    article: {
      title: brands.react.name,
      subtitle: "front end",
      content: "working on it and something else",
      dateTime: new Date("1995-12-17T03:24:00"),
      ...brands.react,
    },
    list: [
      { link: { ...brands.sc }, id: "asdbfyuab32" },
      { link: { ...brands.cra }, id: "ioj78ginoi" },
      { link: { ...brands.vercel }, id: "jkbknuinuoi" },
      // { list: [] },
    ],
  },
  base: {
    // about what i do
    subject: "Front End Development",
    statements: [
      "Translating design specs into code",
      "Linking front end to backend",
    ],
    details: [
      { link: { ...brands.html }, statement: "html statement", id: "jabsd78" },
      { link: { ...brands.css }, statement: "css XapTy", id: "6854klj98" },
      { link: { ...brands.js }, statement: "js AxYj", id: "po87asd" },
    ],
  },
  resources: {
    bookmarks: [
      {
        title: "...",
        url: "",
      },
    ],
    profiles: [
      {
        site: "GitHub",
        url: "http:....",
      },
    ],
  },
  others: {
    // ...
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
