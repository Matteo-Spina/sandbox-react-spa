import "./App.css";
import { RowItem } from "./RowItem";
import ArticleBlock from "./Article";
// import OrbitSystem from "./OrbitSystem";
import { StyleSheetManager, createGlobalStyle } from "styled-components";

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

const testData = {
  title: "Node",
  subtitle: "native app",
  content: "working on it",
  dateTime: new Date("1995-12-17T03:24:00"),
};

function App() {
  return (
    <StyleSheetManager disableVendorPrefixes>
      <>
        <GlobalStyle />
        <div className="App">
          {/* <!-- grid --> */}
          <header className="page-header"></header>
          <main className="subgrid">
            {/* subgrid */}
            <RowItem >
              <ArticleBlock data={testData} />
            </RowItem>
            <RowItem >
              <ArticleBlock data={testData} />
            </RowItem>
            <RowItem >
              <ArticleBlock data={testData} />
            </RowItem>
            <RowItem full>
              <div style={{width: "100%", height: "100%", backgroundColor: "lavender"}}></div>
            </RowItem>
            <RowItem >
              <ArticleBlock data={testData} />
            </RowItem>
          </main>
          {/* <!-- end grid --> */}
          <footer className="page-footer"></footer>
        </div>
      </>
    </StyleSheetManager>
  );
}

export default App;
