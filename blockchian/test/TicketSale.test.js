const TicketSale = artifacts.require("TicketSale");

contract("TicketSale", (accounts) => {
  let ticketSaleInstance;

  before(async () => {
    ticketSaleInstance = await TicketSale.deployed();
  });

  it("should initialize with empty ticket list", async () => {
    const ticketCount = await ticketSaleInstance.getTicketCount();
    assert.equal(ticketCount, 0, "Ticket count should be zero initially");
  });

  // Add more test cases as needed
});
