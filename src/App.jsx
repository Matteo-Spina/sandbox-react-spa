import "./App.css";
import { Header, Footer, Main } from "./Sections";
import {
  StyleSheetManager,
  createGlobalStyle,
} from "styled-components";

const GlobalStyle = createGlobalStyle`
  /* use like index.css */
  @font-face {
    font-family: "RubikLight";
    font-style: normal;
    font-weight: normal;
    src: 
      local("Rubik Light"),
      local(Rubik Light),
      local(Rubik-Light);
  }
  
  html {
    box-sizing: border-box;
    /* fonts */
    --font-large: 17px;
    --font-medium: 15px;
    --font-small: 13px;
    /* colors */
    --color-body: orange;
    --color-node-1: #339933;
    --color-node-2: #66cc33;
    --color-shadow-1: hsla(0, 11%, 20%, 0.74);
    --color-shadow-2: hsla(3, 100%, 50%, 0.66);
    --color-border: black;
    /* backgrounds */
    --node-gradient: linear-gradient(307deg,var(--color-node-2) 0%, var(--color-node-1) 80%);
    --card-gradient: linear-gradient(90deg,rgba(210,191,191,0.29) 0%, rgba(226,215,215,0.12) 80%);
    /* shadows */    
    --card-shadow-1: 0px 2px 2px 0px var(--color-shadow-1);
    --card-shadow-2: 0px 2px 8px 0px var(--color-shadow-2);
    /* borders */
    --border-width: 2px;
    --card-border: var(--border-width) solid var(--color-border);
    --card-border-radius: 8px;
      
    font-size: var(--font-large);
  }

  @media (max-width: 900px) {
    html {
      font-size: var(--font-medium);
    }
  }
  
  @media (max-width: 400px) {
    html {
      font-size: var(--font-small);
    }
  }

  * {
    box-sizing: inherit;
    margin: 0;
  }

  body {
    /* theme */
    font-family: "RubikLight", Verdana, sans-serif;
    background: var(--color-body);
  }
`;

function App() {
  return (
    <StyleSheetManager disableVendorPrefixes>
      <>
        <GlobalStyle />
        <div className="App">
          {/* <!-- grid --> */}
          <Header />
          <Main />
          <Footer />
        </div>
      </>
    </StyleSheetManager>
  );
}

export default App;
