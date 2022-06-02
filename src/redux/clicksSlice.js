import { createSlice } from '@reduxjs/toolkit'

export const clicksSlice = createSlice({
    name: "clicks",
    initialState: {value: 5},
    reducers: {
        increment(state, action) {state.value += action.payload},
        decrement(state, action) {state.value -= action.payload},
        reset(state) {state.value = 0}
    }
})

export const {increment, reset, decrement} = clicksSlice.actions