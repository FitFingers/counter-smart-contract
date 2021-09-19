// SPDX-License-Identifier: GPL-3.0

pragma solidity >=0.7.0 <0.9.0;

contract MyContract {
    uint256 favoriteNumber;
    
    constructor() {
        favoriteNumber = 7;
    }

    function updateNumber(uint256 _newNumber) public {
        favoriteNumber = _newNumber;
    }
}
