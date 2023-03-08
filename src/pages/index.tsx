import { getSession, signOut } from "next-auth/react";
import UnlockedHome from "@/components/UnlockedHome";
import LockedHome from "@/components/LockedHome";
import Hero from "@/components/Hero";
import Image from "next/image";

export default function Home({ data }: any) {
  if (data) {
    return <UnlockedHome />;
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