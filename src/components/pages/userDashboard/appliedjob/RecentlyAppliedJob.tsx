"use client";
import { useState } from "react";
import Loading from "@/components/shared/Loading/Loading";
import Image from "next/image";
import { useGetAllAppliedJobsQuery } from "@/redux/features/jobseeker/jobseekerApi";
import { ArrowRight, DollarSign, MapPin, MessageCircle } from "lucide-react";
import { Modal } from "antd";
import demoImg from "@/assets/images/dekko.png"
import Link from "next/link";

interface AppliedJob {
  id: string;
  job: {

    id: string;
    title: string;
    type: string;
    location: string;
    salaryRange: string;
    createdAt: string;
    employer: {
      profileImage: string;
      Employer: {
        companyName: string;
      }
    };
    description: string;
    summary: string;
    reponsibility: string[];
    requirements: string[];
    educationQualification: string;
    skills: string[];
    jobBenifits: string[];
    deadline: string;
    editionalQualification: string;
    expireDate: string;
  };
  status: string;
  createdAt: string;
}

const AppliedJobList = () => {
  const [limit] = useState(5);
  const [isDetailsModalOpen, setIsDetailsModalOpen] = useState(false);
  const [selectedDetails, setSelectedDetails] = useState<AppliedJob | null>(
    null
  );

  const { data: allFormatData, isLoading } = useGetAllAppliedJobsQuery({
    limit: limit,
  });

  const getData = allFormatData?.data?.data;

  const handleDetailsClick = (job: AppliedJob) => {
    setSelectedDetails(job);
    setIsDetailsModalOpen(true);
  };

  return (
    <div className=" p-2 sm:p-4 mt-4">
      {isLoading && <Loading />}
      <div className="flex  justify-between items-center gap-1 mb-2">
        <h2 className="text-lg font-medium  sm:mb-0 text-nowrap">
          Recently Applied
        </h2>
        <Link
          href="/user/applied-jobs"
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
                    Job Details
                  </th>
                  <th
                    scope="col"
                    className="px-6 py-3 text-center text-xs font-medium text-gray-500 uppercase tracking-wider"
                  >
                    Applied Date
                  </th>
                  <th
                    scope="col"
                    className="px-6 py-3 text-center text-xs font-medium text-gray-500 uppercase tracking-wider"
                  >
                    Status
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
                  getData.map((singleDataForMap: AppliedJob) => (
                    <tr
                      key={singleDataForMap?.id}
                      className="border-b text-center"
                    >
                      <td className="px-4 py-2 sm:py-3 flex flex-col items-center justify-center ">
                        <div className="flex md:flex-row flex-col items-center gap-2">
                          <p className="font-medium">
                            {singleDataForMap?.job?.title}
                          </p>
                          <div className="text-xs text-[#0077B5] font-medium bg-[#E9EFF2] px-3 py-1 rounded-full">
                            {singleDataForMap?.job?.type}
                          </div>
                        </div>
                        <div className="flex flex-row items-center gap-3 mt-2">
                          <div className="flex items-center gap-2">
                            <MapPin size={16} className="text-[#C8CCD1]" />
                            <p className="text-[#5E6670] text-nowrap">
                              {singleDataForMap?.job?.location}
                            </p>
                          </div>
                          <div className="flex items-center gap-2">
                            <DollarSign size={16} className="text-[#C8CCD1]" />
                            <p className="text-[#5E6670] text-nowrap">
                              {singleDataForMap?.job?.salaryRange || "N/A"}
                            </p>
                          </div>
                        </div>
                      </td>
                      <td className="px-4 py-4 whitespace-nowrap ">
                        <div className="text-sm text-[#5E6670] ">
                          {singleDataForMap?.createdAt
                            ? new Date(
                              singleDataForMap.createdAt
                            ).toLocaleString()
                            : "N/A"}
                        </div>
                      </td>

                      <td className="px-4 py-4 whitespace-nowrap ">
                        <div className="text-sm text-gray-600">
                          {singleDataForMap?.status || "Pending"}
                        </div>
                      </td>

                      <td className="px-4 py-2 sm:py-3">
                        <div>
                          <button
                            className="text-[#0077B5] font-medium bg-[#E9EFF2] px-5 py-3 text-nowrap hover:bg-[#0077B5] hover:text-white rounded transition-colors duration-300"
                            onClick={() => handleDetailsClick(singleDataForMap)}
                          >
                            View Details
                          </button>
                        </div>
                      </td>
                    </tr>
                  ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>



      <Modal
        open={isDetailsModalOpen}
        onCancel={() => setIsDetailsModalOpen(false)}
        footer={null}
        centered
        width={1000}
      >
        {selectedDetails && (
          <div className="p-2 md:p-4">
            <div className="mx-auto">
              <div className="mb-5">
                <Image
                  src={selectedDetails?.job?.employer?.profileImage || demoImg || "/dekko-logo.png"}
                  alt="Image"
                  width={150}
                  height={40}
                  className="mb-4"
                />

                <div className="flex flex-col md:flex-row items-start md:items-center gap-2 mb-1">
                  <h1 className="text-2xl font-bold">
                    {selectedDetails?.job?.title}
                  </h1>
                  <div className="bg-[#0054B5] text-white font-medium text-xs px-3 py-1 rounded-full mt-1">
                    {selectedDetails?.job?.type}
                  </div>
                </div>

                <p className="text-[#7D7F80] text-lg mt-2 md:mt-0">
                  {selectedDetails?.job?.employer?.Employer?.companyName}
                </p>

                <div className="flex justify-start lg:justify-end text-sm md:text-base text-[#7D7F80] mt-2">
                  <div className="flex items-center">
                    <span className="inline-block mr-1">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="16"
                        height="16"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      >
                        <circle cx="12" cy="12" r="10"></circle>
                        <polyline points="12 6 12 12 16 14"></polyline>
                      </svg>
                    </span>
                    Posted on:{" "}
                    {new Date(selectedDetails?.createdAt).toLocaleDateString()}
                  </div>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-2 md:gap-6 mt-5">
                <div className="md:col-span-2">
                  <section className="mb-10">
                    <h2 className="font-semibold mb-2 text-lg md:text-xl">
                      Position summary
                    </h2>
                    <p className="text-[#7D7F80] text-sm md:text-lg">
                      {selectedDetails?.job?.summary ||
                        "No description provided"}
                    </p>
                  </section>

                  <section className="mb-10">
                    <h2 className="font-semibold mb-2 text-lg md:text-xl">
                      Job Description
                    </h2>
                    <p className="text-[#7D7F80] text-sm md:text-lg">
                      {selectedDetails?.job?.description || "No data provided"}
                    </p>
                  </section>

                  <section className="mb-10">
                    <h2 className="font-semibold mb-2 text-lg md:text-xl">
                      Responsibilities
                    </h2>
                    <p className="text-[#7D7F80] text-sm md:text-lg">
                      {selectedDetails?.job?.reponsibility ||
                        "No data provided"}
                    </p>
                  </section>

                  <section className="mb-10">
                    <h2 className="font-semibold mb-2 text-lg md:text-xl">
                      Educational qualification
                    </h2>
                    <p className="text-[#7D7F80] text-sm md:text-lg">
                      {selectedDetails?.job?.educationQualification ||
                        "No data provided"}
                    </p>
                  </section>

                  <section className="mb-10">
                    <h2 className="font-semibold mb-2 text-lg md:text-xl">
                      Additional qualification
                    </h2>
                    <p className="text-[#7D7F80] text-sm md:text-lg">
                      {selectedDetails?.job?.editionalQualification ||
                        "No data provided"}
                    </p>
                  </section>

                  <section className="mb-10">
                    <h2 className="font-semibold mb-2 text-lg md:text-xl">
                      Job benifits
                    </h2>
                    <p className="text-[#7D7F80] text-sm md:text-lg">
                      {selectedDetails?.job?.jobBenifits || "No data provided"}
                    </p>
                  </section>
                </div>

                <div className="md:col-span-1">
                  <div
                    className={`${selectedDetails?.status === "Approved"
                      ? "bg-green-100"
                      : selectedDetails?.status === "Rejected"
                        ? "bg-red-100"
                        : "bg-yellow-100"
                      } p-2 rounded-md mb-4`}
                  >
                    <div
                      className={`text-center ${selectedDetails?.status === "Approved"
                        ? "text-green-600"
                        : selectedDetails?.status === "Rejected"
                          ? "text-red-600"
                          : "text-yellow-600"
                        } font-medium `}
                    >
                      {selectedDetails?.status || "Pending"}
                    </div>
                  </div>

                  <div className="text-base text-[#7D7F80] font-medium mb-2">
                    Job expires in:{" "}
                    <span className="font-medium text-[#E74C3C]">
                      {new Date(
                        selectedDetails?.job?.expireDate
                      ).toLocaleDateString()}
                    </span>
                  </div>

                  <div className="flex justify-center items-center gap-2 my-5">
                    <button className="w-full bg-[#004D6E] hover:bg-[#004D6E]/90 text-white py-2 px-4 rounded flex items-center justify-center gap-2 text-base font-medium transition-colors duration-300">
                      <MessageCircle size={16} />
                      Chat now
                    </button>
                  </div>

                  <div className="mt-6">
                    <div className="bg-gray-50 p-4 rounded-lg">
                      <h3 className="font-semibold text-lg mb-2">Job Overview</h3>
                      <div className="space-y-2">
                        <div className="flex justify-between">
                          <span className="text-[#7D7F80] text-base">Location:</span>
                          <span className="text-base text-black/70">{selectedDetails?.job?.location}</span>
                        </div>
                        <div className="flex justify-between">
                          <span className="text-[#7D7F80] text-base">Salary:</span>
                          <span className="text-base text-black/70">{selectedDetails?.job?.salaryRange || "N/A"}</span>
                        </div>
                        <div className="flex justify-between">
                          <span className="text-[#7D7F80] text-base">Job Type:</span>
                          <span className="text-base text-black/70">{selectedDetails?.job?.type}</span>
                        </div>
                        <div className="flex justify-between">
                          <span className="text-[#7D7F80] text-base">Applied Date:</span>
                          <span className="text-base text-black/70">
                            {new Date(
                              selectedDetails?.job?.createdAt
                            ).toLocaleDateString()}
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}
      </Modal>
    </div>
  );
};

export default AppliedJobList;
