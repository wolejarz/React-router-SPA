import React, { Component } from "react";
import { BrowserRouter, NavLink, Route, Switch } from "react-router-dom";
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
const ErrorPage = () => {
  return <h1>Page doesn't exist</h1>;
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
                  <NavLink to="/" exact activeClassName="homeselected">
                    Start
                  </NavLink>
                </li>
                <li>
                  <NavLink to="/news" activeClassName="newsselected">
                    News
                  </NavLink>
                </li>
                <li>
                  <NavLink to="/contact" activeClassName="contactselected">
                    Contact
                  </NavLink>
                </li>
              </ul>
            </nav>
          </header>
          <section>
            <Switch>
              <Route path="/contact" component={Contact} />
              <Route path="/news" component={News} />
              <Route path="/" exact={true} component={Home} />
              <Route component={ErrorPage} />
            </Switch>
          </section>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
