// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

interface IERC20 {
    function transferFrom(address sender, address recipient, uint256 amount) external returns (bool);
}

contract TicketSale {
    IERC20 public diaToken;
    address public admin;
    struct Ticket {
        uint256 id;
        address owner;
        string details;
        bool isSold;
    }

    mapping(uint256 => Ticket) public tickets;
    uint256 public ticketCount;

    constructor(address _diaTokenAddress) {
        diaToken = IERC20(_diaTokenAddress);
        admin = msg.sender;
    }

    modifier onlyAdmin() {
        require(msg.sender == admin, "Only admin can perform this action");
        _;
    }

    function listTicket(string memory _details) public onlyAdmin {
        tickets[ticketCount] = Ticket({
            id: ticketCount,
            owner: msg.sender,
            details: _details,
            isSold: false
        });
        ticketCount++;
    }

    function purchaseTicket(uint256 _id, uint256 _amount) public {
        require(!tickets[_id].isSold, "Ticket already sold");
        require(diaToken.transferFrom(msg.sender, tickets[_id].owner, _amount), "Payment failed");
        tickets[_id].owner = msg.sender;
        tickets[_id].isSold = true;
    }
}
