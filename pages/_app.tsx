import React from "react";
import type { AppProps } from "next/app";
import GlobalStyle, { LayoutWrapper } from "../styles/Global.style";
import "antd/dist/antd.css";
import "../styles/style.css";
import { Footer, Header } from "../components";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <GlobalStyle />
      <LayoutWrapper>
        <Header />
        <Component {...pageProps} />
        <Footer />
      </LayoutWrapper>
    </>
  );
}

export default MyApp;
