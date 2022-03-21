import { createSlice } from "@reduxjs/toolkit";

export interface CounterState {
  repositories: Array<any>;
}

const initialState: CounterState = {
  repositories: [],
};

// const fetchRepositories = createAsyncThunk(
//   "repo/fetchRepositories",
//   async () => {
//     const response = await RepoService.getAllRepositories();
//     return response?.data;
//   }
// );

export const counterSlice = createSlice({
  name: "repositories",
  initialState,
  reducers: {
    setRepositories: () => {},
    // incrementByAmount: (state, action: PayloadAction<number>) => {
    //   state.value += action.payload;
    // },
  },
  extraReducers: (builder) => {
    // Add reducers for additional action types here, and handle loading state as needed
    // builder.addCase(fetchRepositories, (state, action) => {
    //   // Add user to the state array
    //   state.repositories.(action.payload);
    // });
  },
});

export const { setRepositories } = counterSlice.actions;

export default counterSlice.reducer;
