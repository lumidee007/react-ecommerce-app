import { createStore, applyMiddleware } from "redux";
import {persistStore} from 'redux-persist'
import logger from "redux-logger";
import rootReducer from "./root-reducer";

const middlewares = [logger]

console.log(applyMiddleware)



 export const store = createStore(rootReducer, applyMiddleware(...middlewares))

 export const persistor = persistStore(store)

