import React from "react";
import "./Styling/styles.css";
import { Link } from "react-router-dom";

function App() {
  return (
    <div>
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/search">Search</Link>
        </li>
      </ul>
      <p className="one">hello</p>
      <p className="two">hello</p>
    </div>
  );
}

export default App;
