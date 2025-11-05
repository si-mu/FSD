import { useState } from "react";

function App() {
  const [email, setEmail] = useState("");
  const [isValid, setIsValid] = useState(true);

  const handleChange = (e) => {
    const value = e.target.value;
    setEmail(value);

    // Simple regex for email validation
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    setIsValid(regex.test(value) || value === "");
  };

  return (
    <div style={{ padding: "20px", fontFamily: "Arial" }}>
      <h2>Email Validation</h2>
      <input
        type="text"
        placeholder="Enter your email"
        value={email}
        onChange={handleChange}
      />
      {!isValid && (
        <p style={{ color: "red" }}>Please enter a valid email address.</p>
      )}
    </div>
  );
}

export default App;



