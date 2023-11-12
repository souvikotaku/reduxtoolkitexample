import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

export const fetchtodos = createAsyncThunk("fetchtodos", async () => {
  const response = await fetch("https://jsonplaceholder.typicode.com/todos");
  return response.json();
});

const initialState = {
  isLoading: false,
  data: null,
  isError: false,
};

export const apiSlice = createSlice({
  name: "api",
  initialState,
  //   reducers: {
  //     callApinow: (state, action) => {
  //       console.log(action.payload);
  //     },
  //   },
  extraReducers: (builder) => {
    builder.addCase(fetchtodos.pending, (state, action) => {
      state.isLoading = true;
    });
    builder.addCase(fetchtodos.fulfilled, (state, action) => {
      state.isLoading = false;
      state.data = action.payload;
    });
    builder.addCase(fetchtodos.rejected, (state, action) => {
      console.log("Error", action.payload);
      state.isError = true;
    });
  },
});

// export const { fetchtodos } = apiSlice.actions;

export default apiSlice.reducer;
