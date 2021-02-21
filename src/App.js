import React, { Component } from "react";
import { BrowserRouter, Link } from "react-router-dom";
import "./App.css";

class App extends Component {
  state = {};
  render() {
    return (
      <BrowserRouter>
        <div>
          <header>
            <nav>
              <ul>
                <li>
                  <Link to="/">Start</Link>
                </li>
                <li>
                  <Link to="/news">News</Link>
                </li>
                <li>
                  <Link to="/contact">Contact</Link>
                </li>

                {/* <li>
                  <a href="/">Start</a>
                </li>
                <li>
                  <a href="/news">News</a>
                </li>
                <li>
                  <a href="/contact">Contact</a>
                </li> */}
              </ul>
            </nav>
          </header>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
