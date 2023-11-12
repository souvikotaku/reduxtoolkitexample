import { createSlice } from "@reduxjs/toolkit";

const userSlice = createSlice({
  name: "user",
  initialState: [],
  reducers: {
    addUser: (state, action) => {
      state.push(action.payload);
      // localStorage.setItem("user", JSON.stringify(state));
    },
    removeUser: (state, action) => {
      state.splice(action.payload, 1);
      // localStorage.setItem("user", JSON.stringify(state));
    },
    deleteUser: (state, action) => {
      // localStorage.removeItem("user");

      return [];
    },
  },
});

console.log(userSlice.actions);

export default userSlice.reducer;

export const { addUser, removeUser, deleteUser } = userSlice.actions;
