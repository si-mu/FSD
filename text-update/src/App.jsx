import { useState } from "react";
function App() {
  const [inputText, setInputText] = useState("");
  return (
    <div style={{ padding: "20px", fontFamily: "Arial" }}>
      <h2>Live Text Update</h2>
      <textarea
        rows="5"
        cols="60"
        value={inputText}
        onChange={(e) => setInputText(e.target.value)}
        placeholder="Type something..."
      />
      <h4>Output:</h4>
      <p>{inputText}</p>
    </div>
  );
}
export default App;
