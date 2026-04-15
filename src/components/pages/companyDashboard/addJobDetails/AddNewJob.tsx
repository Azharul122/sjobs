/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";
import React from "react";
import { useRouter } from "next/navigation";
import { Input, Form, Select, DatePicker } from "antd";

import { toast } from "sonner";
import { useCreateExampleMutation } from "@/redux/features/example/exampleApi";
import TextArea from "antd/es/input/TextArea";
import QuillEditor from "@/lib/QuillTextEditor";

const AddNewJob = () => {
  const router = useRouter();

  const [form] = Form.useForm();

  const [createBlog] = useCreateExampleMutation();

  const handleSave = async (data: any) => {
    const toastId = toast.loading("Creating ...");
    const formData = new FormData();

    const formatedData = {
      title: data?.title,
    };

    formData.append("data", JSON.stringify(formatedData));

    try {
      const res = await createBlog(formData).unwrap();
      if (res?.success) {
        toast.success("Created Successfully.", { id: toastId });
        form.resetFields();

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
    <div className="p-2 md:p-8 bg-white flex items-center justify-center font-poppins">
      <div className="bg-primary2 p-2 sm:p-4 max-w-4xl w-full">
        <h1 className="text-2xl font-medium mb-1 text-center">Information</h1>
        <Form layout="vertical" onFinish={handleSave} form={form}>
          <Form.Item
            name="title"
            label={
              <div className="text-[#333] font-medium text-lg">Job title</div>
            }
          >
            <Input placeholder="Enter Title" className="py-2.5 " />
          </Form.Item>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <Form.Item
              name="salary"
              label={
                <div className="text-[#333] font-medium text-lg">Salary</div>
              }
            >
              <Input placeholder="Enter Salary" className="py-2.5" />
            </Form.Item>

            <Form.Item
              name="jobType"
              label={
                <div className="text-[#333] font-medium text-lg">Job type</div>
              }
            >
              <Select
                placeholder="Select the job type"
                className="py-5 border rounded"
              >
                <Select.Option value="full-time">Full-time</Select.Option>
                <Select.Option value="part-time">Part-time</Select.Option>
                <Select.Option value="contract">Contract</Select.Option>
              </Select>
            </Form.Item>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <Form.Item
              name="location"
              label={
                <div className="text-[#333] font-medium text-lg">Location</div>
              }
            >
              <Input placeholder="Select your location" className="py-2.5" />
            </Form.Item>

            <Form.Item
              name="vacancies"
              label={
                <div className="text-[#333] font-medium text-lg">Vacancies</div>
              }
            >
              <Input
                placeholder="Enter number of vacancies"
                className="py-2.5"
              />
            </Form.Item>
          </div>

          <Form.Item
            name="positionSummary"
            label={
              <div className="text-[#333] font-medium text-lg">
                Position summary
              </div>
            }
          >
            <TextArea placeholder="Write here position summary" rows={5} />
          </Form.Item>

          <Form.Item
            name="jobDescription"
            label={
              <div className="text-[#333] font-medium text-lg">
                Job description
              </div>
            }
          >
            <TextArea placeholder="Write here job description" rows={5} />
          </Form.Item>

          <Form.Item
            name="experience"
            label={
              <div className="text-[#333] font-medium text-lg">Experience</div>
            }
          >
            <QuillEditor
              value={form.getFieldValue("experience")}
              onChange={(content) =>
                form.setFieldsValue({ experience: content })
              }
              placeholder="Write here experience details"
            />
          </Form.Item>

          <Form.Item
            name="education"
            label={
              <div className="text-[#333] font-medium text-lg">
                Educational qualification
              </div>
            }
            className="mt-2"
          >
            <QuillEditor
              value={form.getFieldValue("education")}
              onChange={(content) =>
                form.setFieldsValue({ experience: content })
              }
              placeholder="Write here educational qualification"
            />
          </Form.Item>

          <Form.Item
            name="additionalQualification"
            label={
              <div className="text-[#333] font-medium text-lg">
                Additional qualification
              </div>
            }
            className="mt-2"
          >
            <QuillEditor
              value={form.getFieldValue("additionalQualification")}
              onChange={(content) =>
                form.setFieldsValue({ experience: content })
              }
              placeholder="Write here additional qualification"
            />
          </Form.Item>

          <Form.Item
            name="jobBenefits"
            label={
              <div className="text-[#333] font-medium text-lg">
                Job benefits
              </div>
            }
            className="mt-2"
          >
            <QuillEditor
              value={form.getFieldValue("jobBenefits")}
              onChange={(content) =>
                form.setFieldsValue({ experience: content })
              }
              placeholder="Write here job benefits"
            />
          </Form.Item>

          <Form.Item
            name="date"
            label={
              <div className="text-[#333] font-medium text-lg">Expire date</div>
            }
          >
            <DatePicker style={{ width: "100%" }} className="py-2.5" />
          </Form.Item>

          <Form.Item>
            <div className="flex items-center justify-center mt-2">
              <button
                type="submit"
                className="bg-[#0077B5] text-white font-medium text-lg py-3 px-7 rounded-lg hover:bg-[#0077B5]/90 transition-colors"
              >
                Published Now
              </button>
            </div>
          </Form.Item>
        </Form>
      </div>
    </div>
  );
};

export default AddNewJob;
