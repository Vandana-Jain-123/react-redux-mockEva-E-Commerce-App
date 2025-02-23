import { createStore, combineReducers, applyMiddleware, compose } from "redux"
import cartReducer from "./cartReducer"
import productReducer from "./productReducer"
import {thunk }from "redux-thunk"

//  export const store = createStore(productReducer, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__() )

// Combine multiple reducers
const rootReducer = combineReducers({
     cart: cartReducer,
    product: productReducer
});

// Setup Redux DevTools
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

// Create the store with middleware
export const store = createStore(rootReducer, composeEnhancers(applyMiddleware(thunk)));
