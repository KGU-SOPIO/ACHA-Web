import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

import { ReactComponent as DownArrow } from "../assets/downArrow.svg";
import Footer from "../components/Footer";
import { ReactComponent as LeftArrow } from "./leftArrow.svg";
import Loading01 from "../components/Loading01";
import { ReactComponent as NoteIcon } from "./note.svg";
import { ReactComponent as UpArrow } from "../assets/upArrow.svg";
import { fetchNotice } from "../api/activity";

function CourseNotice() {
  const { courseCode } = useParams();
  const navigate = useNavigate();
  const [openNotices, setOpenNotices] = useState({});
  const [courseData, setCourseData] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchNoticeData = async () => {
      if (!courseCode) return;

      try {
        setIsLoading(true);
        const data = await fetchNotice(courseCode);

        console.log(data);
        setCourseData(data);
      } catch (err) {
        console.error("공지사항 데이터 로딩 실패:", err);
        setError("공지사항 정보를 불러오는 데 실패했습니다.");
      } finally {
        setIsLoading(false);
      }
    };

    fetchNoticeData();
  }, [courseCode]);

  const toggleNotice = (noticeIndex) => {
    setOpenNotices((prev) => ({
      ...prev,
      [noticeIndex]: !prev[noticeIndex],
    }));
  };

  if (isLoading) {
    return (
      <div className="flex justify-center items-center h-screen">
        <Loading01 />
      </div>
    );
  }

  if (error) {
    return (
      <div className="flex justify-center items-center h-screen text-red-500">
        {error}
      </div>
    );
  }

  if (!courseData) {
    return <p className="mt-[100px] text-center">강좌를 찾을 수 없음.</p>;
  }

  return (
    <div className="min-h-screen flex flex-col">
      <div className="flex-grow">
        <div className="pt-[157px] px-[346px] pb-[32px]">
          <div className="max-w-6xl mx-auto ">
            <button
              onClick={() => navigate(`/courses/${courseCode}`)}
              className="flex items-center mb-[20px]"
            >
              <LeftArrow className="w-[24px] h-[24px] mr-[8px]" />
            </button>
            <div className="bg-white rounded-xl p-[24px] mb-[10px]">
              <h2 className="text-[14px] mb-[8px]">{courseData.courseName}</h2>
              <div className="flex items-center mb-[16px]">
                <h1 className="text-[24px] font-bold mr-[10px]">공지사항</h1>
                <NoteIcon />
              </div>
            </div>

            <div className="space-y-6">
              {courseData.contents &&
                courseData.contents.map((notice) => (
                  <div
                    key={notice.index}
                    className="border border-gray-300 rounded-2xl p-[12px]"
                  >
                    <div
                      className="flex justify-between items-center p-[24px] cursor-pointer"
                      onClick={() => toggleNotice(notice.index)}
                    >
                      <div className="flex items-center">
                        <h3 className="text-[18px] font-bold">
                          {notice.title}
                        </h3>
                        <span className="text-[14px] text-gray-500 ml-4">
                          {notice.date}
                        </span>
                      </div>
                      <div className="flex items-center">
                        {openNotices[notice.index] ? (
                          <UpArrow className="w-[24px] h-[24px]" />
                        ) : (
                          <DownArrow className="w-[24px] h-[24px]" />
                        )}
                      </div>
                    </div>
                    {openNotices[notice.index] && (
                      <div className="px-[24px] pb-[24px]">
                        <div className="border-t">
                          <p className="text-[14px] my-[32px] whitespace-pre-line">
                            {notice.content}
                          </p>
                          {notice.files && notice.files.length > 0 && (
                            <div className="border-t pt-[16px]">
                              <p className="text-[14px] font-bold mb-[8px]">
                                첨부파일
                              </p>
                              <div className="space-y-2">
                                {notice.files.map((file, index) => (
                                  <a
                                    key={index}
                                    href={file.fileLink}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="block text-[14px] text-blue-600 hover:underline"
                                  >
                                    {file.fileName}
                                  </a>
                                ))}
                              </div>
                            </div>
                          )}
                        </div>
                      </div>
                    )}
                  </div>
                ))}
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default CourseNotice;
