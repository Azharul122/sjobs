import img from "@/assets/images/Dashboard/box.png";
import img2 from "@/assets/images/Dashboard/BookmarkSimple.png";
import img3 from "@/assets/images/Dashboard/BellRinging.png";
import Image from "next/image";
import { useGetCardDataAppliedJobsQuery } from "@/redux/features/jobseeker/jobseekerApi";
export default function UserStatCards() {
  const { data: getData } = useGetCardDataAppliedJobsQuery(undefined);
  console.log(getData?.data);
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-5 lg:gap-8 font-poppins">
      <div className="bg-[#E9EFF2] rounded-xl p-6 flex-1 flex justify-between items-center max-w-[500px] py-6">
        <div>
          <p className="text-4xl font-semibold text-gray-800  mb-2">{getData?.data?.totalAppliedJobs}</p>
          <p className="text-gray-500 text-xl">Applied jobs</p>
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
          <p className="text-4xl font-semibold text-gray-800 mb-2">{getData?.data?.totalFavoriteJobs}</p>
          <p className="text-gray-500 text-xl">Favorite jobs</p>
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

      <div className="bg-[#E9EFF2] rounded-xl p-6 flex-1 flex justify-between items-center max-w-[500px] py-6">
        <div>
          <p className="text-4xl font-semibold text-gray-800 mb-2">{getData?.data?.totalFavoriteJobs}</p>
          <p className="text-gray-500 text-xl">Favorite jobs</p>
        </div>
        <div className="bg-white p-5 lg:p-7 rounded-lg">
          <Image
            src={img3}
            alt="box"
            width={img3.width}
            height={img3.height}
            className="h-12 w-12 md:h-14 md:w-14"
          />
        </div>
      </div>
    </div>
  );
}
