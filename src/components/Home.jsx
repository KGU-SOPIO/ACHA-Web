import Footer from "./Footer";
import Priority from "../home/Priority";
import Today from "../home/Today";
import UserSettings from "../home/UserSettings";

function Home() {
  return (
    <div>
      <div className="max-w-full overflow-x-hidden py-32 bg-[rgba(245,246,248,1)]">
        <UserSettings />
        <div className="flex gap-8 max-w-6xl mx-auto my-10">
          <Today />
          <Priority />
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default Home;
