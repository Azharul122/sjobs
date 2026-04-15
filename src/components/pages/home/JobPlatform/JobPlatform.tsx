import Image from "next/image";
import Link from "next/link";
import LogoSrc from "@/assets/icons/logo.png";
import Person1 from "@/assets/images/man-safety-equipment-work 1.png";
import Person2 from "@/assets/images/portrait-bearded-middle-aged-general-manager-walking-factory-facility-wearing-casual-sui 1.png";
import Circle from "@/assets/icons/Ellipse 800.png";
import Button from "@/components/ui/Button/Button";
import Bg1 from "@/assets/images/home/e258385ee2b4ca12e10bf587acd54949.jpg";
import Bg2 from "@/assets/images/home/5878fa7b0f2e31ecb5101c175ca1d049.jpg";

export default function JobPlatform() {
  return (
    <div className="flex flex-col lg:h-[500px]  md:flex-row w-full container mb-20 mx-auto gap-4">
      {/* Job Seeker Card */}
      <div className="w-full md:w-1/2 bg-[#62CDFF4A] rounded-lg p-8 flex flex-col items-center justify-center relative overflow-hidden">
        <Image
          src={Bg1}
          alt="Background"
          width={Bg1.width}
          height={Bg1.height}
          className="absolute top-0 left-0 w-full h-full object-cover opacity-50"
        />
        <Image
          src={Circle}
          alt="Logo"
          width={Circle.width}
          height={Circle.height}
          className="absolute top-0 right-0 w-64 h-64 rounded-full  -mr-32 -mt-32"
          priority
        />

        <div className="z-10 flex flex-col items-center">
          <div className="mb-12">
            <Image
              src={LogoSrc}
              alt="Logo"
              width={LogoSrc.width}
              height={LogoSrc.height}
              className="object-contain max-w-[240px]"
              priority
            />
          </div>

          <h2 className="text-3xl font-bold text-center mb-2">Job Seeker</h2>
          <p className="text-center text-gray-700 mb-8">
            Start your journey to the perfect job today
          </p>

          <div className="mb-6 absolute -bottom-8 left-0">
            <Image
              src={Person1}
              alt="Cartoon person making peace sign"
              width={Person1.width}
              height={Person1.height}
              className="h-56 w-auto max-lg:hidden"
            />
          </div>

          <Link href="/login">
            <Button size="large">Login</Button>
          </Link>

          <div className="flex mt-5 text-lg items-center gap-1">
            <span className="text-gray-600">or</span>
            <Link
              href="/register"
              className="text-success hover:text-success/80 font-medium"
            >
              Create Account
            </Link>
          </div>
        </div>
      </div>

      {/* Employer Card */}
      <div className="w-full relative md:w-1/2  bg-white rounded-lg p-8 flex flex-col justify-center items-center overflow-hidden  shadow-sm">
        <Image
          src={Bg2}
          alt="Background"
          width={Bg2.width}
          height={Bg2.height}
          className="absolute top-0 left-0 w-full h-full object-cover opacity-50"
        />
        <Image
          src={Circle}
          alt="Logo"
          width={Circle.width}
          height={Circle.height}
          className="absolute bottom-0 left-0 w-64 h-64 rounded-full -ml-32 -mb-32"
          priority
        />

        <div className=" z-10 flex flex-col items-center">
          <div className="mb-12">
            <Image
              src={LogoSrc}
              alt="Logo"
              width={LogoSrc.width}
              height={LogoSrc.height}
              className="object-contain max-w-[240px]"
              priority
            />
          </div>

          <h2 className="text-3xl font-bold text-center mb-2">Employer</h2>
          <p className="text-center text-gray-700 mb-8">
            Discover the perfect candidates for your team
          </p>

          <div className="mb-6 absolute -bottom-10 right-0">
            <Image
              src={Person2}
              alt="Cartoon person making peace sign"
              width={Person2.width}
              height={Person2.height}
              className="h-60 w-auto max-lg:hidden"
            />
          </div>

          <Link href="/employer/login">
            <Button size="large">Login</Button>
          </Link>

          <div className="flex mt-5 text-lg items-center gap-1">
            <span className="text-gray-600">or</span>
            <Link
              href="/employer/register"
              className="text-success hover:text-success/80 font-medium"
            >
              Create Account
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
