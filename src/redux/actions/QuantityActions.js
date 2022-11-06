import { ActionTypes } from "../constants/ActionTypes";

export const increaseQuantity = () => {
    return {
        type: ActionTypes.ADD_QUANTITY,
    }
}
export const decreaseQuantity = () => {
    return {
        type: ActionTypes.DELETE_QUANTITY,
    }
}
export const restartQuantity = () => {
    return {
        type: ActionTypes.RESTART_QUANTITY,
    }
}
export const toggleBasket = () => {
    return {
        type: ActionTypes.TOGGLE_BASKET,
    }
}
export const activeBasket = () => {
    return {
        type: ActionTypes.ACTIVE_BASKET,
    }
}
export const setImage = (id) => {
    return {
        type: ActionTypes.SET_IMAGE,
        payload: id,
    }
}
export const increaseImageId = () => {
    return {
        type: ActionTypes.INCREASE_ID,
    }
}
export const decreaseImageId = () => {
    return {
        type: ActionTypes.DECREASE_ID,
    }
}
export const lightBoxShow = () => {
    return {
        type: ActionTypes.LIGHTBOX_SHOW,
    }
}
export const lightBoxHide = () => {
    return {
        type: ActionTypes.LIGHTBOX_HIDE,
    }
}
