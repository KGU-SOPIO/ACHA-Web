import WeeklyActivities from "../courses/WeeklyActivities";
import mockData from "../mocks/courseMock.json";

function Courses() {
  return (
    <div className="pt-[157px] px-[346px]">
      {/* Header Section */}
      <div className="flex justify-between items-center mb-[30px]">
        <div className="flex flex-col justify-start">
          <h2 className="text-[14px]">{mockData[0].prosessor}</h2>
          <h2 className="text-[24px] font-bold">{mockData[0].courseName}</h2>
        </div>
        <button className="text-main-blue border border-main-blue px-[20px] py-[17px] rounded-2xl w-[156px] ">
          공지사항
        </button>
      </div>
      {/* Weekly Activities Section */}
      <div className="pb-[48px] border-b mb-[26px]">
        <WeeklyActivities />
      </div>
      <div className="bg-[rgba(245,246,248,1)] w-[1228px] h-[360px] rounded-xl px-[240px] py-[34px]">
        sia
      </div>
    </div>
  );
}

export default Courses;
