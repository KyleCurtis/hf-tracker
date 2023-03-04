import { useSession } from "next-auth/react";
import UnlockedHome from "@/components/UnlockedHome";
import LockedHome from "@/components/LockedHome";

export default function Home() {
  const { data: session } = useSession();
  if (session) {
    return <UnlockedHome />;
  } else {
    return <LockedHome />;
  }
}
