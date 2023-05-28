import "@/styles/globals.css";
import type { AppProps } from "next/app";
import { thetaTestnet } from "../utils/theta_chain";
import { publicProvider } from "wagmi/providers/public";
import { ConnectKitProvider, getDefaultClient } from "connectkit";
import { configureChains, createClient, WagmiConfig } from "wagmi";


const { chains, provider, webSocketProvider } = configureChains(
  [thetaTestnet],
  [
    publicProvider(),
  ]
);
const { connectors } = getDefaultClient({
  appName: 'Theta Meet',
  chains
});
// const wagmiConfig = createConfig({
//   autoConnect: true,
//   connectors,
//   publicClient
// })
const wagmiClient = createClient({
  autoConnect: true,
  connectors,
  provider,
  webSocketProvider,
});

export default function App({ Component, pageProps }: AppProps) {
  return (
    <WagmiConfig client={wagmiClient}>
      <ConnectKitProvider theme="midnight">
        <Component {...pageProps} />
      </ConnectKitProvider>
    </WagmiConfig>
  );
}
