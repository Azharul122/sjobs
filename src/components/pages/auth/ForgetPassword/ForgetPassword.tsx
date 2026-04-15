/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";
import { Button, Form, Input } from "antd";
// import { FacebookFilled, GoogleOutlined, AppleFilled } from "@ant-design/icons";
import authlogo from "@/assets/images/home/logo-auth.png";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { useLoginMutation } from "@/redux/features/auth/authApi";
import { useAppDispatch } from "@/redux/hooks";
import { toast } from "sonner";
import { jwtDecode } from "jwt-decode";
import { setUser } from "@/redux/features/auth/authSlice";
import Cookie from "js-cookie";
import Loading from "@/components/shared/Loading/Loading";
type FieldType = {
  email: string;
  password: string;
  remember?: boolean;
};

export default function ForgetPassWord() {
  const [form] = Form.useForm<FieldType>();

  const router = useRouter();
  const [loading, setLoading] = useState(false);
  const [loginApi] = useLoginMutation();
  const dispatch = useAppDispatch();

  const handleLogin = async (data: { email: string; password: string }) => {
    setLoading(true);
    const totastId = toast.loading("Loging in...");
    if (data) {
      try {
        const response = await loginApi(data).unwrap();
        if (response?.data) {
          router.refresh();
          const decodedToken: any = jwtDecode(response?.data?.accessToken);
          dispatch(
            setUser({
              access_token: response?.data?.accessToken,
              user: {
                id: decodedToken?.id,
                email: decodedToken?.email,
                role: decodedToken?.role,
              },
            })
          );
          Cookie.set("accessToken", response?.data?.accessToken);
          toast.success("Logged in", { id: totastId, duration: 2000 });
          if (decodedToken?.role === "SUPER_ADMIN") {
            router.push("/dashboard");
          } else if (decodedToken?.role === "EMPLOYER") {
            router.push("/overview-employe");
          } else if (decodedToken?.role === "JOBSEEKER") {
            router.push("/user/user-overview");
          } else {
            router.push("/auth/login");
          }
        }
      } catch {
        toast.error("Incorrect Password", { id: totastId, duration: 1500 });
      } finally {
        setLoading(false);
      }
    }
  };

  const handleForgetPassword = async () => {
    console.log("Forgot password clicked");
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
              onFinish={handleLogin}
              requiredMark={false}
              initialValues={{
                email: "tonmuyahmmedsifath@gmail.com",
                password: "sifat017",
              }}
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

              <Form.Item<FieldType>
                label={
                  <span className="text-[#F5F5F5] text-[20px] leading-[1.1] md:leading-[1.4] font-medium">
                    Password
                  </span>
                }
                name="password"
                rules={[
                  { required: true, message: "Please input your password!" },
                ]}
                validateFirst
              >
                <Input.Password
                  size="large"
                  className="h-12"
                  placeholder="Enter your password"
                />
              </Form.Item>

              <div className="flex flex-col md:flex-row md:items-center justify-end mt-2 mb-5">
                <button
                  type="button"
                  className="text-[#E9C600] text-base font-medium hover:text-[#E9C600]/85 transition duration-200 ease-in-out"
                  onClick={() => handleForgetPassword()}
                >
                  <Link href="/auth/forgot-password"> Forgot Password</Link>
                </button>
              </div>

              <Form.Item>
                <Button
                  type="primary"
                  htmlType="submit"
                  loading={loading}
                  block
                  size="large"
                  className="h-12 bg-secondary hover:!bg-secondary/90 border-none text-lg font-semibold text-white"
                >
                  Sign In
                </Button>
              </Form.Item>

              <div className="text-center text-white my-2 text-base">
                or Sign in With
              </div>

              <div className="flex justify-center space-x-6 my-4">
                <Button
                  shape="circle"
                  icon={
                    <Link href={"#"}>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="30"
                        height="30"
                        viewBox="0 0 30 30"
                        fill="none"
                      >
                        <path
                          d="M29.5 15.0879C29.5 7.07981 23.0081 0.587891 15 0.587891C6.99192 0.587891 0.5 7.0797 0.5 15.0879C0.5 22.3252 5.80247 28.324 12.7344 29.4117V19.2793H9.05273V15.0879H12.7344V11.8934C12.7344 8.2593 14.8992 6.25195 18.2112 6.25195C19.7977 6.25195 21.457 6.53516 21.457 6.53516V10.1035H19.6287C17.8273 10.1035 17.2656 11.2213 17.2656 12.368V15.0879H21.2871L20.6442 19.2793H17.2656V29.4117C24.1975 28.324 29.5 22.3253 29.5 15.0879Z"
                          fill="#CACACA"
                        />
                      </svg>
                    </Link>
                  }
                  size="large"
                  className="flex items-center justify-center !bg-transparent !border-none"
                />
                <Button
                  shape="circle"
                  icon={
                    <Link href={"#"}>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="31"
                        height="30"
                        viewBox="0 0 31 30"
                        fill="none"
                      >
                        <g clipPath="url(#clip0_83_2336)">
                          <path
                            d="M10.9508 0.986424C7.95329 2.02627 5.36828 3.99994 3.57542 6.61752C1.78256 9.23511 0.876358 12.3586 0.989915 15.5293C1.10347 18.7 2.2308 21.7507 4.20632 24.2333C6.18184 26.7159 8.90142 28.4996 11.9656 29.3224C14.4498 29.9634 17.0525 29.9915 19.55 29.4044C21.8124 28.8962 23.9041 27.8092 25.6203 26.2497C27.4064 24.5771 28.7029 22.4493 29.3703 20.095C30.0955 17.5348 30.2246 14.8425 29.7476 12.2247H15.7976V18.0114H23.8765C23.7151 18.9344 23.3691 19.8152 22.8592 20.6013C22.3494 21.3874 21.6862 22.0626 20.9093 22.5864C19.923 23.2392 18.8108 23.6783 17.6445 23.8755C16.4748 24.093 15.2751 24.093 14.1054 23.8755C12.9199 23.6306 11.7983 23.1413 10.8125 22.4388C9.22845 21.3175 8.03906 19.7245 7.41404 17.8872C6.77862 16.0154 6.77862 13.9863 7.41404 12.1145C7.85894 10.8026 8.59443 9.60799 9.5656 8.62002C10.677 7.46864 12.084 6.64564 13.6324 6.24129C15.1807 5.83694 16.8105 5.86689 18.3429 6.32783C19.5401 6.69515 20.6349 7.33723 21.5398 8.20283C22.4508 7.29658 23.3601 6.38799 24.2679 5.47705C24.7367 4.98721 25.2476 4.5208 25.7094 4.01924C24.3278 2.73373 22.7062 1.73339 20.9375 1.07549C17.7165 -0.0940681 14.1921 -0.125499 10.9508 0.986424Z"
                            fill="white"
                          />
                          <path
                            d="M10.9504 0.986587C14.1915 -0.126092 17.7158 -0.0954888 20.9371 1.07331C22.7062 1.73568 24.327 2.74084 25.7066 4.03112C25.2379 4.53268 24.7434 5.00143 24.2652 5.48893C23.3559 6.39674 22.4473 7.30143 21.5395 8.20299C20.6345 7.3374 19.5398 6.69531 18.3426 6.32799C16.8106 5.86543 15.1809 5.83376 13.6322 6.23645C12.0834 6.63914 10.6755 7.46064 9.56289 8.61081C8.59172 9.59878 7.85623 10.7933 7.41133 12.1053L2.55273 8.34362C4.29182 4.89493 7.30293 2.25696 10.9504 0.986587Z"
                            fill="#E33629"
                          />
                          <path
                            d="M1.26407 12.0703C1.52502 10.776 1.95858 9.52264 2.55313 8.34375L7.41172 12.1148C6.77631 13.9866 6.77631 16.0157 7.41172 17.8875C5.79297 19.1375 4.17344 20.3938 2.55313 21.6563C1.0652 18.6945 0.61141 15.3199 1.26407 12.0703Z"
                            fill="#F8BD00"
                          />
                          <path
                            d="M15.7979 12.2227H29.7479C30.2248 14.8405 30.0958 17.5328 29.3706 20.093C28.7032 22.4472 27.4067 24.575 25.6206 26.2477C24.0526 25.0242 22.4776 23.8102 20.9096 22.5867C21.687 22.0624 22.3505 21.3865 22.8604 20.5995C23.3702 19.8126 23.716 18.9308 23.8768 18.007H15.7979C15.7956 16.0805 15.7979 14.1516 15.7979 12.2227Z"
                            fill="#587DBD"
                          />
                          <path
                            d="M2.55078 21.6564C4.17109 20.4064 5.79062 19.1502 7.40937 17.8877C8.03564 19.7257 9.22673 21.3187 10.8125 22.4393C11.8014 23.1386 12.9254 23.6239 14.1125 23.8643C15.2822 24.0818 16.4819 24.0818 17.6516 23.8643C18.8179 23.6671 19.93 23.228 20.9164 22.5752C22.4844 23.7986 24.0594 25.0127 25.6273 26.2361C23.9115 27.7964 21.8197 28.8843 19.557 29.3932C17.0596 29.9803 14.4569 29.9521 11.9727 29.3111C10.0079 28.7865 8.17268 27.8617 6.58203 26.5947C4.89858 25.2579 3.52352 23.5734 2.55078 21.6564Z"
                            fill="#319F43"
                          />
                        </g>
                        <defs>
                          <clipPath id="clip0_83_2336">
                            <rect
                              width="30"
                              height="30"
                              fill="white"
                              transform="translate(0.5)"
                            />
                          </clipPath>
                        </defs>
                      </svg>
                    </Link>
                  }
                  size="large"
                  className="flex items-center justify-center !bg-transparent !border-none"
                />
                <Button
                  shape="circle"
                  icon={
                    <Link href={"#"}>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="29"
                        height="32"
                        viewBox="0 0 29 32"
                        fill="none"
                      >
                        <path
                          d="M21.3534 0.0160139C21.2802 -0.0599857 18.6417 0.0460138 16.3457 2.36C14.0497 4.67199 14.403 7.32398 14.4546 7.39198C14.5063 7.45998 17.7285 7.56597 19.7854 4.87599C21.8424 2.186 21.4267 0.0940135 21.3534 0.0160139ZM28.4913 23.4819C28.3879 23.2899 23.4836 21.0139 23.9402 16.6379C24.3968 12.26 27.5479 11.06 27.5974 10.93C27.647 10.8 26.3116 9.34997 24.8965 8.61597C23.8575 8.09848 22.7076 7.80199 21.53 7.74797C21.2974 7.74197 20.4897 7.55797 18.8291 7.97997C17.735 8.25797 15.2688 9.15797 14.5903 9.19397C13.9097 9.22997 11.8851 8.14997 9.70755 7.86397C8.31401 7.61397 6.83647 8.12597 5.77893 8.51997C4.72354 8.91197 2.71615 10.028 1.31184 12.9939C-0.0924689 15.9579 0.641994 20.6539 1.16753 22.1139C1.69307 23.5719 2.51369 25.9619 3.90939 27.7059C5.15 29.6739 6.79555 31.0399 7.48263 31.5038C8.1697 31.9678 10.1082 32.2758 11.4522 31.6378C12.5334 31.0219 14.4848 30.6679 15.2559 30.6939C16.0248 30.7199 17.5411 31.0019 19.094 31.7718C20.3239 32.1658 21.487 32.0018 22.6522 31.5618C23.8174 31.1199 25.5039 29.4439 27.4725 26.0459C28.2199 24.4659 28.5602 23.6119 28.4913 23.4819Z"
                          fill="#CACACA"
                        />
                        <path
                          d="M21.3534 0.0160139C21.2802 -0.0599857 18.6417 0.0460138 16.3457 2.36C14.0497 4.67199 14.403 7.32398 14.4546 7.39198C14.5063 7.45998 17.7285 7.56597 19.7854 4.87599C21.8424 2.186 21.4267 0.0940135 21.3534 0.0160139ZM28.4913 23.4819C28.3879 23.2899 23.4836 21.0139 23.9402 16.6379C24.3968 12.26 27.5479 11.06 27.5974 10.93C27.647 10.8 26.3116 9.34997 24.8965 8.61597C23.8575 8.09848 22.7076 7.80199 21.53 7.74797C21.2974 7.74197 20.4897 7.55797 18.8291 7.97997C17.735 8.25797 15.2688 9.15797 14.5903 9.19397C13.9097 9.22997 11.8851 8.14997 9.70755 7.86397C8.31401 7.61397 6.83647 8.12597 5.77893 8.51997C4.72354 8.91197 2.71615 10.028 1.31184 12.9939C-0.0924689 15.9579 0.641994 20.6539 1.16753 22.1139C1.69307 23.5719 2.51369 25.9619 3.90939 27.7059C5.15 29.6739 6.79555 31.0399 7.48263 31.5038C8.1697 31.9678 10.1082 32.2758 11.4522 31.6378C12.5334 31.0219 14.4848 30.6679 15.2559 30.6939C16.0248 30.7199 17.5411 31.0019 19.094 31.7718C20.3239 32.1658 21.487 32.0018 22.6522 31.5618C23.8174 31.1199 25.5039 29.4439 27.4725 26.0459C28.2199 24.4659 28.5602 23.6119 28.4913 23.4819Z"
                          fill="#CACACA"
                        />
                      </svg>
                    </Link>
                  }
                  size="large"
                  className="flex items-center justify-center !bg-transparent !border-none"
                />
              </div>

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
