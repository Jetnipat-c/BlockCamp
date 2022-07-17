import { FC } from "react";
import { NextPage } from "next";
import type { AppProps } from "next/app";
import { MetaMaskInpageProvider } from "@metamask/providers";

import "../styles/main.css";
import "antd/dist/antd.css";

declare global {
  interface Window {
    ethereum: MetaMaskInpageProvider;
  }
}

export type NextPageWithLayout = NextPage & {
  Layout?: React.FC;
};

type AppPropsWithLayout = AppProps & {
  Component: NextPageWithLayout;
};

const TemporaryLayout: FC<{ children: React.ReactNode }> = ({ children }) => (
  <>{children}</>
);

function MyApp({ Component, pageProps }: AppPropsWithLayout) {
  const Layout = Component.Layout || TemporaryLayout;

  return (
    <Layout {...pageProps}>
      <Component {...pageProps} />
    </Layout>
  );
}

export default MyApp;
