import React from "react";
import { BsStar } from "react-icons/bs";
import TweetBox from "./TweetBox";
import Post from "./Post";
const styles = {
  wrapper:
    "flex-[2] border-r border-l border-[#38444d] overflow-scroll scrollbar-hide",
  header:
    "sticky top-0 bg-[#15202b] z-10 p-4 flex justify-between items-center",
  headerTitle: "text-xl font-bold",
};

const tweets = [
  {
    displayName: "Sourabh",
    userName: "0xe7DdF0e682D26d2593a03a988262735117891321",
    avatar:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR0Oz7qFkEu4glfAdPPLFKOg7aqx_fdekNoIw&usqp=CAU",
    text: "gm",
    isProfileImageNft: false,
    timestamp: "2020-06-01t12:00:00.000z",
  },
  {
    displayName: "Sourabh",
    userName: "0xe7DdF0e682D26d2593a03a988262735117891321",
    avatar:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR0Oz7qFkEu4glfAdPPLFKOg7aqx_fdekNoIw&usqp=CAU",
    text: "gm",
    isProfileImageNft: false,
    timestamp: "2020-06-01t12:00:00.000z",
  },
  {
    displayName: "Sourabh",
    userName: "0xe7DdF0e682D26d2593a03a988262735117891321",
    avatar:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR0Oz7qFkEu4glfAdPPLFKOg7aqx_fdekNoIw&usqp=CAU",
    text: "gm",
    isProfileImageNft: false,
    timestamp: "2020-06-01t12:00:00.000z",
  },
  {
    displayName: "Sourabh",
    userName: "0xe7DdF0e682D26d2593a03a988262735117891321",
    avatar:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR0Oz7qFkEu4glfAdPPLFKOg7aqx_fdekNoIw&usqp=CAU",
    text: "gm",
    isProfileImageNft: false,
    timestamp: "2020-06-01t12:00:00.000z",
  },
  {
    displayName: "Sourabh",
    userName: "0xe7DdF0e682D26d2593a03a988262735117891321",
    avatar:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR0Oz7qFkEu4glfAdPPLFKOg7aqx_fdekNoIw&usqp=CAU",
    text: "gm",
    isProfileImageNft: false,
    timestamp: "2020-06-01t12:00:00.000z",
  },
  {
    displayName: "Sourabh",
    userName: "0xe7DdF0e682D26d2593a03a988262735117891321",
    avatar:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR0Oz7qFkEu4glfAdPPLFKOg7aqx_fdekNoIw&usqp=CAU",
    text: "gm",
    isProfileImageNft: false,
    timestamp: "2020-06-01t12:00:00.000z",
  },
  {
    displayName: "Sourabh",
    userName: "0xe7DdF0e682D26d2593a03a988262735117891321",
    avatar:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR0Oz7qFkEu4glfAdPPLFKOg7aqx_fdekNoIw&usqp=CAU",
    text: "gm",
    isProfileImageNft: false,
    timestamp: "2020-06-01t12:00:00.000z",
  },
];

const Feed = () => {
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
            displayName={tweet.displayName}
            userName={tweet.userName}
            avatar={tweet.avatar}
            text={tweet.text}
            isProfileImageNft={tweet.isProfileImageNft}
            timestamp={tweet.timestamp}
          />
        ))}
    </div>
  );
};

export default Feed;
