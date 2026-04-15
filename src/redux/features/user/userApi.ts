/* eslint-disable @typescript-eslint/no-explicit-any */
import { baseApi } from "../../api/baseApi";

const userList = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    getAllUser: builder.query({
      query: (data: { limit?: number; page?: number; text?: string }) => {
        return {
          url: `/user`,
          method: "GET",
          params: data,
        };
      },
      providesTags: ["user"],
    }),

    addUser: builder.mutation({
      query: (data) => {
        return {
          url: "/create-user",
          method: "POST",
          body: data,
        };
      },
      invalidatesTags: ["user"],
    }),

    updateUserList: builder.mutation({
      query: ({ data, id }: { data: any; id: string }) => {
        return {
          url: `/update/${id}`,
          method: "PATCH",
          body: data,
        };
      },
      invalidatesTags: ["user"],
    }),

    deleteUser: builder.mutation({
      query: (id) => {
        return {
          url: `/delete/${id}`,
          method: "DELETE",
        };
      },
      invalidatesTags: ["user"],
    }),
  }),
});

export const {
  useAddUserMutation,
  useDeleteUserMutation,
  useGetAllUserQuery,
  useUpdateUserListMutation,
} = userList;
