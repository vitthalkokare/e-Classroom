
import {createSlice} from '@reduxjs/toolkit'


interface AuthIiterface{
    isUser: boolean
}

const AuthCardSlice = createSlice({
    name:'AuthCard',
    initialState:{
        isUser : false,
    },
    reducers:{
        setCard:(state,action)=>{
            
            action.payload == true ? state.isUser = true : state.isUser = false;
        }

    }
    
})

export const {setCard}  = AuthCardSlice.actions;
export default AuthCardSlice.reducer;