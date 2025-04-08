import Footer from "../components/Footer";
import MyCourseList from "../courses/MyCourseList";
import Priority from "../home/Priority";
function CoursesList() {
  return (
    <div
      className="min-h-screen flex flex-col"
      style={{
        fontFamily: '"Noto Sans KR"',
        fontFeatureSettings: "'liga' off, 'clig' off",
      }}
    >
      <div className="flex-grow ">
        <div className="max-w-full overflow-x-hidden py-32 px-[16px] md:px-[0px]">
          <div className="flex gap-[10px] md:gap-[46px] max-w-6xl mx-auto items-start">
            <MyCourseList />
            <Priority className="mt-[80px]" />
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default CoursesList;
