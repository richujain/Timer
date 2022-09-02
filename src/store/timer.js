import { createSlice } from "@reduxjs/toolkit";

const initialTimerState = { hour: 0, minute: 0, second: 0, active: false, resetTimer: false }

const timerSlice = createSlice({
    name: 'timer',
    initialState: initialTimerState,
    reducers: {
        incrementHour(state) {
            state.hour++ 
        },
        incrementMinute(state) {
            state.minute++
        },
        decrementHour(state) {
            state.hour--
        },
        decrementMinute(state) {
            state.minute--
        },
        increaseMinute(state, action) {
            state.minute = state.minute + action.payload
        },
        incrementSecond(state) {
            state.second++
        },
        decrementSecond(state) {
            state.second--
        },
        timerActive(state, action){
            state.active = action.payload
        },
        resetTimer(state) {
            state.hour = 0
            state.minute = 0
            state.second = 0
            state.active = false
        },
        setHour(state, action) {
            state.hour = action.payload
        },
        setMinute(state, action) {
            state.minute = action.payload
        },
        setSecond(state, action) {
            state.second = action.payload 
        },
        
    }
})
export const timerActions = timerSlice.actions

export default timerSlice