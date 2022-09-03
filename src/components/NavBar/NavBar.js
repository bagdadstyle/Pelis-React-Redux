import React from "react";
import { NavLink } from "react-router-dom";

import "./Navbar.css";

export default function NavBar() {
  return (
    <div className="nav-container">
      <div className="img-container">
        <img
          src={
            "https://st3.depositphotos.com/8080374/13250/v/600/depositphotos_132509220-stock-illustration-popcorn-for-movie-theater.jpg"
          }
          className="img-logo"
          alt=""
        />
      </div>
      <ul className="list">
        <li className="list-item">
          <NavLink exact to="/">
            Home
          </NavLink>
          <NavLink to="/favs">Favoritas</NavLink>
        </li>
      </ul>
    </div>
  );
}
