/** @type import('hardhat/config').HardhatUserConfig */
module.exports = {
  solidity: "0.8.2",
  networks: {
    goerli: {
      url: "https://eth-goerli.g.alchemy.com/v2/dwhzNJpeqoHUVCt-HggTcIjIXloKVirX",
      accounts: [
        "c12168e5f4ac80f108b67b453c7a8a38f3a8ce3c253d797248133571f58fe033",
      ],
    },
  },
};
