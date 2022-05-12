const Verb = artifacts.require("Verb");

module.exports = async function (deployer) {
  await deployer.deploy(Verb, 1652198400, 1652209200, 1652295600, 1652295600);
};
