var Verification = artifacts.require("./Verification.sol");

module.exports = async function(deployer) {
  const instance = await deployer.deploy(Verification);
  console.log(`Contract deployed at: ${Verification.address}`)
};
