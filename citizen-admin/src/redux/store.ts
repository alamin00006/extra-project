import { configureStore } from "@reduxjs/toolkit";
import paginationSlice from "./paginationSlice";
import { baseApi } from "./api/baseApi";

// Configure store
export const store = configureStore({
  reducer: {
    pagination: paginationSlice,
    [baseApi.reducerPath]: baseApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(baseApi.middleware),
});

// Infer types
export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
