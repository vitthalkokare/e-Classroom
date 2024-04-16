import {configureStore} from "@reduxjs/toolkit"
import AuthCardSlice from "./features/Classroom/Auth/Slices/AuthCardSlice"
import SubDataHandler from "./features/Classroom/SubjectsHandler/SubDataHandler"
import facultyDataHandler from "./features/Faculty/facultyDataHandler"
import studentSliceHandler from "./features/Classroom/Student/StudentSlice"


export const store = configureStore({
   
    reducer:{
        AuthCard:AuthCardSlice,
        querysubdata:SubDataHandler,
        facultydata:facultyDataHandler,
        studentslice:studentSliceHandler


    },
})


export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch