import "./App.css";
import { RowItem } from "./RowItem";
import ArticleBlock from "./Article";
// import OrbitSystem from "./OrbitSystem";
import { StyleSheetManager, createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
  /* use like index.css */
  @font-face {
    font-family: "MyRubik";
    font-style: normal;
    font-weight: normal;
    src:
      local("Rubik Light");
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
    font-family: "MyRubik", Verdana, sans-serif;
    
    /* size */
    min-height: 100vh;
  }
`;

function App() {
  return (
    <StyleSheetManager disableVendorPrefixes>
      <>
        <GlobalStyle />
        <div className="App">
          <header className="page-header"></header>
          {/* <!-- grid --> */}
          <main>
            <div className="row">
              <RowItem>
                <ArticleBlock />
              </RowItem>
              <RowItem>
                <ArticleBlock />
              </RowItem>
            </div>
            <div className="row">
              <RowItem>
                <ArticleBlock />
              </RowItem>
              <RowItem>
                <ArticleBlock />
              </RowItem>
            </div>
            <div className="row">
              <RowItem>
                <ArticleBlock></ArticleBlock>
              </RowItem>
              <RowItem>
                <ArticleBlock />
              </RowItem>
            </div>
          </main>
          {/* <!-- end grid --> */}
          <footer className="page-footer"></footer>
        </div>
      </>
    </StyleSheetManager>
  );
}

export default App;
