/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";
import { useState } from "react";
import { Button, Popconfirm, } from "antd";
import Loading from "@/components/shared/Loading/Loading";
import { toast } from "sonner";
import Image from "next/image";
import Pagination from "@/components/shared/Pagination/Pagination";
import { useGetAllJobSeekerQuery, useSupendUserMutation } from "@/redux/features/admin/adminApi";
import { Ban, EllipsisVertical } from "lucide-react";

const UserList = () => {
  const [limit] = useState(6);
  const { data: allFormatData, isLoading, refetch } = useGetAllJobSeekerQuery({
    limit: limit,
  });

  const [activeDeleteId, setActiveDeleteId] = useState<string | null>(null);

  const getData = allFormatData?.data?.data;
  const totalItems = allFormatData?.data?.meta?.total || 1;

  const [supendUser] = useSupendUserMutation();

  const handleSuspend = async (id: string, currentStatus: string) => {
    const toastId = toast.loading("Please wait...");
    const shouldSuspend = currentStatus === "ACTIVE";

    try {
      const res = await supendUser({
        id,
        data: { isSuspended: shouldSuspend }
      }).unwrap();

      if (res?.success) {
        await refetch();
        toast.success(
          shouldSuspend ? "User suspended successfully" : "User unsuspended successfully",
          { id: toastId }
        );
      } else {
        toast.error("Failed to update suspension status!", { id: toastId });
      }
    } catch (error: any) {
      const errorMessage =
        error.data?.message ||
        error.data?.errorMessages?.[0]?.message ||
        "An unexpected error occurred.";
      toast.error(errorMessage, { id: toastId });
    } finally {
      setActiveDeleteId(null);
    }
  };

  return (
    <div className=" p-2 sm:p-4">
      {isLoading && <Loading />}
      <div className="flex flex-col lg:flex-row justify-between items-center mb-3 gap-3 md:gap-6 lg:gap-1">
        <h2 className="text-4xl md:text3xl lg:text-4xl  font-medium mb-2 sm:mb-0">
          Job Seeker List
        </h2>
      </div>

      <div className="overflow-x-auto -mx-4 sm:-mx-6 lg:-mx-8">
        <div className="py-2 align-middle inline-block min-w-full sm:px-6 lg:px-8">
          <div className="shadow-sm overflow-hidden sm:rounded-lg p-2 lg:p-5 bg-white">
            <table className=" min-w-full divide-y divide-gray-200">
              <thead className="bg-[#E9EFF2]">
                <tr>
                  <th
                    scope="col"
                    className="px-6 py-3 text-center text-xs font-medium text-gray-500 uppercase tracking-wider"
                  >
                    Name
                  </th>
                  <th
                    scope="col"
                    className="px-6 py-3 text-center text-xs font-medium text-gray-500 uppercase tracking-wider"
                  >
                    Email
                  </th>
                  <th
                    scope="col"
                    className="px-6 py-3 text-center text-xs font-medium text-gray-500 uppercase tracking-wider"
                  >
                    Number
                  </th>

                  <th
                    scope="col"
                    className="px-6 py-3 text-center text-xs font-medium text-gray-500 uppercase tracking-wider"
                  ></th>
                </tr>
              </thead>

              <tbody className="bg-white divide-y divide-gray-200">
                {Array.isArray(getData) &&
                  getData.map((singleDataForMap: any) => (
                    <tr
                      key={singleDataForMap?.id}
                      className="border-b text-center"
                    >
                      <td
                        className="px-6 py-2 sm:py-3 flex flex-col  cursor-pointer"
                      >
                        <div className="flex items-center gap-2">
                          <Image
                            src={singleDataForMap?.profileImage || "/placeholder.svg"}
                            alt="blog"
                            width={40}
                            height={40}
                            className=" w-10 h-10 rounded-full border border-gray-100"
                          />
                          {singleDataForMap?.fullName || "N/A"}
                        </div>
                      </td>
                      <td
                        className="px-4 py-4 whitespace-nowrap cursor-pointer"
                      >
                        <div className="text-sm text-gray-600 font-medium hover:text-primary">
                          {singleDataForMap?.Jobseeker?.newEmail || "N/A"}
                        </div>
                      </td>
                      <td
                        className="px-4 py-4 whitespace-nowrap cursor-pointer"
                      >
                        <div className="text-sm text-gray-600 font-medium hover:text-primary">
                          {singleDataForMap?.Jobseeker?.number || "N/A"}
                        </div>
                      </td>

                      <td className="px-4 py-2 sm:py-3">
                        <div className="flex items-center gap-3 relative">
                          <button className="text-[#0077B5] font-medium bg-[#E9EFF2] px-4 py-2.5 text-nowrap hover:bg-[#0077B5] hover:text-white rounded transition-colors duration-300">
                            View Profile
                          </button>

                          <div className="relative">
                            <EllipsisVertical
                              className="cursor-pointer"
                              onClick={() => setActiveDeleteId(
                                activeDeleteId === singleDataForMap?.id
                                  ? null
                                  : singleDataForMap?.id
                              )}
                            />

                            {activeDeleteId === singleDataForMap?.id && (
                              <div className="absolute left-1/2 bottom-full mb-1 transform -translate-x-1/2 bg-white rounded p-2 z-10">
                                <Popconfirm
                                  title={`Are you sure you want to ${singleDataForMap?.status === "ACTIVE" ? "suspend" : "unsuspend"} this user?`}
                                  onConfirm={() => handleSuspend(singleDataForMap?.id, singleDataForMap?.status)}
                                  okText="Yes"
                                  cancelText="No"
                                  okButtonProps={{
                                    style: {
                                      backgroundColor: "#2C67FF",
                                    },
                                  }}
                                >
                                  <Button
                                    className={`${singleDataForMap?.status === "INACTIVE"
                                      ? "bg-gray-100 text-gray-600"
                                      : "bg-red-100 text-red-600"
                                      } border-none hover:!bg-gray-100 text-base flex items-center hover:!text-gray-500`}
                                  >
                                    <Ban size={16} className="mr-1" />
                                    {singleDataForMap?.status === "INACTIVE" ? "Unsuspend" : "Suspend"}
                                  </Button>
                                </Popconfirm>
                              </div>
                            )}
                          </div>
                        </div>
                      </td>
                    </tr>
                  ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>

      <div className="flex justify-center mt-5 px-4 sm:px-0">
        <div className="flex justify-center mt-5 px-4 sm:px-0">
          <Pagination itemsPerPage={limit} totalItems={totalItems} />
        </div>
      </div>



    </div>
  );
};

export default UserList;
