import React from 'react';
import './Styling/styles.css';
import { Link } from 'react-router-dom';
import 'normalize.css';

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
      <p>helloo</p>
    </div>
  );
}

export default App;
