import img from "@/assets/images/Dashboard/box.png";
import img2 from "@/assets/images/Dashboard/card.png";
import { useGetStaticDataQuery } from "@/redux/features/admin/adminApi";
import Image from "next/image";
export default function StatCards() {
  const { data: staticData } = useGetStaticDataQuery(undefined);
  return (
    <div className="flex flex-col sm:flex-row gap-5 lg:gap-8 font-poppins">
      <div className="bg-[#E9EFF2] rounded-xl p-6 flex-1 flex justify-between items-center max-w-[500px] py-6">
        <div>
          <p className="text-4xl font-semibold text-gray-800  mb-2">{staticData?.data?.totalOpenJobs}</p>
          <p className="text-gray-500 text-xl">Open Jobs</p>
        </div>
        <div className="bg-white p-5 lg:p-7 rounded-lg">
          <Image
            src={img}
            alt="box"
            width={img.width}
            height={img.height}
            className="h-12 w-12 md:h-14 md:w-14"
          />
        </div>
      </div>

      <div className="bg-[#E9EFF2] rounded-xl p-6 flex-1 flex justify-between items-center max-w-[500px] py-6">
        <div>
          <p className="text-4xl font-semibold text-gray-800 mb-2">{staticData?.data?.totalCompany}</p>
          <p className="text-gray-500 text-xl">Total company</p>
        </div>
        <div className="bg-white p-5 lg:p-7 rounded-lg">
          <Image
            src={img2}
            alt="box"
            width={img2.width}
            height={img2.height}
            className="h-12 w-12 md:h-14 md:w-14"
          />
        </div>
      </div>
    </div>
  );
}
