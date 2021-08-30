// SPDX-License-Identifier: MIT

pragma solidity ^0.8.0;

/**
 * @title Counter
 * Counter - The smallest smart contract I could develop
 */
contract Counter {
    uint256 public count = 0;

    constructor() {}

    function setCount(uint256 newCount) public payable {
        count = newCount;
    }

    function getCount() public view returns (uint256) {
        return count;
    }
}
