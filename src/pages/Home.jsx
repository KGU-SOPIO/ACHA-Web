import Footer from "../components/Footer";
import Priority from "../home/Priority";
import Today from "../home/Today";
import UserSettings from "../home/UserSettings";

function Home() {
  return (
    <div
      className="min-h-screen flex flex-col "
      style={{
        fontFamily: '"Noto Sans KR"',
        fontFeatureSettings: "'liga' off, 'clig' off",
      }}
    >
      <div className="flex-grow bg-[rgba(245,246,248,1)]">
        <div className="max-w-full overflow-x-hidden py-32 ">
          <UserSettings />
          <div className="flex gap-8 max-w-6xl mx-auto my-10">
            <Today />
            <Priority />
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default Home;
