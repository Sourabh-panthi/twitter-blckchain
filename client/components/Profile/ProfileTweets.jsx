import React from "react";
import { useContext } from "react";
import { TwitterContext } from "../../context/TwitterContext";
import Post from "../Home/Post";

const style = {
  wrapper: "",
  header: "sticky top-0 bg-[#15202b] z-10 flex justify-content items-center",
  headerTititle: "text-xl font-bold",
};
const ProfileTweets = () => {
  const { CurrentUser } = useContext(TwitterContext);

  return (
    <div className={style.wrapper}>
      {CurrentUser?.tweets?.map((tweet, index) => (
        <Post
          key={index}
          displayName={
            CurrentUser.name === "Unnamed"
              ? `${CurrentUser.walletAddress.slice(
                  0,
                  4
                )}...${CurrentUser.walletAddress.slice(41)}`
              : CurrentUser.name
          }
          userName={`${CurrentUser.walletAddress.slice(
            0,
            4
          )}...${CurrentUser.walletAddress.slice(-4)}`}
          avatar={CurrentUser.profileImage}
          isProfileImageNft={CurrentUser.isProfileImageNft}
          timestamp={tweet.timestamp}
          text={tweet.tweet}
        />
      ))}
    </div>
  );
};

export default ProfileTweets;
