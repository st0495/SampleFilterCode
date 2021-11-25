import { combineReducers } from "redux";
import DashBoardScreenReducer from "./container/Dashboard/reducer";

const rootAppReducer = combineReducers({
  DashBoardScreenReducer,
});

const rootReducer = (state, action) => {
  return rootAppReducer(state, action);
};

export default rootReducer;
