function Modal({
  icon,
  title,
  description = "",
  children = "",
  onCancel,
  onConfirm,
  name,
  iconBackground = "",
  confirmButtonColor = "",
  margin,
}) {
  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
      <div className="bg-white rounded-2xl px-[28px] py-[33px] w-[400px]">
        {icon && (
          <div
            className={`flex items-center justify-center mb-4 rounded-full p-[14px]`}
          >
            <img
              src={icon}
              alt="Modal Icon"
              className={`${iconBackground} rounded-full w-[60px] p-[14px]`}
            />
          </div>
        )}
        <h2 className="text-[20px] font-bold mb-[27px] flex justify-center">
          {title}
        </h2>
        <div className="text-[16px] text-gray-600 flex justify-center">
          {description}
        </div>
        <div className={`mb-[41px] ${margin}`}>{children}</div>
        <div className="flex w-full gap-[21px] text-[16px]">
          <button
            onClick={onCancel}
            className="py-[16px] bg-gray-200 rounded-xl w-full"
          >
            취소
          </button>
          <button
            onClick={onConfirm}
            className={`py-[16px] text-white rounded-xl w-full ${confirmButtonColor}`}
          >
            {name}
          </button>
        </div>
      </div>
    </div>
  );
}

export default Modal;
