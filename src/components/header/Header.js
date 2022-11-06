import React from "react";
import BergerMenu from "../burgerMenu/BergerMenu";
import Navbar from "../navbar/Navbar";
import ShopAndProfile from "../shopandprofile/ShopAndProfile";
import './header.css'

const Header = () => {
    return (
        <div className="header">
            <BergerMenu />
            <Navbar />
            <ShopAndProfile />
        </div>

    )
}
export default Header;