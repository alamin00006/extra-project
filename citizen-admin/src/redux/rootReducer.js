import { baseApi } from "./api/baseApi";
import profileMenuSlice from "./reducers/profileMenuSlice";
export const reducer = {
  [baseApi.reducerPath]: baseApi.reducer,
  profileMenu: profileMenuSlice,
};
