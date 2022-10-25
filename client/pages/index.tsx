import Sidebar from "../components/Sidebar";
import Feed from "../components/Home/Feed";
import Widgets from "../components/Widgets";

const styles = {
  wrapper: `flex justify-center h-screen w-screen  select-none bg-[#15202b] text-white `,
  content: `max-w-[1400px] w-3/4 flex justify-between`,
};
const Home = () => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.content}>
        <Sidebar />
        <Feed />
        <Widgets />
      </div>
    </div>
  );
};

export default Home;
