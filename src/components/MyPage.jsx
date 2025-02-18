import Input from "../signup/Input";
import Modal from "../mypage/Modal";
import checkIcon from "../mypage/check.png";
import logoutIcon from "../mypage/logout.svg";
import trashIcon from "../mypage/trash.svg";
import { useNavigate } from "react-router-dom";
import { useState } from "react";

function MyPage({ onClose }) {
  const navigate = useNavigate();
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isLogoutModalOpen, setIsLogoutModalOpen] = useState(false);

  const handleClick = (path) => {
    navigate(path);
    onClose();
  };

  const handleDeleteAccount = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  const confirmDelete = () => {
    alert("계정이 삭제되었습니다.");
    closeModal();
  };

  const handleLogout = () => {
    setIsLogoutModalOpen(true);
  };

  const closeLogoutModal = () => {
    setIsLogoutModalOpen(false);
  };

  const confirmLogout = () => {
    alert("로그아웃되었습니다.");
    closeLogoutModal();
    navigate("/login");
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
          onClick={handleLogout}
          className="cursor-pointer hover:bg-gray-100 rounded-md"
        >
          로그아웃
        </div>
        <div
          onClick={handleDeleteAccount}
          className="text-red-500 cursor-pointer hover:bg-gray-100"
        >
          계정삭제
        </div>
      </div>
      {isModalOpen && (
        <Modal
          icon={trashIcon}
          title="계정 삭제"
          description="사용자의 정보는 안전하게 삭제됩니다."
          onCancel={closeModal}
          onConfirm={confirmDelete}
          name="삭제"
          iconBackground="bg-red-100"
          confirmButtonColor="bg-red-500"
          margin="mt-[36px]"
        >
          <p className="mb-[18px] flex justify-center font-medium">
            비밀번호 확인
          </p>
          <Input
            id="password"
            type="password"
            name="password"
            placeholder="비밀번호 입력"
          />
        </Modal>
      )}

      {isLogoutModalOpen && (
        <Modal
          icon={logoutIcon}
          title="로그아웃 할까요?"
          onCancel={closeLogoutModal}
          onConfirm={confirmLogout}
          name="로그아웃"
          iconBackground="bg-blue-100"
          confirmButtonColor="bg-main-blue"
        >
          <div className="flex justify-center itemx-center gap-[9px]">
            <p>기기 정보들은 안전하게 삭제돼요</p>
            <img
              src={checkIcon}
              alt="Check Icon"
              className="w-[20px] h-[20px] mt-[2px]"
            />
          </div>
        </Modal>
      )}
    </div>
  );
}

export default MyPage;
