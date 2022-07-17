// SPDX-License-Identifier: UNLICENSED
pragma solidity ^0.8.9;
import "hardhat/console.sol";

import "./libraries/SafeMath.sol";
import "@openzeppelin/contracts/token/ERC20/IERC20.sol";

contract SCB {
    using SafeMath for uint256;
    enum Transaction {
        Internal,
        External
    }
    mapping(address => string[]) addressAllAccount;
    mapping(address => string) addressAccount;
    mapping(string => address) nameAccount;
    mapping(address => mapping(string => mapping(address => uint256))) balance;
    mapping(address => uint256) totalFee;

    address payable owner;
    uint256 private _totalSupply;

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
        addressAllAccount[msg.sender].push(_name);
    }

    // * Deposit Internal
    function deposit(
        string memory _name,
        address _token,
        uint256 _amount
    ) public {
        IERC20(_token).transferFrom(msg.sender, address(this), _amount);
        balance[msg.sender][_name][_token] += _amount;
        _totalSupply += _amount;
    }

    // * Withdraw Internal
    function withdraw(
        string memory _name,
        address token,
        uint256 amount
    ) public {
        require(
            balance[msg.sender][_name][token] >= amount,
            "insufficient balance"
        );
        IERC20(token).transfer(msg.sender, amount);
        balance[msg.sender][_name][token] -= amount;
        _totalSupply -= amount;
    }

    // * Transfer
    // * Internal 0, External 1
    function transferToken(
        Transaction _type, // 1
        address _execute, // account 3
        address token, // usdc
        string memory _from, // account1
        string memory _to, // account3
        uint256 amount // 100
    ) public {
        address execute = msg.sender;
        uint256 fee = 0;
        if (_type == Transaction.External) {
            fee = 1;
            _totalSupply += (fee / 100) * amount;
            execute = _execute;
        }
        require(
            balance[msg.sender][_from][token] >= amount,
            "Insufficient balance."
        );
        require(nameAccount[_to] != address(0x0), "Not found account");
        if (fee > 0) {
            balance[execute][_to][token] += amount - (amount / 100) * fee;
            totalFee[token] += (amount / 100) * fee;
        } else {
            balance[execute][_to][token] += amount;
        }
        balance[msg.sender][_from][token] -= amount;
    }

    function batchTokensTransfer(
        Transaction[] calldata _type,
        address[] calldata _execute,
        address[] calldata token,
        string[] memory _from,
        string[] memory _to,
        uint256[] calldata _amount
    ) public {
        require(_from.length == _amount.length);

        for (uint256 i = 0; i < _execute.length; i++) {
            address execute = msg.sender;
            uint256 fee = 0;
            if (_type[i] == Transaction.External) {
                fee = 1;
                _totalSupply += (fee / 100) * _amount[i];
                execute = _execute[i];
            }
            require(
                balance[msg.sender][_from[i]][token[i]] >= _amount[i],
                "Insufficient balance."
            );
            require(nameAccount[_to[i]] != address(0x0), "Not found account");
            if (fee > 0) {
                balance[execute][_to[i]][token[i]] +=
                    _amount[i] -
                    (_amount[i] / 100) *
                    fee;
                totalFee[token[i]] += (_amount[i] / 100) * fee;
            } else {
                balance[execute][_to[i]][token[i]] += _amount[i];
            }
            balance[msg.sender][_from[i]][token[i]] -= _amount[i];
        }
    }

    function withdrawFee(address token, uint256 amount) public onlyOwner {
        require(amount <= totalFee[token], "insufficient amout.");
        IERC20(token).transfer(owner, amount);
        totalFee[token] -= amount;
    }

    // Utils
    function getNameByAddress(address _address)
        public
        view
        returns (string memory)
    {
        return addressAccount[_address];
    }

    function getAddressByName(string memory _name)
        public
        view
        returns (address)
    {
        return nameAccount[_name];
    }

    function getAllAccount(address _address)
        public
        view
        returns (string[] memory)
    {
        return addressAllAccount[_address];
    }

    function getBalance(
        address _address,
        string memory _name,
        address _token
    ) public view returns (uint256) {
        return balance[_address][_name][_token];
    }

    function getTotalSupply() public view returns (uint256) {
        return _totalSupply;
    }

    function getTotalFee(address token) public view returns (uint256) {
        return totalFee[token];
    }
}
