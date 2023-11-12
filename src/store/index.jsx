import { configureStore } from "@reduxjs/toolkit";

import userSlice from "./slices/UserSlice";
import localSlice from "./slices/localSlice";
import apiSlice from "./slices/apislice";

const store = configureStore({
  reducer: {
    users: userSlice,
    userslocal: localSlice,
    apiSlice,
  },
});

export default store;
