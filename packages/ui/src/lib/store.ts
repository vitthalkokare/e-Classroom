import {configureStore} from "@reduxjs/toolkit"
import AuthCardSlice from "./features/Classroom/Auth/Slices/AuthCardSlice"
import SubDataHandler from "./features/Classroom/SubjectsHandler/SubDataHandler"

export const store = configureStore({
   
    reducer:{
        AuthCard:AuthCardSlice,
        querysubdata:SubDataHandler

    },
})


export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch