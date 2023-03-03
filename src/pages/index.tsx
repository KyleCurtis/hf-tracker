import SignUpForm from "@/components/SignUpForm";
import Header from "@/components/Header";
import { IoMdFitness } from "react-icons/io";

import Head from "next/head";
import TopNav from "@/components/TopNav";

export default function Home() {
  return (
    <>
      <Head>
        <title>HF-Tracker</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className="p-[1%] bg-white dark:bg-[var(--dark-bg)]">
        <div className="h-screen">
          <TopNav />
          <Header />

          <SignUpForm />
        </div>
      </main>
    </>
  );
}