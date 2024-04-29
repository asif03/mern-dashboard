import { api } from "./api";

export const authApi = api.injectEndpoints({
  endpoints: (builder) => ({
    login: builder.mutation({
      query: (body) => ({
        url: `user/login`,
        method: "POST",
        body,
      }),
    }),
  }),
});

export const { useLoginMutation } = authApi;
