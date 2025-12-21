import { baseApi } from "./baseApi";

const MEMBER_URL = "/member";

const authApi = baseApi.injectEndpoints({
  endpoints: (build) => ({
    getMember: build.query({
      query: (memberId) => ({
        url: `${MEMBER_URL}/${memberId}`,
        method: "GET",
      }),
      providesTags: ["member"],
    }),

    getAllMembers: build.query({
      query: () => ({
        url: `${MEMBER_URL}`,
        method: "GET",
      }),
      providesTags: ["member"],
    }),
  }),
  overrideExisting: false,
});

export const { useGetMemberQuery, useGetAllMembersQuery } = authApi;
