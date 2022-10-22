import React from 'react';
import { NavLink } from 'react-router-dom';

const Header = () => {
  return (
    <>
        <div className="container-fluid ">
            <div className="row">        
                <nav className="navbar navbar-expand-lg bg-light">
                    <div className="container">
                        <NavLink to="/" className="navbar-brand" >88ACADEMICS</NavLink>
                        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                            <span className="navbar-toggler-icon"></span>
                        </button>
                        <div className="collapse navbar-collapse" id="navbarSupportedContent">
                            <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
                                <li className="nav-item">
                                    <NavLink to="/" activeClassName="menubarActive" exact className="nav-link" aria-current="page">Home</NavLink>
                                </li>
                                <li className="nav-item">
                                    <NavLink to="/about" activeClassName="menubarActive" exact className="nav-link">About</NavLink>
                                </li>
                                <li className="nav-item dropdown">
                                    <NavLink to="/services" className="nav-link dropdown-toggle">
                                    Services
                                    </NavLink>
                                    <div className="dropdown-menu" aria-labelledby="navbarDropdown">
                                        <NavLink to="/services/action" className="nav-link dropdown-item">Action</NavLink>
                                        <NavLink to="/services/anotheraction" className="nav-link dropdown-item">Another Action</NavLink>
                                        <div className="dropdown-divider"></div>
                                        <NavLink to="/services/someaction" className="nav-link dropdown-item">Some Other Action</NavLink>
                                    </div>
                                </li>
                                <li className="nav-item">
                                    <NavLink to="/portfolio" activeClassName="menubarActive" exact className="nav-link">Porfolio</NavLink>
                                </li>
                                <li className="nav-item">
                                    <NavLink to="/blog" activeClassName="menubarActive" exact className="nav-link">Blog</NavLink>
                                </li>
                                <li className="nav-item">
                                    <NavLink to="/contact" activeClassName="menubarActive" exact className="nav-link">Contact Us</NavLink>
                                </li>
                                <li className="nav-item">
                                    <NavLink to="/" exact className="btn btn-danger">Login</NavLink>
                                </li>
                                <li className="nav-item">
                                    <span className="notification" ><i class="fa fa-bell notification_bell" current-count="7" aria-hidden="true"></i></span>
                                </li>
                            </ul>
                        </div>
                    </div>
                </nav>
            </div>
        </div>
    </>
  )
}

export default Header;
