import {configureStore} from '@reduxjs/toolkit'
import {contactsSlice} from './contactsSlice'
import {clicksSlice} from './clicksSlice'
// import contactsReduser from './formSlice'
// import buttonReduser from './buttonSlice'

// export const increment = createAction('clicks/increment')

// const buttonReducer = createReducer(
//     {value: 0}, {
//     [increment]: (state, action) => {state.value += action.payload}
// })



export const store = configureStore({
    reducer: {
        clicks: clicksSlice.reducer,
        contacts: contactsSlice.reducer
    }
})