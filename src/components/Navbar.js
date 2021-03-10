import React from "react";
import {
  Route,
  BrowserRouter as Router,
  Link,
  useRouteMatch,
} from "react-router-dom";
import NotFound from "./NotFound";
import TaskToDo from "./TaskToDo";

function Channel() {
  const match = useRouteMatch("/Channel/:name");

  return match ? <p>{match.params.name}'s Channel</p> : <TaskToDo />;
}

const Navbar = ({ WholeData }) => {
  let filtered = [...new Set(WholeData.map((e) => e.user_author))];

  return (
    <div>
      <Router>
        <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
          <a className="navbar-brand" href="#">
            AlphaSense
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#navbarColor01"
            aria-controls="navbarColor01"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarColor01">
            <ul className="navbar-nav mr-auto">
              {filtered.map((value) => {
                return (
                  <li className="nav-item" key={value}>
                    <a className="nav-link" href="#"key={value}>
                      <Link to={`/Channel/${value}`} >{value}'s Channel</Link>
                    </a>
                  </li>
                );
              })}
            </ul>
          </div>
          <Link to="/Channel">About</Link>
        </nav>
        <Route path="/Channel" component={Channel} />
        {/* <Route path="*" component={NotFound} /> */}
      </Router>
    </div>
  );
};

export default Navbar;
