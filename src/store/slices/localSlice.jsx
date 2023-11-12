import { createSlice } from "@reduxjs/toolkit";

const localSlice = createSlice({
  name: "userlocal",
  initialState: JSON.parse(localStorage.getItem("user")) || [],
  reducers: {
    addUserLocal: (state, action) => {
      state.push(action.payload);
      localStorage.setItem("user", JSON.stringify(state));
    },
    removeUserLocal: (state, action) => {
      state.splice(action.payload, 1);
      localStorage.setItem("user", JSON.stringify(state));
    },
    deleteUserLocal: (state, action) => {
      localStorage.removeItem("user");

      return [];
    },
  },
});

console.log(localSlice.actions);

export default localSlice.reducer;

export const { addUserLocal, removeUserLocal, deleteUserLocal } =
  localSlice.actions;
