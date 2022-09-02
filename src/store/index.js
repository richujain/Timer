import { configureStore } from "@reduxjs/toolkit";
import timerReducer from "./timer";

const store = configureStore({
    reducer: timerReducer
})

export default store;