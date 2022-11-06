import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { decreaseQuantity, restartQuantity } from "../../redux/actions/QuantityActions";
import './basket.css'

const Basket = () => {
    const toggle = useSelector(state => state.toggleState.toggle);
    const number = useSelector(state => state.quantity)
    const dispatch = useDispatch();
    const restartPrice = () => {
        dispatch(restartQuantity())
    }
    return (
        <div className={`basket ${toggle}`}>
            <div className="basket-title">Cart</div>
            {number != 0 ? <><div className="basket-content">
                <div className="basket-image">
                    <img src="../../../images/image-product-1-thumbnail.jpg" alt="" />
                </div>
                <div className="basket-details">Fall Limited Edition Sneakers $125.00 x <span>{number}</span><span className="total-price">  ${125 * number}</span>
                </div>
                <div className="delete" onClick={() => restartPrice()}>
                    <img src="../../../images/icon-delete.svg" alt="" />
                </div>
            </div>
                <div className="checkout">Checkout</div></> : <div className="empty-basket">Your Cart is empty</div>}
        </div>
    )
}
export default Basket;