import { configureStore } from '@reduxjs/toolkit'
import rootReducer from '../reducers/rootReducer'


const store = configureStore({
  reducer: rootReducer
})

window.store=store;


export default store