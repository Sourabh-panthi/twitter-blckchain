import React, { useState } from "react";
import InitialStatus from "./InitialStatus";
import LoadingStatus from "./LoadingStatus";
import FinishedStatus from "./FinishedStatus";
import { useRouter } from "next/router";
import { TwitterContext } from "../../../context/TwitterContext";
import { useContext } from "react";
import { pinJsonToIpfs, pinFileToIPFS } from "../../../lib/Pinata";
import { client } from "../../../lib/client";
import { ethers } from "ethers";
import { contractAddress, contractABI } from "../../../lib/constants";

let metamask;
if (typeof window !== "undefined") {
  metamask = window.ethereum;
}

const getEthereumContract = async () => {
  if (!metamask) return;
  const provider = new ethers.providers.Web3Provider(metamask);
  const signer = provider.getSigner();
  const transactionContract = new ethers.Contract(
    contractAddress,
    contractABI,
    signer
  );
  return transactionContract;
};

const ProfileImageMinter = () => {
  const { currentAccount, setAppStatus } = useContext(TwitterContext);
  const [Status, setStatus] = useState("initial");
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [profileImage, setProfileImage] = useState();
  const router = useRouter();

  const mint = async () => {
    if (!name || !description || !profileImage) return;
    setStatus("loading");

    const pinataMetadata = {
      name: `${name}-${description}`,
    };
    const ipfsImageHash = await pinFileToIPFS(profileImage, pinataMetadata);

    await client
      .patch(currentAccount)
      .set({ profileImage: ipfsImageHash })
      .set({ isProfileImageNft: true })
      .commit();

    const imageMetadata = {
      name: name,
      description: description,
      image: `ipfs://${ipfsImageHash}`,
    };
    const ipfsJsonHash = await pinJsonToIpfs(imageMetadata, pinataMetadata);

    const contract = await getEthereumContract();
    const transactionParameters = {
      to: contractAddress,
      from: currentAccount,
      data: await contract.mint(currentAccount, `ipfs://${ipfsJsonHash}`),
    };

    try {
      await metamask.request({
        method: "eth_sendTransaction",
        params: [transactionParameters],
      });

      setStatus("finished");
    } catch (error) {
      console.log(error);
      setStatus("finished");
    }
  };

  const modalChildren = (modalStatus = Status) => {
    switch (modalStatus) {
      case "initial":
        return (
          <InitialStatus
            profileImage={profileImage}
            setProfileImage={setProfileImage}
            name={name}
            setName={setName}
            description={description}
            setDescription={setDescription}
            mint={mint}
          />
        );
        break;

      case "loading":
        return <LoadingStatus />;
        break;

      case "finished":
        return <FinishedStatus />;
        break;

      default:
        router.push("/");
        setAppStatus("error");
        break;
    }
  };

  return <> {modalChildren(Status)}</>;
};

export default ProfileImageMinter;
