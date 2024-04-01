import { combineReducers } from "redux";

import serieFormReducer from "./serieFormReducer";
import  userReducer  from "./userReducer";
import seriesReducer from "./seriesReducer";

export default combineReducers({
    user: userReducer,
    serieForm: serieFormReducer,
    series: seriesReducer
})