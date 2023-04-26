import React from "react";
import './Home.css';
import { Link } from "react-router-dom";
const Explore = () => {
  return (
    <nav class="navbar navbar-inverse" >
      <div class="container-fluid">
        <div class="navbar-header">
          <a class="navbar-brand" href="#">&nbsp;&nbsp;&nbsp;FC</a>
        </div>
        <ul class="nav navbar-nav">
          <li ><a href="#" to="/">&nbsp;&nbsp;&nbsp;Home</a></li>
          <li class="dropdown">
            <a class="dropdown-toggle" data-toggle="dropdown" href="#">&nbsp;&nbsp;&nbsp;Explore
              <span class="caret"></span></a>
            <ul class="dropdown-menu">
              <li><a href="/isin">ISIN</a></li>
              <li><a href="/sector">Sector</a></li>
              <li><a href="/symbol">Symbol</a></li>
            </ul>
          </li>
          <li>
            <Link className="nav-item" to='/contactus'>&nbsp;&nbsp;&nbsp;Contact us </Link>
          </li>
        </ul>
      </div>
      <div className="background">
        <h1></h1>
      </div>
    </nav>

  )
}
export default Explore;