import { createStore, combineReducers, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import { ImagesReducer } from "./reducers";

const rootReducer = combineReducers({
  images: ImagesReducer,
});

export default createStore(rootReducer, applyMiddleware(thunk));
