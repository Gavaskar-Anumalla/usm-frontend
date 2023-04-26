import React from "react"
import { Link } from "react-router-dom";
 const Nav =()=>{

    return <><nav class="navbar navbar-inverse">
    <div class="container-fluid">
        <div class="navbar-header">
            <a class="navbar-brand" href="/">FC</a>
        </div>
        <ul class="nav navbar-nav">
            <li> <Link className="nav-item" to='/'>Home</Link></li>
            <li> <Link className="nav-item" to='/fetchAll'>All Stocks</Link></li>
            <li>
                <a class="dropdown-toggle" type="button" data-toggle="dropdown">Explore
                    <span class="caret"></span></a>
                <ul class="dropdown-menu">
                    <li><a href="/isin">ISIN</a></li>
                    <li><a href="/sector">Sector</a></li>
                    <li><a href="/symbol">Symbol</a></li>
                </ul>
            </li>

            <li>
                <Link className="nav-item" to='/contactus'>Contact us </Link>
            </li>

        </ul>
    </div>

    <h1></h1>

</nav></>
}
export default Nav