import { sign } from "crypto";
import { useSession, signIn, signOut } from "next-auth/react";

const LoginPage = () => {
  const { data: session }: any = useSession();

  if (session) {
    return (
    <div>Welcome, {session.user.email};
    <button onClick={() => signOut()}>Sign-out</button>
    </div>
    )
  } else {
    return (
      <div>
        <div>Login</div>
        <button onClick={() => signIn()}>sign in</button>
      </div>
    );
  }
};

export default LoginPage;
