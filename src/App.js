import React, { Component } from "react";
import "./App.css";

class App extends Component {
  state = {};
  render() {
    return (
      <div>
        <header>
          <nav>
            <ul>
              <li>
                <a href="/"></a>
              </li>
              <li>
                <a href="/news"></a>
              </li>
              <li>
                <a href="/content"></a>
              </li>
            </ul>
          </nav>
        </header>
      </div>
    );
  }
}

export default App;
