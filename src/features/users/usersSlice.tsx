import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import UserService from "../../services/userService/UserService";

export interface UsersStateProps {
  users: Array<any>;
  status: string;
}

const initialState: UsersStateProps = {
  users: [],
  status: "",
};

export const getUsers: any = createAsyncThunk(
  "users/getAllUsers",
  async (dispatch, state) => {
    return UserService.getAllUsers();
  }
);
export const searchGetUsers: any = createAsyncThunk(
  "users/searchGetAllUsers",
  async (dispatch, state) => {
    return UserService.search("hello");
  }
);

export const userSlice = createSlice({
  name: "users",
  initialState,
  reducers: {
    setUsers: () => {},
  },
  extraReducers: {
    [getUsers.pending]: (state: any, action: any) => {
      state.status = "pending";
    },
    [getUsers.fulfilled]: (state: any, action: any) => {
      state.users = action.payload;
    },
    [getUsers.rejected]: (state: any, action: any) => {
      state.status = "failed";
    },
    [searchGetUsers.pending]: (state: any, action: any) => {
      state.status = "pending";
    },
    [searchGetUsers.fulfilled]: (state: any, action: any) => {
      state.users = action.payload;
    },
    [searchGetUsers.rejected]: (state: any, action: any) => {
      state.status = "failed";
    },
  },
});

export const { setUsers } = userSlice.actions;

export default userSlice.reducer;
