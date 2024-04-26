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
      //["Posts"],
      providesTags: (result = []) => [
        ...result.map(({ _id }) => ({ type: "Posts", id: _id } as const)),
        { type: "Posts" as const, id: "LIST" },
      ],
    }),
    addPost: builder.mutation<Post, Partial<Post>>({
      query: (body) => ({
        url: `posts`,
        method: "POST",
        body,
      }),
      invalidatesTags: [{ type: "Posts", id: "LIST" }], //["Posts"], [{ type: "Posts", id: "LIST" }],
    }),
    getPost: builder.query<Post, string>({
      query: (postId) => `posts/${postId}`,
      providesTags: (post, error, id) => [{ type: "Posts", id }],
    }),
    updatePost: builder.mutation<Post, Partial<Post>>({
      query(data) {
        const { _id, ...body } = data;
        return {
          url: `posts/${_id}`,
          method: "PATCH",
          body,
        };
      },
      invalidatesTags: (post) => [{ type: "Posts", id: post?._id }],
    }),
    deletePost: builder.mutation<{ success: boolean; id: string }, string>({
      query(id) {
        return {
          url: `posts/${id}`,
          method: "DELETE",
        };
      },
      invalidatesTags: (result, error, id) => [{ type: "Posts", id }],
    }),
  }),
});

export const {
  useAddPostMutation,
  useGetPostsQuery,
  useGetPostQuery,
  useUpdatePostMutation,
  useDeletePostMutation,
} = postsApi;
