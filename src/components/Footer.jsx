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
        <div className="text-center md:text-left text-sm">
          <p>상호 (주)SOPIO 대표자 OOO</p>
          <p>주소 OOOO</p>
          <p>이메일 OOO 전화 OOOO</p>
          <p>사업자등록번호 OOOO</p>
          <p>통신판매업신고번호 OOOO</p>
        </div>

        {/* 이용약관과 개인정보 처리방침 링크 */}
        <div className="text-xs text-center md:text-right">
          <a href="/terms" className="hover:underline">
            이용약관
          </a>{" "}
          │
          <a href="/privacy" className="hover:underline">
            개인정보처리방침
          </a>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
