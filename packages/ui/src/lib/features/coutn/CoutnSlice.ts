import {createSlice} from "@reduxjs/toolkit"

export interface myCoutn{
    value: number
}

const initialState: myCoutn = {
    value: 33
}


const CouterSlice = createSlice({
    name:"couterr",
    initialState,

    reducers:{
        inc:(state,action)=>{
            state.value  += 1;
            console.log(action.payload)

        },
        dec:(state)=>{
            state.value -= 1;
            console.log('clied')

        }

    }
})


export const {inc, dec} = CouterSlice.actions
export default CouterSlice.reducer;
