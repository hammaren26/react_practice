import Hello from "./components/Hello";
import Button from "./components/Button";

function App() {
  return (
    <div className="App">
      <Hello />
      <hr />

      <br />
      <Button name="John">Peter</Button>
    </div>
  );
}

export default App;
