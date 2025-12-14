import React, { useRef } from "react";
import { useDispatch } from "react-redux";
import { Link, useNavigate } from "react-router";
import { searchMovie } from "../redux/slices/searchSlice";

function Header(){
  let x1 = useRef();
  let dispatch = useDispatch();
  let navigate = useNavigate();

  function myfunc(ev){
    ev.preventDefault();
    console.log(x1.current.value);
    dispatch(searchMovie(x1.current.value));
    navigate("/search");

  }
    return(
        <nav class="navbar navbar-expand-lg bg-body-tertiary">
  <div className="container-fluid">
    <a class="navbar-brand" href="#">Navbar</a>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarSupportedContent">
      <ul class="navbar-nav me-auto mb-2 mb-lg-0">
        <li class="nav-item">
          <Link class="nav-link active" aria-current="page" to="/">Home</Link>
        </li>
        <li class="nav-item">
          <Link class="nav-link" to="/counter">State useEffect</Link>
        </li>
        <li class="nav-item">
          <Link class="nav-link" to="/login">Login Page</Link>
        </li>
        <li class="nav-item">
          <Link class="nav-link" to="/show-user">Showuser</Link>
        </li> 
        <li class="nav-item">
          <Link class="nav-link active" aria-current="page" to="get-emp">Get Emp</Link>
        </li>
        <li class="nav-item">
          <Link class="nav-link active" aria-current="page" to="add-user">Adduser</Link>
        </li>
        <li class="nav-item">
          <Link class="nav-link active" aria-current="page" to="add-rec">Addrec</Link>
        </li>
        <li class="nav-item">
          <Link class="nav-link active" aria-current="page" to="show-rec">Show rec</Link>
        </li>
        <li class="nav-item">
          <Link class="nav-link active" aria-current="page" to="Com10">Com10</Link>
        </li>
        <li class="nav-item">
          <Link class="nav-link active" aria-current="page" to="Com21">Com21</Link>
        </li>
        <li class="nav-item">
          <Link class="nav-link active" aria-current="page" to="Upcoming">Upcoming</Link>
        </li>
        <li class="nav-item">
          <Link class="nav-link active" aria-current="page" to="Popular">Popular</Link>
        </li>
        <li class="nav-item">
          <Link class="nav-link active" aria-current="page" to="Toprated">Toprated</Link>
        </li>
        <li class="nav-item dropdown">
          <a class="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            Dropdown
          </a>
          <ul class="dropdown-menu">
            <li><a class="dropdown-item" href="#">Action</a></li>
            <li><a class="dropdown-item" href="#">Another action</a></li>
            <li><hr class="dropdown-divider"/></li>
            <li><a class="dropdown-item" href="#">Something else here</a></li>
          </ul>
        </li>
        <li class="nav-item">
          <a class="nav-link disabled" aria-disabled="true">Disabled</a>
        </li>
      </ul>
      <form class="d-flex" role="search" onSubmit={myfunc}>
        <input ref={x1} class="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
        <button class="btn btn-outline-success" type="submit">Search</button>
      </form>
    </div>
  </div>
</nav>
    )
}

export default Header;  
