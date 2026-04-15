/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";
import { useState } from "react";
import { Button, Space, Modal, Form, Input, Popconfirm, Upload } from "antd";
import {
  EditOutlined,
  DeleteOutlined,
  UploadOutlined,
} from "@ant-design/icons";

import Loading from "@/components/shared/Loading/Loading";
import { toast } from "sonner";
import Image from "next/image";
import {
  useDeleteUserMutation,
  useGetAllUserQuery,
  useUpdateUserListMutation,
} from "@/redux/features/user/userApi";

import Link from "next/link";
import { ArrowRight } from "lucide-react";

interface BlogList {
  title: string;
  id: string;
  description: string;
  image: string;
  createdAt: string;
  tags: string[];
}

const RecentlyAddJob = () => {
  const [limit] = useState(5);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectReport, setselectReport] = useState<BlogList | null>(null);
  const [form] = Form.useForm();
  const [isDetailsModalOpen, setIsDetailsModalOpen] = useState(false);
  const [selectedDetails, setSelectedDetails] = useState<BlogList | null>(null);
  const [fileList, setFileList] = useState<any[]>([]);

  const handleUploadChange = (info: any) => {
    setFileList(info.fileList);
  };

  const { data: allFormatData, isLoading } = useGetAllUserQuery({
    limit: limit,
  });

  const getData = allFormatData?.data?.blog;

  const [deleteUser] = useDeleteUserMutation();

  const handleDelete = async (id: string) => {
    const toastId = toast.loading("Deleting...");

    try {
      const res = await deleteUser(id).unwrap();
      if (res?.success) {
        toast.success("Delete Successfully", { id: toastId });
      } else {
        toast.error("Failed to Delete!", { id: toastId });
      }
    } catch (error: any) {
      const errorMessage =
        error.data?.message ||
        error.data?.errorMessages?.[0]?.message ||
        "An unexpected error occurred.";
      toast.error(errorMessage, { id: toastId });
    }
  };

  const handleEdit = (report: BlogList) => {
    setselectReport(report);
    form.setFieldsValue(report);
    setIsModalOpen(true);
  };

  const [updateUserList] = useUpdateUserListMutation();

  const handleUpadte = async (data: any) => {
    const toastId = toast.loading("Updating...");
    if (!selectReport) return;

    const formData = new FormData();
    if (data.title) {
      formData.append("title", data.title);
    }

    if (fileList && fileList[0] && fileList[0].originFileObj) {
      formData.append("blog", fileList[0].originFileObj);
    }

    const id = selectReport?.id;

    try {
      const res = await updateUserList({ data: formData, id }).unwrap();
      if (res?.success) {
        toast.success("Update Successfully.", { id: toastId });
        setIsModalOpen(false);
      } else {
        toast.error("Failed to update!", { id: toastId });
      }
    } catch (error) {
      const errorMessage =
        error instanceof Error
          ? error.message
          : "An unexpected error occurred.";
      toast.error(errorMessage, { id: toastId });
    }
  };

  const handleDetailsClick = (book: BlogList) => {
    setSelectedDetails(book);
    setIsDetailsModalOpen(true);
  };

  return (
    <div className=" p-2 sm:p-4 mt-5">
      {isLoading && <Loading />}
      <div className="flex  justify-between items-center gap-1 mb-2">
        <h2 className="text-lg font-medium  sm:mb-0 text-nowrap">
          Recently Add Job
        </h2>
        <Link
          href="/profile"
          className="text-center bg-transparent text-[#6B6B6B] font-medium text-sm sm:text-base flex items-center justify-center gap-2 hover:text-[#6B6B6B]/70 transition-colors"
        >
          View all
          <ArrowRight size={20} />
        </Link>
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
                    Job Title
                  </th>
                  <th
                    scope="col"
                    className="px-6 py-3 text-center text-xs font-medium text-gray-500 uppercase tracking-wider"
                  >
                    Total applicant
                  </th>
                  <th
                    scope="col"
                    className="px-6 py-3 text-center text-xs font-medium text-gray-500 uppercase tracking-wider"
                  >
                    Action
                  </th>
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
                        className="px-4 py-2 sm:py-3 flex flex-col items-center justify-center cursor-pointer"
                        onClick={() => handleDetailsClick(singleDataForMap)}
                      >
                        <Image
                          src={singleDataForMap?.image || "/placeholder.svg"}
                          alt="blog"
                          width={40}
                          height={40}
                          className=" w-10 h-10"
                        />
                      </td>
                      <td
                        className="px-4 py-4 whitespace-nowrap cursor-pointer"
                        onClick={() => handleDetailsClick(singleDataForMap)}
                      >
                        <div className="text-sm text-gray-600 font-medium hover:text-primary">
                          {singleDataForMap?.title || "N/A"}
                        </div>
                      </td>
                      <td
                        className="px-4 py-4 whitespace-nowrap cursor-pointer"
                        onClick={() => handleDetailsClick(singleDataForMap)}
                      >
                        <div className="text-sm text-gray-600 hover:text-primary">
                          {singleDataForMap?.createdAt
                            ? new Date(
                                singleDataForMap.createdAt
                              ).toLocaleString()
                            : "N/A"}
                        </div>
                      </td>
                      <td
                        className="px-4 py-4 whitespace-nowrap cursor-pointer"
                        onClick={() => handleDetailsClick(singleDataForMap)}
                      >
                        <div className="text-sm text-gray-600 hover:text-primary">
                          {singleDataForMap?.tags &&
                          singleDataForMap.tags.length > 0
                            ? singleDataForMap.tags
                                .slice(0, 2)
                                .map((tag: string, index: number) => (
                                  <span
                                    key={index}
                                    className="mr-2 px-2 py-1 bg-blue-50 text-primary rounded-md text-xs"
                                  >
                                    {tag}
                                  </span>
                                ))
                            : "N/A"}
                        </div>
                      </td>
                      <td
                        className="px-4 py-4 whitespace-nowrap cursor-pointer"
                        onClick={() => handleDetailsClick(singleDataForMap)}
                      >
                        <div className="text-sm text-gray-600 hover:text-primary">
                          Text
                        </div>
                      </td>

                      <td className="px-4 py-2 sm:py-3">
                        <Space>
                          <Button
                            icon={<EditOutlined />}
                            className="bg-blue-100 text-primary border-none"
                            onClick={() => handleEdit(singleDataForMap)}
                          />
                          <Popconfirm
                            title="Are you sure you want to delete?"
                            onConfirm={() => handleDelete(singleDataForMap?.id)}
                            okText="Yes"
                            cancelText="No"
                            okButtonProps={{
                              style: {
                                backgroundColor: "#2C67FF",
                              },
                            }}
                          >
                            <Button
                              className="bg-red-100 text-red-600 border-none"
                              icon={<DeleteOutlined />}
                            ></Button>
                          </Popconfirm>
                        </Space>
                      </td>
                    </tr>
                  ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>

      <Modal
        open={isModalOpen}
        onCancel={() => setIsModalOpen(false)}
        footer={null}
        centered
        width={700}
      >
        <Form
          layout="vertical"
          onFinish={handleUpadte}
          className="space-y-4"
          form={form}
        >
          {/* Image Upload */}
          <Form.Item name="blog" label="Upload Image">
            <Upload.Dragger
              name="file"
              beforeUpload={() => false}
              onChange={handleUploadChange}
              fileList={fileList}
              listType="picture"
              style={{ backgroundColor: "white" }}
            >
              <p className="ant-upload-drag-icon">
                <UploadOutlined />
              </p>
              <p className="text-sm text-gray-400">
                Drop your image here, or click to browse
              </p>
            </Upload.Dragger>
          </Form.Item>

          <Form.Item name="title" label="Title">
            <Input placeholder="Enter name" className="py-2" />
          </Form.Item>

          <Form.Item>
            <button
              type="submit"
              className="w-full bg-primary text-white font-medium text-base py-2 rounded-md hover:bg-blue-700/90 transition-colors"
            >
              Add Blog
            </button>
          </Form.Item>
        </Form>
      </Modal>

      <Modal
        open={isDetailsModalOpen}
        onCancel={() => setIsDetailsModalOpen(false)}
        footer={null}
        centered
        width={900}
      >
        {selectedDetails && (
          <div className="p-4">
            <div>
              <div className=" w-28 h-28 flex items-center justify-center">
                <Image
                  src={selectedDetails?.image || "/placeholder.svg"}
                  alt="Blog"
                  width={100}
                  height={100}
                  className="w-full"
                />
              </div>
              <h3 className="text-lg md:text-3xl font-semibold mt-3 mb-3">
                {selectedDetails?.title}
              </h3>
              <div className="text-sm text-gray-500 font-medium">
                {selectedDetails?.createdAt
                  ? new Date(selectedDetails.createdAt).toLocaleString()
                  : "N/A"}
              </div>
              <div className="text-sm my-3">
                {selectedDetails?.tags && selectedDetails.tags.length > 0
                  ? selectedDetails.tags.map((tag: string, index: number) => (
                      <span
                        key={index}
                        className="mr-2 px-2 py-1 bg-blue-50 text-primary rounded-md text-xs"
                      >
                        {tag}
                      </span>
                    ))
                  : "N/A"}
              </div>
              <div className="text-sm text-gray-600 tracing-wide">
                This is text
              </div>
            </div>
          </div>
        )}
      </Modal>
    </div>
  );
};

export default RecentlyAddJob;
