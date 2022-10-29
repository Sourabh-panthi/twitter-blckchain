import React, { useState } from "react";
import { FiMoreHorizontal, FiBell } from "react-icons/fi";
import { VscTwitter } from "react-icons/vsc";
import SidebarOptions from "./SidebarOptions";
import { RiHome7Line, RiHome7Fill, RiFileList2Fill } from "react-icons/ri";
import { BiHash } from "react-icons/bi";
import { HiOutlineMail, HiMail } from "react-icons/hi";
import { FaRegListAlt, FaBell, FaHashtag } from "react-icons/fa";
import { CgMoreO } from "react-icons/cg";
import {
  BsBookmarkFill,
  BsBookmark,
  BsPersonFill,
  BsPerson,
} from "react-icons/bs";
import { useRouter } from "next/router";
import { TwitterContext } from "../context/TwitterContext";
import { useContext } from "react";
import Modal from "react-modal";
import ProfileImageMinter from "./Profile/MinterModel/ProfileImageMinter";
import { customStyles } from "../lib/constants";
const styles = {
  wrapper: `flex-[0.7] px-8 flex flex-col`,
  twitterIconContainer: `text-3xl m-4`,
  tweetButton: `bg-[#1d9bf0] hover:bg-[#1b8cd8] flex items-center justify-center font-bold rounded-3xl h-[50px] mt-[20px] cursor-pointer`,
  navContainer: `flex-1`,
  profileButton:
    "flex rounded-3xl p-2 items-center mb-6 cursor-pointer  hover:bg-[#22303c] ",
  profileLeft: "flex item-center justify-center mr-4",
  profileImage: "h-12 w-12 rounded-full",
  profileRight: "flex-1 flex",
  details: "flex-1",
  name: "text-lg",
  handle: "text-[#8899a6]",
  moreContainer: "flex items-center mr-2",
};

const Sidebar = ({ initialSelectedIcon = "Home" }) => {
  const [selected, setSelected] = useState(initialSelectedIcon);
  const { currentAccount, CurrentUser } = useContext(TwitterContext);
  const router = useRouter();

  return (
    <div className={styles.wrapper}>
      <div className={styles.twitterIconContainer}>
        <VscTwitter />
      </div>
      <div className={styles.navContainer}>
        <SidebarOptions
          Icon={selected === "Home" ? RiHome7Fill : RiHome7Line}
          text="Home"
          isActive={Boolean(selected === "Home")}
          setSelected={setSelected}
          redirect={"/"}
        />
        <SidebarOptions
          Icon={selected === "Explore" ? FaHashtag : BiHash}
          text="Explore"
          isActive={Boolean(selected === "Explore")}
          setSelected={setSelected}
        />
        <SidebarOptions
          Icon={selected === "Notification" ? FaBell : FiBell}
          text="Notification"
          isActive={Boolean(selected === "Notification")}
          setSelected={setSelected}
        />
        <SidebarOptions
          Icon={selected === "Messages" ? HiMail : HiOutlineMail}
          text="Messages"
          isActive={Boolean(selected === "Messages")}
          setSelected={setSelected}
        />
        <SidebarOptions
          Icon={selected === "Bookmarks" ? BsBookmarkFill : BsBookmark}
          text="Bookmarks"
          isActive={Boolean(selected === "Bookmarks")}
          setSelected={setSelected}
        />
        <SidebarOptions
          Icon={selected === "Lists" ? RiFileList2Fill : FaRegListAlt}
          text="Lists"
          isActive={Boolean(selected === "Lists")}
          setSelected={setSelected}
        />

        <SidebarOptions
          Icon={selected === "Profile" ? BsPersonFill : BsPerson}
          text="Profile"
          isActive={Boolean(selected === "Profile")}
          setSelected={setSelected}
          redirect={"/profile"}
        />
        <SidebarOptions Icon={CgMoreO} text="More" setSelected={setSelected} />
        <div
          className={styles.tweetButton}
          onClick={() => {
            router.push(`${router.pathname}/?mint=${currentAccount}`);
          }}
        >
          Mint
        </div>
      </div>
      <div className={styles.profileButton}>
        <div className={styles.profileLeft}>
          <img
            src={CurrentUser.profileImage}
            alt="profile"
            className={
              CurrentUser.isProfileImageNft
                ? `${styles.profileImage} smallHex`
                : styles.profileImage
            }
          />
        </div>
        <div className={styles.profileRight}></div>
        <div className={styles.details}>
          <div className={styles.name}>{CurrentUser.name}</div>
          <div className={styles.handle}>
            {CurrentUser?.walletAddress?.slice(0, 6)}...
            {CurrentUser?.walletAddress?.slice(39)}
          </div>
        </div>
        <div className={styles.moreContainer}>
          <FiMoreHorizontal />
        </div>
      </div>
      <Modal
        isOpen={Boolean(router.query.mint)}
        onRequestClose={() => router.back()}
        style={customStyles}
      >
        <ProfileImageMinter />
      </Modal>
    </div>
  );
};

export default Sidebar;
