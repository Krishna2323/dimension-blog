import "../styles/globals.scss";
import type { AppProps } from "next/app";
import Layout from "../components/Layout/Layout";
import localFont from "@next/font/local";

const myFont = localFont({
  src: "../public/fonts/GT-Walsheim-Medium-Trial.woff2",
});

export default function App({ Component, pageProps }: AppProps) {
  return (
    <main>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </main>
  );
}
