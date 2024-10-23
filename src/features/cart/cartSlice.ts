import { createSlice } from "@reduxjs/toolkit";

// Retrieve initial state from localStorage
const initialState = {
  cartId: "",
  data: {
    products: [],
    totalCartPrice: 0,
  },
  numOfCartItems: Number(localStorage.getItem("numOfCartItems") || 0),
};

// Create the cart slice
const cartSlice = createSlice({
  name: "cartSlice",
  initialState,
  reducers: {
    setCredentials: (state, action) => {
      const { cartId, data, numOfCartItems } = action.payload;
      state.cartId = cartId;
      state.data = data;
      state.numOfCartItems = numOfCartItems;
    },
  },
});

export const { setCredentials } = cartSlice.actions;
export default cartSlice.reducer;
