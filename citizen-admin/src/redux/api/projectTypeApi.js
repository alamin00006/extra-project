import { baseApi } from "./baseApi";

const PROJECT_TYPE_URL = "/category";

const projectTypeApi = baseApi.injectEndpoints({
  endpoints: (build) => ({
    getProjectType: build.query({
      query: () => ({
        url: `${PROJECT_TYPE_URL}`,
        method: "GET",
      }),
      providesTags: ["projectType"],
    }),
  }),
  overrideExisting: false,
});

export const { useGetProjectTypeQuery } = projectTypeApi;
