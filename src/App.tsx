import "./styles.css";
import ColorPin from "./ColorPin";
import CodeGuess from "./CodeGuess";

export default function App() {
  return (
    <div className="App">
      <h1>Mastermind</h1>
      <CodeGuess>
        <ColorPin color="blue" />
        <ColorPin color="red" />
      </CodeGuess>
    </div>
  );
}
