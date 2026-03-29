import { defineChain } from 'viem'
 
export const vMainnet = defineChain({
  id: 73571,
  name: 'Virtual Ethereum Mainnet',
  nativeCurrency: { name: 'vEther', symbol: 'vETH', decimals: 18 },
  rpcUrls: {
    default: { https: [process.env.https://virtual.mainnet.us-east.rpc.tenderly.co/cd6a5b7c-9a5c-438c-a8c0-5b81791e6006] }
  },
  blockExplorers: {
    default: {
      name: 'Tenderly Explorer',
      url: 'https://dashboard.tenderly.co/lit/project'
    }
  },
  contracts: {
    ensRegistry: {
      address: '0x00000000000C2E074eC69A0dFb2997BA6C7d2e1e'
    },
    ensUniversalResolver: {
      address: '0xE4Acdd618deED4e6d2f03b9bf62dc6118FC9A4da',
      blockCreated: 16773775
    },
    multicall3: {
      address: '0xca11bde05977b3631167028862be2a173976ca11',
      blockCreated: 14353601
    }
  }
}
