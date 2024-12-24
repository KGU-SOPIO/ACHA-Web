import { Link } from "react-router-dom";

function Welcome() {
  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gray-50">
      <h1 className="text-6xl text-[74px] font-bold mb-48">Acha!</h1>
      <Link
        to="/login"
        className="text-white bg-main-blue px-12 py-4 rounded-md hover:bg-blue-600"
      >
        Start Right Now
      </Link>
    </div>
  );
}

export default Welcome;
