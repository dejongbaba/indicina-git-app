import { configureStore } from "@reduxjs/toolkit";
import logger from "redux-logger";
import repositories from "../features/repositories/repositoriesSlice";
import user from "../features/user/userSlice";
import users from "../features/users/usersSlice";

// const preloadedState = {
//   repositories: [],
//   users: [],
//   user: {},
// };

const reducer = {
  repositories,
  users,
  user,
};

export const store = configureStore({
  reducer,
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(logger),
  devTools: process.env.NODE_ENV !== "production",
});
