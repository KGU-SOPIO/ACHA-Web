import { ReactComponent as Logo } from "../assets/Dark_sopio_logo.svg";
import React from "react";
function Footer() {
  return (
    <footer className="bg-[rgba(237,239,242,1)] text-[rgba(109,109,109,1)] py-8 px-[500px]">
      <div className="container mx-auto flex justify-between items-start px-6">
        {/* 로고 섹션 */}
        <div className=" space-x-4">
          <Logo className="mb-[40px]" />
          <p className="text-xs text-center">
            Copyright ⓒ 2025. All Rights Reserved Acha
          </p>
        </div>

        {/* 연락처 및 기타 정보 섹션 */}
        <div className="text-sm">
          <p>상호 (주)SOPIO 대표자 OOO</p>
          <p>주소 OOOO</p>
          <p>이메일 OOO 전화 OOOO</p>
          <p>사업자등록번호 OOOO</p>
          <p>통신판매업신고번호 OOOO</p>
        </div>

        {/* 이용약관과 개인정보 처리방침 링크 */}
        <div className="flex flex-col items-center space-y-2">
          <div className="text-xs">
            <a href="/terms" className="hover:underline">
              이용약관
            </a>{" "}
            │
            <a href="/privacy" className="hover:underline">
              개인정보처리방침
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
