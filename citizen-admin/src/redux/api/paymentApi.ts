import { baseApi } from "./baseApi";

const PAYMENT_URL = "/payment";

const authApi = baseApi.injectEndpoints({
  endpoints: (build) => ({
    getAllPayments: build.query({
      query: () => ({
        url: `${PAYMENT_URL}`,
        method: "GET",
      }),
      providesTags: ["payment"],
    }),
  }),
  overrideExisting: false,
});

export const { useGetAllPaymentsQuery } = authApi;
