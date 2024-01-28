
import { configureStore } from "@reduxjs/toolkit/react";
import subSlice from './Features/slices/SubStdSlice'

export const store = configureStore({
    reducer:{
        subslice:subSlice
        
    },

});


export type RootState = ReturnType<typeof store.getState>

export type DispatchState = typeof store.dispatch



