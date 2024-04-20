import { api } from "./api";

export interface Post {
  id: number;
  name: string;
  fetched_at: string;
}

type PostsResponse = Post[];

export const postsApi = api.injectEndpoints({
  endpoints: (builder) => ({
    getPosts: builder.query<PostsResponse, void>({
      query: () => ({ url: "posts" }),
      providesTags: (result = []) => [
        ...result.map(({ id }) => ({ type: "Posts", id } as const)),
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
