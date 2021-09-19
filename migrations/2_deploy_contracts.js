const MyContractFactory = artifacts.require("./MyContractFactory.sol");

module.exports = async (deployer) => {
  await deployer.deploy(MyContractFactory, { gas: 5000000 });
};
