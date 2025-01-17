import Footer from "./Footer";
import MyCourseList from "../courses/MyCourseList";
import Priority from "../home/Priority";

function CoursesList() {
  return (
    <div className="min-h-screen flex flex-col">
      <div className="flex-grow bg-[rgba(245,246,248,1)]">
        <div className="max-w-full overflow-x-hidden py-32 ">
          <div className="flex gap-8 max-w-6xl mx-auto">
            <MyCourseList />
            <Priority />
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default CoursesList;
