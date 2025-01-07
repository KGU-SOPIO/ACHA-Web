import { ReactComponent as ArrowRight } from "../assets/arrowRight.svg";
import { ReactComponent as LectureIcon } from "../assets/lecture.svg";
import { ReactComponent as ListIcon } from "../assets/list_task.svg";
import { ReactComponent as MediaIcon } from "../assets/media.svg";
import { ReactComponent as TaskIcon } from "../assets/task.svg";
import mockData from "../mocks/taskMedia.json";
function Priority() {
  const { lectures, assignments } = mockData;

  // 디데이 계산
  const getDday = (itemDate) => {
    const today = new Date();
    const targetDate = new Date(itemDate);
    const diffTime = targetDate - today;
    const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));

    if (diffDays === 0) {
      return "D - Day";
    } else if (diffDays > 0) {
      return `D - ${diffDays}`;
    } else {
      return `D - ${Math.abs(diffDays)}`;
    }
  };

  const formatDate = (itemDate) => {
    const date = new Date(itemDate);
    const month = date.getMonth() + 1;
    const day = date.getDate();
    return `${month}월 ${day}일`;
  };

  // 디데이를 렌더링
  const renderWithUniqueDday = (items) => {
    let previousDday = null;

    return items.map((item) => {
      const dDay = getDday(item.date);
      const formattedDate = formatDate(item.date);
      const isDday = dDay === "D - Day";
      const showDday = dDay !== previousDday;
      previousDday = dDay;

      return (
        <div key={item.id}>
          {showDday && (
            <div
              className={`inline-block mb-4 rounded-full  text-center font-[Noto_Sans_KR] text-[14px] font-bold leading-[20px] bg-blue-100 items-center ${
                isDday ? "text-white" : ""
              }`}
            >
              <div
                className={`${
                  isDday
                    ? "bg-main-blue text-white border-2 border-main-blue"
                    : "text-main-blue border-2 border-main-blue bg-[rgba(245,246,248,1)]"
                } font-bold rounded-full p-2 px-4 inline-block`}
              >
                {dDay}
              </div>
              <div className="text-main-blue font-bold rounded-lg p-1 inline-block px-2 pr-4">
                {formattedDate}
              </div>
            </div>
          )}
          <div className="mb-4 p-4 border rounded-lg shadow-sm">
            <h3 className="text-md font-bold">{item.title}</h3>
            <p className="text-sm">{item.subject}</p>
            <div className="flex justify-between items-center">
              <div className="text-sm mt-2 text-gray-500">{item.time}</div>
              <button className="mt-2 px-4 py-2 border text-sm rounded-lg">
                <div className="flex items-center">
                  {item.type === "강의 시청" ? <MediaIcon /> : <TaskIcon />}
                  <div className="pl-2">{item.type}</div>
                </div>
              </button>
            </div>
          </div>
        </div>
      );
    });
  };

  return (
    <div className="p-8 px-12 rounded-xl bg-white border border-gray w-full max-w-6xl mx-auto ">
      <div className="flex h-full">
        {/* 우선순위 강의 */}
        <div className="w-1/2 pr-4 h-full space-y-4">
          <div className="flex justify-between items-center">
            <div className="flex items-center gap-2">
              <h2 className="flex text-lg font-bold items-center">
                나의 우선강의
              </h2>
              <LectureIcon className="flex items center w-4 h-4" />
            </div>
            <div className="text-gray-500 cursor-pointer flex items-center">
              <a href="/courses" aria-label="강좌로 이동" className="">
                전체보기
              </a>
              <div>
                <ArrowRight />
              </div>
            </div>
          </div>
          <div className="max-h-[600px] overflow-y-auto pr-4 ">
            {renderWithUniqueDday(lectures)}
          </div>
        </div>

        {/* 우선순위 과제 */}
        <div className="w-1/2 pl-4 h-full space-y-4">
          <div className="flex justify-between items-center">
            <div className="flex items-center gap-2">
              <h2 className="flex text-lg font-bold items-center">
                나의 우선과제
              </h2>
              <ListIcon className="flex items center w-4 h-4" />
            </div>
            <div className="text-gray-500 cursor-pointer flex items-center">
              <a href="/courses" aria-label="강좌로 이동" className="">
                전체보기
              </a>
              <div>
                <ArrowRight />
              </div>
            </div>
          </div>
          <div className="max-h-[600px] overflow-y-auto pr-4">
            {renderWithUniqueDday(assignments)}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Priority;
