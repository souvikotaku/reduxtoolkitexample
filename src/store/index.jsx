import { configureStore } from "@reduxjs/toolkit";

import userSlice from "./slices/UserSlice";
import localSlice from "./slices/localSlice";

const store = configureStore({
  reducer: {
    users: userSlice,
    userslocal: localSlice,
  },
});

export default store;
