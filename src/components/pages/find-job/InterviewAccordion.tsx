"use client";
import { Collapse } from "antd";
import { DownOutlined } from "@ant-design/icons";

type InterviewQuestion = {
  id: string;
  number: string;
  question: string;
  answer: string;
};

interface InterviewAccordionProps {
  title: string;
  questions: InterviewQuestion[];
}

export function InterviewAccordion({
  title,
  questions,
}: InterviewAccordionProps) {
  const items = questions.map((item) => ({
    key: item.id,
    label: (
      <div className="flex items-center gap-2 text-gray-800">
        <span className="font-medium">{item.number}.</span>
        <span>{item.question}</span>
      </div>
    ),
    children: (
      <div className="text-gray-600 text-sm leading-relaxed">{item.answer}</div>
    ),
  }));

  return (
    <div className="rounded-lg shadow-sm">
      <div className="py-8 md:px-4">
        <h2 className="md:text-[28px] text-[24px] font-semibold text-center text-gray-800 mb-8 font-montserrat">
          {title}
        </h2>
        <Collapse
          defaultActiveKey={[questions[0]?.id]}
          expandIcon={({ isActive }) => (
            <DownOutlined
              className={`text-gray-400 transition-transform duration-200 ${
                isActive ? "rotate-180" : "rotate-0"
              }`}
            />
          )}
          expandIconPosition="end"
          className="interview-accordion"
          items={items}
        />
      </div>
    </div>
  );
}