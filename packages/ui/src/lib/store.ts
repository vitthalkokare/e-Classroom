import {configureStore} from "@reduxjs/toolkit"
import CoutnSlice from "./features/coutn/CoutnSlice"
import  subSlice  from "./features/Classroom/SubjectsHandler/SubStdSlice"
import AuthCardSlice from "./features/Classroom/Auth/Slices/AuthCardSlice"

export const store = configureStore({
   
    reducer:{
        counterr:CoutnSlice,
        AuthCard:AuthCardSlice,
        subslice:subSlice

    },
})


export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch