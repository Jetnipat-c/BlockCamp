// SPDX-License-Identifier: UNLICENSED
pragma solidity ^0.8.9;
import "hardhat/console.sol";

import "./libraries/SafeMath.sol";
import "@openzeppelin/contracts/token/ERC20/IERC20.sol";

contract SCBX {
  using SafeMath for uint256;

  mapping(address => string[]) allAccounts;
  mapping(string => address[]) allAddress;

  mapping(address => string) addressAccount;
  mapping(string => address) nameAccount;

  mapping(string => mapping(address => uint256)) balance;
  mapping(address => uint256) totalFee;

  uint256 fee = 1;

  address payable owner;

  modifier onlyOwner() {
    require(msg.sender == owner, "Not owner");
    _;
  }

  constructor() {
    owner = payable(msg.sender);
  }

  function createAccount(string memory _name) public {
    require(nameAccount[_name] == address(0x0), "already account");
    addressAccount[msg.sender] = _name;
    nameAccount[_name] = msg.sender;
    allAccounts[msg.sender].push(_name);
    allAddress[_name].push(msg.sender);
  }

  function deposit(
    string memory _name,
    address _token,
    uint256 _amount
  ) public {
    IERC20(_token).transferFrom(msg.sender, address(this), _amount);
    balance[_name][_token] += _amount;
  }

  function withdraw(
    string memory _name,
    address token,
    uint256 amount
  ) public {
    require(balance[_name][token] >= amount, "insufficient balance");
    IERC20(token).transfer(msg.sender, amount);
    balance[_name][token] -= amount;
  }

  function transfer(
    string memory _from,
    string memory _to,
    address _token,
    uint256 _amount
  ) public {
    require(balance[_from][_token] >= _amount, "Insufficient balance.");
    require(nameAccount[_to] != address(0x0), "Not found account");
    bool sameAccount = nameAccount[_from] == nameAccount[_to];
    if (!sameAccount) {
      balance[_to][_token] += _amount - (_amount / 100) * fee;
      totalFee[_token] += (_amount / 100) * fee;
    } else {
      balance[_to][_token] += _amount;
    }
    balance[_from][_token] -= _amount;
  }

  function batchTransfer(
    string[] memory _from,
    string[] memory _to,
    address[] calldata _token,
    uint256[] calldata _amount
  ) public {
    require(_from.length == _to.length);
    for (uint256 i = 0; i < _to.length; i++) {
      bool sameAccount = nameAccount[_from[i]] == nameAccount[_to[i]];
      if (!sameAccount) {
        balance[_to[i]][_token[i]] += _amount[i] - (_amount[i] / 100) * fee;
        totalFee[_token[i]] += (_amount[i] / 100) * fee;
      } else {
        balance[_to[i]][_token[i]] += _amount[i];
      }
      balance[_from[i]][_token[i]] -= _amount[i];
    }
  }

  // * Utils
  function getAllAccount(address address_) public view returns (string[] memory) {
    return allAccounts[address_];
  }

  function getAllAddress(string memory name_) public view returns (address[] memory) {
    return allAddress[name_];
  }

  function getAddress(string memory name_) public view returns (address) {
    return nameAccount[name_];
  }

  function getTotalFee(address token) public view returns (uint256) {
    return totalFee[token];
  }

  function getBalance(string memory _name, address _token) public view returns (uint256) {
    return balance[_name][_token];
  }
}
