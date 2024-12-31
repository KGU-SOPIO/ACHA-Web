import { ReactComponent as BookIcon } from "../assets/bookIcon.svg";
import { ReactComponent as MediaIcon } from "../assets/mediaIcon.svg";
import { ReactComponent as TaskIcon } from "../assets/task.svg";
import mockData from "../mocks/courseMock.json";

function Courses() {
  const sortedWeeks = [...mockData[0].week].sort((a, b) => a.weekId - b.weekId);

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
      <div>
        <div className="flex ml-[22px] mb-[12px]">
          <p className="text-[14px]">
            <span className="font-bold">주차 별 </span>
            <span>학습 활동</span>
          </p>
          <BookIcon />
        </div>
        <div className="flex space-x-4 overflow-x-auto">
          {sortedWeeks.map((week) => (
            <div key={week.weekId} className="flex space-x-4">
              {/* Media Section */}
              {week.media.concat(week.task).map((item) => (
                <div
                  key={item.mediaId || item.taskId}
                  className="flex-none w-[300px] px-[24px] py-[21px] border rounded-xl"
                >
                  <p className="mb-[12px] text-[14px]">
                    <span className="font-bold">{week.weekId}주차 </span>
                    <span> [{item.date}]</span>
                  </p>

                  <div className="flex text-[14px] items-center justify-start p-[14px] border rounded-md">
                    {item.mediaId ? (
                      <>
                        <MediaIcon className="w-[24px] h-[24px]" />
                        <a
                          href={item.link}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="ml-[1px]"
                        >
                          {item.mediaName}
                        </a>
                      </>
                    ) : (
                      <>
                        <TaskIcon className="w-[24px] h-[24px]" />
                        <a
                          href={item.link}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="ml-[1px]"
                        >
                          {item.taskName}
                        </a>
                      </>
                    )}
                  </div>
                </div>
              ))}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Courses;
