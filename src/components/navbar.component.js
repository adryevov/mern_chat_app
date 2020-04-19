import React, { Component } from "react";
import { Link } from "react-router-dom";

export default class Navbar extends Component {
  render() {
    return (
      <nav className="navbar navbar-dark bg-info navbar-expand-lg">
        <Link to="/" className="navbar-brand">
          Chat-Room Admin
        </Link>
        <div className="collpase navbar-collapse">
          <ul className="navbar-nav mr-auto">
            <li className="navbar-item">
              <Link to="/" className="nav-link">
                Message History
              </Link>
            </li>
            <li className="navbar-item">
              <Link to="/eventlog" className="nav-link">
                Eventlog History
              </Link>
            </li>
            <li className="navbar-item">
              <Link to="/roomLog" className="nav-link">
                Room History
              </Link>
            </li>
          </ul>
        </div>
      </nav>
    );
  }
}
