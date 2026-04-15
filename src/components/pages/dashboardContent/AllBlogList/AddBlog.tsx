/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";
import React, { useState } from "react";
import { useRouter } from "next/navigation";
import { Input, Form, Upload } from "antd";
import { UploadOutlined } from "@ant-design/icons";
import { toast } from "sonner";
import { useCreateBlogMutation } from "@/redux/features/admin/adminApi";
import QuillEditor from "@/lib/QuillTextEditor";

const AddBlog = () => {
  const router = useRouter();
  const [fileList, setFileList] = useState<any[]>([]);

  const [form] = Form.useForm();
  const handleUploadChange = (info: any) => {
    setFileList(info.fileList);
  };

  const [createBlog] = useCreateBlogMutation();

  const handleSave = async (data: any) => {
    const toastId = toast.loading("Creating ...");
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
    } else {
      toast.error("Please upload an image.", { id: toastId });
      return;
    }

    try {
      const res = await createBlog(formData).unwrap();
      if (res?.success) {
        toast.success("Created Successfully.", { id: toastId });
        form.resetFields();
        setFileList([]);
        router.push("/blog-List");
      } else {
        toast.error("Failed to create!", { id: toastId });
      }
    } catch (error) {
      const errorMessage =
        error instanceof Error
          ? error.message
          : "An unexpected error occurred.";
      toast.error(errorMessage, { id: toastId });
    }
  };

  return (
    <div className="p-2 md:p-8 bg-white flex items-center justify-center">
      <div className="bg-primary2 p-2 sm:p-6 max-w-3xl w-full">
        <Form
          layout="vertical"
          onFinish={handleSave}
          className="w-full space-y-4"
          form={form}
        >
          {/* Image Upload */}
          <Form.Item
            label={
              <div className="text-gray-600 font-medium text-base">
                Upload Image
              </div>
            }
          >
            <Upload.Dragger
              name="team"
              beforeUpload={() => false}
              onChange={handleUploadChange}
              fileList={fileList}
              listType="picture"
              accept="image/*,video/*"
              multiple
              style={{ backgroundColor: "white", minHeight: "80px" }}
            >
              <p className="ant-upload-drag-icon mt-5">
                <UploadOutlined />
              </p>
              <p className="text-sm text-gray-400">
                Drop your image here, or click to browse
              </p>
            </Upload.Dragger>
          </Form.Item>

          <Form.Item
            name="title"
            label={
              <div className="text-gray-600 font-medium text-base">Title</div>
            }
          >
            <Input placeholder="Enter Title" className="py-2.5" />
          </Form.Item>

          <Form.Item name="description" label={
            <div className="text-gray-600 font-medium text-base">
              Description
            </div>
          }>
            <QuillEditor
              value={form.getFieldValue("description")}
              onChange={(content) => form.setFieldsValue({ experience: content })}
              placeholder="Write here description"
            />
          </Form.Item>

          <Form.Item>
            <div className="flex items-center justify-center lg:justify-start">
              <button
                type="submit"
                className="bg-[#004D6E] text-white font-medium text-base py-3 px-12 rounded hover:bg-[#004D6E]/90 transition-colors"
              >
                Submit
              </button>
            </div>
          </Form.Item>
        </Form>
      </div>
    </div>
  );
};

export default AddBlog;
