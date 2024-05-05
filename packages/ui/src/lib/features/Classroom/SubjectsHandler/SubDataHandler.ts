import { createSlice } from "@reduxjs/toolkit";


export interface SubjectData {
    boardName: string[];
    states:string[]
    item: any[];
    Subjects: { title: string; about: string; id: number; img: string, price:number,standard:string,boardName:string,state:string }[];
    Standards: string[];
    Facultys: { title: string; exp: string; id: number; vision: string }[];
    Cart:any[];
    Total:number;
    BoardLebels: string[];
  }
  
  
  const initialState: SubjectData = {
    item: [],
    states:[],
    BoardLebels:[],
    boardName: [], 
    Subjects: [],
    Standards: [],
    Facultys: [],
    Cart:[],
    Total:0
  };


const QuerySubdata = createSlice({
    name:'querysubdata',
    initialState,
    reducers:{

        QueryData:(state)=>{
            state.states = [];
            state.item = [];
            state.BoardLebels = [];

                if (!localStorage.getItem('enrolled')) {
                   localStorage.setItem('enrolled', JSON.stringify([]));
                }


               
            const subdataString = localStorage.getItem('subdata')

            if(subdataString){
                try {
                    const d = JSON.parse(subdataString);

                    state.item.push(...d);
                } catch (error) {
                    console.error("Error parsing 'subdata' from local storage:", error);
                }

                const uniqueStates = [...new Set(state.item.map(item => item.state))];
                state.states.push(...uniqueStates);

                const uniqueBoard = [...new Set(state.item.map(lebel => lebel.boardName))]
                state.BoardLebels.push(...uniqueBoard);
            }
            



            
        },
        stateHandler:(state,action)=>{
            state.Subjects = [];
            state.boardName = [];
           
            
        const s = state.item.filter((i)=>i.state === action.payload);

        const bl:any = [...new Set(s.flatMap((lebel)=>lebel.boardName))]

        state.boardName.push(...bl);
           
            
        },

        boardHandler:(state,action)=>{
            state.Subjects = [];
            state.Standards = []
            const cl = state.item
            .filter((item)=>item.boardName === action.payload);
            const s = [...new Set(cl.map((val)=> val.standard))];
           state.Standards.push(...s);
           

        },

        classHandler:(state,action)=>{

            state.Subjects = [];

            
           const ee = state.item.filter((i)=>i.state === action.payload[2])
           .filter((b)=>b.boardName === action.payload[1])
           .filter((c)=>c.standard === action.payload[0]);

           console.log(action.payload)

           ee.map((i)=>{
            state.Subjects.push(i)
            

           })



    
        },

        AddItem: (state,action) => {

          



            state.Total = state.Total + action.payload[1];
            const {title,price,about,id} = action.payload[0]
            const ad = {title:title,price:price,about:about,id:id}
            state.Cart.push(ad as object)


        const array = JSON.parse(localStorage.getItem('enrolled') as string) || [];
           const ss = array.find((i:any)=>i.title === title);
           if(!ss){
        array.push(ad);
        localStorage.setItem('enrolled',JSON.stringify(array));
           }
       

          },
      
          decrement: (state,action) => {
            if(state.Total >= 0) state.Total = state.Total - action.payload[1];
            
            state.Cart = state.Cart.filter((item) => item.title !== action.payload[0]);
            const storedArrayString = localStorage.getItem('enrolled');
            const array = storedArrayString ? JSON.parse(storedArrayString) : [];
            const updatedArray = array.filter((item: { title: string }) => item.title !== action.payload[0]);

            localStorage.setItem('enrolled', JSON.stringify(updatedArray));

                  
          },
      
        },

});

export  const {QueryData,stateHandler,boardHandler,classHandler,AddItem,decrement} = QuerySubdata.actions


export default QuerySubdata.reducer;

