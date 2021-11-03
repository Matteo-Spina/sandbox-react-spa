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
    
    --font-large: 17px;
    --font-medium: 15px;
    --font-small: 13px;
    
    --node-pantone: #339933;
    --card-shadow: -4px -4px 12px 0px rgba(40, 15, 15, 0.75);
    --card-shadow-inset: inset 0px 0px 40px 0px rgba(40, 15, 15, 0.20);
    --card-gradient: linear-gradient(307deg,#66cc33 0%, #339933 80%);
      
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
