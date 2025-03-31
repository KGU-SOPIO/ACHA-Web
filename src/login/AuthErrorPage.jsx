import Button from "../signup/Button";
import { ReactComponent as ErrorIcon } from "./stop-sign.svg";
import Footer from "../components/Footer";
import { ReactComponent as Logo } from "../assets/sopio_logo.svg";
import { useNavigate } from "react-router-dom";

function AuthErrorPage() {
  const navigate = useNavigate();

  const handleGoBack = () => {
    navigate("/login");
  };

  return (
    <div className="flex flex-col h-screen bg-white">
      <main className="flex-grow flex flex-col items-center justify-center w-full max-w-[400px] mx-auto py-12">
        <Logo className="w-[80px] h-[84px]" />
        <div className="mt-[120px] mb-[36px] w-[40px] h-[40px]  flex justify-center items-center rounded-full bg-red-100">
          <div className="w-[20px] h-[20px] bg-[rgba(255,78,107,1)] flex justify-center items-center rounded-full">
            <ErrorIcon className=" w-[12px] h-[12px]" />
          </div>
        </div>
        <h1 className="text-[20px] font-bold mb-[27px]">오류 발생</h1>
        <p className="text-[14px] text-gray-600 mb-[40px]">
          인증에 오류가 발생했습니다.
        </p>

        <Button onClick={handleGoBack} name="돌아가기" />
      </main>
      <Footer />
    </div>
  );
}

export default AuthErrorPage;
