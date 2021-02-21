import React, { Component } from "react";
import { BrowserRouter, Link, Route } from "react-router-dom";
import "./App.css";

const Home = () => {
  return <h1>Start Page</h1>;
};
const News = () => {
  return <h1>News</h1>;
};
const Contact = () => {
  return <h1>Contact</h1>;
};

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
              </ul>
            </nav>
          </header>
          <section>
            <Route path="/contact" component={Contact} />
            <Route path="/news" component={News} />
            <Route path="/" exact={true} component={Home} />
          </section>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
