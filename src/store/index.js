import { configureStore } from "@reduxjs/toolkit";
import timerReducer from "./timer";

const store = configureStore({
    reducer: timerReducer.reducer
})

export default store;