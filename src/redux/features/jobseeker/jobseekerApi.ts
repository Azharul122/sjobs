import { baseApi } from "../../api/baseApi";

const jobseekerApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    getAllAppliedJobs: builder.query({
      query: (data: { limit?: number; page?: number; text?: string }) => {
        return {
          url: `/jobSeeker/get-all-applied-job`,
          method: "GET",
          params: data,
        };
      },
      providesTags: ["jobseeker"],
    }),

    getCardDataAppliedJobs: builder.query({
      query: () => {
        return {
          url: `/jobSeeker/get-applied-jobs-count`,
          method: "GET",
        };
      },
      providesTags: ["jobseeker"],
    }),

    getSingleExample: builder.query({
      query: (id) => ({
        url: `example/${id}`,
        method: "GET",
      }),
      providesTags: ["jobseeker"],
    }),

    createJobSeekerProfile: builder.mutation({
      query: (data) => {
        return {
          url: "/jobSeeker/update-jobSeeker-profile",
          method: "PATCH",
          body: data,
        };
      },
      invalidatesTags: ["jobseeker"],
    }),

    updateExample: builder.mutation({
      query: (data) => {
        return {
          url: `example/${data?.id}`,
          method: "POST",
          body: data?.formData,
        };
      },
      invalidatesTags: ["jobseeker"],
    }),
    deleteExample: builder.mutation({
      query: (id) => {
        return {
          url: `example/${id}`,
          method: "DELETE",
        };
      },
      invalidatesTags: ["jobseeker"],
    }),
  }),
});

export const {
  useCreateJobSeekerProfileMutation,
  useGetAllAppliedJobsQuery,
  useGetCardDataAppliedJobsQuery,
} = jobseekerApi;
