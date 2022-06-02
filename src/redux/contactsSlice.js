import { createSlice, nanoid } from '@reduxjs/toolkit'
// import { nanoid } from 'nanoid'

export const contactsSlice = createSlice({
    name: 'contacts',
    initialState: {contacts: []},
    reducers: {
        add: {
            reducer: (state, action) => {state.contacts.push(action.payload)},
            prepare: ({firstName, lastName}) => {
                const id = nanoid()
                return {payload: {id, firstName, lastName}}
            }
        },
        // del(state, action) {state}
        
    
    }
})

export const {add} = contactsSlice.actions