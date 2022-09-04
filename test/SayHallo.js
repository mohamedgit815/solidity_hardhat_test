const { ethers } = require("hardhat");
const { expect } = require("chai");

describe("Testing in SayHallo",()=>{

    let myContract;

    beforeEach( async function () {
        const contractSayHallo = await ethers.getContractFactory("SayHallo");
        myContract = await contractSayHallo.deploy();
        await myContract.deployed();
    });
    

    it("Get my String", async () => {
        expect(await myContract._name()).to.equal("Hallo Mohamed Elsherif");
    });

    it("TestFunc", async () => {
        expect(await myContract.testFunc(true)).to.equal(true);
    });
});