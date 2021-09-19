const HDWalletProvider = require("truffle-hdwallet-provider");
const web3 = require("web3");
const { ABI } = require("../util/my-contract-abi");

const MNEMONIC = process.env.MNEMONIC;
const NODE_API_KEY = process.env.FACTORY_ALCHEMY_KEY;
const CONTRACT_ADDRESS = process.env.MY_CONTRACT_ADDRESS;
const OWNER_ADDRESS = process.env.OWNER_ADDRESS;
const NETWORK = process.env.NETWORK;

if (!MNEMONIC || !NODE_API_KEY || !OWNER_ADDRESS || !NETWORK) {
  console.error(
    "Please set a mnemonic, Alchemy/Infura key, owner, network, and contract address."
  );
  return;
}

async function main() {
  try {
    const network =
      NETWORK === "mainnet" || NETWORK === "live" ? "mainnet" : "rinkeby";
    const provider = new HDWalletProvider(
      MNEMONIC,
      "https://eth-" + network + ".alchemyapi.io/v2/" + NODE_API_KEY
    );
    const web3Instance = new web3(provider);

    if (CONTRACT_ADDRESS) {
      const contract = new web3Instance.eth.Contract(ABI, CONTRACT_ADDRESS, {
        gasLimit: "1000000",
      });

      async function favoriteNumber() {
        const gas = await contract.methods
          .favoriteNumber()
          .estimateGas({ from: OWNER_ADDRESS });
        console.log("Gas:", gas);
        // const result = await contract.methods
        //   .favoriteNumber()
        //   .send({ from: OWNER_ADDRESS })
        //   .on("transactionHash", (hash) => console.log("hash", hash))
        //   .on("receipt", (receipt) => console.log("receipt", receipt));
        // console.log("Address:", result);
      }

      favoriteNumber();
    } else {
      console.error("Add correct / missing environment variables");
    }
  } catch (err) {
    console.log("ERROR", err);
  }
}

main();
