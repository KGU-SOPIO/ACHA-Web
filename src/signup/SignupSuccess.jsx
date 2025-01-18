import Button from "../signup/Button";
import { ReactComponent as CheckIcon } from "./ph_check.svg";
import Footer from "../components/Footer";
import { ReactComponent as Logo } from "../assets/sopio_logo.svg";
import { useNavigate } from "react-router-dom";

function SignupSuccess() {
  const navigate = useNavigate();

  const handleGoBack = () => {
    navigate("/home");
  };

  return (
    <div className="flex flex-col h-screen bg-white">
      <main className="flex-grow flex flex-col items-center justify-center w-full max-w-[400px] mx-auto py-12">
        <Logo className="w-[80px] h-[84px]" />
        <div className="mt-[120px] mb-[36px] w-[40px] h-[40px]  flex justify-center items-center rounded-full bg-blue-100">
          <div className="w-[20px] h-[20px] bg-main-blue flex justify-center items-center rounded-full">
            <CheckIcon className=" w-[12px] h-[12px]" />
          </div>
        </div>
        <h1 className="text-[20px] font-bold mb-[27px]">회원가입</h1>
        <p className="text-[14px] text-gray-600 mb-[40px]">
          이제 다양한 기능을 직접 이용해보세요
        </p>

        <Button onClick={handleGoBack} name="시작하기" />
      </main>
      <Footer />
    </div>
  );
}

export default SignupSuccess;
