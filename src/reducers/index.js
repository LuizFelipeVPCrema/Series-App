import { combineReducers } from "redux";

import serieFormReducer from "./serieFormReducer";
import  userReducer  from "./userReducer";

export default combineReducers({
    user: userReducer,
    serieForm: serieFormReducer
})