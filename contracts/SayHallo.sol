// SPDX-License-Identifier: UNLICENSED
pragma solidity ^0.8.9;

// Import this file to use console.log
import "hardhat/console.sol";

contract SayHallo {
    string public _name = "Hallo Mohamed Elsherif";


    function testFunc(bool name_) external pure returns(bool) {
        if(name_ == true){
            return true;
        } else {
            return false;
        }
    }
}