import user from "@/assets/images/find-candidate/user.png";
import Button from "@/components/ui/Button/Button";
import Image from "next/image";
import { LiaFileAlt } from "react-icons/lia";

const CandiadteProfileHeader = () => {
  return (
    <div>
        <div className="flex flex-col md:flex-row items-start gap-6 mb-8">
          <div className="relative  rounded-md overflow-hidden">
            <Image
              src={user}
              alt="Profile photo"
              height={200}
              width={200}
              className="object-cover size-[280px] md:size-[380px]"
            />
          </div>

          <div className="flex-1 ">
            <div>
              <div className="flex  justify-between items-center gap-2 w-full mb-4">
                <h1 className="font-bold text-[32px] font-montserrat text-[#18191C] ">
                  Russell Ahmad
                </h1>
                <Button className="!bg-primary hover:!bg-primary/50 text-white">
                  Hire me
                </Button>
              </div>

              <div className="flex items-center gap-2 text-sm text-gray-500 mt-1 mb-2.5">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="25"
                  viewBox="0 0 24 25"
                  fill="none"
                >
                  <g clipPath="url(#clip0_394_629)">
                    <path
                      d="M8.66965 12.5305C9.44762 14.121 10.7369 15.4044 12.3309 16.1751C12.4475 16.2304 12.5765 16.2543 12.7052 16.2446C12.8339 16.2349 12.9579 16.1918 13.0648 16.1196L15.4119 14.5545C15.5157 14.4853 15.6352 14.443 15.7594 14.4316C15.8837 14.4202 16.0088 14.44 16.1235 14.4891L20.5144 16.371C20.6636 16.4343 20.7881 16.5445 20.8693 16.6847C20.9504 16.825 20.9838 16.9879 20.9643 17.1488C20.8255 18.2348 20.2956 19.233 19.4739 19.9564C18.6521 20.6799 17.5948 21.079 16.5 21.0791C13.1185 21.0791 9.87548 19.7358 7.48439 17.3447C5.0933 14.9536 3.75 11.7106 3.75 8.32907C3.75006 7.23423 4.14918 6.17696 4.87264 5.35521C5.5961 4.53345 6.59428 4.00358 7.68028 3.86479C7.84117 3.84532 8.00403 3.87866 8.14432 3.9598C8.28461 4.04093 8.39473 4.16546 8.4581 4.31462L10.3416 8.70942C10.3903 8.8231 10.4101 8.94706 10.3994 9.07026C10.3886 9.19347 10.3475 9.31209 10.2798 9.41557L8.72011 11.7987C8.64912 11.9059 8.60716 12.0297 8.59831 12.1579C8.58947 12.2862 8.61405 12.4146 8.66965 12.5305V12.5305Z"
                      stroke="#004D6E"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </g>
                  <defs>
                    <clipPath id="clip0_394_629">
                      <rect
                        width="24"
                        height="24"
                        fill="white"
                        transform="translate(0 0.829102)"
                      />
                    </clipPath>
                  </defs>
                </svg>
                <span className="text-[#7D7F80] text-[18px] font-medium leading-[1.1] md:loeading-[1.33] ">
                  (406) 555-0120
                </span>
              </div>
              <div className="flex items-center gap-2 text-sm text-gray-500 mb-2.5">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="25"
                  viewBox="0 0 24 25"
                  fill="none"
                >
                  <path
                    d="M21 6.0791L12 14.3291L3 6.0791"
                    stroke="#004D6E"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M3 6.0791H21V18.8291C21 19.028 20.921 19.2188 20.7803 19.3594C20.6397 19.5001 20.4489 19.5791 20.25 19.5791H3.75C3.55109 19.5791 3.36032 19.5001 3.21967 19.3594C3.07902 19.2188 3 19.028 3 18.8291V6.0791Z"
                    stroke="#004D6E"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M10.3638 12.8291L3.23145 19.3671"
                    stroke="#004D6E"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M20.7687 19.3672L13.6362 12.8291"
                    stroke="#004D6E"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
                <span className="text-[#7D7F80] text-[18px] font-medium leading-[1.1] md:loeading-[1.33] ">
                  career@instagram.com
                </span>
              </div>
              <div className="flex items-center gap-2 text-sm text-gray-500">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="25"
                  viewBox="0 0 24 25"
                  fill="none"
                >
                  <path
                    d="M8.81738 16.0104L15.1813 9.64648"
                    stroke="#247BFF"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M13.5909 17.6017L10.9392 20.2534C10.0953 21.0971 8.95077 21.571 7.75743 21.5709C6.56409 21.5708 5.41965 21.0967 4.57583 20.2529C3.73201 19.409 3.25791 18.2646 3.25781 17.0713C3.25771 15.8779 3.73161 14.7334 4.57529 13.8894L7.22694 11.2378"
                    stroke="#247BFF"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M16.7731 14.4195L19.4248 11.7679C20.2685 10.9239 20.7424 9.77938 20.7423 8.58604C20.7422 7.3927 20.2681 6.24826 19.4243 5.40445C18.5804 4.56063 17.436 4.08653 16.2427 4.08643C15.0493 4.08632 13.9048 4.56023 13.0608 5.4039L10.4092 8.05555"
                    stroke="#247BFF"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
                <span className="text-[#247BFF] text-[18px] font-medium leading-[1.1] md:loeading-[1.33] ">
                  russel23bd.com
                </span>
              </div>

              {/* All Documents */}
              <div className="bg-white rounded-lg p-6 mt-5">
                <h3 className="text-[#101828] text-[16px] leading-[1.25] font-medium mb-5">
                  All documents
                </h3>

                <div className="grid md:grid-cols-2 grid-cols-1 gap-4">
                  <div className="">
                    <p className="text-[16px] leading-[1.25] text-[#444] font-medium mb-2.5">
                      Cv / Resume
                    </p>
                    <div className="border rounded-lg flex justify-between items-center p-2.5">
                      <div className="flex gap-2 ">
                        <LiaFileAlt />
                        <div className="-mt-1">
                          <p>Resume.pdf</p>
                          <p>512kb</p>
                        </div>
                      </div>

                      <button>
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="19"
                          height="19"
                          viewBox="0 0 19 19"
                          fill="none"
                        >
                          <path
                            d="M9.55957 12.1822C9.45957 12.1822 9.36582 12.1667 9.27832 12.1357C9.19082 12.1047 9.10957 12.0515 9.03457 11.976L6.33457 9.27598C6.18457 9.12598 6.11257 8.95098 6.11857 8.75098C6.12457 8.55098 6.19657 8.37598 6.33457 8.22598C6.48457 8.07598 6.66282 7.99798 6.86932 7.99198C7.07582 7.98598 7.25382 8.05773 7.40332 8.20723L8.80957 9.61348V4.25098C8.80957 4.03848 8.88157 3.86048 9.02557 3.71698C9.16957 3.57348 9.34757 3.50148 9.55957 3.50098C9.77157 3.50048 9.94982 3.57248 10.0943 3.71698C10.2388 3.86148 10.3106 4.03948 10.3096 4.25098V9.61348L11.7158 8.20723C11.8658 8.05723 12.0441 7.98523 12.2506 7.99123C12.4571 7.99723 12.6351 8.07548 12.7846 8.22598C12.9221 8.37598 12.9941 8.55098 13.0006 8.75098C13.0071 8.95098 12.9351 9.12598 12.7846 9.27598L10.0846 11.976C10.0096 12.051 9.92832 12.1042 9.84082 12.1357C9.75332 12.1672 9.65957 12.1827 9.55957 12.1822ZM5.05957 15.501C4.64707 15.501 4.29407 15.3542 4.00057 15.0607C3.70707 14.7672 3.56007 14.414 3.55957 14.001V12.501C3.55957 12.2885 3.63157 12.1105 3.77557 11.967C3.91957 11.8235 4.09757 11.7515 4.30957 11.751C4.52157 11.7505 4.69982 11.8225 4.84432 11.967C4.98882 12.1115 5.06057 12.2895 5.05957 12.501V14.001H14.0596V12.501C14.0596 12.2885 14.1316 12.1105 14.2756 11.967C14.4196 11.8235 14.5976 11.7515 14.8096 11.751C15.0216 11.7505 15.1998 11.8225 15.3443 11.967C15.4888 12.1115 15.5606 12.2895 15.5596 12.501V14.001C15.5596 14.4135 15.4128 14.7667 15.1193 15.0607C14.8258 15.3547 14.4726 15.5015 14.0596 15.501H5.05957Z"
                            fill="#4CAF50"
                          />
                        </svg>
                      </button>
                    </div>
                  </div>
                  <div className="">
                    <p className="text-[16px] leading-[1.25] text-[#444] font-medium mb-2.5">
                    NOC
                    </p>
                    <div className="border rounded-lg flex justify-between items-center p-2.5">
                      <div className="flex gap-2 ">
                        <LiaFileAlt />
                        <div className="-mt-1">
                          <p>NOC.pdf</p>
                          <p>512kb</p>
                        </div>
                      </div>

                      <button>
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="19"
                          height="19"
                          viewBox="0 0 19 19"
                          fill="none"
                        >
                          <path
                            d="M9.55957 12.1822C9.45957 12.1822 9.36582 12.1667 9.27832 12.1357C9.19082 12.1047 9.10957 12.0515 9.03457 11.976L6.33457 9.27598C6.18457 9.12598 6.11257 8.95098 6.11857 8.75098C6.12457 8.55098 6.19657 8.37598 6.33457 8.22598C6.48457 8.07598 6.66282 7.99798 6.86932 7.99198C7.07582 7.98598 7.25382 8.05773 7.40332 8.20723L8.80957 9.61348V4.25098C8.80957 4.03848 8.88157 3.86048 9.02557 3.71698C9.16957 3.57348 9.34757 3.50148 9.55957 3.50098C9.77157 3.50048 9.94982 3.57248 10.0943 3.71698C10.2388 3.86148 10.3106 4.03948 10.3096 4.25098V9.61348L11.7158 8.20723C11.8658 8.05723 12.0441 7.98523 12.2506 7.99123C12.4571 7.99723 12.6351 8.07548 12.7846 8.22598C12.9221 8.37598 12.9941 8.55098 13.0006 8.75098C13.0071 8.95098 12.9351 9.12598 12.7846 9.27598L10.0846 11.976C10.0096 12.051 9.92832 12.1042 9.84082 12.1357C9.75332 12.1672 9.65957 12.1827 9.55957 12.1822ZM5.05957 15.501C4.64707 15.501 4.29407 15.3542 4.00057 15.0607C3.70707 14.7672 3.56007 14.414 3.55957 14.001V12.501C3.55957 12.2885 3.63157 12.1105 3.77557 11.967C3.91957 11.8235 4.09757 11.7515 4.30957 11.751C4.52157 11.7505 4.69982 11.8225 4.84432 11.967C4.98882 12.1115 5.06057 12.2895 5.05957 12.501V14.001H14.0596V12.501C14.0596 12.2885 14.1316 12.1105 14.2756 11.967C14.4196 11.8235 14.5976 11.7515 14.8096 11.751C15.0216 11.7505 15.1998 11.8225 15.3443 11.967C15.4888 12.1115 15.5606 12.2895 15.5596 12.501V14.001C15.5596 14.4135 15.4128 14.7667 15.1193 15.0607C14.8258 15.3547 14.4726 15.5015 14.0596 15.501H5.05957Z"
                            fill="#4CAF50"
                          />
                        </svg>
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
    </div>
  )
}

export default CandiadteProfileHeader