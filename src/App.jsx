import { Header, Footer, Main } from "./Sections";
import styled, { StyleSheetManager, createGlobalStyle } from "styled-components";

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
    --color-react: #61dafb;
    --color-react-2: #282c34;
	  --cra-color-primary: #09d3ac;
	  --cra-color-background: #303846;
    --sc-color-primary: palevioletred;
    --sc-background: rgba(0, 0, 0, 0) linear-gradient(20deg, rgb(33, 33, 33), rgb(66, 66, 66)) repeat scroll 0% 0%;
    
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
    line-height: normal;
    background: var(--color-body);
  }
`;

const StyledApp = styled.div`
  min-height: 100vh;
  /* as grid container */
  display: grid;
  grid-template-columns: 1fr min(80ch, 100%) 1fr;
  grid-template-rows: [header-start] 10vh [main-start] 1fr [footer-start] 10vh;
`

function App() {
  return (
    <StyleSheetManager disableVendorPrefixes>
      <>
        <GlobalStyle />
        <StyledApp>
          {/* <!-- grid --> */}
          <Header />
          <Main />
          <Footer />
        </StyledApp>
      </>
    </StyleSheetManager>
  );
}

export default App;
