import { http, createConfig } from 'wagmi'
import { mainnet } from 'wagmi/chains'
import { coinbaseWallet, injected, walletConnect } from 'wagmi/connectors'
import { vMainnet } from '@/tenderly-chains'
 
export const config = createConfig({
  chains: [mainnet, vMainnet],
  connectors: [
    injected(),
    coinbaseWallet({ appName: 'Create Wagmi' })
    walletConnect({ projectId: process.env.NEXT_PUBLIC_WC_PROJECT_ID || "" }),
  ],
  ssr: true,
  transports: {
    [mainnet.id]: http(`https://mainnet.gateway.tenderly.co/${process.env.NEXT_PUBLIC_TENDERLY_NODE_ACCESS_KEY_MAINNET}`),
    [vMainnet.id]: http(process.env.TENDERLY_VIRTUAL_MAINNET_RPC!)
  }
})
 
declare module 'wagmi' {
  interface Register {
    config: typeof config
  }
}
 
