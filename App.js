import "./styles.css";
import { useState } from "react";

export default function App() {
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();

  const handleSubmit = () => {
    console.log(email);
    console.log(password);
  };

  return (
    <div className="App">
      <div style={{ display: "flex", flexDirection: "column" }}>
        <div>
          <label>Email</label>
          <input
            type="text"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div style={{ marginTop: "10px" }}>
          <label>Password</label>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <button style={{ marginTop: "10px" }} onClick={() => handleSubmit()}>
          Submit
        </button>
      </div>
    </div>
  );
}
