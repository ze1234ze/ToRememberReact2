import logo from "./logo.svg";
import "./index.css";
import NewCounter from "./component/newCounter";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <NewCounter />
      </header>
    </div>
  );
}

export default App;
