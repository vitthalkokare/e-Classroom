import { createSlice, PayloadAction } from '@reduxjs/toolkit';

export interface IItem {
    state: string;
    boardName: string;
    standard: string;
    title: string;
    lectureTime:string;
    fname:string

}

export interface IInitialState {
    item: IItem[];
    state: string[];
    boardLebel: string[];
    subjects: string[];
    classlebel: string[];
}

const initialState: IInitialState = {
    item: [],
    state: [],
    boardLebel: [],
    subjects: [],
    classlebel: [],
};

const facultyDataSlice = createSlice({
    name: 'facultydatahandler',
    initialState: initialState,
    reducers: {
        facultyData: (state, action: PayloadAction<IItem[]>) => {
            state.item = action.payload;
            state.state = [...new Set(action.payload.map(item => item.state))];
        },
        statedHandler: (state, action: PayloadAction<string>) => {
           

            state.subjects = [];
            state.boardLebel = [];
            state.classlebel = [];
            const filteredData = state.item.filter(item => item.state === action.payload);
            state.boardLebel = [...new Set(filteredData.map(item => item.boardName))];
           
        },
        boardHandler: (state, action: PayloadAction<[string, string]>) => {
            state.subjects = [];
            state.classlebel = [];
                console.log(action.payload)

            const [stateName, boardName] = action.payload;
            const filteredData = state.item.filter(item => item.state === stateName && item.boardName === boardName);
            state.classlebel = [...new Set(filteredData.map(item => item.standard))];
        },
        classHandler: (state, action: PayloadAction<[string, string, string]>) => {
            state.subjects = [];
            const [stateName, boardName, standard] = action.payload;
            const filteredData = state.item.filter(item => item.state === stateName && item.boardName === boardName && item.standard === standard);
            state.subjects = [...new Set(filteredData.map(item => item.title))];
            console.log(state.subjects);
        },
    },
});

export const { facultyData, statedHandler, boardHandler, classHandler } = facultyDataSlice.actions;
export default facultyDataSlice.reducer;
