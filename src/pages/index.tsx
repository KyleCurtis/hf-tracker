import { getSession, signOut } from "next-auth/react";
import UnlockedHome from "@/components/UnlockedHome";
import LockedHome from "@/components/LockedHome";
import Hero from "@/components/Hero";
import Image from "next/image";

export default function Home({ data }: any) {
  if (data) {
    return (
      <UnlockedHome>
        <Hero
          Window={
            <>
              <Image
                src={data.user.image}
                alt="user image"
                height={100}
                width={100}
              />
            </>
          }
          HeroBody={
            <>
              <h2>Welcome,</h2>
              {data.user.family_name}
              <strong>Name:</strong> {data.user.name}
              <br />
              <strong>Email:</strong> {data.user.email}
              <br />
              <button
                className="p-1 !border-2 !border-solid !border-black rounded-lg font-bold bg-red-600 text-white mt-3"
                onClick={() => signOut()}
              >
                sign out
              </button>
            </>
          }
        />
      </UnlockedHome>
    );
  } else {
    return <LockedHome />;
  }
}

export async function getServerSideProps(context: any) {
  const session = await getSession(context);
  return {
    props: {
      data: session,
    },
  };
}
