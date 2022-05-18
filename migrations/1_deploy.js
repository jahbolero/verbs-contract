const Verb = artifacts.require("VerbV2");

module.exports = async function (deployer) {
  await deployer.deploy(Verb);
};
