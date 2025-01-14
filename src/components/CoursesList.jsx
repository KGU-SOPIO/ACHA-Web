import Footer from "./Footer";
import MyCourseList from "../courses/MyCourseList";
import Priority from "../home/Priority";

function CoursesList() {
  return (
    <div>
      <div className="max-w-full overflow-x-hidden py-32 bg-[rgba(245,246,248,1)]">
        <div className="flex gap-8 max-w-6xl mx-auto my-10">
          <MyCourseList />
          <Priority />
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default CoursesList;
