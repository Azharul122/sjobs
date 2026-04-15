/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";
import { Button, Form, Input } from "antd";
import authlogo from "@/assets/images/home/logo-auth.png";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { useForgotPasswordMutation } from "@/redux/features/auth/authApi";
import { toast } from "sonner";
import Loading from "@/components/shared/Loading/Loading";
import Swal from "sweetalert2";
type FieldType = {
  email: string;
  password: string;
};

export default function ForgetPassWordEmail() {
  const [form] = Form.useForm<FieldType>();

  const [loading, setLoading] = useState(false);
  const [forgotPassword] = useForgotPasswordMutation();

  const handleForgetPasswordEmail = async (data: { email: string }) => {
    setLoading(true);
    const totastId = toast.loading("Please wait...");
    if (data) {
      try {
        const response = await forgotPassword(data).unwrap();
        if (response?.data) {
          Swal.fire({
            title: "Success!",
            text: "An email has been successfully sent. Please check your inbox.",
            icon: "success",
            confirmButtonText: "OK",
          }).then(() => {
            setLoading(false);
            toast.dismiss(totastId);
          });
        }
      } catch (error: any) {
        const errorMessage = error?.data?.message || "Please try again!";

        toast.error(errorMessage, { id: totastId, duration: 1500 });
        setLoading(false);
      }
    }
  };

  return (
    <div className="h-screen flex items-center justify-center">
      {loading && <Loading />}
      <div className="grid lg:grid-cols-2 grid-cols-1 h-full w-full">
        <div className="bg-white lg::min-h-screen xl:pl-24 pl-8 pr-4 flex justify-center flex-col py-10 md:py-0">
          <div className="max-w-[600px]">
            <Image alt="" src={authlogo} className=" sm:size-40 size-24" />
            <h3 className="text-[28px] font-bold font-montserrat leading-[1.1] md:leading-[1.55] text-[#0077B5] lg:mt-10 mt-5 mb-4">
              Forget Password
            </h3>
            <p className="text-[#6B6B6B] md:text-[20px] text-[16px] font-medium md:leading-[1.55] leading-[1.1]">
              If you&apos;re experiencing trouble with your password or are a
              visitor from our previous site, please reset it using the email
              and check your spam folder for a reset Link.
            </p>
          </div>
        </div>

        <div className="bg-[#004D6E] flex items-center justify-center py-10 lg:py-0">
          <div className="w-full max-w-[700px] md:pl-11 pl-5 pr-3">
            <Form
              form={form}
              name="login"
              layout="vertical"
              onFinish={handleForgetPasswordEmail}
              requiredMark={false}
            >
              <Form.Item<FieldType>
                label={
                  <span className="text-[#F5F5F5] text-[20px] leading-[1.1] md:leading-[1.4] font-medium">
                    E-mail
                  </span>
                }
                name="email"
                validateFirst
              >
                <Input
                  size="large"
                  className="h-12"
                  placeholder="Enter your email"
                />
              </Form.Item>

              <Form.Item>
                <Button
                  type="primary"
                  htmlType="submit"
                  loading={loading}
                  block
                  size="large"
                  className="h-12 bg-secondary hover:!bg-secondary/90 border-none text-lg font-semibold text-white"
                >
                  Send
                </Button>
              </Form.Item>

              <div className="text-center text-[#F5F5F5] text-base font-normal mt-4">
                Don&apos;t have an account?{" "}
                <Link
                  href="/auth/register"
                  className=" underline text-[#2ECC71] font-semibold hover:text-[#2ECC71]/80 transition duration-200 ease-in-out"
                >
                  Sign up
                </Link>
              </div>
            </Form>
          </div>
        </div>
      </div>
    </div>
  );
}
