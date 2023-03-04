import Head from "next/head";
import Image from "next/image";
import TopNav from "./TopNav";
import Hero from "./Hero";
import { useSession, signOut } from "next-auth/react";
import Link from "next/link";

const UnlockedHome = ({ children }: any) => {
  const { data: session } = useSession();

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

          <Hero />

          <br />

          <div className="border-2 border-solid border-black dark:border-white p-10 max-w-[700px] m-auto mt-[100px] rounded-xl">
            <Image
              src={session.user?.image ?? "../../public/favicon.ico"}
              alt="user image"
              width={90}
              height={90}
              className="m-auto"
            />
            <br />
            <p className="text-center text-xl">Welcome, {session.user?.name}</p>
            <br /> <br />
            <Link href="/dashboard">
              <button className="p-2 border-2 border-black border-solid rounded-lg bg-blue-500 text-white font-bold">
                My Dashboard
              </button>
            </Link>
            <br /> <br />
            <button
              className="p-2 border-2 border-black border-solid rounded-lg bg-red-800 text-white font-bold"
              onClick={() => signOut({ callbackUrl: "/" })}
            >
              Sign Out
            </button>
          </div>
        </main>

        {children}
      </div>
    </>
  );
};

export default UnlockedHome;
