import { combineReducers } from "redux";
import authReducer from "./auth";
import currentUserReducer from "./currentUserReducer";
import questionReducer from "./questionReducer";
export default combineReducers({
  authReducer,
  currentUserReducer,
  questionReducer,
});
