import { axiosBaseQuery } from "@/helpers/axios/axiosBaseQuery";
import { getBaseUrl } from "@/helpers/config/envConfig";

import { createApi } from "@reduxjs/toolkit/query/react";

type TagType = "user" | "auth" | "member" | "payment";

export const baseApi = createApi({
  reducerPath: "api",
  baseQuery: axiosBaseQuery({ baseUrl: getBaseUrl() }),
  tagTypes: ["user", "auth", "member", "payment"] as TagType[],
  endpoints: () => ({}),
});
