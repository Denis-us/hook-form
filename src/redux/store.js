import { ActionTypes } from '@mui/base'
import { stepButtonClasses } from '@mui/material'
import {configureStore, createSlice} from '@reduxjs/toolkit'
// import contactsReduser from './formSlice'
// import buttonReduser from './buttonSlice'

// export const increment = createAction('clicks/increment')

// const buttonReducer = createReducer(
//     {value: 0}, {
//     [increment]: (state, action) => {state.value += action.payload}
// })

const clicksSlice = createSlice({
    name: "clicks",
    initialState: {value: 5},
    reducers: {
        increment(state, action) {state.value += action.payload},
        decrement(state, action) {state.value -= action.payload},
        reset(state) {state.value = 0}
    }
})

export const {increment, reset, decrement} = clicksSlice.actions

export const store = configureStore({
    reducer: {
        clicks: clicksSlice.reducer,
        // contacts: contactsReduser
    }
})