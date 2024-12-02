import { baseApi } from "./baseApi";

const BANK_URL = "/company-bank";

const bankApi = baseApi.injectEndpoints({
  endpoints: (build) => ({
    // getBankAccountByUserId: build.query({
    //   query: (userId) => ({
    //     url: `${BANK_URL}/${userId}`,
    //     method: "GET",
    //   }),
    //   providesTags: ["bank"],
    // }),

    getCompanyBankByCompanyId: build.query({
      query: (arg) => ({
        url: `${BANK_URL}`,
        method: "GET",
        params: arg,
      }),
      providesTags: ["bank"],
    }),
  }),
  overrideExisting: false,
});

export const { useGetCompanyBankByCompanyIdQuery } = bankApi;
