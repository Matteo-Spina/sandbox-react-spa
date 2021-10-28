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
    font-size: 17px;
  }

  @media (max-width: 900px) {
    html {
      font-size: 15px;
    }
  }
  
  @media (max-width: 400px) {
    html {
      font-size: 13px;
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
