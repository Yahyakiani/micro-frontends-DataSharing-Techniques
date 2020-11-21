import { createAction, createSlice } from "@reduxjs/toolkit"

let initialState = {
  value:0,
  users:[]
}
const testDecrement = createAction('testDecrement')
const testIncrement = createAction('testIncrement')

const counterSlice = createSlice({
    name: 'counter',
    initialState: initialState,
    reducers: {
      increment: state => {
        state.value += 1
      },

      decrement: state => {state.value -= 1},
      addUser: (state,action) => {

        return {
        ...state,
        users:[...state.users,action.payload]
        }
        // state.users.push(action.payload)
      },
    },
    extraReducers: (builder) => {
      builder
        .addCase(testDecrement, (state, action) => {
          state.value -= 1
        })
        .addCase(testIncrement, (state, action) => {
          state.value += 1
        })
      },
  })

  export const {
    increment,
    decrement,
    addUser
  } = counterSlice.actions

  export default counterSlice.reducer