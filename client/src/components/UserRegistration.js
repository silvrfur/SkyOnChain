import React, { useState } from 'react';
import { ethers } from 'ethers';
import { verifyUser } from './anonAadhaar';

const UserRegistration = () => {
  const [address, setAddress] = useState('');

  const connectWallet = async () => {
    if (window.ethereum) {
      const provider = new ethers.providers.Web3Provider(window.ethereum);
      await provider.send('eth_requestAccounts', []);
      const signer = provider.getSigner();
      const userAddress = await signer.getAddress();
      setAddress(userAddress);
    } else {
      alert('MetaMask not detected');
    }
  };

  const handleVerification = async () => {
    const isValid = await verifyUser('age', 18);
    if (isValid) {
      alert('User verified successfully');
      // Proceed with registration logic
    } else {
      alert('Verification failed');
    }
  };

  return (
    <div>
      <button onClick={connectWallet}>Connect Wallet</button>
      {address && <p>Connected as: {address}</p>}
      <button onClick={handleVerification}>Verify Identity</button>
    </div>
  );
};

export default UserRegistration;
