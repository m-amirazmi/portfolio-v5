import Layout from "@/components/general/layout";
import type { AppProps } from "next/app";
import Head from "next/head";
import "@/styles/globals.css";
import "@/styles/homepage/main.css";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <Layout>
      <Head>
        <title>Amir Azmi | 👋 Welcome to my digital home</title>
      </Head>
      <Component {...pageProps} />
    </Layout>
  );
}
