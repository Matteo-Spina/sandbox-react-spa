import "./App.css";
import GenericComponent from "./GenericComponent";
import ArticleBlock from "./Article";

function App() {
  return (
    <div className="App">
      <header className="page-header"></header>
      {/* <!-- grid --> */}
      <main>
        <div className="row">
          <div className="component"></div>
          <div className="component"></div>
        </div>
        <div className="row">
          <div className="component"></div>
          <div className="component"></div>
        </div>
        <div className="row">
          <GenericComponent />
          <ArticleBlock />
        </div>
      </main>
      {/* <!-- end grid --> */}
      <footer className="page-footer"></footer>
    </div>
  );
}

export default App;

