import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  id: 400,
  maindata: [],
  flag: false,
  currentid: 0,
  navFlag: false,
};
const Crudslice = createSlice({
  name: "cruddata",
  initialState,
  reducers: {
    arraydata: (state, action) => {
      if (state.flag === true) {
        state.maindata = state.maindata.map((item) => {
          if (state.currentid === item.id) {
            return action.payload;
          }
          return item;
        });
        state.flag = false;
      } else {
        const data = action.payload;
        state.maindata = [...state.maindata, { ...data, id: state.id++ }];
      }
    },
    deleteitem: (state, action) => {
      state.maindata = state.maindata.filter((item) => {
        return item.id !== action.payload;
      });
    },
    setflag: (state, action) => {
      state.flag = true;
      state.currentid = action.payload;
    },
    searchdatafilter: (state, action) => {
      state.searchdata = action.payload;
    },
    searchitemdata: (state, action) => {
      state.maindata = state.maindata.filter(
        (item) => item.priority.toLowerCase() === action.payload.toLowerCase()
      );
    },
    setNavFlag: (state, action) => {
      state.navFlag = action.payload;
    },
  },
});

export const {
  arraydata,
  deleteitem,
  setflag,
  searchdatafilter,
  searchitemdata,
  setNavFlag,
} = Crudslice.actions;
export default Crudslice.reducer;
