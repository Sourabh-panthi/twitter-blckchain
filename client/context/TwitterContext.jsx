import { createContext, useState, useEffect } from "react";
import { useRouter } from "next/router";
import { client } from "../lib/client";

export const TwitterContext = createContext();

export const TwitterProvider = ({ children }) => {
  const [appStatus, setAppStatus] = useState("loading");
  const [currentAccount, setCurrentAccount] = useState("");
  const [tweets, setTweets] = useState([]);
  const [CurrentUser, setCurrentUser] = useState({});
  const router = useRouter();

  useEffect(() => {
    checkIfWalletIsConnected();
  }, []);

  useEffect(() => {
    if (!currentAccount || appStatus !== "connected") return;

    getCurrentUserDetails();
    fetchTweets();
  }, [currentAccount, appStatus]);

  const checkIfWalletIsConnected = async () => {
    if (!window.ethereum) return setAppStatus("noMetamask");
    try {
      const addressArray = await window.ethereum.request({
        method: "eth_accounts",
      });
      if (addressArray.length > 0) {
        //connected
        setAppStatus("connected");
        setCurrentAccount(addressArray[0]);
        createUserAccount(addressArray[0]);
      } else {
        //notConnected
        router.push("/");
        setAppStatus("notConnected");
      }
    } catch (error) {
      console.log("twitterContext check wallet connect", error);
    }
  };

  /**
   * Creates an account in Sanity DB if the user does not already have one
   * @param {String} userAddress Wallet address of the currently logged in user
   */
  const createUserAccount = async (userAddress = currentAccount) => {
    if (!window.ethereum) return setAppStatus("noMetamask");

    try {
      const userDoc = {
        _type: "users",
        _id: userAddress,
        name: "Unnamed",
        isProfileImageNft: false,
        profileImage:
          "https://about.twitter.com/content/dam/about-twitter/en/brand-toolkit/brand-download-img-1.jpg.twimg.1920.jpg",
        coverImage:
          "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTsha0WlXYOwO34mohehE3EOHZYgJ8l8bIDYw&usqp=CAU",
        walletAddress: userAddress,
      };

      await client.createIfNotExists(userDoc);

      setAppStatus("connected");
    } catch (error) {
      router.push("/");
      setAppStatus("error");
    }
  };

  // initiate metamask wallet connection
  const connectWallet = async () => {
    if (!window.ethereum) return setAppStatus("noMetamask");
    try {
      setAppStatus("loading");
      const addressArray = await window.ethereum.request({
        method: "eth_requestAccounts",
      });
      console.log("twitterContext addressArray: ", addressArray);
      if (addressArray.length > 0) {
        setCurrentAccount(addressArray[0]);
        createUserAccount(addressArray[0]);
      } else {
        router.push("/");
        setAppStatus("notConnected");
      }
    } catch (err) {
      console.log("twitterContext wallet connect", err);
      setAppStatus("error");
    }
  };

  const getNftProfileImageUrl = async (imageUri, isNft) => {
    if (isNft) {
      return `https://gateway.pinata.cloud/ipfs/${imageUri}`;
    } else if (!isNft) {
      return imageUri;
    }
  };

  const fetchTweets = async () => {
    const query = `*[_type == "tweets"] {
      "author": author->{name, walletAddress, profileImage, isProfileImageNft},
      tweet,
      timestamp,
    }|order(timestamp desc) `;

    const sanityResponse = await client.fetch(query);
    setTweets([]);

    sanityResponse.forEach(async (items) => {
      const profileImageUrl = await getNftProfileImageUrl(
        items.author.profileImage,
        items.author.isProfileImageNft
      );

      console.log("twitter context profileImageUrl: ", profileImageUrl);
      const newItem = {
        tweet: items.tweet,
        timestamp: items.timestamp,
        author: {
          name: items.author.name,
          walletAddress: items.author.walletAddress,
          isProfileImageNft: items.author.isProfileImageNft,
          profileImage: profileImageUrl,
        },
      };
      setTweets((prevState) => [...prevState, newItem]);
    });
  };

  const getCurrentUserDetails = async (userAccount = currentAccount) => {
    if (appStatus !== "connected") return;

    const query = `
      *[_type == "users" && _id == "${userAccount}"]{
        "tweets": tweets[]->{timestamp, tweet}|order(timestamp desc),
        name,
        profileImage,
        isProfileImageNft,
        coverImage,
        walletAddress
        }
    `;
    const sanityResponse = await client.fetch(query);

    const profileImageUrl = await getNftProfileImageUrl(
      sanityResponse[0].profileImage,
      sanityResponse[0].isProfileImageNft
    );

    setCurrentUser({
      tweets: sanityResponse[0].tweets,
      name: sanityResponse[0].name,
      profileImage: profileImageUrl,
      isProfileImageNft: sanityResponse[0].isProfileImageNft,
      coverImage: sanityResponse[0].coverImage,
      walletAddress: sanityResponse[0].walletAddress,
    });
  };

  return (
    <TwitterContext.Provider
      value={{
        appStatus,
        setAppStatus,
        currentAccount,
        connectWallet,
        fetchTweets,
        tweets,
        CurrentUser,
        getCurrentUserDetails,
      }}
    >
      {children}
    </TwitterContext.Provider>
  );
};
