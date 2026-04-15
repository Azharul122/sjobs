"use client";

import { useState } from "react";
import { Form, Input, Button, Upload, Divider, List } from "antd";
import { LinkOutlined, FileOutlined, DeleteOutlined } from "@ant-design/icons";
import type { UploadFile, UploadProps } from "antd";
import Image from "next/image";
import QuillEditor from "@/lib/QuillTextEditor";
import { toast } from "sonner";
import { useAppDispatch } from "@/redux/hooks";
import { setPersonalInfo } from "@/redux/features/profile/profileSlice";

const { TextArea } = Input;
interface PersonalInfoFormData {
  fullName: string;
  careerObjective: string;
  skills: string;
  experience: string;
  careerObj: string;
  experiences: string;
  profilePhoto?: UploadFile[];
  personalWebsite?: string;
  documents?: UploadFile[];
}

interface PersonalInfoProps {
  onComplete: () => void;
}

const PersonalInfo: React.FC<PersonalInfoProps> = ({ onComplete }) => {
  const [form] = Form.useForm<PersonalInfoFormData>();
  const [documents, setDocuments] = useState<UploadFile[]>([]);
  const [profilePhoto, setProfilePhoto] = useState<UploadFile[]>([]);
  const dispatch = useAppDispatch();

  const onFinish = (values: PersonalInfoFormData) => {
    const formData: PersonalInfoFormData = {
      ...values,
      profilePhoto,
      documents,
    };

    dispatch(setPersonalInfo(formData));
    onComplete();
    console.log("Personal info saved:", formData);
  };

  const documentUploadProps: UploadProps = {
    fileList: documents,
    onRemove: (file) => {
      setDocuments((prev) => prev.filter((item) => item.uid !== file.uid));
      if (file.url) URL.revokeObjectURL(file.url);
      return false;
    },
    beforeUpload: (file) => {
      const isPDF = file.type === "application/pdf";
      if (!isPDF) {
        toast.error("You can only upload PDF files!");
        return Upload.LIST_IGNORE;
      }

      setDocuments((prev) => [
        ...prev,
        {
          ...file,
          url: URL.createObjectURL(file),
          name: file.name,
          size: file.size,
        },
      ]);
      return false;
    },
    multiple: true,
    accept: ".pdf",
    showUploadList: false,
  };

  const profilePhotoProps: UploadProps = {
    fileList: profilePhoto,
    onRemove: () => {
      if (profilePhoto[0]?.url) URL.revokeObjectURL(profilePhoto[0].url);
      setProfilePhoto([]);
      return false;
    },
    beforeUpload: (file) => {
      const isImage = file.type.startsWith("image/");
      if (!isImage) {
        toast.error("You can only upload image files!");
        return Upload.LIST_IGNORE;
      }

      const isWithinSizeLimit = file.size <= 10 * 1024 * 1024;
      if (!isWithinSizeLimit) {
        toast.error("File size must be less than 10MB!");
        return Upload.LIST_IGNORE;
      }

      setProfilePhoto([
        {
          ...file,
          url: URL.createObjectURL(file),
          name: file.name,
          size: file.size,
        },
      ]);
      return false;
    },
    accept: "image/*",
    showUploadList: false,
  };

  const formatFileSize = (bytes: number | undefined): string => {
    if (!bytes) return "0 KB";
    if (bytes < 1024) return `${bytes} B`;
    if (bytes < 1024 * 1024) return `${(bytes / 1024).toFixed(1)} KB`;
    return `${(bytes / (1024 * 1024)).toFixed(1)} MB`;
  };

  return (
    <div className="pt-8">
      <Form
        form={form}
        layout="vertical"
        onFinish={onFinish}
        initialValues={{
          fullName: "",
          careerObjective: "",
          skills: "",
          experience: "",
          personalWebsite: "",
        }}
      >
        <h3 className="text-[#333] text-xl font-medium mb-7">
          Personal Information
        </h3>

        <Form.Item
          name="fullName"
          label="Full name"
          rules={[{ required: true, message: "Please enter your full name" }]}
        >
          <Input size="large" placeholder="Enter your full name" />
        </Form.Item>

        <Form.Item name="careerObjective" label="Career objective">
          <TextArea
            rows={4}
            placeholder="Write here your actual career objective"
          />
        </Form.Item>

        <Form.Item name="skills" label="Skills">
          <QuillEditor
            value={form.getFieldValue("skills")}
            onChange={(content) => form.setFieldsValue({ skills: content })}
            placeholder="Write here your skills"
          />
        </Form.Item>

        <Form.Item name="experience" label="Experience">
          <QuillEditor
            value={form.getFieldValue("experience")}
            onChange={(content) => form.setFieldsValue({ experience: content })}
            placeholder="Write here your experience"
          />
        </Form.Item>

        <Form.Item label="Profile photo">
          <Upload.Dragger
            {...profilePhotoProps}
            className="profile-photo-upload"
          >
            {profilePhoto.length > 0 ? (
              <div className="p-4 text-center">
                <Image
                  src={profilePhoto[0]?.url || "/placeholder.svg"}
                  alt="Profile"
                  width={100}
                  height={100}
                  className="max-h-40 mx-auto"
                />
                <p className="mt-2 font-medium">{profilePhoto[0]?.name}</p>
                <p className="text-xs text-gray-500">
                  {formatFileSize(profilePhoto[0]?.size)}
                </p>
                <p className="text-xs mt-2">Click or drag to replace</p>
              </div>
            ) : (
              <div className="p-8 text-center">
                <p className="ant-upload-drag-icon">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="48"
                    height="48"
                    viewBox="0 0 48 48"
                    fill="none"
                    className="mx-auto"
                  >
                    {/* SVG content remains the same */}
                  </svg>
                </p>
                <p className="ant-upload-text">Browse photo or drop here</p>
                <p className="ant-upload-hint text-xs text-gray-400">
                  Format should be JPEG, PNG. Max photo size 2 MB
                </p>
              </div>
            )}
          </Upload.Dragger>
        </Form.Item>

        <Form.Item name="personalWebsite" label="Personal Website">
          <Input
            size="large"
            prefix={<LinkOutlined />}
            placeholder="Website url"
          />
        </Form.Item>

        <Divider />

        <Form.Item label="Documents">
          {documents.length > 0 && (
            <List
              dataSource={documents}
              renderItem={(file) => (
                <List.Item
                  actions={[
                    <Button
                      key="delete"
                      type="text"
                      icon={<DeleteOutlined />}
                      onClick={() => {
                        setDocuments((prev) =>
                          prev.filter((item) => item.uid !== file.uid)
                        );
                        if (file.url) URL.revokeObjectURL(file.url);
                      }}
                      danger
                    />,
                  ]}
                >
                  <List.Item.Meta
                    avatar={<FileOutlined />}
                    title={file.name}
                    description={formatFileSize(file.size)}
                  />
                </List.Item>
              )}
              className="mb-4"
            />
          )}

          <Upload.Dragger
            {...documentUploadProps}
            className="flex flex-col items-center justify-center"
          >
            <div className="p-6 text-center">
              <p className="ant-upload-drag-icon">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="mx-auto"
                  width="48"
                  height="48"
                  viewBox="0 0 48 48"
                  fill="none"
                >
                  {/* SVG content remains the same */}
                </svg>
              </p>
              <p className="ant-upload-text">
                Drag your files or <span className="text-primary">browse</span>
              </p>
              <p className="ant-upload-hint text-xs text-gray-400">
                PDF files only. Max 10 MB per document
              </p>
            </div>
          </Upload.Dragger>
        </Form.Item>

        <Form.Item>
          <Button
            type="primary"
            htmlType="submit"
            className="!bg-primary hover:!bg-primary/90 py-5 px-8 text-base font-medium"
          >
            Next
          </Button>
        </Form.Item>
      </Form>
    </div>
  );
};

export default PersonalInfo;
