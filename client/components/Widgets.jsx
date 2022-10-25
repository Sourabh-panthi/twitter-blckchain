import React from "react";
import { BiSearch } from "react-icons/bi";
import { news, whoToFollow } from "../lib/static";

const styles = {
  wrapper: "flex-1 p-4",
  searchBar: "flex items-center bg-[#243340] p-2 rounded-3xl",
  searchIcon: "text-[#8899a6] mr-2",
  inputBox: "bg-transparent outline-none",
  section: "bg-[#192734] my-6 rounded-xl overflow-hidden",
  title: "p-2 font-bold text-lg",
  showMore: "p-2 text-[#1d9bf0] text-sm cursor-pointer hover:bg-[#22303c]",
  item: "flex items-center p-3 my-2 hover:bg-[#22303c] cursor-pointer ",
  newsItemLeft: "flex-1",
  newsItemCategory: "text-[#8899a6] text-xs font-semibold",
  newsItemTitle: "text-sm font-bold",
  newsItemRight: "w-1/5 ml-3",
  newsItemImage: "rounded-xl h-14 w-14 object-cover ",
  followAvatarContainer: "w-1/6",
  followAvatar: "rounded-full h-[40px] w-[40px]",
  profileDetails: "flex-1 ml-3",
  name: "font-bold",
  followButton: "bg-white text-black px-3 py-1 rounded-full text-xs font-bold",
};

const Widgets = () => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.searchBar}>
        <BiSearch className={styles.searchIcon} />
        <input
          type="text"
          placeholder="Search Twitter"
          className={styles.inputBox}
        />
      </div>
      <div className={styles.section}>
        <div className={styles.title}>What's happening?</div>
        {news.map((item, index) => (
          <div className={styles.item} key={index}>
            <div className={styles.newsItemLeft}>
              <div className={styles.newsItemCategory}> {item.category}</div>
              <div className={styles.newsItemTitle}>{item.title}</div>
            </div>
            <div className={styles.newsItemRight}>
              <img
                src={item.image}
                alt={item.category}
                className={styles.newsItemImage}
              />
            </div>
          </div>
        ))}
        <div className={styles.showMore}> Show more</div>
      </div>
      <div className={styles.section}>
        <div className={styles.title}>who to follow</div>
        {whoToFollow.map((item, index) => (
          <div className={styles.item} key={index}>
            <div className={styles.followAvatarContainer}>
              <img
                src={item.avatar}
                alt={item.handle}
                className={styles.followAvatar}
              />
            </div>
            <div className={styles.profileDetails}>
              <div className={styles.name}>{item.handle}</div>
              <div className={styles.handle}>{item.name}</div>
            </div>
            <div className={styles.followButton}> Follow</div>
          </div>
        ))}
        <div className={styles.showMore}> Show more</div>
      </div>
    </div>
  );
};

export default Widgets;
