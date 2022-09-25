import {configureStore} from "@reduxjs/toolkit";

import userReducer from "../features/userSlice"
const store=configureStore({
    reducer:{
        app: userReducer
    }
})

export default store;
export type RootState =ReturnType<typeof store.getState>
export type AppDispatch =typeof store.dispatch