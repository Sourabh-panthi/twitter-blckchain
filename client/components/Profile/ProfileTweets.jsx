import React from "react";
import Post from "../Home/Post";

const style = {
  wrapper: "",
  header: "sticky top-0 bg-[#15202b] z-10 flex justify-content items-center",
  headerTititle: "text-xl font-bold",
};
const ProfileTweets = () => {
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

  return (
    <div className={style.wrapper}>
      {tweets?.map((tweet, index) => (
        <Post
          key={index}
          displayName={tweet.displayName}
          userName={tweet.userName}
          avatar={tweet.avatar}
          isProfileImageNft={tweet.isProfileImageNft}
          timestamp={tweet.timestamp}
          text={tweet.text}
        />
      ))}
    </div>
  );
};

export default ProfileTweets;
