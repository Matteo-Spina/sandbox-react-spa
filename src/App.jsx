import { Header, Footer, Main } from "./Sections";
import styled, {
  StyleSheetManager,
  createGlobalStyle,
} from "styled-components/macro";
// import StyledScaleGrid from "./Scale";

const GlobalStyle = createGlobalStyle`
  /* use like index.css */
  /* @font-face {
    font-family: "RubikLight";
    font-style: normal;
    font-weight: normal;
    // add unicode-range
    src: local("Rubik Light"), local(Rubik Light), local(Rubik-Light);
  } */

  :root {
    /* colors */
    --color-body: orange;
    --color-node-1: #339933;
    --color-node-2: #66cc33;
    --color-react: #61dafb;
    --color-react-2: #282c34;
    --cra-color-primary: #09d3ac;
    --cra-color-background: #303846;
    --sc-color-primary: palevioletred;
    --sc-background: rgba(0, 0, 0, 0)
      linear-gradient(20deg, rgb(33, 33, 33), rgb(66, 66, 66)) repeat scroll 0%
      0%;
    --color-shadow-1: hsla(0, 11%, 20%, 0.74);
    --color-shadow-2: hsla(3, 100%, 50%, 0.66);
    --color-border: black;
    /* shadows */
    --card-shadow-1: 0px 2px 2px 0px var(--color-shadow-1);
    --card-shadow-2: 0px 2px 8px 0px var(--color-shadow-2);
    /* backgrounds */
    --node-gradient: linear-gradient(
      307deg,
      var(--color-node-2) 0%,
      var(--color-node-1) 80%
    );
    --card-gradient: linear-gradient(
      90deg,
      rgba(210, 191, 191, 0.29) 0%,
      rgba(226, 215, 215, 0.12) 80%
    );
    /* borders */
    --border-width: 2px;
    --card-border: var(--border-width) solid var(--color-border);
    --card-border-radius: 8px;

    box-sizing: border-box;
  }

  *,
  *::before,
  *::after {
    box-sizing: inherit;
    margin: 0;
  }

  body {
    /* typography */
    /* 
      Rubik 
        em-square: 1000
        ascender: 935; descender: 250; line-gap: 0;
        tot: 935 + 250 + 0 = 1185 => R= 1.185
        example: 
          let 'font-size: 16px' which corresponds to 1000 ems 
          you get: 16px * 1.185 = 18.96px ~ 19px (chars height)
          let 'line-height: 2' ===> font-size(16px) * 2 = 32px (line-box height)
        NOTA: font-size * line-height >= font-size * R
          ==> line-height >= R (= 1.185)
    */
    --default-line-height: 2rem; /* note rem */
    font-family: "Rubik", sans-serif;
    font-weight: 400;
    line-height: var(--default-line-height);
    /*  */
    background: var(--color-body);
  }

  /* 
    impose a font-size and a line-height to specific elements, 
    prevent browser to apply default styling 
 
    - Typographic Scale -
    
    scale: Major Second
    ratio: 1.125 (9:8)
    base: 1rem
    >> font-size := (ratio)^n * (base)
    
    - Grid -
    
    grid unit: 1rem (== base) 
    >> line-height := k * (grid unit)
    
    - Constraint -
    
    on the same element
    line-height >= R * font-size
    
  */
  h1 {
    font-size: 1.802rem; /* n = 6 */
  }

  h2 {
    font-size: 1.602rem; /* n = 5 */
    
  }

  h3 {
    font-size: 1.424rem; /* n = 4 */
  }

  h4 {
    font-size: 1.266rem; /* n = 2 */
  }

  h5 {
    font-size: 1.125rem; /* n = 1 */
  }

  small,
  .text_small {
    font-size: 0.889rem;
  }
`;

const StyledApp = styled.div`
  min-height: 100vh;
  /* as grid container */
  display: grid;
  grid-template-columns: 1fr min(82ch, 90%) 1fr;
  grid-template-rows: [header-start] 5rem [main-start] 1fr [footer-start] 5rem;
  /* debug */
  position: relative;
`;

function App() {
  return (
    <StyleSheetManager disableVendorPrefixes>
      <>
        <GlobalStyle />
        <StyledApp>
          {/* <!-- debug grid --> */}
          {/* <StyledScaleGrid /> */}
          <Header />
          <Main />
          <Footer />
        </StyledApp>
      </>
    </StyleSheetManager>
  );
}

export default App;
