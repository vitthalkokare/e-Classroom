import {configureStore} from "@reduxjs/toolkit"
import  subSlice  from "./features/Classroom/SubjectsHandler/SubStdSlice"
import AuthCardSlice from "./features/Classroom/Auth/Slices/AuthCardSlice"

export const store = configureStore({
   
    reducer:{
        AuthCard:AuthCardSlice,
        subslice:subSlice

    },
})


export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch