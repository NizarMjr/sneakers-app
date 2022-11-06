import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { increaseImageId, lightBoxHide, lightBoxShow, setImage, decreaseImageId } from "../../redux/actions/QuantityActions";
import './lightbox.css'

const LightBox = () => {
    const id = useSelector(state => state.imageId);
    const lightBox = useSelector(state => state.light);
    const dispatch = useDispatch();
    const activeLightBox = () => {
        dispatch(lightBoxShow());
    }
    return (
        <div className={`lightbox ${lightBox}`} >
            <div className="icon-close">
                <img src="../../../images/icon-close.svg" alt="close pic" onClick={() => dispatch(lightBoxHide())} />
            </div>
            <div className="lightbox-content">
                <div className="lightbox-pic">
                    <img src="../../../images/icon-previous.svg" alt="next pic" className="next" onClick={() => dispatch(increaseImageId())} />
                    <img src={`../../../images/image-product-${id}.jpg`} alt="picture" />
                    <img src="../../../images/icon-next.svg" alt="next pic" className="previous" onClick={() => dispatch(decreaseImageId())} />
                </div>
                <div className="second-images">
                    <img src={`../../../images/image-product-1-thumbnail.jpg`} alt="second picture" onClick={() => { dispatch(setImage((1))); activeLightBox() }} />
                    <img src={`../../../images/image-product-2-thumbnail.jpg`} alt="second picture" onClick={() => { dispatch(setImage((2))); activeLightBox() }} />
                    <img src={`../../../images/image-product-3-thumbnail.jpg`} alt="second picture" onClick={() => { dispatch(setImage((3))); activeLightBox() }} />
                    <img src={`../../../images/image-product-4-thumbnail.jpg`} alt="second picture" onClick={() => { dispatch(setImage((4))); activeLightBox() }} />
                </div>
            </div>
        </div>
    )
}
export default LightBox;