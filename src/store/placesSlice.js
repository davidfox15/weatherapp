import { createSlice } from "@reduxjs/toolkit";

export const placesSlice = createSlice({
  name: "places",
  initialState: {
    values: [],
  },
  reducers: {
    add: (state, action) => {
      console.log(state.values);
      console.log(action.payload.place);
      state.values.push(action.payload.place);
    },
    del: (state, action) => {
      state.values = state.values.filter((item) => item.name.toLowerCase() !== action.payload.name.toLowerCase());
    },
    replace: (state, action) => {
      state.values = action.payload.localData;
    },
  },
});

// Action creators are generated for each case reducer function
export const { add, del, replace } = placesSlice.actions;

export default placesSlice.reducer;
