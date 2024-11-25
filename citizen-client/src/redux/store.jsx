import { configureStore } from "@reduxjs/toolkit";

import profileMenuSlice from "./reducers/profileMenuSlice";
import { baseApi } from "./api/baseApi";

export const store = configureStore({
  reducer: {
    profileMenu: profileMenuSlice,
    [baseApi.reducerPath]: baseApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(baseApi.middleware),
});
