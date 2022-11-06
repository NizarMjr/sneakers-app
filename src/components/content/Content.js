import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { increaseQuantity, decreaseQuantity, toggleBasket, activeBasket, setImage, lightBoxShow } from "../../redux/actions/QuantityActions";
import './content.css'
const Content = () => {
    const number = useSelector(state => state.quantity);
    const id = useSelector(state => state.imageId);
    const dispatch = useDispatch();
    const showBasket = () => {
        dispatch(activeBasket())
    }
    const activeLightBox = () => {
        dispatch(lightBoxShow());
    }
    return (
        <div className="content">
            <div className="images">
                <div className="main-image">
                    <img src={`../../../images/image-product-${id}.jpg`} alt="main picture" onClick={() => activeLightBox()} />
                </div>
                <div className="second-images">
                    <img src={`../../../images/image-product-1-thumbnail.jpg`} alt="second picture" onClick={() => { dispatch(setImage((1))); activeLightBox() }} />
                    <img src={`../../../images/image-product-2-thumbnail.jpg`} alt="second picture" onClick={() => { dispatch(setImage((2))); activeLightBox() }} />
                    <img src={`../../../images/image-product-3-thumbnail.jpg`} alt="second picture" onClick={() => { dispatch(setImage((3))); activeLightBox() }} />
                    <img src={`../../../images/image-product-4-thumbnail.jpg`} alt="second picture" onClick={() => { dispatch(setImage((4))); activeLightBox() }} />
                </div>
            </div>
            <div className="description">
                <h3 className="founder">Sneaker Company</h3>
                <h2 className="title">Fall Limited Edition Sneakers</h2>
                <p className="details">These low-profile sneakers are your perfect casual wear companion. Featuring a durable rubber outer sole, they’ll
                    withstand everything the weather can offer.</p>
                <span className="price">$125.00 <span className="discount">50%</span></span>
                <span className="previous-price">$250.00</span>
                <div className="buy-part">
                    <div className="counter">
                        <button className="decrease" onClick={() => dispatch(decreaseQuantity())}>-</button>
                        <span className="number">{number}</span>
                        <button className="increase" onClick={() => dispatch(increaseQuantity())}>+</button>
                    </div>
                    <button className="add-to-cart" onClick={() => showBasket()}>Add to cart</button>
                </div>
            </div>
        </div>
    )
}
export default Content;