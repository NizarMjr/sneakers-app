import { combineReducers } from "redux";
import { reducerQuantity, reducerToggle, reducerSetImage, reducerLightBox } from "./reducerQuantity";

const reducers = combineReducers({
    quantity: reducerQuantity,
    toggleState: reducerToggle,
    imageId: reducerSetImage,
    light: reducerLightBox,
})
export default reducers;