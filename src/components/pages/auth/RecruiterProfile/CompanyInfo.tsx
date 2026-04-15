import React from "react";

interface CompanyInfoProps {
  onComplete: () => void;
}

const CompanyInfo = ({ onComplete }: CompanyInfoProps) => {
  return <div onClick={() => onComplete()}>CompanyInfo</div>;
};

export default CompanyInfo;
