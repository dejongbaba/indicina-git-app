import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import UserService from "../../services/userService/UserService";

export interface CounterState {
  users: Array<any>;
}

const initialState: CounterState = {
  users: [],
};

export const getUsers = createAsyncThunk(
  "users/getAllUsers",
  async (dispatch, state) => {
    return UserService.getAllUsers();
  }
);

export const userSlice = createSlice({
  name: "users",
  initialState,
  reducers: {
    setUsers: () => {},
  },
  // extraReducers: {
  //   [getUsers.pending]: (state: any, actiona: any) => {},
  //   [getUsers.fulfilled]: (state: any, action: any) => {},
  //   [getUsers.rejected]: (state: any, action: any) => {},
  // },
});

export const { setUsers } = userSlice.actions;

export default userSlice.reducer;
