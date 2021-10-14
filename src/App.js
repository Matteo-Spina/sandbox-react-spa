import "./App.css";
import GenericComponent from "./GenericComponent";
import ArticleBlock from "./Article";
import OrbitSystem from "./OrbitSystem";
import { StyleSheetManager } from "styled-components";

function App() {
  return (
    <StyleSheetManager disableVendorPrefixes>
      <div className="App">
        <header className="page-header"></header>
        {/* <!-- grid --> */}
        <main>
          <div className="row">
            <OrbitSystem />
            <ArticleBlock />
          </div>
          <div className="row">
            <ArticleBlock />
            <GenericComponent />
          </div>
          <div className="row">
            <GenericComponent />
            <ArticleBlock />
          </div>
        </main>
        {/* <!-- end grid --> */}
        <footer className="page-footer"></footer>
      </div>
    </StyleSheetManager>
  );
}

export default App;
