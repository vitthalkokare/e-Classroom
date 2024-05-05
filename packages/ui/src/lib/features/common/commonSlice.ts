
import {createSlice} from '@reduxjs/toolkit'

export interface Istate{
    themeMode:boolean 
    cardWidth:number
    mobNav:{isNav:boolean,display:string}
}


const initialState:Istate = {

    themeMode:false,
    cardWidth:0,
    mobNav:{isNav:false,display:'hidden'}

}

const commonSlice = createSlice({
    name:"commonUtils",
    initialState:initialState,
    reducers:{
        ThemeMode:(state,action)=>{
        let b = document.querySelector('body');

            if(action.payload === true){

                b?.classList.add('dark');


               localStorage.setItem('darkmode','dark');

                state.themeMode = true;
            }
            else{
                b?.classList.remove('dark')
                localStorage.removeItem('darkmode');
                state.themeMode = false;
            }
        },
        DrawerHandler:(state,action)=>{
           
           state.cardWidth = action.payload;

        },
        mobNavHandler:(state,action)=>{
            state.mobNav.display = action.payload;
        }

    } 

});

export default commonSlice.reducer;
export const {ThemeMode,DrawerHandler,mobNavHandler} = commonSlice.actions;