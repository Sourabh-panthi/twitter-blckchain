import React from "react";
import { BsArrowLeftShort } from "react-icons/bs";
import { useRouter } from "next/router";
const style = {
  wrapper: `border-[#38444d] border-b`,
  header: `py-1 px-3 pt-2 flex items-center sticky top-0 bg-[#15202b] z-10`,
  primary: `bg-transparent outline-none font-bold`,
  secondary: `text-[#8899a6] text-xs`,
  backButton: `text-3xl cursor-pointer mr-2 rounded-full hover:bg-[#313b44] p-1`,
  coverPhotoContainer: `flex items-center justify-center h-[20vh] overflow-hidden`,
  coverPhoto: `object-cover h-full w-full`,
  profileImageContainer: `w-full h-[5rem] rounded-full mt-[-2.5rem] mb-2 flex justify-start items-center px-3 flex justify-between`,
  profileImage: `object-cover rounded-full h-full`,
  profileImageNft: `object-cover h-full`,
  profileImageMint: `bg-white text-black px-3 py-1 rounded-full hover:bg-[#8899a6] cursor-pointer`,
  details: `px-3 -mt-2`,
  nav: `flex justify-around mt-4 mb-2 text-xs font-semibold text-[#8899a6]`,
  activeNav: `text-white`,
};

const ProfileHeader = () => {
  const router = useRouter();
  const isProfileImageNFT = false;
  const currentAccount = "0xe7DdF0e682D26d2593a03a988262735117891321";
  return (
    <div className={style.wrapper}>
      <div className={style.header}>
        <div onClick={() => router.push("/")} className={style.backButton}>
          <BsArrowLeftShort />
        </div>
        <div className={style.details}>
          <div className={style.primary}> Sourabh Panthi</div>
          <div className={style.secondary}> 4 Tweets</div>
        </div>
      </div>
      <div className={style.coverPhotoContainer}>
        <img
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTsha0WlXYOwO34mohehE3EOHZYgJ8l8bIDYw&usqp=CAU"
          alt="cover"
          className={style.coverPhoto}
        />
      </div>
      <div className={style.profileImageContainer}>
        <div
          className={isProfileImageNFT ? "hex" : style.profileImageContainer}
        >
          <img
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTSrdB8rRgA1qgkw0ckcTrhIa0kpV2ILvbMWg&usqp=CAU"
            alt="profile"
            className={
              isProfileImageNFT ? style.profileImageNft : style.profileImage
            }
          />
        </div>
      </div>
      <div className={style.details}>
        <div>
          <div className={style.primary}> Sourabh Panthi</div>
        </div>
        <div className={style.secondary}>
          {currentAccount && currentAccount.slice(0, 4)}...
          {currentAccount.slice(37)}
        </div>
      </div>
      <div className={style.nav}>
        <div className={style.activeNav}> Tweets</div>
        <div>Tweets & Replies</div>
        <div>Media</div>
        <div>Likes</div>
      </div>
    </div>
  );
};

export default ProfileHeader;
