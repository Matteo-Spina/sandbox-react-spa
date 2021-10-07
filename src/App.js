import "./App.css";
import GenericComponent from "./GenericComponent";

function App() {
  return (
    <div className="App">
      <header></header>
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
          <GenericComponent />
        </div>
      </main>
      {/* <!-- end grid --> */}
      <footer></footer>
    </div>
  );
}

export default App;

