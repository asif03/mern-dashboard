import { api } from "./api";

export interface Post {
  _id: string;
  title: string;
  description: string;
}

type PostsResponse = Post[];

export const postsApi = api.injectEndpoints({
  endpoints: (builder) => ({
    getPosts: builder.query<PostsResponse, void>({
      query: () => ({ url: "posts" }),
      providesTags: (result = []) => [
        ...result.map(({ _id }) => ({ type: "Posts", _id } as const)),
        { type: "Posts" as const, id: "LIST" },
      ],
    }),

    addPost: builder.mutation<Post, Partial<Post>>({
      query: (body) => ({
        url: `posts`,
        method: "POST",
        body,
      }),
      invalidatesTags: [{ type: "Posts", id: "LIST" }],
    }),
  }),
});

export const { useAddPostMutation, useGetPostsQuery } = postsApi;
