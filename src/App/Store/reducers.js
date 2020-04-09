import { combineReducers } from "redux";
import { loginReducer } from "../Containers/LoginContainer/dux";

const rootReducer = combineReducers(Object.assign({ loginReducer }));
export default (state, action) => rootReducer(state, action);
