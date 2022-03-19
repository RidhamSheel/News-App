import React, { useState } from "react";
import { Link } from "react-router-dom";
import "../Styles/NavStyle.css";

export default function Navbar(props) {
  const [searchTerm, setSearchTerm] = useState("");

  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-light bg-light fixed-top">
        <div className="container-fluid">
          <a className="navbar-brand" href="/">
            The Daily Bugle
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <Link
                  className="nav-link active"
                  aria-current="page"
                  to="/"
                  onClick={props.onHomeClick}
                >
                  Home
                </Link>
              </li>
              <li className="nav-item dropdown">
                <a
                  className="nav-link dropdown-toggle"
                  href="/"
                  id="navbarDropdown"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  {props.country}
                </a>
                <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                  <li>
                    <button
                      className="dropdown-item"
                      onClick={(event) => {
                        props.onCountryClick(event.target.innerHTML);
                      }}
                    >
                      USA
                    </button>
                  </li>
                  <li>
                    <button
                      className="dropdown-item"
                      onClick={(event) => {
                        props.onCountryClick(event.target.innerHTML);
                      }}
                    >
                      India
                    </button>
                  </li>
                  <li>
                    <button
                      className="dropdown-item"
                      onClick={(event) => {
                        props.onCountryClick(event.target.innerHTML);
                      }}
                    >
                      Japan
                    </button>
                  </li>
                </ul>
              </li>
              <li className="nav-item dropdown">
                <a
                  className="nav-link dropdown-toggle"
                  href="/"
                  id="navbarDropdown"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  {props.category}
                </a>
                <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                  <li>
                    <Link
                      className="dropdown-item"
                      onClick={(event) => {
                        props.onCategoryClick(event.target.innerHTML);
                      }}
                      to="/general"
                    >
                      General
                    </Link>
                  </li>
                  <li>
                    <Link
                      className="dropdown-item"
                      onClick={(event) => {
                        props.onCategoryClick(event.target.innerHTML);
                      }}
                      to="/sports"
                    >
                      Sports
                    </Link>
                  </li>
                  <li>
                    <Link
                      className="dropdown-item"
                      onClick={(event) => {
                        props.onCategoryClick(event.target.innerHTML);
                      }}
                      to="/business"
                    >
                      Business
                    </Link>
                  </li>
                  <li>
                    <Link
                      className="dropdown-item"
                      onClick={(event) => {
                        props.onCategoryClick(event.target.innerHTML);
                      }}
                      to="/entertainment"
                    >
                      Entertainment
                    </Link>
                  </li>
                  <li>
                    <Link
                      className="dropdown-item"
                      onClick={(event) => {
                        props.onCategoryClick(event.target.innerHTML);
                      }}
                      to="/health"
                    >
                      Health
                    </Link>
                  </li>
                  <li>
                    <Link
                      className="dropdown-item"
                      onClick={(event) => {
                        props.onCategoryClick(event.target.innerHTML);
                      }}
                      to="/technology"
                    >
                      Technology
                    </Link>
                  </li>
                </ul>
              </li>
            </ul>

            <form className="d-flex">
              <input
                className="form-control me-2"
                type="search"
                placeholder="Search"
                aria-label="Search"
                onChange={(event) => {
                  setSearchTerm(event.target.value);
                }}
              />
              <button className="btn btn-outline-success" type="submit">
                Search
              </button>
            </form>
          </div>
        </div>
      </nav>
    </div>
  );
}
