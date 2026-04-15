/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";
import { useState } from "react";
import { Button, Modal, Form, Input, Popconfirm, Upload } from "antd";
import {
  EditOutlined,
  DeleteOutlined,
  UploadOutlined,
} from "@ant-design/icons";

import Loading from "@/components/shared/Loading/Loading";
import { toast } from "sonner";
import Image from "next/image";
import Link from "next/link";
import Pagination from "@/components/shared/Pagination/Pagination";
import { useDeleteBlogMutation, useGetAllBlogListQuery, useUpdateBlogMutation } from "@/redux/features/admin/adminApi";
import he from "he";
import { EllipsisVertical } from "lucide-react";
import DOMPurify from "dompurify";
import QuillEditor from "@/lib/QuillTextEditor";
interface BlogList {
  title: string;
  id: string;
  description: string;
  image: string;
  createdAt: string;

}

const AllBlogList = () => {
  const [limit] = useState(5);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectReport, setselectReport] = useState<BlogList | null>(null);
  const [form] = Form.useForm();
  const [isDetailsModalOpen, setIsDetailsModalOpen] = useState(false);
  const [selectedDetails, setSelectedDetails] = useState<BlogList | null>(null);
  const [fileList, setFileList] = useState<any[]>([]);
  const [activeDeleteId, setActiveDeleteId] = useState<string | null>(null);

  const handleUploadChange = (info: any) => {
    setFileList(info.fileList);
  };

  const { data: allFormatData, isLoading } = useGetAllBlogListQuery({
    limit: 6,
  });

  const getData = allFormatData?.data?.data;
  const totalItems = allFormatData?.data?.meta?.total || 1;

  const [deleteBlog] = useDeleteBlogMutation();

  const handleDelete = async (id: string) => {
    const toastId = toast.loading("Deleting...");

    try {
      const res = await deleteBlog(id).unwrap();
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

  const [updateBlog] = useUpdateBlogMutation();

  const handleUpadte = async (data: any) => {
    const toastId = toast.loading("Updating...");
    if (!selectReport) return;

    const formData = new FormData();
    const formatedData = {
      title: data?.title,
      description: data?.description,
    };

    formData.append("data", JSON.stringify(formatedData));

    if (fileList.length > 0) {
      fileList.forEach((file) => {
        formData.append("image", file.originFileObj);
      });
    }

    const id = selectReport?.id;

    try {
      const res = await updateBlog({ data: formData, id }).unwrap();
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

  const sanitizedDescription = selectedDetails?.description
    ? DOMPurify.sanitize(selectedDetails?.description)
    : "";

  return (
    <div className=" p-2 sm:p-4">
      {isLoading && <Loading />}
      <div className="flex flex-col lg:flex-row justify-between items-center mb-4 gap-3 md:gap-6 lg:gap-1">
        <h2 className="text-4xl md:text3xl lg:text-4xl font-medium mb-2 sm:mb-0">
          All Blog List
        </h2>
        <div className="flex flex-col lg:flex-row items-center gap-4 lg:gap-3 w-full sm:w-auto">
          <Link href={`/blog-List/add-blog`}>
            <button
              className="bg-[#004A75] text-white px-4 sm:px-6 py-3 text-sm rounded-md hover:bg-[#004A75]/90 transition w-full lg:w-auto"
              type="submit"
            >
              + Add New Blog
            </button>
          </Link>
        </div>
      </div>

      <div className="overflow-x-auto -mx-4 sm:-mx-6 lg:-mx-8">
        <div className="py-2 align-middle inline-block min-w-full sm:px-6 lg:px-8">
          <div className="shadow-sm overflow-hidden sm:rounded-lg p-2 lg:p-5 bg-white">
            <table className=" min-w-full divide-y divide-gray-200 ">
              <thead className="bg-[#E9EFF2]">
                <tr>
                  <th
                    scope="col"
                    className="px-6 py-3 text-center text-xs font-medium text-gray-500 uppercase tracking-wider"
                  >
                    Blog Title
                  </th>
                  <th
                    scope="col"
                    className="px-6 py-3 text-center text-xs font-medium text-gray-500 uppercase tracking-wider"
                  >
                    Image
                  </th>
                  <th
                    scope="col"
                    className="px-6 py-3 text-center text-xs font-medium text-gray-500 uppercase tracking-wider"
                  >
                    Upload date
                  </th>
                  <th
                    scope="col"
                    className="px-6 py-3 text-center text-xs font-medium text-gray-500 uppercase tracking-wider"
                  >
                    Description
                  </th>
                  <th
                    scope="col"
                    className="px-6 py-3 text-center text-xs font-medium text-gray-500 uppercase tracking-wider"
                  >Action</th>
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
                        className="px-4 py-4 whitespace-nowrap cursor-pointer"
                        onClick={() => handleDetailsClick(singleDataForMap)}
                      >
                        <div className="text-sm text-gray-600 font-medium hover:text-primary">
                          {singleDataForMap?.title || "N/A"}
                        </div>
                      </td>
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
                          {singleDataForMap?.description
                            ? he
                              .decode(
                                singleDataForMap.description.replace(
                                  /<[^>]*>/g,
                                  ""
                                )
                              ) // Strip HTML tags and decode special characters
                              .substring(0, 20) +
                            (singleDataForMap.description.length > 20
                              ? "..."
                              : "")
                            : "N/A"}
                        </div>
                      </td>
                      <td className="px-4 py-2 sm:py-3">
                        <div className="flex items-center justify-center gap-3 relative">


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
                              <div className="absolute left-1/2 bottom-full mb-1 transform -translate-x-1/2 bg-white rounded p-2 z-10 flex items-center gap-2">
                                <Button
                                  icon={<EditOutlined />}
                                  className="bg-blue-100 text-primary border-none hover:!bg-gray-100"
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
                                    className="bg-red-100 text-red-600 border-none hover:!bg-gray-100 hover:!text-gray-600"
                                    icon={<DeleteOutlined />}
                                  ></Button>
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
        <Pagination itemsPerPage={limit} totalItems={totalItems} />
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

          <Form.Item name="description" label="Description">
            <QuillEditor
              value={form.getFieldValue("description")}
              onChange={(content) => form.setFieldsValue({ experience: content })}
              placeholder="Write here description"
            />
          </Form.Item>

          <Form.Item>
            <button
              type="submit"
              className="w-full bg-primary text-white font-medium text-base py-2 rounded-md hover:!bg-primary/90 transition-colors"
            >
              Update Blog
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
                  className="w-full border"
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
              <div className="text-sm text-gray-600 tracing-wide mt-4">
                {selectedDetails?.description ? (
                  <div
                    dangerouslySetInnerHTML={{ __html: sanitizedDescription }}
                  />
                ) : (
                  "N/A"
                )}
              </div>
            </div>
          </div>
        )}
      </Modal>
    </div>
  );
};

export default AllBlogList;
