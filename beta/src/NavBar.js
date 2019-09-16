import React from "react";
import './App.css';
import './nav_bar.css';
import classnames from 'classnames';

class NavBar extends React.Component {

  render() {

      return (
        <div className="nav-bar">
          <div className="hamburger-menu">
            <div className="menu-01"/>
            <div className="menu-02"/>
          </div>
          <p className="nav-email">{this.props.email}</p>
        </div>
      );
  }
}

export default NavBar
