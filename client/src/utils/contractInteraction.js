import Web3 from 'web3';
import TicketSale from '../build/contracts/TicketSale.json';

const web3 = new Web3(Web3.givenProvider);
const contractAddress = 'YOUR_CONTRACT_ADDRESS';
const contract = new web3.eth.Contract(TicketSale.abi, contractAddress);

export const listTicket = async (details) => {
  const accounts = await web3.eth.getAccounts();
  await contract.methods.listTicket(details).send({ from: accounts[0] });
};

export const purchaseTicket = async (ticketId, amount) => {
  const accounts = await web3.eth.getAccounts();
  await contract.methods.purchaseTicket(ticketId, amount).send({ from: accounts[0] });
};
