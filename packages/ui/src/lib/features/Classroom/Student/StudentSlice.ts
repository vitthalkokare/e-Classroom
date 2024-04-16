
import {createSlice} from '@reduxjs/toolkit'

export interface student{
    name: string
    standard: string
    
}

export interface Istudent{
    student:any[]
}


const initialState:Istudent = {
    student:[]

}

const StudentSlice = createSlice({
    name:'studentSllice',
    initialState,
    reducers:{
        allStudent:(state,action)=>{
           
            state.student = action.payload;
            
            console.log(action.payload);
            

        }

    }
});

export const {allStudent} = StudentSlice.actions;

export default StudentSlice.reducer;