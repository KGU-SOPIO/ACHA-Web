import { ReactComponent as Logo } from "../assets/Dark_sopio_logo.svg";
import React from "react";

function Footer() {
  return (
    <footer className="bg-gray-100 text-gray-600 py-8 px-6 md:px-16 lg:px-32">
      <div className="container mx-auto flex flex-col md:flex-row justify-between items-center md:items-start space-y-6 md:space-y-0">
        <div className="flex flex-col items-center md:items-start">
          <Logo className="mb-4 md:mb-[40px] w-[60px] h-auto" />
          <p className="text-xs text-center md:text-left">
            Copyright ⓒ 2025. All Rights Reserved Acha
          </p>
        </div>

        {/* 연락처 및 기타 정보 섹션 */}
        {/* <div className="text-center md:text-left text-sm">
          <p>SOPIO 대표자 홍준서</p>
          <p>AI 경기대학교 컴퓨터공학부</p>
        </div> */}

        {/* 이용약관과 개인정보 처리방침 링크 */}
        <div className="text-xs text-center md:text-right">
          <a
            href="https://www.acha.team/terms/service"
            className="hover:underline"
            target="_blank"
            rel="noopener noreferrer"
          >
            이용약관
          </a>{" "}
          │{" "}
          <a
            href="https://www.acha.team/terms/service/privacy"
            className="hover:underline"
            target="_blank"
            rel="noopener noreferrer"
          >
            개인정보처리방침
          </a>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
