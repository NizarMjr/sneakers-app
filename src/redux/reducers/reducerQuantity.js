import { lightBoxShow } from "../actions/QuantityActions";
import { ActionTypes } from "../constants/ActionTypes";

const initState = 0;
const id = 1;
const toggleAndNotification = {
    toggle: 'basket-none',
    notification: 'notification-none',
};
const lightToggle = "lightbox-none";

export const reducerQuantity = (state = initState, { type }) => {
    switch (type) {
        case ActionTypes.ADD_QUANTITY:
            return state + 1;
        case ActionTypes.DELETE_QUANTITY:
            if (state > 0)
                return state - 1;
        case ActionTypes.RESTART_QUANTITY:
            return state = 0;
        default:
            return state;
    }
}

export const reducerToggle = (state = toggleAndNotification, { type }) => {
    switch (type) {
        case ActionTypes.TOGGLE_BASKET:
            return state.toggle == 'basket-none' ? { ...state, toggle: '' } : { ...state, toggle: 'basket-none' }
        case ActionTypes.ACTIVE_BASKET:
            return { ...state, toggle: '', notification: '' }
        default:
            return state;
    }
}
export const reducerSetImage = (state = id, { type, payload }) => {
    switch (type) {
        case ActionTypes.SET_IMAGE:
            return state = payload;
        case ActionTypes.INCREASE_ID:
            return state % 4 + 1;
        case ActionTypes.DECREASE_ID:
            return (state <= 1) ? state = 4 : state - 1;
        default:
            return state;
    }
}
export const reducerLightBox = (state = lightToggle, { type }) => {
    switch (type) {
        case ActionTypes.LIGHTBOX_SHOW:
            state = '';
            return state;
        case ActionTypes.LIGHTBOX_HIDE:
            state = 'lightbox-none';
            return state;
        default:
            return state;
    }
}

