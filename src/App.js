import React from "react";
import {
  BrowserRouter as Router,
  Route,
  NavLink,
  Redirect
} from "react-router-dom";
import PageOne from "./pages/PageOne";
import PageTwo from "./pages/PageTwo";
import { Helmet } from "react-helmet";

import "./App.css";

function App() {
  return (
    <div className="App">
      <Helmet>
        <title>Demo React App</title>
        <meta name="description" content="This is a demo react app" />
        <meta name="keywords" content="react,seo,helmet" />
      </Helmet>
      <Router>
        <nav>
          <ul>
            <li>
              <NavLink to="/home" className="App-link">
                Page One
              </NavLink>
            </li>
            <li>
              <NavLink to="/inner-page" className="App-link">
                Page Two
              </NavLink>
            </li>
          </ul>
        </nav>
        <Route path="/home" component={PageOne} />
        <Route path="/inner-page" component={PageTwo} />
        <Redirect to="/home" />
      </Router>
    </div>
  );
}

export default App;
