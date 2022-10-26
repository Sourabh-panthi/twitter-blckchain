import React from "react";
import ProfileHeader from "../components/Profile/ProfileHeader";
import ProfileTweets from "../components/Profile/ProfileTweets";
import Sidebar from "../components/Sidebar";
import Widget from "../components/Widgets";
const style = {
  wrapper: `flex justify-center h-screen w-screen select-none bg-[#15202b] text-white overflow-hidden`,
  content: `max-w-[1400px] w-3/4 flex justify-between`,
  mainContent: `flex-[2] border-r border-l border-[#38444d] overflow-y-scroll scrollbar-hide`,
};
const Profile = () => {
  return (
    <div className={style.wrapper}>
      <div className={style.content}>
        <Sidebar />
        <div className={style.mainContent}>
          <ProfileHeader />
          <ProfileTweets />
        </div>
        <Widget />
      </div>
    </div>
  );
};

export default Profile;
