import { Link } from "react-router-dom";

function Welcome() {
  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gray-50">
      <h1 className="text-2xl font-bold mb-4">
        반갑습니다! ACHA 서비스에 오신걸 환영합니다.
      </h1>
      <Link
        to="/login"
        className="text-white bg-main-blue px-4 py-2 rounded-md hover:bg-blue-600"
      >
        시작하기
      </Link>
    </div>
  );
}

export default Welcome;
