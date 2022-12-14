import React from "react";
import { BsFillPatchCheckFill } from "react-icons/bs";
import { FaRegComment, FaRetweet } from "react-icons/fa";
import { FiShare } from "react-icons/fi";
import { AiOutlineHeart } from "react-icons/ai";
import { format } from "timeago.js";
const styles = {
  wrapper: "flex p-3 border-b border-[#38444d]",
  profileImage: "rounded-full h-[40px] w-[40px] object-cover ",
  postMain: "flex-1 px-4",
  headerDetails: "flex items-center",
  name: "font-bold mr-1",
  verified: "text-[0.8rem]",
  handleAndTimeAgo: "text-[#8899a6] ml-1",
  tweet: "my-2",
  image: "rounded-3xl",
  footer: "flex justify-between mr-28 mt-4 text-[#8899a6] ",
  footerIcon: "rounded-full text-lg p-2",
};
const Post = ({
  displayName,
  userName,
  avatar,
  text,
  isProfileImageNft,
  timestamp,
}) => {
  return (
    <div className={styles.wrapper}>
      <div>
        <img
          src={avatar}
          alt={userName}
          className={
            isProfileImageNft
              ? `${styles.profileImage} smallHex`
              : styles.profileImage
          }
        />
      </div>
      <div className={styles.postMain}>
        <div>
          <span className={styles.headerDetails}>
            <span className={styles.name}>{displayName}</span>
            {isProfileImageNft && (
              <span className={styles.verified}>
                <BsFillPatchCheckFill />
              </span>
            )}
          </span>
          <span className={styles.handleAndTimeAgo}>
            @{userName} &#8226; {format(new Date(timestamp).getTime())}
          </span>
          <div className={styles.tweet}> {text}</div>
        </div>
        <div className={styles.footer}>
          <div
            className={`${styles.footerIcon} hover:bg-[#1e364a] hover:text-[#1d9bf0]`}
          >
            <FaRegComment />
          </div>
          <div
            className={`${styles.footerIcon} hover:bg-[#1b393b] hover:text-[#03ba7c]`}
          >
            <FaRetweet />
          </div>{" "}
          <div
            className={`${styles.footerIcon} hover:bg-[#39243c] hover:text-[#f91c80]`}
          >
            <AiOutlineHeart />
          </div>{" "}
          <div
            className={`${styles.footerIcon} hover:bg-[#1e364a] hover:text-[#1d9bf0]`}
          >
            <FiShare />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Post;
