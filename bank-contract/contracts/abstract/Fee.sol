// SPDX-License-Identifier: UNLICENSED
pragma solidity ^0.8.9;
import "hardhat/console.sol";

import "@openzeppelin/contracts/token/ERC20/IERC20.sol";

abstract contract Fee {
    address payable owner;

    constructor(address _owner) {
        owner = payable(_owner);
    }

    function withdraw(address token, uint256 amount) public virtual {
        require(
            IERC20(token).balanceOf(owner) >= amount,
            "insufficient balance"
        );
        IERC20(token).transfer(owner, amount);
    }
}
