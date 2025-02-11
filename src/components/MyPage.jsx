import { useNavigate } from "react-router-dom";

function MyPage({ onClose }) {
  const navigate = useNavigate();

  const handleClick = (path) => {
    navigate(path);
    onClose();
  };

  return (
    <div className="fixed inset-0  flex items-start justify-end mt-[61px] mr-[50px]">
      <div className="absolute inset-0 " onClick={onClose}></div>
      <div className="relative bg-white px-[16px] py-[17px] rounded-xl border border-gray-100 shadow-md w-[104px] text-[14px] text-center gap-[17px]">
        <div
          onClick={() => handleClick("/about")}
          className="cursor-pointer hover:bg-gray-100 rounded-md"
        >
          About
        </div>
        <div
          onClick={onClose}
          className="cursor-pointer hover:bg-gray-100 rounded-md"
        >
          로그아웃
        </div>
        <div
          onClick={onClose}
          className="text-red-500 cursor-pointer hover:bg-gray-100"
        >
          탈퇴하기
        </div>
      </div>
    </div>
  );
}

export default MyPage;
