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
      providesTags: ["Posts"],
      /*(result = []) => [
        ...result.map(({ _id }) => ({ type: "Posts", _id } as const)),
        { type: "Posts" as const, _id: "LIST" },
      ],*/
    }),

    getPost: builder.query<Post, string>({
      query: (id) => `posts/${id}`,
    }),

    addPost: builder.mutation<Post, Partial<Post>>({
      query: (body) => ({
        url: `posts`,
        method: "POST",
        body,
      }),
      invalidatesTags: ["Posts"], //[{ type: "Posts", id: "LIST" }],
    }),
  }),
});

export const { useAddPostMutation, useGetPostsQuery, useGetPostQuery } =
  postsApi;
