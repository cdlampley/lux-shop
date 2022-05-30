import React from 'react';
import { NavLink } from "react-router-dom";


const Header = () => {
    return (
        <div>
            <nav className="navbar navbar-expand-lg bg-light mb-5">
                <div className="container-fluid">
                    <NavLink className="navbar-brand link-dark text-uppercase fw-bold fs-4" to="/">Lux Shop</NavLink>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                            <li className="nav-item">
                                <NavLink className="nav-link link-dark" to="/products">Products</NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink className="nav-link link-dark" to="/about">About</NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink className="nav-link link-dark" to="/contact">Contact</NavLink>
                            </li>
                        </ul>
                        <div className="buttons">
                            <NavLink to="/login" className="btn btn-outline-dark ms-2">
                                <i className="fa fa-sign-in me-1" aria-hidden="true"></i>
                                Login
                            </NavLink>
                            <NavLink to="/register" className="btn btn-outline-dark ms-2">
                                <i className="fa fa-sign-in me-1" aria-hidden="true"></i>
                                Register
                            </NavLink>
                            <NavLink to="/cart" className="btn btn-outline-dark ms-2">
                                <i className="fa fa-sign-in me-1" aria-hidden="true"></i>
                                Shopping Bag (0)
                            </NavLink>
                        </div>
                    </div>

                </div>
            </nav>
        </div>
    )

}

export default Header;
