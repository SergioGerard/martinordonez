"use client";
import Link from "next/link";
import React from "react";

import { usePathname } from "next/navigation";

export default function Footer() {
  const pathname = usePathname();
  const isAdminRoute = pathname.startsWith("/admin");

  if (!isAdminRoute) {
    return (
      <div className="text-primary py-[80px] px-2 lg:px-[150px] bg-[#000000] mt-[90px]">
        <div
          className="pb-[30px]"
          style={{ borderBottom: "1px solid #C1C7CD" }}
        >
          <h2 className="text-xl sm:text-2xl md:text-3xl lg:w-1/3 flex lg:justify-start justify-center font-bold">
            <span className="text-blue-600">Martin Ordonez</span>
          </h2>
          <p className="text-xl lg:w-1/3 flex lg:justify-start justify-center text-[#ffffff]">
            Power Electronics and Renewable Energy
          </p>
          <div className="flex text-primary w-[80%] lg:w-1/3 mt-[40px] lg:mt-[0] justify-end lg:justify-center mb-[30px] lg:mt-[0]"></div>
        </div>

        <div className="flex flex-col items-center lg:flex-row lg:justify-between py-[30px]">
          <div className="w-[80%] lg:w-1/3 flex flex-col lg:flex-row text-center lg:text-start my-[30px] my:mt-[0]">
            <div className="lg:pe-[60px]">
              <div className="flex items-center justify-center lg:justify-start pb-[10px]">
                <img
                  src="/university_of_british_columbia.png"
                  alt="Logo"
                  className="w-[270px] sm:w-[370px]"
                />
              </div>
            </div>
          </div>
          <div className="w-full lg:w-2/3 flex flex-col lg:flex-row lg:justify-end">
            <div className="pb-[30px] lg:pb-[0] lg:pe-[60px] w-full lg:w-1/3">
              <div className="flex items-center justify-center lg:justify-start pb-[10px]">
                <div className="font-[700] text-[25px] text-[#ffffff]">
                  Contact
                </div>
              </div>
              <div>
                <div className="flex items-center justify-center lg:justify-start">
                  <img
                    src="/social/mail.svg"
                    alt="mail icon"
                    className="w-[20px] me-[10px]"
                  />
                  <div className="text-[#EEE]">contact@martinordonez.com</div>
                </div>
              </div>
            </div>

            <div className="pb-[30px] lg:pb-[0] ">
              <div className="flex items-center justify-center lg:justify-start pb-[10px]">
                <div className="font-[700] text-[25px] text-[#ffffff]">
                  Find me in
                </div>
              </div>
              <div className="flex justify-center lg:justify-start gap-3">
                <Link href="https://www.facebook.com/" target="_blank">
                  <img
                    src="/social/facebook.svg"
                    alt="facebook icon"
                    className="w-[20px]"
                  />
                </Link>

                <Link href="https://www.instagram.com/" target="_blank">
                  <img
                    src="/social/instagram.svg"
                    alt="instagram icon"
                    className="w-[20px]"
                  />
                </Link>

                <Link href="https://www.linkedin.com/" target="_blank">
                  <img
                    src="/social/linkedin.svg"
                    alt="linkedin icon"
                    className="w-[20px]"
                  />
                </Link>

                <Link href="https://www.youtube.com/" target="_blank">
                  <img
                    src="/social/youtube.svg"
                    alt="youtube icon"
                    className="w-[20px]"
                  />
                </Link>
              </div>
            </div>
          </div>
        </div>

        <div className="flex flex-col items-center gap-6 lg:flex-row lg:justify-between pt-[30px]">
          <div className="flex flex-row text-center sm:gap-3">
            <p className="text-[#999999]">Copyright ©2024 Martin Ordonez</p>
          </div>
        </div>
      </div>
    );
  }
}
