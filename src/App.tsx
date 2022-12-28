import "./styles.css";
import ColorPin from "./ColorPin";
import CodeGuess from "./CodeGuess";

export default function App() {
  return (
    <div className="App">
      <h1>Hello CodeSandbox</h1>
      <h2>Start editing to see some magic happen!</h2>
      <CodeGuess>
        <ColorPin color="blue" />
        <ColorPin color="red" />
      </CodeGuess>
    </div>
  );
}
