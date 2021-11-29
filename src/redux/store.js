import { createStore, applyMiddleware } from "redux";
import logger from "redux-logger";
import rootReducer from "./root-reducer";

const middlewares = [logger]

console.log(applyMiddleware)

const store = createStore(rootReducer, applyMiddleware(...middlewares))

export default store;