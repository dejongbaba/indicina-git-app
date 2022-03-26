import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import RepoService from "../../services/repoService/RepoService";

export interface RepoStateProps {
  repositories: Array<any>;
  status: string;
}

const initialState: RepoStateProps = {
  repositories: [],
  status: "",
};

const fetchRepositories: any = createAsyncThunk(
  "repo/fetchRepositories",
  async () => {
    return RepoService.getAllRepositories();
  }
);

export const counterSlice = createSlice({
  name: "repositories",
  initialState,
  reducers: {
    setRepositories: () => {},
  },
  extraReducers: {
    [fetchRepositories.fulfilled]: (state: any, payload: any) => {
      state.status = "success";
      state.repositories = payload;
    },
    [fetchRepositories.rejected]: (state, payload) => {
      state.status = "failed";
    },
    [fetchRepositories.pending]: (state, payload) => {
      state.status = "pending";
    },
  },
});

export const { setRepositories } = counterSlice.actions;

export default counterSlice.reducer;
