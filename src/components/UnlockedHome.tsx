import Head from "next/head";
import TopNav from "./TopNav";
import { signOut } from "next-auth/react";

const UnlockedHome = ({ children }: any) => {
  return (
    <>
      <Head>
        <title>HF-Tracker</title>
        <meta
          name="description"
          content="Health and Fitness Tracker Dashboard"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div>
        <main>
          <TopNav />

          <div className="p-[50px]" />

          {children}
        </main>
      </div>
    </>
  );
};

export default UnlockedHome;
