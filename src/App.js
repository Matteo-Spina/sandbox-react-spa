import "./App.css";
import { RowItem } from "./GenericComponent";
import ArticleBlock from "./Article";
// import OrbitSystem from "./OrbitSystem";
import { StyleSheetManager } from "styled-components";

function App() {
  return (
    <StyleSheetManager disableVendorPrefixes>
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
    </StyleSheetManager>
  );
}

export default App;
