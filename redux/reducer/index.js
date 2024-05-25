const { combineReducers } = require("redux");
const { todoReducer } = require("./todoreducer");


export const rootReducer = combineReducers({ todoReducer })