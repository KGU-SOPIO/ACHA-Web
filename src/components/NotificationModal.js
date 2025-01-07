import React from "react";

const NotificationModal = ({ onClose }) => {
  return (
    <div className="fixed inset-0  flex items-start justify-end mt-[61px] mr-[100px]">
      <div className="absolute inset-0" onClick={onClose}></div>
      <div className="relative bg-white w-96 p-6 rounded-xl border border-gray-100 shadow-md ">
        <h2 className="text-lg font-bold mb-4">알림</h2>
        <p>여기에 알림 내용을 입력하세요.</p>
      </div>
    </div>
  );
};

export default NotificationModal;
