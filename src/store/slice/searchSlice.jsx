import { createSlice } from "@reduxjs/toolkit";

export const searchSlice = createSlice({
  name: "search",
  initialState: {
    value: "",
  },
  reducers: {
    searchInput: (state, action) => {
      state.value = action.payload;
    },
  },
});

export const { searchInput } = searchSlice.actions;
export default searchSlice.reducer;
