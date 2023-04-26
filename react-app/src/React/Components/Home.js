import React from "react";
import { Link } from "react-router-dom";
import "./Home.css";

const Home = () => {
  return (
    <nav class="navbar navbar-inverse">
      <div class="container-fluid">
        <div class="navbar-header">
          <a class="navbar-brand" href="#">
            &nbsp;&nbsp;&nbsp;FC
          </a>
        </div>
        <ul class="nav navbar-nav">
          <li>
            <Link className="nav-item" to="/">
              &nbsp;&nbsp;&nbsp;Home
            </Link>
          </li>
          <li>
            {" "}
            <Link className="nav-item" to="/fetchAll">
              All Stocks
            </Link>
          </li>
         
          <li class="dropdown">
            <a class="dropdown-toggle" data-toggle="dropdown" href="#">
              &nbsp;&nbsp;&nbsp;Explore
              <span class="caret"></span>
            </a>
            <ul class="dropdown-menu">
              <li>
                <a href="/isin">ISIN</a>
              </li>
              <li>
                <a href="/sector">Sector</a>
              </li>
              <li>
                <a href="/symbol">Symbol</a>
              </li>
            </ul>
          </li>
          <li>
            <Link className="nav-item" to="/contactus">
              &nbsp;&nbsp;&nbsp;Contact us{" "}
            </Link>
          </li>
          
        </ul>
      </div>
      <div className="bg">
        <br></br>
        <div className="cont">
          <h6 className="cont">
            Explore the
            <br></br>USM...
          </h6>
        </div>
      </div>
    </nav>
  );
};
export default Home;
