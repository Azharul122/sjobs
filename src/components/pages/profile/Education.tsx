/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";

import React, { useState } from "react";
import { Button, Card, Form, Input, Space } from "antd";
import { PlusOutlined, DeleteOutlined } from "@ant-design/icons";
import { useAppDispatch } from "@/redux/hooks";
import { setEducation } from "@/redux/features/profile/profileSlice";

interface EducationEntry {
  id: string;
  degreeName: string;
  institution: string;
  passingYear: string;
}

interface PersonalInfoProps {
  onComplete: () => void;
}

const Education = ({ onComplete }: PersonalInfoProps) => {
  const [educationEntries, setEducationEntries] = useState<EducationEntry[]>(
    []
  );
  const [isAnyFormOpen, setIsAnyFormOpen] = useState(false);
  const [newEntryId, setNewEntryId] = useState<string | null>(null);
  const dispatch = useAppDispatch();

  const handleAddNew = () => {
    const newId = Date.now().toString();
    setEducationEntries([
      {
        id: newId,
        degreeName: "",
        institution: "",
        passingYear: "",
      },
      ...educationEntries,
    ]);
    setNewEntryId(newId);
    setIsAnyFormOpen(true);
  };

  const handleSaveEntry = (values: any, id: string) => {
    const updatedEntries = educationEntries.map((entry) =>
      entry.id === id
        ? {
            ...entry,
            degreeName: values.degreeName,
            institution: values.institution,
            passingYear: values.passingYear,
          }
        : entry
    );

    setEducationEntries(updatedEntries);
    setNewEntryId(null);
    setIsAnyFormOpen(false);
  };

  const handleDeleteEntry = (id: string) => {
    const updatedEntries = educationEntries.filter((entry) => entry.id !== id);
    setEducationEntries(updatedEntries);
  };

  const handleSaveChanges = () => {
    dispatch(setEducation(educationEntries));
    onComplete();
    console.log("Saved education data:", educationEntries);
  };

  return (
    <div className="mx-auto pt-8">
      <div className="flex justify-between items-center mb-4">
        <h3 className="text-[#333] text-xl font-medium mb-7">Education</h3>
      </div>

      <Card
        className="mb-4"
        extra={
          <Button
            type="link"
            icon={<PlusOutlined />}
            onClick={handleAddNew}
            disabled={isAnyFormOpen}
            className="!text-primary hover:!text-primary/90"
          >
            Add new
          </Button>
        }
      >
        <Space direction="vertical" style={{ width: "100%" }} size="large">
          {educationEntries
            .filter((entry) => entry.id !== newEntryId)
            .map((entry) => (
              <Card key={entry.id} size="small" className="mb-4">
                <div className="flex justify-between items-center">
                  <div>
                    <div className="text-base font-medium">
                      {entry.degreeName}
                    </div>
                    <div className="text-sm text-gray-500">
                      {entry.institution}
                    </div>
                    <div className="text-sm text-gray-500">
                      {entry.passingYear}
                    </div>
                  </div>
                  <Button
                    type="link"
                    icon={<DeleteOutlined size={20} />}
                    onClick={() => handleDeleteEntry(entry.id)}
                    className="!text-red-500 hover:!text-red-300"
                  />
                </div>
              </Card>
            ))}
          {newEntryId && (
            <Card size="small">
              <Form
                layout="vertical"
                initialValues={{
                  degree: "",
                  institution: "",
                  passingYear: "",
                }}
                onFinish={(values) => handleSaveEntry(values, newEntryId)}
              >
                <Form.Item label="Degree name" name="degreeName">
                  <Input size="large" placeholder="Write your degree name" />
                </Form.Item>

                <Form.Item label="Institution" name="institution">
                  <Input
                    size="large"
                    placeholder="Write your institution name"
                  />
                </Form.Item>
                <Form.Item label="Passing year" name="passingYear">
                  <Input size="large" placeholder="Write your passing year" />
                </Form.Item>
                <Form.Item>
                  <button
                    className="!bg-primary hover:!bg-primary-hover px-6 py-2 rounded-md text-white"
                    type="submit"
                  >
                    Save
                  </button>
                </Form.Item>
              </Form>
            </Card>
          )}
        </Space>
      </Card>

      <Button
        size="large"
        className="!bg-primary hover:!bg-primary/90 px-6 !py-5 rounded-md text-white"
        type="primary"
        onClick={handleSaveChanges}
      >
        Next
      </Button>
    </div>
  );
};

export default Education;
