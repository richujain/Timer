import { createSlice } from "@reduxjs/toolkit";

const initialCounterState = { hour: 0, minute: 0, second: 0, active: false, resetTimer: false }

const timerSlice = createSlice({
    name: 'timer',
    initialState: initialCounterState,
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
            state.minute = state.counter + action.payload
        },
        timerActive(state){
            state.active = true
        },
        resetTimer(state) {
            state.hour = 0
            state.minute = 0
            state.second = 0
            state.active = false
        },
    }
})
export const counterActions = counterSlice.actions

export default timerSlice