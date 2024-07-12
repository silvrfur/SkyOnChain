import { generateProof, verifyProof } from '@anon-aadhaar/core';

export const verifyUser = async (attribute, value) => {
  const proof = await generateProof({ attribute, value });
  const isValid = await verifyProof(proof);
  return isValid;
};
