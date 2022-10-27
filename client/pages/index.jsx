import { useContext } from "react";
import { TwitterContext } from "../context/TwitterContext";
import Sidebar from "../components/Sidebar";
import Feed from "../components/Home/Feed";
import Widgets from "../components/Widgets";
import Image from "next/image";
import metamask from "../assets/metamask.png";
import errorImg from "../assets/error.png";
const styles = {
  wrapper: `flex justify-center h-screen w-screen  select-none bg-[#15202b] text-white overflow-hidden `,
  content: `max-w-[1400px] w-3/4 flex justify-between `,
  loginContainer: `w-full h-full flex flex-col justify-center items-center pb-48`,
  walletConnectButton: `text-2xl text-black bg-white font-bold mb-[-3rem] mt-[3rem] px-6 py-4 rounded-full cursor-pointer hover:bg-[#d7dbdc]`,
  loginContent: `text-3xl font-bold text-center mt-24`,
};

const Home = () => {
  const { appStatus, connectWallet } = useContext(TwitterContext);
  console.log("🚀 ~ file: index.jsx ~ line 19 ~ Home ~ appStḁtus", appStḁtus);

  const app = (status) => {
    switch (status) {
      case "connected":
        return userLogedin;

      case "notConnected":
        return noUserFound;

      case "noMetamask":
        return noMetamaskFound;

      case "connected":
        return userLogedin;

      case "error":
        return error;
      default:
        return loading;
    }
  };

  const userLogedin = (
    <div className={styles.content}>
      <Sidebar initialSelectedIcon={"Home"} />
      <Feed />
      <Widgets />
    </div>
  );

  const noUserFound = (
    <div className={styles.loginContainer}>
      <Image src={metamask} height={200} width={200} />
      <div className={styles.walletConnectButton} onClick={() => connectWallet}>
        <div> Connect Wallet</div>
      </div>
    </div>
  );

  const noMetamaskFound = (
    <div className={styles.loginContainer}>
      {" "}
      <Image src={metamask} height={200} width={200} />
      <div>
        <a
          target="_blank"
          rel=" noreferrer"
          href={`https://metamask.io/download.html`}
        >
          You must download the Metamask, a <br /> virtual Ethereum wallet for
          this browser
        </a>
      </div>
    </div>
  );

  const error = (
    <div className={styles.loginContainer}>
      <Image src={errorImg} width={250} height={200} />
      <div className={styles.loginContent}>
        An error occurred. Please try again later or from another browser.
      </div>
    </div>
  );

  const loading = (
    <div className={styles.loginContainer}>
      <div className={styles.loginContent}>Loading...</div>
    </div>
  );

  return <div className={styles.wrapper}> {error}</div>;
};

export default Home;
