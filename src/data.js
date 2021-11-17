// keys TODO
// "node", "react", ...

// define colors interface
// {base: <color>, lighter? : <color> , darker?: <color>}
// TODO move to array
// const colors = [Node: {...}, React: {...}]
const colorsNode = { base: "#339933", lighter: "#66cc33" };
const colorsReact = { base: "#61dafb", darker: "#282c34" };
const colorsCra = { base: "#09d3ac", darker: "#303846" };
const colorsSC = { base: "palevioletred" };

// import logos
// ...

// brand interface
// ...
// brands
const brands = {
  "Node": {
    name: "Node",
    colors: {
      ...colorsNode
    },
    logos: {

    }
  },
  "StyledComponents": {
    name: "Styled-Components",
    colors: {
      ...colorsSC
    },
    logos: {

    }
  },
  "CreateReactApp": {
    name: "Create React App",

    colors: {
      ...colorsCra
    },
    logos: {

    }
  },
  "React": {
    name: "React",

    colors: {
      ...colorsReact
    },
    logos: {

    }
  }
}

// custum strucuture compiled with generic data, made for this web app
// rigid structure: who read have to know how to deal with before start - contrast to generic, which enables dynamic reading with no previous knowledge
const testData = {
  top: {
    article: {
      title: brands.React.name,
      subtitle: "font end",
      content: "working on it",
      dateTime: new Date("1995-12-17T03:24:00"),
      // colors: { ...brands.React.colors },
      ...brands.React
    },
    list: [
      { link: { ...brands.StyledComponents }, id:"asdbfyuab32"},
      { link: { ...brands.CreateReactApp }, id:"ioj78ginoi"},
      // { list: [] },
    ]

  },
  base: {},
  tools: {},
  others: {
    articleMini: {
      title: "Node",
      subtitle: "native app",
      content: "working on it",
      dateTime: new Date("1995-12-17T03:24:00"),
      // colors: { ...brands.Node.colors }
      ...brands.Node
    },
    list: [
      { link: { ...brands.StyledComponents }, id:"asdbfyuab32"},
      { link: { ...brands.CreateReactApp }, id:"ioj78ginoi"},
    ]
  }
};

export default testData;