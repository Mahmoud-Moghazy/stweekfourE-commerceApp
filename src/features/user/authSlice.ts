import { createSlice } from "@reduxjs/toolkit";

// Retrieve initial state from localStorage
const initialState = {
  user: JSON.parse(localStorage.getItem("user") || "{}") || {
    email: "",
    name: "",
    role: "",
  },
  token: localStorage.getItem("token") || null,
};

// Create the auth slice
const authSlice = createSlice({
  name: "authSlice",
  initialState,
  reducers: {
    setCredentials: (state, action) => {
      const { user, token } = action.payload;
      state.user = user;
      state.token = token;
      // Save user and token to localStorage
      localStorage.setItem("user", JSON.stringify(user));
      localStorage.setItem("token", token);
    },
    logout: (state) => {
      state.token = null;
      state.user = {
        email: "",
        name: "",
        role: "",
      };
      // Remove user and token from localStorage
      localStorage.removeItem("user");
      localStorage.removeItem("token");
    },
  },
});

export const { setCredentials, logout } = authSlice.actions;
export default authSlice.reducer;

