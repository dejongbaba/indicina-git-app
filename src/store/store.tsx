import { configureStore } from "@reduxjs/toolkit";
import logger from "redux-logger";
import repositories from "../reducers/repositories/repositories";
import user from "../reducers/user/user";
import users from "../reducers/users/users";

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
