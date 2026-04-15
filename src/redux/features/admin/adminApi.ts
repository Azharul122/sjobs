/* eslint-disable @typescript-eslint/no-explicit-any */
import { baseApi } from "../../api/baseApi";

const adminApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    getAllJobSeeker: builder.query({
      query: (data: { limit?: number; page?: number; text?: string }) => {
        return {
          url: `/admin/get-all-jobSeeker-list`,
          method: "GET",
          params: data,
        };
      },
      providesTags: ["admin"],
    }),

    getAllCompany: builder.query({
      query: (data: { limit?: number; page?: number; text?: string }) => {
        return {
          url: `/admin/get-all-company-list`,
          method: "GET",
          params: data,
        };
      },
      providesTags: ["admin"],
    }),

    getStaticData: builder.query({
      query: () => {
        return {
          url: `/admin/get-open-jobs-and-company`,
          method: "GET",
        };
      },
      providesTags: ["admin"],
    }),

    createBlog: builder.mutation({
      query: (data) => {
        return {
          url: "/admin/create-blog",
          method: "POST",
          body: data,
        };
      },
      invalidatesTags: ["admin"],
    }),

    getAllBlogList: builder.query({
      query: (data: { limit?: number; page?: number; text?: string }) => {
        return {
          url: `/admin/get-blog-list`,
          method: "GET",
          params: data,
        };
      },
      providesTags: ["admin"],
    }),

    updateBlog: builder.mutation({
      query: ({ data, id }: { data: any; id: string }) => {
        return {
          url: `/admin/update-blog/${id}`,
          method: "PATCH",
          body: data,
        };
      },
      invalidatesTags: ["admin"],
    }),

    deleteBlog: builder.mutation({
      query: (id) => {
        return {
          url: `/admin/delete-blog/${id}`,
          method: "DELETE",
        };
      },
      invalidatesTags: ["admin"],
    }),

    supendUser: builder.mutation({
      query: ({ id, data }) => {
        return {
          url: `/admin/suspend/${id}`,
          method: "PATCH",
          body: data,
        };
      },
      invalidatesTags: ["admin"],
    }),
  }),
});

export const {
  useGetStaticDataQuery,
  useGetAllJobSeekerQuery,
  useSupendUserMutation,
  useGetAllCompanyQuery,
  useCreateBlogMutation,
  useGetAllBlogListQuery,
  useDeleteBlogMutation,
  useUpdateBlogMutation,
} = adminApi;
