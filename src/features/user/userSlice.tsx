import { createSlice } from "@reduxjs/toolkit";

export interface UserState {
  user: { [key: string]: any };
}

const initialState: UserState = {
  user: {},
};

export const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    setUsers: () => {},
  },
});

export const { setUsers } = userSlice.actions;

export default userSlice.reducer;
