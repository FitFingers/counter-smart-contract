// SPDX-License-Identifier: MIT

pragma solidity ^0.8.0;

/**
 * @title Counter
 * Counter - A tiny counter contract for MainNet deployment experience
 */
contract Counter {
    uint256 public txCost = 0.000001 * 10**9 * 10**9;
    uint256 public count = 0;
    address private owner;

    constructor() {
        owner = address(msg.sender);
    }

    function setCount(uint256 newCount) public payable {
        require(msg.value >= txCost, "Not enough ETH");
        count = newCount;
    }

    function increment() public {
        count++;
    }

    function decrement() public {
        count--;
    }

    function withdraw() public {
        require(msg.sender == owner, "Only owner may withdraw");
        (bool sent, ) = msg.sender.call{value: address(this).balance}("");
        require(sent, "There was a problem while withdrawing");
    }
}
