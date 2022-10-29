import React from "react";
import { BsStar } from "react-icons/bs";
import TweetBox from "./TweetBox";
import Post from "./Post";
import { TwitterContext } from "../../context/TwitterContext";
import { useContext } from "react";

const styles = {
  wrapper:
    "flex-[2] border-r border-l border-[#38444d] overflow-scroll scrollbar-hide",
  header:
    "sticky top-0 bg-[#15202b] z-10 p-4 flex justify-between items-center",
  headerTitle: "text-xl font-bold",
};

const Feed = () => {
  const { currentAccount, CurrentUser, tweets } = useContext(TwitterContext);
  return (
    <div className={styles.wrapper}>
      <div className={styles.header}>
        <div className={styles.headerTitle}>Home</div>
        <BsStar />
      </div>

      <TweetBox />

      {tweets.length &&
        tweets.map((tweet, index) => (
          <Post
            key={index}
            displayName={
              tweet.author.name === "Unnamed"
                ? `${tweet.author.walletAddress.slice(
                    0,
                    4
                  )}...${tweet.author.walletAddress.slice(41)}`
                : tweet.author.name
            }
            userName={`${tweet.author.walletAddress.slice(
              0,
              4
            )}...${tweet.author.walletAddress.slice(-4)}`}
            avatar={tweet.author.profileImage}
            text={tweet.tweet}
            isProfileImageNft={currentAccount.isProfileImageNft}
            timestamp={tweet.timestamp}
          />
        ))}
    </div>
  );
};

export default Feed;
