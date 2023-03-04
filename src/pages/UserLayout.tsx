import {useSession} from "next-auth/react"
import {getSession} from "next-auth/react"



const UserLayout = () => {
    
    const {data: session, status} = useSession();
    
    if (status === 'authenticated') {
        return (
            <div>
                Welcome
            </div>
        )
    } else {
        return (
            <div>You are not logged in</div>
        )
    }
}

export default UserLayout;


export const getServerSideProps = async (context) => {
    const session = await getSession(context);
    if (!session) {
        return {
            redirect: {
                destination: '/'
            }
        }
    }
    return {
      props: { session },
    };
  };