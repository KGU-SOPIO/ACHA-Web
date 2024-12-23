import TodayLecture from "../home/Today";
import UserSettings from "../home/UserSettings";
function Home() {
  return (
    <div className="max-w-full overflow-x-hidden py-32 bg-[rgba(245,246,248,1)]">
      <UserSettings />
      <TodayLecture />
    </div>
  );
}

export default Home;
