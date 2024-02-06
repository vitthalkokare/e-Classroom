
import { configureStore } from "@reduxjs/toolkit/react";
import subSlice from './Features/SubjectsHandler/slices/SubStdSlice'
import AuthCardSlice from "./Features/Auth/Slices/AuthCardSlice";

export const store = configureStore({
    reducer:{
        subslice:subSlice,
        AuthCard:AuthCardSlice

        
    },

});


export type RootState = ReturnType<typeof store.getState>

export type DispatchState = typeof store.dispatch



