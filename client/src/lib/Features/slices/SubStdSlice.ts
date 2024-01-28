import { StateData, indiaStates } from "@/api/SubjectData";
import { createSlice } from "@reduxjs/toolkit";

interface SubjectData {
  BoardLabel: string[];
  value: number;
  item: StateData[];
  Subjects: { name: string; content: string; id: number; img: string }[];
  Standards: string[];
  Facultys: { name: string; exp: string; id: number; vision: string }[];
}

const item = () => {
  return indiaStates;
};

const initialState: SubjectData = {
  item: indiaStates,
  value: 777,
  BoardLabel: [],
  Subjects: [{ name: "", id: 0, content: "", img: "" }],
  Standards: [],
  Facultys: [
    {
      name: "Akash Sharma",
      exp: "3 year",
      vision:
        "To provide mentorship and guidance, serving as a resource for students as they navigate academic and career paths.",
      id: 0,
    },
  ],
};

export const subSlice = createSlice({
  name: "subslice",
  initialState,
  reducers: {
    increment: (state) => {
      state.value += 1;
    },

    decrement: (state) => {
      state.value -= 1;
    },

    StateSelect: (state, action) => {
      state.BoardLabel = [];
      state.item.forEach((bn) => {
        let ii = bn.Board.filter((b) => action.payload === b.BoardName);
        if (ii.length < 0) {
          console.log("not found");
        } else {
          let f = ii.flatMap((d) => d.Boardlabel);
          state.BoardLabel.push(...f);
        }
      });
    },
    BoardSelect: (state, action) => {
      state.Standards = [];
      state.item.forEach((bn) => {
        let ii = bn.Board.filter((b) => action.payload === b.Boardlabel);
        if (ii.length < 0) {
          console.log("not found");
        } else {
          let f = ii.flatMap((d) => d.Standard.flatMap((s) => s.std));

          state.Standards = Array.from(f);
        }
      });
    },

    SetSuject: (state, action) => {
      state.Subjects = [];
      state.Facultys = [];
      state.item.forEach((sub) => {
        let g = sub.Board.find(
          (b) =>
            b.Boardlabel === action.payload[1] &&
            b.Standard.flatMap((s) => s.std === action.payload[0])
        );

        if (g) {
          let ss = g.Standard.find((s) => s.std === action.payload[0]);
          if (ss) {
            state.Subjects = Array.from(ss.Sbuject);
            state.Facultys = Array.from(ss.Faculty);
          }
        }
      });
    },
  },
});

export const { increment, decrement, StateSelect, BoardSelect, SetSuject } =
  subSlice.actions;
export default subSlice.reducer;
