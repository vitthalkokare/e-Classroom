
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
            
            if(action.payload === true){
                state.isUser = true;
            }
            if(action.payload === false){
                state.isUser = false;
            }
        }

    }
    
})

export const {setCard}  = AuthCardSlice.actions;
export default AuthCardSlice.reducer;