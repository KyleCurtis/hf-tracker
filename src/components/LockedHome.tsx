import Head from "next/head";
import TopNav from "./TopNav";
import { signIn } from "next-auth/react";
import Hero from "./Hero";

const LockedHome = ({ children }: any) => {
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
        <TopNav />

        <div className="p-[50px]" />

        <Hero />
        <br />
        <button
          className="block p-2 border-2 border-black border-solid rounded-lg bg-blue-800 text-white font-bold w-[130px] m-auto"
          onClick={() => signIn()}
        >
          My Dashboard
        </button>

        {children}
      </div>
    </>
  );
};

export default LockedHome;
