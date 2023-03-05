import Head from "next/head";
import Image from "next/image";
import TopNav from "./TopNav";
import Hero from "./Hero";
import { useSession, signOut } from "next-auth/react";
import Link from "next/link";

const UnlockedHome = ({ children }: any) => {
  const { data: session } = useSession();

  const banner = () => {
    return (
      <div className="h-screen w-screen">
        <h1>test</h1>
      </div>
    );
  };

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

          <Hero
            Heading={session?.user?.name + "'s Dashboard"}
            HeroBody={
              <div>
                <p>{"Email: " + session?.user?.email}</p>

                <br />

                <button
                  className="p-2 border-2 border-black border-solid rounded-lg bg-red-800 text-white font-bold"
                  onClick={() => signOut({ callbackUrl: "/" })}
                >
                  Sign Out
                </button>
              </div>
            }
            Window={
              <Image
                src={session?.user?.image ?? "../../public/favicon.ico"}
                alt="user image"
                width={90}
                height={90}
                className="m-auto"
              />
            }
          />

          <br />
        </main>

        {children}
      </div>
    </>
  );
};

export default UnlockedHome;
