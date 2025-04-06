function Button({ type = "submit", name, onClick = () => {} }) {
  return (
    <div className="w-full  mt-[60px]">
      <button
        onClick={onClick}
        type={type}
        className="w-full bg-main-blue hover:bg-blue-700 text-white font-bold py-[13px] mb-[70px] rounded-xl focus:outline-none focus:shadow-outline"
      >
        {name}
      </button>

      <div className="flex flex-col items-center mb-[34px] text-[15Px]">
        <div className="space-x-[30px]">
          <a
            href="https://www.acha.team/terms/service"
            className="hover:underline"
            target="_blank"
            rel="noopener noreferrer"
          >
            이용약관
          </a>
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
      <p className="text-center text-gray-400">
        COPYRIGHT ⓒ 2025.ACHA ALL RIGHTS RESERVED.
      </p>
    </div>
  );
}

export default Button;
