const Verb = artifacts.require("Verb");

module.exports = async function (deployer) {
  await deployer.deploy(Verb, 1652630400, 1652644801, 1652731200, 1652731200);
};
