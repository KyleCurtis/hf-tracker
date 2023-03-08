import { useSession } from "next-auth/react";
import UnlockedHome from "@/components/UnlockedHome";
import LockedHome from "@/components/LockedHome";

export default function Home() {
  const { data: session, status } = useSession();
  if (status === "loading") {
    return <h1>Loading Dashboard...</h1>;
  }
  if (session) {
    return <UnlockedHome />;
  } else {
    return <LockedHome />;
  }
}