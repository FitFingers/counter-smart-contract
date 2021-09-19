// SPDX-License-Identifier: GPL-3.0

pragma solidity >=0.7.0 <0.9.0;

import "./MyContract.sol";

contract MyContractFactory {
    uint256 public totalContracts;
    
    constructor() {
        totalContracts = 0;
    }
    
    event contractCreated(address from, address newContract);
    
    function createNewContract()
        public
        returns (address _newContract)
    {
        MyContract myNewContract = new MyContract();
        totalContracts++;
        _newContract = address(myNewContract);
        
        emit contractCreated(msg.sender, address(myNewContract));
        
        return _newContract;
    }
}
