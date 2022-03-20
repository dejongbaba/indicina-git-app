import { createSlice } from "@reduxjs/toolkit";

export interface CounterState {
  users: Array<any>;
}

const initialState: CounterState = {
  users: [],
};

export const userSlice = createSlice({
  name: "users",
  initialState,
  reducers: {
    setUsers: () => {},
  },
});

export const { setUsers } = userSlice.actions;

export default userSlice.reducer;
