require('dotenv').config();

const MyTokenContract = artifacts.require('./MyToken');
var { abi } = require('../build/contracts/IERC20.json');

module.exports = async (deployer, network, accounts) => {
  const owner = accounts[0];
  if (network == "development") {
    let tokenInstance = await deployer.deploy(MyTokenContract,'Himanshu','GOYAL', 18, { from: owner });
    tokenInstance = await MyTokenContract.deployed();
    console.log('token instance deployed', tokenInstance.address);
    await tokenInstance.mint(owner, 100000000)
    console.log('total supply-->'+ await tokenInstance.totalSupply())
  } else if (network == "kovan") {
    // token contract deployment
    let tokenInstance = await deployer.deploy(MyTokenContract,'Himanshu','GOYAL', 18, { from: owner });
    tokenInstance = await MyTokenContract.deployed();
    console.log('token instance deployed', tokenInstance.address);
    await tokenInstance.mint(owner, 100000000)
    console.log('total supply-->'+ await tokenInstance.totalSupply())
  }

}