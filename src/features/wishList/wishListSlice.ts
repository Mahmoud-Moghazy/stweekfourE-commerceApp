import { createSlice } from "@reduxjs/toolkit";

// Retrieve initial state from localStorage
const initialState = {
  wishListData: []
};

// Create the auth slice
const wishListSlice = createSlice({
  name: "wishListSlice",
  initialState,
  reducers: {
    setCredentials: (state, action) => {
      const { data } = action.payload;
      state.wishListData = data;
    },
  },
});

export const { setCredentials } = wishListSlice.actions;
export default wishListSlice.reducer;
