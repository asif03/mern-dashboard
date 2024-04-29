import { api } from "./api";

export interface User {
  first_name: string;
  last_name: string;
}
export interface UserResponse {
  user: User;
  token: string;
}

export interface LoginRequest {
  email: string;
  password: string;
}

export const authApi = api.injectEndpoints({
  endpoints: (builder) => ({
<<<<<<< HEAD
    login: builder.mutation({
      query: (body) => ({
        url: `user/login`,
        method: "POST",
        body,
=======
    login: builder.mutation<UserResponse, LoginRequest>({
      query: (credentials) => ({
        url: "user/login",
        method: "POST",
        body: credentials,
>>>>>>> 45b988a9cddece34deb2a0363924c38354d8fc44
      }),
    }),
  }),
});

export const { useLoginMutation } = authApi;
