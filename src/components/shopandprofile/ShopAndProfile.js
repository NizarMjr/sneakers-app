import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { toggleBasket } from "../../redux/actions/QuantityActions";
import Basket from "../basket/Basket";
import './shopandprofile.css'
const ShopAndProfile = () => {
    const dispatch = useDispatch();
    const toggleBasketShop = () => {
        dispatch(toggleBasket());
    }
    const number = useSelector(state => state.quantity);
    const notification = useSelector(state => state.toggleState.notification)
    return (
        <div className="shop-profile">
            <div className="shop" onClick={() => toggleBasketShop()}>
                <div className="icon">
                    <img src='../../../images/icon-cart.svg' alt="" />
                </div>
                <div className={`notification ${notification}`}>{number}</div>
            </div>
            <Basket />
            <div className="profile">
                <img src="../../../images/image-avatar.png" alt="" />
            </div>
        </div>
    )
}
export default ShopAndProfile;