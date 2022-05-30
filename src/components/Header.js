import React from 'react';
import { NavLink } from "react-router-dom";
import { useSelector } from 'react-redux';


const Header = () => {
    const state = useSelector((state)=> state.handleBag)
    return (
        <div>
            <nav className="navbar navbar-expand-lg bg-light">
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
                                Shopping Bag ({state.length})</NavLink>
                        </div>
                    </div>
                </div>
            </nav>
        </div>
    )

}

export default Header;
