import React, { useRef } from "react";
import './bergermenu.css'

const BergerMenu = () => {
    const berger = useRef();
    const toggleBergerList = () => {
        if (berger.current.classList.contains("berger-lists-none"))
            berger.current.classList.remove("berger-lists-none");
        else
            berger.current.classList.add("berger-lists-none");
    }
    return (
        <div className="berger-menu berger-none">
            <div className="berger-icon " onClick={() => (toggleBergerList())}>
                <img src='../../../images/icon-menu.svg' alt="berger icon" />
            </div>
            <div className="berger-lists berger-lists-none" ref={berger}>
                <div className="icon-close" onClick={() => toggleBergerList()}>
                    <img src="../../../images/icon-close.svg" alt="" />
                </div>
                <ul>
                    <li className="berger-list">Collections</li>
                    <li className="berger-list">Men</li>
                    <li className="berger-list">Women</li>
                    <li className="berger-list">About</li>
                    <li className="berger-list">Contact</li>
                </ul>
            </div>
        </div>
    )
}
export default BergerMenu;