function MyPage({ onClose }) {
  return (
    <div className="fixed inset-0  flex items-start justify-end mt-[61px] mr-[50px]">
      <div className="absolute inset-0 " onClick={onClose}></div>
      <div className="relative bg-white px-[16px] py-[17px] rounded-xl border border-gray-100 shadow-md w-[104px] text-[14px] text-center gap-[17px]">
        <div>About</div>
        <div>로그아웃</div>
        <div className="text-red-500">탈퇴하기</div>
      </div>
    </div>
  );
}

export default MyPage;
