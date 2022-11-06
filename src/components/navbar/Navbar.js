import React from "react";
import './navbar.css'
const Navbar = () => {
    return (
        <div className="navbar">
            <div className="logo">
                <img src="../../../images/logo.svg" alt="" />
            </div>
            <div className="nav-list">
                <ul className="lists">
                    <li className="list">Collections</li>
                    <li className="list">Men</li>
                    <li className="list">Women</li>
                    <li className="list">About</li>
                    <li className="list">Contact</li>
                </ul>
            </div>
        </div>
    )
}
export default Navbar;